import { NextRequest, NextResponse } from 'next/server'
import { getAvailableTimes } from '@/lib/acuity-api'

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const serviceId = params.get('serviceId')
  const date = params.get('date') // YYYY-MM-DD

  if (!serviceId || !/^\d+$/.test(serviceId)) {
    return NextResponse.json({ error: 'Invalid serviceId' }, { status: 400 })
  }
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: 'Invalid date — expected YYYY-MM-DD' }, { status: 400 })
  }

  try {
    const result = await getAvailableTimes(Number(serviceId), date)
    const times = Array.isArray(result)
      ? result.map((t) => ({ time: t.time, slotsAvailable: t.slotsAvailable }))
      : []
    return NextResponse.json({ times })
  } catch (err) {
    console.error('[book/times]', err)
    return NextResponse.json({ error: 'Failed to fetch times' }, { status: 502 })
  }
}
