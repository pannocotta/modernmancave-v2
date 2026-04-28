'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import { CONTACT } from '@/lib/config'
import { ArrowRightIcon } from '@/components/icons'
import { CTAAnchor } from '@/components/CTA'
import { buildAcuityUrl, getServiceById } from '@/lib/acuity'

export default function BookingPage() {
  // Read ?appointmentType= from URL on mount so we can pre-select a service.
  const [appointmentType, setAppointmentType] = useState<string | null | undefined>(undefined)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setAppointmentType(params.get('appointmentType'))

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

  const acuityUrl = buildAcuityUrl(appointmentType ?? undefined)
  const preselected = appointmentType ? getServiceById(Number(appointmentType)) : null

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
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">VIP Booking</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h1 className="font-headliner gradient-heading text-5xl md:text-7xl lg:text-8xl leading-[0.85] mb-8">
            BOOK THE<br />VIP EXPERIENCE
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            The Modern Mancave VIP experience — a guaranteed time with Nick at our Banna Avenue location, no 20–30 minute walk-in wait. Every VIP booking includes a private area, complimentary water or Coca-Cola, and personalised service. The full booking total — your service plus the $20 VIP fee — is paid upfront to confirm your spot.
          </p>
        </div>
      </section>

      {/* Booking context — description + Nick-only + rule cards */}
      <section className="relative bg-black pt-4 pb-24 md:pt-6 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Nick-only callout */}
          <div className="border-l-2 border-brand-red pl-6 md:pl-8 py-3 mb-12 md:mb-16">
            <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Nick only</p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Leka and other barbers do not take appointments. Walk-ins only.
            </p>
          </div>

          {/* Booking rules */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              { label: 'VIP Fee', detail: '$20 VIP fee on top of your service price. Covers your private area, complimentary drinks, and guaranteed time slot. Full booking total paid upfront to confirm.' },
              { label: 'Arrival', detail: 'Please arrive 10 minutes before your appointment.' },
              { label: 'Late policy', detail: '10+ minutes late and Nick reserves the right to refuse the appointment.' },
            ].map(({ label, detail }) => (
              <div key={label} className="border-l-2 border-brand-red/30 pl-6 md:pl-8 py-2">
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
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Reserve Your VIP Spot</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="font-headliner gradient-heading text-4xl md:text-6xl leading-[0.85] mb-6">
            {preselected ? 'PICK A TIME' : (<>CHOOSE YOUR<br />SERVICE</>)}
          </h2>
          {preselected && (
            <div className="mb-12 inline-flex items-center border border-brand-red/40 bg-zinc-950 px-5 py-3">
              <span className="bg-brand-red w-1 self-stretch shrink-0 mr-4" />
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-red mb-1">Selected service</p>
                <p className="text-white font-bold tracking-wide text-base">{preselected.name}</p>
                <p className="text-gray-500 text-xs tracking-wide">${preselected.price} · {preselected.duration} min</p>
              </div>
            </div>
          )}

          <div className="border border-zinc-800/60 bg-black p-2 md:p-4">
            {appointmentType !== undefined && (
              <iframe
                key={appointmentType ?? 'default'}
                src={acuityUrl}
                title="Schedule Appointment"
                width="100%"
                height="800"
                frameBorder="0"
                className="block w-full"
              />
            )}
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
              <CTAAnchor href={CONTACT.nick.phoneHref}>
                CALL {CONTACT.nick.phone}
              </CTAAnchor>
              <CTAAnchor
                href={CONTACT.nick.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                <span>WHATSAPP NICK</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </CTAAnchor>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
