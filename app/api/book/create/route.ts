import { NextRequest, NextResponse } from 'next/server'
import { createAppointment, cancelAppointment } from '@/lib/acuity-api'

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const {
    serviceId,
    datetime,
    firstName,
    lastName,
    email,
    phone,
    stripeToken,
  } = body as Record<string, string | number>

  if (!serviceId || !datetime || !firstName || !lastName || !email || !phone || !stripeToken) {
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
      stripeToken: String(stripeToken),
    })

    // Acuity will return paid: 'no' if it created the appointment but
    // never fired the charge — typically because the appointment type
    // isn't configured for online payment in the Acuity dashboard.
    // Cancel the unpaid appointment so we don't leave a phantom booking
    // for the staff to chase.
    if (appointment.paid !== 'yes') {
      console.error(
        '[book/create] Appointment created but charge did not fire',
        { appointmentId: appointment.id, paid: appointment.paid, amountPaid: appointment.amountPaid },
      )
      try {
        await cancelAppointment(appointment.id)
      } catch (cancelErr) {
        console.error('[book/create] Failed to cancel unpaid appointment', cancelErr)
      }
      return NextResponse.json(
        {
          error:
            "Payment didn't go through. Your card has not been charged. Please try again, or contact us if the issue continues.",
        },
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
