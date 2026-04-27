'use client'

import Header from '@/components/Header'
import { useState } from 'react'

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
        body: JSON.stringify({ ...data, name: `${data.firstName} ${data.lastName}`.trim(), type: 'mobile-barber' }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="relative z-20 w-full px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-headliner gradient-heading mb-6">
                MOBILE STUDIO ENQUIRY
              </h1>
              <div className="w-20 h-1 bg-gray-500 mx-auto mb-8"></div>
              <p className="text-gray-300 text-lg">
                Tell us about your event and we&apos;ll get back to you with a custom package
              </p>
            </div>

            {submitted ? (
              <div className="bg-zinc-900 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-headliner gradient-heading mb-4">ENQUIRY RECEIVED</h2>
                <p className="text-gray-300 mb-6">
                  Thank you for your interest in the Modern Mancave mobile studio.
                  We&apos;ll be in touch within 24 hours to discuss your event.
                </p>
                <a href="/mobile-barber" className="inline-block bg-brand-red text-white px-6 py-3 font-bold hover:bg-white hover:text-brand-red transition-colors">
                  BACK TO MOBILE BARBER
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-400">FIRST NAME *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-400">LAST NAME *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-400">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-400">PHONE *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-400">EVENT TYPE</label>
                  <select name="eventType" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors">
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="party">Party</option>
                    <option value="community">Community Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-400">EVENT DATE</label>
                  <input
                    type="date"
                    name="eventDate"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-400">EVENT LOCATION</label>
                  <input
                    type="text"
                    name="eventLocation"
                    placeholder="e.g. Griffith, NSW"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-400">ESTIMATED NUMBER OF GUESTS</label>
                  <input
                    type="number"
                    name="guestCount"
                    placeholder="How many people will need grooming?"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-400">TELL US ABOUT YOUR EVENT</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Any special requirements or additional details..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-red text-white px-8 py-4 text-lg font-bold tracking-wider hover:bg-white hover:text-brand-red transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                </button>
                {error && (
                  <p className="text-red-500 text-sm mt-4">Something went wrong. Please try again or call us directly.</p>
                )}

                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We&apos;ll be in touch within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
