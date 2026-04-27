'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRightIcon } from '@/components/icons'
import { CONTACT } from '@/lib/config'

export default function LaunchPage() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  const status = now ? deriveStatus(now) : null

  return (
    <main className="min-h-[100svh] bg-black text-white relative overflow-hidden">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-[60vh] bg-brand-red/[0.12] blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/[0.06] blur-3xl rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] grain-overlay" />
      </div>

      {/* App header */}
      <header className="relative z-10 px-6 pt-10 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-brand-red font-black tracking-[0.2em] text-sm">MMC</span>
          <span className="h-px w-6 bg-brand-red/50" />
          <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Modern Mancave</span>
        </div>
        {status && (
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${status.open ? 'bg-emerald-500' : 'bg-zinc-600'} animate-pulse`} />
            <span className="text-white/70 text-[10px] tracking-[0.2em] uppercase">{status.open ? 'Open' : 'Closed'}</span>
          </div>
        )}
      </header>

      <div className="relative z-10 px-6 pb-20 max-w-md mx-auto">
        {/* Welcome */}
        <div className="mt-10 mb-10">
          <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-4">{greeting()}</p>
          <h1 className="font-headliner gradient-heading text-5xl leading-[0.85] mb-4">
            BOOK YOUR<br />NEXT CUT
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Tap below to lock in a time with Nick. Skip the walk-in queue, get the private room treatment.
          </p>
        </div>

        {/* Primary CTA — big, full-width */}
        <Link
          href="/booking"
          className="group relative block border border-white/30 hover:border-white transition-colors mb-8 active:scale-[0.99] transition-transform"
        >
          <div className="flex items-stretch">
            <span className="bg-brand-red w-3 self-stretch group-hover:w-12 transition-all duration-300" />
            <div className="flex-1 px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-red mb-1">Book Now</p>
                <p className="text-white font-bold text-base tracking-[0.05em]">Schedule with Nick</p>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-white" />
            </div>
          </div>
        </Link>

        {/* Service shortcuts */}
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Quick Book</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { label: "Men's Cut", price: 40 },
            { label: 'Skin Fade', price: 45 },
            { label: 'Cut & Beard', price: 50 },
            { label: 'Hot Towel', price: 45 },
          ].map((s) => (
            <Link
              key={s.label}
              href="/booking"
              className="border border-zinc-800 hover:border-brand-red/60 active:scale-[0.98] transition-all p-4 group"
            >
              <p className="text-white text-sm font-semibold tracking-wide mb-1 group-hover:text-brand-red transition-colors">
                {s.label}
              </p>
              <p className="text-gray-500 text-xs">${s.price}</p>
            </Link>
          ))}
        </div>

        {/* Quick links */}
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">More</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { label: 'Prices', href: '/prices' },
            { label: 'Locations', href: '/locations' },
            { label: 'The Team', href: '/team' },
            { label: 'Mobile Studio', href: '/mobile-barber' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border border-zinc-800 hover:border-zinc-600 active:scale-[0.98] transition-all p-4 flex items-center justify-between group"
            >
              <span className="text-white/80 text-sm font-medium tracking-wide group-hover:text-white">
                {link.label}
              </span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-gray-600 group-hover:text-brand-red transition-colors" />
            </Link>
          ))}
        </div>

        {/* Call shortcut */}
        <a
          href={CONTACT.nick.phoneHref}
          className="block border border-zinc-800 hover:border-zinc-600 active:scale-[0.99] transition-all p-4 mb-6"
        >
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-1">Talk to Nick</p>
          <p className="text-white text-base font-semibold tracking-wide">{CONTACT.nick.phone}</p>
        </a>

        {/* Status footer */}
        {status && (
          <div className="text-center pt-6 border-t border-zinc-900">
            <p className="text-gray-500 text-xs leading-relaxed">{status.text}</p>
          </div>
        )}
      </div>
    </main>
  )
}

function greeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 18) return 'Good Afternoon'
  return 'Good Evening'
}

// Banna Ave hours (the only location with appointments) — Mon-Fri 8-5:30,
// Thu 8-6, Sat 7-4, Sun 8-4. Used for the open/closed indicator.
const HOURS: Record<number, [number, number]> = {
  0: [8, 16], // Sunday
  1: [8, 17.5], // Monday
  2: [8, 17.5],
  3: [8, 17.5],
  4: [8, 18], // Thursday
  5: [8, 17.5],
  6: [7, 16], // Saturday
}

function deriveStatus(now: Date) {
  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  const [open, close] = HOURS[day]
  const isOpen = hour >= open && hour < close
  if (isOpen) {
    const closeH = Math.floor(close)
    const closeM = Math.round((close - closeH) * 60)
    return {
      open: true,
      text: `Open now — closes ${formatTime(closeH, closeM)}`,
    }
  }
  // Find next opening
  for (let i = 0; i < 7; i++) {
    const nextDay = (day + i) % 7
    const [nextOpen] = HOURS[nextDay]
    if (i === 0 && hour < nextOpen) {
      return { open: false, text: `Closed — opens at ${formatTime(nextOpen, 0)} today` }
    }
    if (i > 0) {
      const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][nextDay]
      const dayLabel = i === 1 ? 'tomorrow' : dayName
      return { open: false, text: `Closed — opens at ${formatTime(nextOpen, 0)} ${dayLabel}` }
    }
  }
  return { open: false, text: 'Closed' }
}

function formatTime(h: number, m: number) {
  const period = h >= 12 ? 'pm' : 'am'
  const hr = h % 12 || 12
  if (m === 0) return `${hr}${period}`
  return `${hr}:${String(m).padStart(2, '0')}${period}`
}
