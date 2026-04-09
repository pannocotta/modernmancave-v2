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
          HERO
          Fix #1: Tighter heading, new tagline
          Fix #2: Badge centred right, larger
          Fix #3: Premium rounded buttons
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-end bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg"
            alt=""
            fill
            priority
            quality={80}
            className="object-cover opacity-40 animate-ken-burns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
          <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none grain-overlay" />
        </div>

        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            {/* Left — tighter heading */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="mb-5">
                <span className="inline-block text-brand-red text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Est. 2017 — Griffith, NSW</span>
              </div>
              <h1 className="font-headliner text-[clamp(4rem,13vw,10rem)] leading-[0.78] tracking-tight mb-5">
                <span className="block gradient-heading">BEST BARBERS</span>
                <span className="block gradient-heading">IN TOWN</span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-md mb-10 leading-relaxed">
                Premium barbershop. Three locations across Griffith.
                Walk in sharp, walk out sharper.
              </p>
              <div className="flex flex-wrap gap-5 items-center">
                <Link href="/booking" className="group relative bg-brand-red text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02]">
                  <span className="relative z-10">BOOK NOW</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link href="/prices" className="group flex items-center gap-2 text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300">
                  <span>VIEW PRICES</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Right — badge centred & larger */}
            <div className="hidden md:flex md:col-span-5 lg:col-span-4 items-center justify-center">
              <div className="w-64 lg:w-72 xl:w-80 opacity-90">
                <Image
                  src="/hero-badge.png"
                  alt="Modern Mancave Barbershop"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-auto drop-shadow-[0_0_40px_rgba(255,0,0,0.15)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[9px] tracking-[0.5em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/50 scroll-line" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE — Fix #4: premium feel
      ═══════════════════════════════════════ */}
      <Marquee />

      {/* ═══════════════════════════════════════
          ABOUT
          Fix #5: Image blends to black on LEFT
          Fix #6: 9+ years repositioned, integrated
          Fix #10: More vertical breathing room
      ═══════════════════════════════════════ */}
      <section className="relative bg-black overflow-hidden py-32 md:py-44">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-6 items-center">
            {/* Left — large image with LEFT-side fade */}
            <div className="md:col-span-6 relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/stock/barber-cutting.jpg"
                  alt="Barber at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Blend into black on LEFT side */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/90 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </div>

            {/* Right — text + integrated years stat */}
            <div className="md:col-span-6 flex flex-col justify-center md:pl-8 lg:pl-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">About Us</span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>
              <h2 className="font-headliner text-5xl md:text-6xl lg:text-7xl gradient-heading mb-8 leading-[0.9]">
                MORE THAN<br/>A HAIRCUT
              </h2>
              <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed mb-10">
                <p>
                  Modern Mancave is where you switch off, have a yarn, and walk out looking your best.
                </p>
                <p>
                  Since 2017, we&apos;ve been looking after clients across Griffith and the Riverina with quality cuts and genuine service. Whether you&apos;re after a clean fade, a sharp beard trim, or a proper hot towel shave — our barbers take the time to get it right.
                </p>
              </div>
              {/* Stats row — years stat integrated here, not floating */}
              <div className="flex gap-10 pt-8 border-t border-zinc-800/50">
                <div>
                  <div className="text-3xl font-bold text-white">{new Date().getFullYear() - SITE.established}+</div>
                  <div className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-1">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{LOCATIONS.length}</div>
                  <div className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-1">Locations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{SITE.googleRating.count}+</div>
                  <div className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-1">Reviews</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{SITE.googleRating.stars}</div>
                  <div className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-1">Google Stars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR WORK — Fix #8: section heading + description for context
          Fix #10: More breathing room
      ═══════════════════════════════════════ */}
      <section className="relative bg-zinc-950 py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section header */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Portfolio</span>
              <h2 className="font-headliner gradient-heading text-5xl md:text-7xl lg:text-8xl leading-[0.85]">
                OUR WORK
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 max-w-md">
                From clean fades to razor-sharp lineups and detailed beard work — every cut is a craft. Here&apos;s a sample of what walks out our doors.
              </p>
              <Link href="/prices" className="group flex items-center gap-2 text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300 self-start">
                <span>View Pricing</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Bento gallery */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[260px]" staggerDelay={0.06}>
            <StaggerItem className="relative col-span-2 row-span-2 overflow-hidden group rounded-sm">
              <Image src="/work/1.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group rounded-sm">
              <Image src="/work/2.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group rounded-sm">
              <Image src="/work/3.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group rounded-sm">
              <Image src="/work/4.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group rounded-sm">
              <Image src="/work/5.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative col-span-2 overflow-hidden group rounded-sm">
              <Image src="/work/6.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group rounded-sm">
              <Image src="/work/7.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative row-span-2 overflow-hidden group rounded-sm">
              <Image src="/work/8.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group rounded-sm">
              <Image src="/work/9.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group rounded-sm">
              <Image src="/work/10.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative col-span-2 overflow-hidden group rounded-sm">
              <Image src="/work/11.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
            <StaggerItem className="relative overflow-hidden group rounded-sm">
              <Image src="/work/12.jpg" alt="Modern Mancave Work" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </StaggerItem>
          </StaggerContainer>

          <div className="text-center mt-16">
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-gray-500 hover:text-brand-red transition-colors text-xs tracking-[0.2em] uppercase"
            >
              <span>See more on Instagram</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
          Fix #7: Use Poppins (default sans) for featured quote, not headliner
          Fix #10: More spacing
      ═══════════════════════════════════════ */}
      <section className="relative bg-black py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />

        <div className="absolute top-16 left-6 md:left-16 text-[18rem] md:text-[28rem] font-serif text-brand-red/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">
          &ldquo;
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-4 mb-20">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Testimonials</span>
            <div className="h-px flex-1 bg-zinc-800" />
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-brand-red text-sm">
                {Array(5).fill('★').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <span className="text-gray-500 text-xs">{SITE.googleRating.stars} on Google</span>
            </div>
          </div>

          {/* Featured testimonial — Poppins (sans), not headliner */}
          <div className="mb-20">
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light italic text-white/90 leading-snug md:leading-[1.2] max-w-4xl mb-10">
              &ldquo;{TESTIMONIALS[0].text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-brand-red" />
              <span className="text-sm text-gray-400 tracking-widest uppercase">{TESTIMONIALS[0].name}</span>
              <span className="text-xs text-gray-600">— {TESTIMONIALS[0].source}</span>
            </div>
          </div>

          {/* Remaining testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(1).map((review, i) => (
              <div
                key={i}
                className="card-hover border-l-2 border-brand-red/30 pl-8 py-6"
              >
                <p className="text-gray-300 text-lg leading-relaxed mb-5 italic">
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
          MOBILE BARBER
          Fix #9: Image contained properly, not cut off
          Fix #10: Breathing room
      ═══════════════════════════════════════ */}
      <section className="relative bg-zinc-950 py-32 md:py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:min-h-[80vh] md:py-24">
            {/* Image — contained with padding, not cut off */}
            <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/mobile-trailer.png"
                alt="Modern Mancave Mobile Barber Studio"
                fill
                className="object-contain md:object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="md:pl-4 lg:pl-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">On Location</span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>
              <h2 className="font-headliner text-5xl md:text-6xl lg:text-7xl gradient-heading mb-8 leading-[0.9]">
                WE COME<br/>TO YOU
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Premium cuts at your home, office, or event. Our mobile barber studio brings the full shop experience to your doorstep. Perfect for groups, functions, or corporate bookings.
              </p>
              <Link href="/mobile-barber" className="group relative border border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center gap-3 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <span>LEARN MORE</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING CTA — Fix #3 + #10
      ═══════════════════════════════════════ */}
      <section className="relative py-36 md:py-48 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">
          <h2 className="font-headliner text-6xl md:text-8xl lg:text-[10rem] gradient-heading leading-[0.8] mb-10">
            BOOK YOUR<br/>NEXT CUT
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Skip the wait. Lock in your appointment at any of our {LOCATIONS.length} Griffith locations.
          </p>
          <Link href="/booking" className="group relative bg-brand-red text-white px-14 py-5 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 inline-block hover:shadow-[0_0_40px_rgba(255,0,0,0.3)] hover:scale-[1.02]">
            <span className="relative z-10">BOOK NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER — Fix #10
      ═══════════════════════════════════════ */}
      <footer className="bg-zinc-950 pt-1 pb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent mb-20" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <Link href="/">
                <Image src="/1.png" alt="Modern Mancave" width={112} height={32} className="h-8 w-auto mb-6" />
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">
                Premium grooming for men in Griffith and the Riverina since 2017.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Our Locations</h3>
              <ul className="space-y-5 text-sm text-gray-500">
                {LOCATIONS.map((location) => (
                  <li key={location.name}>
                    <div className="font-semibold text-white text-[10px] tracking-[0.2em] uppercase">{location.name}</div>
                    <div className="mt-0.5">{location.address}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Navigate</h3>
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
