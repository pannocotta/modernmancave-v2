'use client'

import Header from '@/components/Header'
import { ArrowRightIcon } from '@/components/icons'

/**
 * Sandbox page — preview button alternatives to replace the existing
 * rounded-full pill CTA. Not linked from anywhere; visit /buttons-test
 * directly. Delete once a direction is chosen.
 */
export default function ButtonsTestPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 md:pt-40 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
        <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Sandbox</p>
        <h1 className="font-headliner gradient-heading text-5xl md:text-7xl leading-[0.85] mb-6">
          BUTTON<br />OPTIONS
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-16">
          Hover each button to see its motion. Pick a direction and I&apos;ll roll it across the site.
        </p>

        {/* Current — pill, for reference */}
        <Row
          label="Current (for reference)"
          desc="Rounded-full pill with solid red fill, scale + glow on hover."
        >
          <button className="group relative bg-brand-red text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02]">
            <span className="relative z-10">BOOK NOW</span>
          </button>
        </Row>

        {/* 1. Sharp rectangle with hover-fill from left */}
        <Row
          label="1 — Sharp rectangle, hover-fill"
          desc="Outlined red rectangle. Hover fills solid red from left to right. Premium menswear vibe."
        >
          <button className="relative overflow-hidden border border-brand-red text-brand-red px-10 py-4 font-bold text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-white group">
            <span className="absolute inset-0 bg-brand-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            <span className="relative z-10 inline-flex items-center gap-3">
              BOOK NOW
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </Row>

        {/* 2. Underlined text CTA with arrow */}
        <Row
          label="2 — Underlined text + arrow"
          desc="No button shape. Bold uppercase, red underline, arrow shifts right on hover. Most modern of the five."
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-white font-bold text-sm tracking-[0.2em] uppercase pb-2 border-b border-brand-red hover:border-white transition-colors duration-300"
          >
            BOOK NOW
            <ArrowRightIcon className="w-4 h-4 text-brand-red transition-transform group-hover:translate-x-1.5 group-hover:text-white" />
          </a>
        </Row>

        {/* 3. Industrial bordered with red accent */}
        <Row
          label="3 — Industrial w/ red accent"
          desc="Sharp white border, red square accent on left expands on hover. Workshop / barber-tool feel."
        >
          <button className="group relative inline-flex items-center border border-white/30 hover:border-white text-white font-bold text-xs tracking-[0.2em] uppercase transition-colors duration-300">
            <span className="bg-brand-red w-3 self-stretch transition-all duration-300 group-hover:w-12" />
            <span className="px-8 py-4">BOOK NOW</span>
          </button>
        </Row>

        {/* 4. Brutalist split button */}
        <Row
          label="4 — Brutalist split"
          desc="70/30 split. Label left on black, red square + arrow right. Loud, opinionated. Acne / Off-White."
        >
          <button className="group inline-flex items-stretch border border-white/20 hover:border-white transition-colors duration-300">
            <span className="bg-black px-8 py-4 font-bold text-xs tracking-[0.2em] uppercase text-white border-r border-white/20 group-hover:border-white transition-colors">
              BOOK NOW
            </span>
            <span className="bg-brand-red w-12 flex items-center justify-center transition-all duration-300 group-hover:w-16">
              <ArrowRightIcon className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </Row>

        {/* 5. Cinematic glass button */}
        <Row
          label="5 — Cinematic glass"
          desc="Frosted backdrop-blur on dark, thin red ring, internal red sweep on hover. Vision Pro / luxury."
        >
          <button className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-brand-red/40 hover:border-brand-red text-white px-10 py-4 font-bold text-xs tracking-[0.2em] uppercase transition-colors duration-300">
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-brand-red/30 to-transparent transition-transform duration-700 ease-out" />
            <span className="relative z-10 inline-flex items-center gap-3">
              BOOK NOW
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </Row>

        <div className="mt-24 border-t border-zinc-800 pt-10">
          <p className="text-gray-500 text-sm">
            Tell me a number (1–5) and I&apos;ll roll it across every CTA on the site (homepage, prices, locations, mobile-barber, footer, floating book button).
          </p>
        </div>
      </section>
    </main>
  )
}

function Row({ label, desc, children }: { label: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center py-10 border-t border-zinc-900">
      <div>
        <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{label}</p>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xl">{desc}</p>
      </div>
      <div className="flex justify-start md:justify-end">{children}</div>
    </div>
  )
}
