'use client'

import { useEffect, useState } from 'react'
import {
  loadBookings,
  downloadICS,
  removeBooking,
  type SavedBooking,
} from '@/lib/bookings'
import { CONTACT } from '@/lib/config'

export default function UpcomingBookingCard() {
  const [booking, setBooking] = useState<SavedBooking | null>(null)

  useEffect(() => {
    let cancelled = false

    async function resolve() {
      // Walk every locally-stored booking that is still in the future,
      // earliest first. Show the first one that Acuity confirms as
      // paid. Drop ones Acuity says don't exist / are cancelled.
      // Skip (but keep) unpaid ones — the customer may complete payment
      // later via Acuity's email link, and we'll pick it up on the next
      // /launch visit.
      const now = Date.now()
      const upcoming = loadBookings()
        .filter((b) => new Date(b.datetime).getTime() > now)
        .sort(
          (a, b) =>
            new Date(a.datetime).getTime() - new Date(b.datetime).getTime(),
        )

      for (const b of upcoming) {
        if (cancelled) return
        try {
          const res = await fetch(`/api/book/status?id=${b.appointmentId}`)
          if (!res.ok) continue
          const data: {
            exists?: boolean
            canceled?: boolean
            paid?: boolean
          } = await res.json()

          if (!data.exists || data.canceled) {
            removeBooking(b.appointmentId)
            continue
          }
          if (!data.paid) continue

          if (!cancelled) setBooking(b)
          return
        } catch {
          // Network glitch — skip without removing, try the next.
          continue
        }
      }
    }

    resolve()
    return () => {
      cancelled = true
    }
  }, [])

  if (!booking) return null

  const dt = new Date(booking.datetime)
  const dateLabel = dt.toLocaleDateString('en-AU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
  const timeLabel = dt.toLocaleTimeString('en-AU', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <div className="border border-brand-red/40 bg-zinc-950 p-5 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">
          Your Next Appointment
        </span>
      </div>

      <p className="text-white font-bold text-lg leading-tight tracking-wide mb-1">
        {booking.serviceName}
      </p>
      <p className="text-gray-400 text-sm tracking-wide mb-4">
        {dateLabel} · {timeLabel}
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => downloadICS(booking)}
          className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group active:scale-[0.98]"
        >
          <span className="bg-brand-red w-1.5 self-stretch group-hover:w-6 transition-all duration-300" />
          <span className="px-4 py-2 text-white font-bold text-[10px] tracking-[0.2em] uppercase">
            Add to Calendar
          </span>
        </button>
        <a
          href={CONTACT.nick.phoneHref}
          className="inline-flex items-stretch border border-zinc-800 hover:border-white/40 transition-colors group active:scale-[0.98]"
        >
          <span className="bg-zinc-700 w-1.5 self-stretch group-hover:bg-white/40 transition-colors" />
          <span className="px-4 py-2 text-white/80 font-bold text-[10px] tracking-[0.2em] uppercase">
            Need to Change?
          </span>
        </a>
      </div>

      <p className="text-gray-600 text-[10px] mt-4 leading-relaxed">
        Paid ${booking.servicePrice.toFixed(2)} · {booking.serviceDuration} min · Banna Ave with Nick
      </p>
    </div>
  )
}
