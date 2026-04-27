'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRightIcon } from '@/components/icons'
import { CONTACT } from '@/lib/config'
import {
  ACUITY_SERVICES,
  FEATURED_SERVICE_IDS,
  SERVICE_CATEGORIES_ORDERED,
  buildBookingUrl,
  getServicesByCategory,
  type ServiceCategory,
} from '@/lib/acuity'
import InstallPromptModal from '@/components/InstallPromptModal'

export default function LaunchPage() {
  const [now, setNow] = useState<Date | null>(null)
  const [openCategory, setOpenCategory] = useState<ServiceCategory | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  const status = now ? deriveStatus(now) : null
  const featured = FEATURED_SERVICE_IDS.map(
    (id) => ACUITY_SERVICES.find((s) => s.id === id)!,
  )

  return (
    <main className="min-h-[100svh] bg-black text-white relative overflow-hidden pb-24">
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

      <div className="relative z-10 px-6 max-w-md mx-auto">
        {/* Welcome */}
        <div className="mt-10 mb-8">
          <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-4">{greeting()}</p>
          <h1 className="font-headliner gradient-heading text-5xl leading-[0.85] mb-4">
            BOOK YOUR<br />NEXT CUT
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Tap a service below to lock in a time with Nick. Pre-pays and confirms in one go.
          </p>
        </div>

        {/* Featured services — 2x2 grid */}
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Most Booked</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {featured.map((service) => (
            <Link
              key={service.id}
              href={buildBookingUrl(service.id)}
              className="relative border border-zinc-800 hover:border-brand-red/60 active:scale-[0.98] transition-all p-4 group flex flex-col justify-between min-h-[110px] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-red/0 group-hover:bg-brand-red transition-colors" />
              <p className="text-white font-bold text-sm leading-tight tracking-wide pr-2">
                {service.name}
              </p>
              <div className="flex items-baseline justify-between mt-3">
                <span className="text-brand-red text-lg font-bold">${service.price}</span>
                <span className="text-gray-600 text-[10px] tracking-wide">{service.duration} min</span>
              </div>
            </Link>
          ))}
        </div>

        {/* All services by category — collapsible accordion */}
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">Browse All Services</p>
        <div className="space-y-2 mb-8">
          {SERVICE_CATEGORIES_ORDERED.map((category) => {
            const services = getServicesByCategory(category)
            const isOpen = openCategory === category
            return (
              <div key={category} className="border border-zinc-900 overflow-hidden">
                <button
                  onClick={() => setOpenCategory(isOpen ? null : category)}
                  className="w-full flex items-center justify-between px-4 py-4 hover:bg-zinc-950 active:bg-zinc-900 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-1 h-6 transition-colors ${isOpen ? 'bg-brand-red' : 'bg-zinc-800'}`} />
                    <span className="text-white text-sm font-bold tracking-[0.15em] uppercase">{category}</span>
                    <span className="text-gray-600 text-[10px] tracking-wide">{services.length}</span>
                  </div>
                  <span
                    className={`text-gray-500 text-lg leading-none transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-zinc-900">
                    {services.map((service, i) => (
                      <Link
                        key={service.id}
                        href={buildBookingUrl(service.id)}
                        className={`group flex items-center justify-between px-4 py-3 hover:bg-zinc-950 active:bg-zinc-900 transition-colors ${
                          i !== services.length - 1 ? 'border-b border-zinc-900' : ''
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium tracking-wide truncate group-hover:text-brand-red transition-colors">
                            {service.name}
                          </p>
                          <p className="text-gray-600 text-[11px]">{service.duration} min</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-4">
                          <span className="text-white font-bold text-sm">${service.price}</span>
                          <ArrowRightIcon className="w-3.5 h-3.5 text-gray-700 group-hover:text-brand-red transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick links */}
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">More</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { label: 'Locations', href: '/locations' },
            { label: 'Our Team', href: '/team' },
            { label: 'Mobile Studio', href: '/mobile-barber' },
            { label: 'About', href: '/' },
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

      {/* First-visit install popup — hidden if already installed or previously dismissed */}
      <InstallPromptModal />
    </main>
  )
}

function greeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 18) return 'Good Afternoon'
  return 'Good Evening'
}

const HOURS: Record<number, [number, number]> = {
  0: [8, 16],
  1: [8, 17.5],
  2: [8, 17.5],
  3: [8, 17.5],
  4: [8, 18],
  5: [8, 17.5],
  6: [7, 16],
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
