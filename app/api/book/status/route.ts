import { NextRequest, NextResponse } from 'next/server'
import { getAppointment } from '@/lib/acuity-api'

/**
 * Check the live status of an appointment in Acuity. Used by the
 * /launch upcoming-booking card to verify a locally-stored booking is
 * still valid (not cancelled, not deleted) and to display the real
 * paid status, since the customer may have abandoned the Acuity
 * payment page mid-flow.
 */
export async function GET(request: NextRequest) {
  const id = Number(request.nextUrl.searchParams.get('id'))
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  }

  try {
    const appointment = await getAppointment(id)
    if (!appointment) {
      return NextResponse.json({ exists: false })
    }
    return NextResponse.json({
      exists: true,
      canceled: appointment.canceled === true,
      paid: appointment.paid === 'yes',
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Status check failed'
    console.error('[book/status]', err)
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
