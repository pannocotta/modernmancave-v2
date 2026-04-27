import { NextRequest, NextResponse } from 'next/server'
import { getAvailableDates } from '@/lib/acuity-api'

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const serviceId = params.get('serviceId')
  const month = params.get('month') // YYYY-MM

  if (!serviceId || !/^\d+$/.test(serviceId)) {
    return NextResponse.json({ error: 'Invalid serviceId' }, { status: 400 })
  }
  if (!month || !/^\d{4}-\d{2}$/.test(month)) {
    return NextResponse.json({ error: 'Invalid month — expected YYYY-MM' }, { status: 400 })
  }

  try {
    const result = await getAvailableDates(Number(serviceId), month)
    const dates = Array.isArray(result) ? result.map((d) => d.date) : []
    return NextResponse.json({ dates })
  } catch (err) {
    console.error('[book/dates]', err)
    return NextResponse.json({ error: 'Failed to fetch dates' }, { status: 502 })
  }
}
