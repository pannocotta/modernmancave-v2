import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import FloatingBookButton from '@/components/FloatingBookButton'
import { StaggerContainer, StaggerItem } from '@/components/StaggerReveal'
import { TESTIMONIALS, SOCIAL, SITE, LOCATIONS } from '@/lib/config'
import Marquee from '@/components/Marquee'


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <FloatingBookButton />

      {/* ═══════════════════════════════════════
          HERO — Full viewport, oversized type
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-end bg-black overflow-hidden">
        {/* Background image with Ken Burns */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg"
            alt=""
            fill
            priority
            quality={80}
            className="object-cover animate-ken-burns"
            sizes="100vw"
          />
          {/* Dark overlay — heavier at bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10" />
          {/* Film grain texture */}
          <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none grain-overlay" />
        </div>

        {/* Hero content — bottom-aligned, left-heavy */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            {/* Left — oversized typography */}
            <div className="md:col-span-8">
              <div className="mb-6">
                <span className="inline-block text-brand-red text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">Est. 2017 — Griffith, NSW</span>
              </div>
              <h1 className="font-headliner text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] tracking-tight mb-6">
                <span className="block gradient-heading">MODERN</span>
                <span className="block gradient-heading">MANCAVE</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                Premium barbershop. Three locations.
                Where Griffith&apos;s sharpest men get their edge.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/booking" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300">
                  BOOK NOW
                </Link>
                <Link href="/prices" className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors border-b border-gray-600 hover:border-white pb-1">
                  VIEW PRICES
                </Link>
              </div>
            </div>

            {/* Right — badge, smaller */}
            <div className="hidden md:flex md:col-span-4 justify-end">
              <div className="w-48 lg:w-56 opacity-80">
                <Image
                  src="/hero-badge.png"
                  alt="Modern Mancave Barbershop"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES MARQUEE — horizontal ticker
      ═══════════════════════════════════════ */}
      <Marquee />

      {/* ═══════════════════════════════════════
          ABOUT — Asymmetric, overlapping layout
      ═══════════════════════════════════════ */}
      <section className="relative bg-black overflow-hidden py-24 md:py-32">
        {/* Subtle grain */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 md:gap-4">
            {/* Left — large image, bleeds past center */}
            <div className="md:col-span-7 relative">
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                <Image
                  src="/stock/barber-cutting.jpg"
                  alt="Barber at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                {/* Fade edge into black */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              {/* Overlapping stat badge */}
              <div className="absolute -bottom-6 right-4 md:right-0 bg-brand-red px-6 py-4 z-10">
                <div className="text-3xl md:text-4xl font-bold text-black">{new Date().getFullYear() - SITE.established}+</div>
                <div className="text-xs text-black/70 font-bold tracking-widest uppercase">Years</div>
              </div>
            </div>

            {/* Right — text, vertically centered */}
            <div className="md:col-span-5 flex flex-col justify-center md:-ml-12 relative z-10 pt-8 md:pt-0">
              <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">About Us</span>
              <h2 className="font-headliner text-5xl md:text-6xl lg:text-7xl gradient-heading mb-8 leading-[0.9]">
                MORE THAN<br/>A HAIRCUT
              </h2>
              <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
                <p>
                  Modern Mancave is where you switch off, have a yarn, and walk out looking your best.
                </p>
                <p>
                  Since 2017, we&apos;ve been looking after clients across Griffith and the Riverina with quality cuts and genuine service. Whether you&apos;re after a clean fade, a sharp beard trim, or a proper hot towel shave — our barbers take the time to get it right.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-white">{LOCATIONS.length}</div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">Locations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{SITE.googleRating.count}+</div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">Reviews</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{SITE.googleRating.stars}</div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">Stars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR WORK — Bento gallery with stagger
      ═══════════════════════════════════════ */}
      <section className="relative bg-zinc-950 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header — edge-to-edge feel */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
              <h2 className="font-headliner gradient-heading text-5xl md:text-7xl lg:text-8xl leading-[0.85]">
                OUR WORK
              </h2>
            </div>
            <Link href="/prices" className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors border-b border-gray-600 hover:border-white pb-1 self-start md:self-auto">
              View Pricing →
            </Link>
          </div>

          {/* Bento gallery */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]" staggerDelay={0.06}>
            <StaggerItem className="relative col-span-2 row-span-2 overflow-hidden group">
              <Image src="/work/1.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group">
              <Image src="/work/2.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group">
              <Image src="/work/3.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group">
              <Image src="/work/4.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group">
              <Image src="/work/5.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative col-span-2 overflow-hidden group">
              <Image src="/work/6.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group">
              <Image src="/work/7.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative row-span-2 overflow-hidden group">
              <Image src="/work/8.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group">
              <Image src="/work/9.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group">
              <Image src="/work/10.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative col-span-2 overflow-hidden group">
              <Image src="/work/11.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group">
              <Image src="/work/12.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </StaggerItem>
          </StaggerContainer>

          <div className="text-center mt-12">
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-red transition-colors text-sm tracking-widest uppercase"
            >
              See more on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS — Featured quote + cards
      ═══════════════════════════════════════ */}
      <section className="relative bg-black py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />

        {/* Large decorative quote mark */}
        <div className="absolute top-12 left-6 md:left-16 text-[20rem] md:text-[30rem] font-serif text-brand-red/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">
          &ldquo;
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
            <div className="h-px flex-1 bg-zinc-800" />
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-brand-red text-sm">
                {Array(5).fill('★').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <span className="text-gray-500 text-xs">{SITE.googleRating.stars} on Google</span>
            </div>
          </div>

          {/* Featured testimonial — big, dramatic */}
          <div className="mb-16 md:mb-20">
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light text-white/90 leading-snug md:leading-tight max-w-4xl mb-8">
              &ldquo;{TESTIMONIALS[0].text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-brand-red" />
              <span className="text-sm text-gray-400 tracking-widest uppercase">{TESTIMONIALS[0].name}</span>
              <span className="text-xs text-gray-600">— {TESTIMONIALS[0].source}</span>
            </div>
          </div>

          {/* Remaining testimonials — compact row */}
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(1).map((review, i) => (
              <div
                key={i}
                className="card-hover border-l-2 border-brand-red/30 pl-6 py-4"
              >
                <p className="text-gray-300 text-lg leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 tracking-wide">{review.name}</span>
                  <span className="text-xs text-gray-700">— {review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MOBILE BARBER — Full-bleed image
      ═══════════════════════════════════════ */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[60vh]">
          {/* Image half — full bleed */}
          <div className="relative min-h-[50vh] md:min-h-full">
            <Image
              src="/mobile-trailer.png"
              alt="Modern Mancave Mobile Barber Studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:hidden" />
          </div>

          {/* Text half */}
          <div className="flex flex-col justify-center px-6 py-16 md:py-0 md:px-12 lg:px-20">
            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">On Location</span>
            <h2 className="font-headliner text-4xl md:text-5xl lg:text-6xl gradient-heading mb-6 leading-[0.9]">
              WE COME<br/>TO YOU
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Premium cuts at your home, office, or event. Our mobile barber studio brings the full shop experience to your doorstep.
            </p>
            <div>
              <Link href="/mobile-barber" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 inline-block">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING CTA — Bold, minimal
      ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Red accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-headliner text-6xl md:text-8xl lg:text-9xl gradient-heading leading-[0.85] mb-8">
            BOOK YOUR<br/>NEXT CUT
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
            Skip the wait. Lock in your appointment at any of our {LOCATIONS.length} Griffith locations.
          </p>
          <Link href="/booking" className="bg-brand-red hover:bg-red-700 text-white px-12 py-5 font-bold text-sm tracking-widest uppercase transition-all duration-300 inline-block">
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="bg-zinc-950 pt-1 pb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent mb-16" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link href="/">
                <Image src="/1.png" alt="Modern Mancave" width={112} height={32} className="h-8 w-auto mb-6" />
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">
                Premium grooming for men in Griffith and the Riverina since 2017.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Our Locations</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                {LOCATIONS.map((location) => (
                  <li key={location.name}>
                    <div className="font-semibold text-white text-xs tracking-widest uppercase">{location.name}</div>
                    <div>{location.address}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Navigate</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/team" className="hover:text-white transition">Our Team</Link></li>
                <li><Link href="/prices" className="hover:text-white transition">Prices</Link></li>
                <li><Link href="/booking" className="hover:text-white transition">Book Now</Link></li>
                <li><Link href="/mobile-barber" className="hover:text-white transition">Mobile Barber</Link></li>
                <li><Link href="/locations" className="hover:text-white transition">Locations</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <div>© {new Date().getFullYear()} Modern Mancave. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href={SOCIAL.instagram.url} target="_blank" className="hover:text-white transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href={SOCIAL.facebook.url} target="_blank" className="hover:text-white transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
