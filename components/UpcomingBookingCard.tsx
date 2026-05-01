'use client'

import { useEffect, useState } from 'react'
import {
  getNextBooking,
  downloadICS,
  removeBooking,
  type SavedBooking,
} from '@/lib/bookings'
import { CONTACT } from '@/lib/config'

type Status = 'loading' | 'paid' | 'unpaid'

export default function UpcomingBookingCard() {
  const [booking, setBooking] = useState<SavedBooking | null>(null)
  const [status, setStatus] = useState<Status>('loading')
  const [paymentLink, setPaymentLink] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function resolveNext() {
      // Verify each saved booking against Acuity before showing it. If
      // it's cancelled (or no longer exists), drop it locally and try
      // the next one. Repeat until we find a valid one or run out.
      while (!cancelled) {
        const next = getNextBooking()
        if (!next) {
          if (!cancelled) setBooking(null)
          return
        }

        try {
          const res = await fetch(`/api/book/status?id=${next.appointmentId}`)
          if (!res.ok) {
            // Treat a server error as 'show the cached booking' rather
            // than hide it — better to risk a stale view than a blank
            // one when our endpoint is briefly down.
            if (!cancelled) {
              setBooking(next)
              setStatus('paid')
            }
            return
          }
          const data: { exists?: boolean; canceled?: boolean; paid?: boolean } =
            await res.json()

          if (!data.exists || data.canceled) {
            removeBooking(next.appointmentId)
            continue
          }

          if (!cancelled) {
            setBooking(next)
            setStatus(data.paid ? 'paid' : 'unpaid')
            setPaymentLink(
              data.paid ? null : next.confirmationPage ?? null,
            )
          }
          return
        } catch {
          if (!cancelled) {
            setBooking(next)
            setStatus('paid')
          }
          return
        }
      }
    }

    resolveNext()
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

  const isUnpaid = status === 'unpaid'
  const accent = isUnpaid ? 'border-amber-500/50' : 'border-brand-red/40'
  const dotColor = isUnpaid ? 'bg-amber-500' : 'bg-emerald-500'
  const eyebrowColor = isUnpaid ? 'text-amber-400' : 'text-brand-red'
  const eyebrowText = isUnpaid ? 'Awaiting Payment' : 'Your Next Appointment'

  return (
    <div className={`border ${accent} bg-zinc-950 p-5 mb-8`}>
      <div className="flex items-center gap-3 mb-4">
        <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`} />
        <span
          className={`${eyebrowColor} text-[10px] font-bold tracking-[0.3em] uppercase`}
        >
          {eyebrowText}
        </span>
      </div>

      <p className="text-white font-bold text-lg leading-tight tracking-wide mb-1">
        {booking.serviceName}
      </p>
      <p className="text-gray-400 text-sm tracking-wide mb-4">
        {dateLabel} · {timeLabel}
      </p>

      <div className="flex flex-wrap gap-2">
        {isUnpaid && paymentLink && (
          <a
            href={paymentLink}
            className="inline-flex items-stretch border border-amber-500/60 hover:border-amber-400 transition-colors group active:scale-[0.98]"
          >
            <span className="bg-amber-500 w-1.5 self-stretch group-hover:w-6 transition-all duration-300" />
            <span className="px-4 py-2 text-amber-100 font-bold text-[10px] tracking-[0.2em] uppercase">
              Complete Payment
            </span>
          </a>
        )}
        {!isUnpaid && (
          <button
            onClick={() => downloadICS(booking)}
            className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group active:scale-[0.98]"
          >
            <span className="bg-brand-red w-1.5 self-stretch group-hover:w-6 transition-all duration-300" />
            <span className="px-4 py-2 text-white font-bold text-[10px] tracking-[0.2em] uppercase">
              Add to Calendar
            </span>
          </button>
        )}
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
        {isUnpaid ? 'Pending' : 'Paid'} ${booking.servicePrice.toFixed(2)} ·{' '}
        {booking.serviceDuration} min · Banna Ave with Nick
      </p>
    </div>
  )
}
