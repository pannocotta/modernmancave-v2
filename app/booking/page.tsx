'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import { CONTACT } from '@/lib/config'
import { ArrowRightIcon } from '@/components/icons'

const ACUITY_URL = 'https://app.acuityscheduling.com/schedule.php?owner=39144906'

export default function BookingPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://embed.acuityscheduling.com/js/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero — bottom-aligned, matches site pattern */}
      <section className="relative min-h-[60vh] flex items-end pb-20 md:pb-28 pt-32 md:pt-40 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock/barbershop-tools.jpg"
            alt="Modern Mancave"
            fill
            priority
            quality={80}
            className="object-cover grayscale opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black z-10" />
          <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none grain-overlay" />
        </div>

        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Booking</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h1 className="font-headliner gradient-heading text-5xl md:text-7xl lg:text-8xl leading-[0.85] mb-8">
            BOOK YOUR<br />APPOINTMENT
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Book a guaranteed time with Nick at our Banna Avenue location instead of waiting 20–30 minutes for a walk-in. Every appointment includes a private area, complimentary water or Coca-Cola, and personalised service. Paid in full upfront to confirm your booking.
          </p>
        </div>
      </section>

      {/* Booking context — description + Nick-only + rule cards */}
      <section className="relative bg-black pt-4 pb-24 md:pt-6 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Nick-only callout */}
          <div className="border border-brand-red/40 bg-zinc-950 px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className="w-1 self-stretch bg-brand-red shrink-0 hidden md:block" />
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              <span className="text-white font-bold tracking-[0.1em] uppercase mr-2">Nick only —</span>
              Leka and other barbers do not take appointments. Walk-ins only.
            </p>
          </div>

          {/* Booking rules */}
          <div className="grid sm:grid-cols-3 gap-px border border-zinc-800/50 bg-zinc-800/50">
            {[
              { label: 'Payment', detail: 'Full payment required to confirm your booking. A $20 surcharge applies to all booked services.' },
              { label: 'Arrival', detail: 'Please arrive 10 minutes before your appointment.' },
              { label: 'Late policy', detail: '10+ minutes late and Nick reserves the right to refuse the appointment.' },
            ].map(({ label, detail }) => (
              <div key={label} className="bg-black px-8 py-8">
                <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-3">{label}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acuity Booking Embed */}
      <section className="relative section-blend-dark bg-zinc-950 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Reserve Your Spot</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="font-headliner gradient-heading text-4xl md:text-6xl leading-[0.85] mb-12">
            CHOOSE YOUR<br />SERVICE
          </h2>

          <div className="border border-zinc-800/60 bg-black p-2 md:p-4">
            <iframe
              src={ACUITY_URL}
              title="Schedule Appointment"
              width="100%"
              height="800"
              frameBorder="0"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      {/* Questions fallback */}
      <section className="relative bg-black py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Need a hand?</span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>
              <h2 className="font-headliner gradient-heading text-4xl md:text-5xl lg:text-6xl leading-[0.85] mb-6">
                MESSAGE NICK<br />YOUR QUESTIONS
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-md">
                Can&apos;t find the right service or have a special request? Reach out directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT.nick.phoneHref}
                className="group relative bg-brand-red text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 inline-flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02]"
              >
                <span className="relative z-10">CALL {CONTACT.nick.phone}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href={CONTACT.nick.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                <span>WHATSAPP NICK</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
