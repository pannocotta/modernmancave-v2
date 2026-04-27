/**
 * Server-side Acuity API helpers. Never import from a client component —
 * the API key must stay on the server.
 */

const ACUITY_BASE = 'https://acuityscheduling.com/api/v1'

function getAuthHeader() {
  const userId = process.env.ACUITY_USER_ID || '39144906'
  const apiKey = process.env.ACUITY_API_KEY
  if (!apiKey) {
    throw new Error('ACUITY_API_KEY is not set in environment')
  }
  const credentials = Buffer.from(`${userId}:${apiKey}`).toString('base64')
  return `Basic ${credentials}`
}

export interface AcuityDate {
  date: string // YYYY-MM-DD
}

export interface AcuityTime {
  time: string // ISO 8601 string
  slotsAvailable: number
  calendarID?: number
  calendar?: string
}

export async function getAvailableDates(
  serviceId: number,
  month: string, // YYYY-MM
): Promise<AcuityDate[]> {
  const url = `${ACUITY_BASE}/availability/dates?appointmentTypeID=${serviceId}&month=${month}`
  const res = await fetch(url, {
    headers: { Authorization: getAuthHeader() },
    next: { revalidate: 300 }, // 5 min cache
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Acuity API ${res.status}: ${text || res.statusText}`)
  }
  return res.json()
}

export async function getAvailableTimes(
  serviceId: number,
  date: string, // YYYY-MM-DD
): Promise<AcuityTime[]> {
  const url = `${ACUITY_BASE}/availability/times?appointmentTypeID=${serviceId}&date=${date}`
  const res = await fetch(url, {
    headers: { Authorization: getAuthHeader() },
    next: { revalidate: 60 }, // 1 min cache (times can fill fast)
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Acuity API ${res.status}: ${text || res.statusText}`)
  }
  return res.json()
}
