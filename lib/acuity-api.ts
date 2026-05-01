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

export interface CreateAppointmentInput {
  appointmentTypeID: number
  datetime: string // ISO with timezone, e.g. 2026-04-28T11:30:00+1000
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface AcuityAppointment {
  id: number
  firstName: string
  lastName: string
  email: string
  datetime: string
  appointmentTypeID: number
  amountPaid?: string
  paid?: 'yes' | 'no'
  type?: string
  confirmationPage?: string
  /** Hosted payment-only page for this specific appointment. Acuity
   *  returns this whenever an appointment is created unpaid. */
  confirmationPagePaymentLink?: string
}

export async function createAppointment(
  input: CreateAppointmentInput,
): Promise<AcuityAppointment> {
  const res = await fetch(`${ACUITY_BASE}/appointments`, {
    method: 'POST',
    headers: {
      Authorization: getAuthHeader(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
    cache: 'no-store',
  })
  if (!res.ok) {
    const errorBody = await res.json().catch(() => null)
    const message =
      errorBody?.message ||
      errorBody?.error ||
      `Acuity API ${res.status}: ${res.statusText}`
    throw new Error(message)
  }
  return res.json()
}

export async function cancelAppointment(appointmentId: number): Promise<void> {
  const res = await fetch(`${ACUITY_BASE}/appointments/${appointmentId}/cancel`, {
    method: 'PUT',
    headers: {
      Authorization: getAuthHeader(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ noEmail: true }),
    cache: 'no-store',
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Acuity cancel ${res.status}: ${text || res.statusText}`)
  }
}
