/**
 * Local persistence of customer bookings. Stored in localStorage
 * under `mmc-bookings`. Used to show the "next appointment" card on
 * /launch after a successful booking.
 *
 * This is a private device-level cache — the source of truth is
 * still Acuity's database. We never sync past or other devices.
 */

const STORAGE_KEY = 'mmc-bookings'

export interface SavedBooking {
  appointmentId: number
  serviceId: number
  serviceName: string
  servicePrice: number
  serviceDuration: number
  datetime: string // ISO with timezone, from Acuity
  firstName: string
  lastName: string
  email: string
  confirmationPage?: string
}

export function loadBookings(): SavedBooking[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveBooking(booking: SavedBooking) {
  if (typeof window === 'undefined') return
  const existing = loadBookings()
  // De-dupe by appointmentId
  const filtered = existing.filter((b) => b.appointmentId !== booking.appointmentId)
  filtered.push(booking)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}

/** Return the next upcoming booking, or null if there are none. */
export function getNextBooking(): SavedBooking | null {
  const bookings = loadBookings()
  const now = Date.now()
  const upcoming = bookings
    .filter((b) => new Date(b.datetime).getTime() > now)
    .sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime())
  return upcoming[0] ?? null
}

export function removeBooking(appointmentId: number) {
  if (typeof window === 'undefined') return
  const remaining = loadBookings().filter((b) => b.appointmentId !== appointmentId)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining))
}

/** Build an .ics calendar file body for the given booking. */
export function buildICS(booking: SavedBooking): string {
  const start = new Date(booking.datetime)
  const end = new Date(start.getTime() + booking.serviceDuration * 60_000)

  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Modern Mancave//Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:mmc-${booking.appointmentId}@modernmancave.com.au`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Modern Mancave — ${booking.serviceName}`,
    `DESCRIPTION:${booking.serviceName} appointment with Nick at Modern Mancave Banna Ave.`,
    'LOCATION:224a Banna Ave\\, Griffith NSW 2680\\, Australia',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

export function downloadICS(booking: SavedBooking) {
  const blob = new Blob([buildICS(booking)], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `modern-mancave-${booking.appointmentId}.ics`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 0)
}
