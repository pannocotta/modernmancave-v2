import { NextRequest, NextResponse } from 'next/server'
import { createAppointment } from '@/lib/acuity-api'

/**
 * Create an unpaid appointment in Acuity and return its hosted-payment
 * link. Acuity's public API can't process card payments on accounts
 * running Stripe v2 (their iframe uses a private endpoint we can't reach),
 * so we hand the customer off to Acuity's own payment page for the actual
 * charge. The returned `confirmationPagePaymentLink` is a payment-only URL
 * locked to this specific appointment — no re-selection of date / time /
 * service required.
 */
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { serviceId, datetime, firstName, lastName, email, phone } =
    body as Record<string, string | number>

  if (!serviceId || !datetime || !firstName || !lastName || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const appointment = await createAppointment({
      appointmentTypeID: Number(serviceId),
      datetime: String(datetime),
      firstName: String(firstName),
      lastName: String(lastName),
      email: String(email),
      phone: String(phone),
    })

    if (!appointment.confirmationPagePaymentLink) {
      console.error(
        '[book/create] Acuity returned no payment link for unpaid appointment',
        { id: appointment.id },
      )
      return NextResponse.json(
        { error: "Couldn't generate a payment link. Please try again." },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true, appointment })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Booking failed'
    console.error('[book/create]', err)
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
