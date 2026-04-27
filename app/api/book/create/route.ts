import { NextRequest, NextResponse } from 'next/server'
import { createAppointment } from '@/lib/acuity-api'

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
    return NextResponse.json({ success: true, appointment })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Booking failed'
    console.error('[book/create]', err)
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
