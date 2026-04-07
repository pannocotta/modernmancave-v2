'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import { useState } from 'react'
import { SITE } from '@/lib/config'

export default function FranchisePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 md:pt-32 pb-12">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/barbershop-tools.jpg" alt="" fill className="object-cover grayscale opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headliner gradient-heading mb-6 leading-tight">
              OWN A MODERN<br/>
              MANCAVE
            </h1>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A proven business. A recognised brand. Everything you need to open the doors and start earning from day one.
            </p>
            <a
              href="#application"
              className="inline-block bg-brand-red hover:bg-red-600 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-headliner gradient-heading mb-6">
                THE OPPORTUNITY
              </h2>
              <div className="w-20 h-1 bg-brand-red mb-8"></div>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
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

            <div className="space-y-6">
              <div className="border border-zinc-800 bg-black p-8 rounded-xl shadow-lg shadow-black/50">
                <div className="text-4xl font-bold text-brand-red mb-2">{new Date().getFullYear() - SITE.established}+</div>
                <p className="text-gray-400">Years in business</p>
              </div>
              <div className="border border-zinc-800 bg-black p-8 rounded-xl shadow-lg shadow-black/50">
                <div className="text-4xl font-bold text-brand-red mb-2">3</div>
                <p className="text-gray-400">Locations across Griffith</p>
              </div>
              <div className="border border-zinc-800 bg-black p-8 rounded-xl shadow-lg shadow-black/50">
                <div className="text-4xl font-bold text-brand-red mb-2">90%+</div>
                <p className="text-gray-400">Client return rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headliner gradient-heading mb-4">
              WHAT YOU GET
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything is set up for you. No guesswork, no figuring it out alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div key={index} className="border border-zinc-800 bg-zinc-950 p-6 rounded-xl shadow-lg shadow-black/50 hover:border-brand-red/30 transition-colors">
                <h3 className="font-headliner text-lg text-brand-red mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headliner gradient-heading mb-4">
              WHO THIS IS FOR
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              This is for people who want to build something real.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: 'BUILDER', text: 'You want to own a business, not just work in one', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0-.75 3.75m0 0-.75 3.75M17.25 7.5l.75 3.75m0 0 .75 3.75" /></svg> },
              { title: 'COMMUNITY', text: 'You care about your area and want to create something in it', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg> },
              { title: 'COACHABLE', text: 'You\'re willing to follow a system that already works', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> },
              { title: 'COMMITTED', text: 'You have capital to invest and are ready to go', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg> },
              { title: 'ANY BACKGROUND', text: 'Barbering experience is a plus but not required', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c.306.1.618.19.933.268a23.89 23.89 0 0 0 3.79.518M4.26 10.147A23.867 23.867 0 0 1 12 8.25c2.724 0 5.335.456 7.74 1.297M4.26 10.147l.174-.442c.63-1.593 2.258-2.455 3.867-2.012a23.716 23.716 0 0 1 7.398 0c1.609-.443 3.237.419 3.867 2.012l.174.442m-15.482 0c.38.96.686 1.955.91 2.976m14.572-2.976a23.867 23.867 0 0 1 .91 2.976" /></svg> },
            ].map((item, i) => (
              <div key={i} className="bg-black border border-zinc-800 rounded-xl shadow-lg shadow-black/50 p-6 text-center hover:border-brand-red/30 transition-colors">
                <div className="text-brand-red mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-brand-red text-xs tracking-widest mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="py-20 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headliner gradient-heading mb-4">
              START YOUR JOURNEY
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">
              Take the first step toward owning your own Modern Mancave
            </p>
          </div>

          {submitted ? (
            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-headliner mb-4">APPLICATION RECEIVED</h2>
              <p className="text-gray-300 mb-6">
                Thanks for your interest. We&apos;ll review your application and be in touch within 2-3 business days with full details.
              </p>
              <a href="/" className="inline-block bg-brand-red text-white px-6 py-3 font-bold hover:bg-white hover:text-brand-red transition-colors">
                BACK TO HOME
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Where would you open? (City / Region) *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Barbering Experience</label>
                <select className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none">
                  <option>None</option>
                  <option>Less than 2 years</option>
                  <option>2-5 years</option>
                  <option>5+ years</option>
                  <option>Licensed barber</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Tell us about yourself and why you want to own a Modern Mancave *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-black border border-zinc-700 rounded px-4 py-3 focus:border-brand-red focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-red-600 text-white py-4 rounded-lg font-bold text-lg transition"
              >
                SUBMIT APPLICATION
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
