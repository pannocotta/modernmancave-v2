'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import { useState } from 'react'
import { BOOKING_SERVICES } from '@/lib/services'
import { CONTACT } from '@/lib/config'
import { ArrowRightIcon } from '@/components/icons'

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

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
            Skip the wait and secure your premium grooming experience. Bookings are paid in full to guarantee your spot — private area, a drink on arrival, expert service from Nick.
          </p>
        </div>
      </section>

      {/* Appointment Notice Banner */}
      <section className="relative section-blend-dark bg-zinc-950 py-10 md:py-14">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="border border-brand-red/40 bg-black px-8 py-7 flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-1 self-stretch bg-brand-red shrink-0 hidden md:block" />
            <div>
              <p className="text-white font-bold text-sm tracking-[0.1em] uppercase mb-1">Appointments with Nick Only</p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Online bookings are exclusively for Nick&apos;s private appointment space at our Banna Avenue location. Leka and other barbers do not take appointments — walk-ins only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Experience */}
      <section className="relative bg-black py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">The Experience</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="font-headliner gradient-heading text-4xl md:text-6xl lg:text-7xl leading-[0.85] mb-8 max-w-3xl">
            THE PRIVATE<br />APPOINTMENT
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            When you book an appointment, you get your own private barber experience — complimentary water or Coca-Cola, a hot towel treatment, and personalised service. Every appointment adds $20 to skip the walk-in queue entirely.
          </p>

          {/* Booking rules */}
          <div className="mt-14 grid sm:grid-cols-3 gap-px border border-zinc-800/50 bg-zinc-800/50">
            {[
              { label: 'Payment', detail: 'Full payment required to confirm your booking.' },
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

      {/* Service Selection */}
      <section className="relative section-blend-dark bg-zinc-950 py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Services</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="font-headliner gradient-heading text-4xl md:text-6xl leading-[0.85] mb-12">SELECT YOUR SERVICE</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/50 border border-zinc-800/50">
            {BOOKING_SERVICES.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`group text-left p-7 bg-black transition-all duration-200 ${
                  selectedService === index
                    ? 'bg-zinc-900'
                    : 'hover:bg-zinc-900/60'
                }`}
              >
                <div
                  className={`w-6 h-px mb-5 transition-all duration-200 ${
                    selectedService === index ? 'bg-brand-red w-10' : 'bg-zinc-700 group-hover:bg-zinc-500'
                  }`}
                />
                <p className={`font-bold text-sm md:text-base mb-2 transition-colors ${
                  selectedService === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {service.name}
                </p>
                <div className="flex items-baseline gap-3">
                  <span className={`text-xl font-bold transition-colors ${
                    selectedService === index ? 'text-brand-red' : 'text-gray-500 group-hover:text-gray-300'
                  }`}>
                    ${service.price}
                  </span>
                  <span className="text-gray-600 text-xs">{service.duration} min</span>
                </div>
                {selectedService === index && (
                  <div className="mt-4 flex items-center gap-2 text-brand-red text-[10px] font-bold tracking-[0.2em] uppercase">
                    <span>Selected</span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Teeth Whitening availability notice */}
          {selectedService !== null && BOOKING_SERVICES[selectedService].name === 'Teeth Whitening' && (
            <div className="mt-6 border border-zinc-700 bg-black px-8 py-5 flex items-start gap-4">
              <div className="w-1 self-stretch bg-yellow-500/60 shrink-0" />
              <p className="text-yellow-400/90 text-sm leading-relaxed">
                Teeth whitening appointments are only available on <span className="font-bold text-yellow-400">Mondays and Wednesdays</span>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Online Booking Coming Soon */}
      <section className="relative bg-black py-32 md:py-44 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Online Booking</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end">
            <div>
              <h2 className="font-headliner gradient-heading text-4xl md:text-6xl lg:text-7xl leading-[0.85] mb-8">
                COMING<br />SOON
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
                We&apos;re setting up online booking. In the meantime, call or message Nick directly to lock in your spot.
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
