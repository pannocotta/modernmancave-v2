'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import { useState } from 'react'
import { SITE } from '@/lib/config'
import { ArrowRightIcon } from '@/components/icons'

export default function FranchisePage() {
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
        body: JSON.stringify({ ...data, name: `${data.firstName} ${data.lastName}`.trim(), type: 'franchise' }),
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

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 md:pb-28 pt-32 md:pt-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/barbershop-tools.jpg" alt="" fill priority className="object-cover grayscale opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
          <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none grain-overlay" />
        </div>

        <div className="absolute top-20 left-6 md:top-28 md:left-12 z-20 w-12 h-12 md:w-16 md:h-16 border-t border-l border-brand-red/30" />
        <div className="absolute top-20 right-6 md:top-28 md:right-12 z-20 w-12 h-12 md:w-16 md:h-16 border-t border-r border-brand-red/30" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">Franchise</span>
          <h1 className="font-headliner gradient-heading text-6xl md:text-7xl lg:text-8xl leading-[0.85] mb-8">
            OWN A MODERN<br />MANCAVE
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            A proven business. A recognised brand. Everything you need to open the doors and start earning from day one.
          </p>
          <a
            href="#application"
            className="group relative bg-brand-red text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 inline-block hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02]"
          >
            <span className="relative z-10">APPLY NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="relative bg-zinc-950 py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">The Opportunity</span>
              <h2 className="font-headliner gradient-heading text-5xl md:text-6xl lg:text-7xl leading-[0.85] mb-10">
                A BUSINESS<br />THAT WORKS
              </h2>
              <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
                <p>
                  Modern Mancave has been operating since 2017. Three locations in Griffith, a mobile barber studio, a tattoo studio, and a loyal customer base that keeps growing.
                </p>
                <p>
                  This isn&apos;t a startup. It&apos;s a working business with years of proof behind it. You&apos;re buying into a brand that people already know and trust.
                </p>
                <p>
                  Men&apos;s grooming is one of the fastest growing industries in Australia. Walk-in traffic is consistent, repeat bookings are high, and overheads stay low. The numbers work.
                </p>
              </div>
            </div>

            <div className="space-y-8 md:pl-8">
              <div className="border-l-2 border-brand-red/40 pl-8">
                <div className="text-5xl md:text-6xl font-bold text-white mb-1">{new Date().getFullYear() - SITE.established}+</div>
                <p className="text-gray-500 text-sm tracking-widest uppercase">Years in business</p>
              </div>
              <div className="h-px bg-zinc-800" />
              <div className="border-l-2 border-brand-red/40 pl-8">
                <div className="text-5xl md:text-6xl font-bold text-white mb-1">3</div>
                <p className="text-gray-500 text-sm tracking-widest uppercase">Locations across Griffith</p>
              </div>
              <div className="h-px bg-zinc-800" />
              <div className="border-l-2 border-brand-red/40 pl-8">
                <div className="text-5xl md:text-6xl font-bold text-white mb-1">90%+</div>
                <p className="text-gray-500 text-sm tracking-widest uppercase">Client return rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="relative bg-black py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Inclusions</span>
              <h2 className="font-headliner gradient-heading text-5xl md:text-7xl leading-[0.85]">WHAT YOU GET</h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
                Everything is set up for you. No guesswork, no figuring it out alone.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/50">
            {[
              { title: 'THE BRAND', desc: 'Complete brand identity, signage, uniforms, and marketing materials ready to go. You open with instant recognition.' },
              { title: 'SHOP FITOUT', desc: 'Interior design guidance and supplier partnerships for equipment, furniture, and products at trade pricing.' },
              { title: 'STAFF TRAINING', desc: 'We train your team on cuts, grooming services, customer experience, and upselling. No barbering experience needed from you.' },
              { title: 'BOOKING SYSTEM', desc: 'Online booking, point of sale, and business management software set up and ready on day one.' },
              { title: 'MARKETING', desc: 'Social media templates, local area marketing campaigns, and a website page for your location. Customers find you fast.' },
              { title: 'MOBILE BARBER ACCESS', desc: 'Use of the Modern Mancave mobile barber trailer for events, functions, and community programs in your area.' },
              { title: 'MULTIPLE REVENUE STREAMS', desc: 'Haircuts, beard grooming, teeth whitening, merch sales, and event bookings. Not just one income source.' },
              { title: 'ONGOING SUPPORT', desc: 'Direct access to Tristan and the team. Operational guidance, regular check-ins, and help when you need it.' },
              { title: 'PROVEN SYSTEMS', desc: 'Pricing, rostering, stock management, and customer retention systems that already work across three locations.' },
            ].map((item, index) => (
              <div key={index} className="bg-black p-8 hover:bg-zinc-950 transition-colors group">
                <h3 className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative bg-zinc-950 py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-20">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Ideal Candidate</span>
            <h2 className="font-headliner gradient-heading text-5xl md:text-7xl leading-[0.85] mb-6">WHO THIS<br />IS FOR</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-lg">
              This is for people who want to build something real.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-px bg-zinc-800/50">
            {[
              { title: 'BUILDER', text: 'You want to own a business, not just work in one' },
              { title: 'COMMUNITY', text: 'You care about your area and want to create something in it' },
              { title: 'COACHABLE', text: 'You\'re willing to follow a system that already works' },
              { title: 'COMMITTED', text: 'You have capital to invest and are ready to go' },
              { title: 'ANY BACKGROUND', text: 'Barbering experience is a plus but not required' },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-950 p-8 hover:bg-black transition-colors">
                <h3 className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-4">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="relative bg-black py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">Apply</span>
          <h2 className="font-headliner gradient-heading text-5xl md:text-6xl lg:text-7xl leading-[0.85] mb-6">
            START YOUR<br />JOURNEY
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-16">
            Take the first step toward owning your own Modern Mancave.
          </p>

          {submitted ? (
            <div className="border border-zinc-800 p-12 text-center">
              <div className="w-12 h-px bg-brand-red mx-auto mb-8" />
              <h3 className="font-headliner gradient-heading text-3xl md:text-4xl mb-6">APPLICATION RECEIVED</h3>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Thanks for your interest. We&apos;ll review your application and be in touch within 2-3 business days with full details.
              </p>
              <a
                href="/"
                className="group inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300"
              >
                <span>BACK TO HOME</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-transparent border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-transparent border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-transparent border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Where would you open? (City / Region) *</label>
                <input
                  type="text"
                  name="location"
                  required
                  className="w-full bg-transparent border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Barbering Experience</label>
                <select
                  name="experience"
                  className="w-full bg-black border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="None" className="bg-black">None</option>
                  <option value="Less than 2 years" className="bg-black">Less than 2 years</option>
                  <option value="2-5 years" className="bg-black">2-5 years</option>
                  <option value="5+ years" className="bg-black">5+ years</option>
                  <option value="Licensed barber" className="bg-black">Licensed barber</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Tell us about yourself and why you want to own a Modern Mancave *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors resize-none placeholder:text-zinc-600"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative bg-brand-red text-white px-12 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  <span className="relative z-10">{loading ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                {error && (
                  <p className="text-red-500 text-xs tracking-wide mt-6">Something went wrong. Please try again or call us directly.</p>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
