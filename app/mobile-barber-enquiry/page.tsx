'use client'

import Header from '@/components/Header'
import { useState } from 'react'
import { CTAButton } from '@/components/CTA'
import { ArrowRightIcon } from '@/components/icons'

export default function MobileBarberEnquiryPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          name: `${data.firstName} ${data.lastName}`.trim(),
          type: 'mobile-barber',
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-transparent border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors placeholder:text-zinc-600'
  const selectClass =
    'w-full bg-black border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors appearance-none cursor-pointer'
  const labelClass =
    'block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3'

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative bg-black pt-32 md:pt-44 pb-32 md:pb-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">Mobile Studio</span>
          <h1 className="font-headliner gradient-heading text-5xl md:text-6xl lg:text-7xl leading-[0.85] mb-6">
            ENQUIRE ABOUT<br />THE STUDIO
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-16">
            Tell us about your event and we&apos;ll come back with a custom package within 24 hours.
          </p>

          {submitted ? (
            <div className="border border-zinc-800 p-12 text-center">
              <div className="w-12 h-px bg-brand-red mx-auto mb-8" />
              <h2 className="font-headliner gradient-heading text-3xl md:text-4xl mb-6">ENQUIRY RECEIVED</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Thanks for your interest in the Modern Mancave mobile studio. We&apos;ll be in touch within 24 hours to discuss your event.
              </p>
              <a
                href="/mobile-barber"
                className="group inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300"
              >
                <span>BACK TO MOBILE BARBER</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input type="text" name="firstName" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input type="text" name="lastName" required className={inputClass} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" name="email" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone *</label>
                  <input type="tel" name="phone" required className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Event Type</label>
                <select name="eventType" className={selectClass} defaultValue="">
                  <option value="" className="bg-black">Select event type</option>
                  <option value="wedding" className="bg-black">Wedding</option>
                  <option value="corporate" className="bg-black">Corporate Event</option>
                  <option value="party" className="bg-black">Party</option>
                  <option value="community" className="bg-black">Community Event</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Event Date</label>
                  <input type="date" name="eventDate" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Estimated Guests</label>
                  <input
                    type="number"
                    name="guestCount"
                    placeholder="How many people will need grooming?"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Event Location</label>
                <input type="text" name="eventLocation" placeholder="e.g. Griffith, NSW" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Tell us about your event</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any special requirements or additional details..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="pt-4">
                <CTAButton type="submit" disabled={loading}>
                  {loading ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                </CTAButton>
                {error && (
                  <p className="text-red-500 text-xs tracking-wide mt-6">Something went wrong. Please try again or call us directly.</p>
                )}
              </div>

              <p className="text-xs text-gray-600 tracking-wide pt-2">* Required fields. We&apos;ll be in touch within 24 hours.</p>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
