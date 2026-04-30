import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import { TESTIMONIALS, SOCIAL, SITE } from '@/lib/config'
import ServiceStrip from '@/components/ServiceStrip'
import WorkMarquee from '@/components/WorkMarquee'
import { CTALink } from '@/components/CTA'
import { ArrowRightIcon, InstagramIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Premium Barbershop in Griffith NSW',
  description: 'Modern Mancave — premium grooming for men in Griffith and the Riverina since 2017. Precision haircuts, beard trims, hot towel shaves. Three locations. Walk-ins welcome.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-50 bg-black"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
          <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none grain-overlay" />
        </div>

        {/* Corner accent brackets */}
        <div className="absolute top-20 left-6 md:top-28 md:left-12 z-30 w-12 h-12 md:w-16 md:h-16 border-t border-l border-brand-red/30" />
        <div className="absolute top-20 right-6 md:top-28 md:right-12 z-30 w-12 h-12 md:w-16 md:h-16 border-t border-r border-brand-red/30" />
        <div className="absolute bottom-20 left-6 md:bottom-28 md:left-12 z-30 w-12 h-12 md:w-16 md:h-16 border-b border-l border-brand-red/30" />
        <div className="absolute bottom-20 right-6 md:bottom-28 md:right-12 z-30 w-12 h-12 md:w-16 md:h-16 border-b border-r border-brand-red/30" />

        <div className="relative z-30 w-full flex flex-col items-center text-center px-6 py-[clamp(6rem,15vh,10rem)]">
          <h1 className="sr-only">Modern Mancave — Premium Barbershop in Griffith NSW</h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 md:w-12 h-px bg-brand-red/50" />
            <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">Open 7 Days — Est. 2017</span>
            <div className="w-8 md:w-12 h-px bg-brand-red/50" />
          </div>

          <div className="w-full mx-auto mb-8 max-w-[min(80vw,500px)]">
            <Image src="/hero-badge-new.webp" alt="Modern Mancave Barbershop Est 2017" width={1200} height={1200} priority quality={80} className="w-full h-auto drop-shadow-[0_0_60px_rgba(255,0,0,0.1)]" />
          </div>

          <div className="flex flex-wrap gap-5 items-center justify-center">
            <CTALink href="/booking">BOOK NOW</CTALink>
            <Link href="/prices" className="group flex items-center gap-2 text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300">
              <span>VIEW PRICES</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[9px] tracking-[0.5em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/50 scroll-line" />
        </div>
      </section>

      {/* Services strip */}
      <ServiceStrip />

      {/* About */}
      <section className="relative bg-black overflow-hidden py-16 md:py-44">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                <Image src="/stock/barber-cutting.jpg" alt="Barber at work" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_rgba(0,0,0,0.9)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="font-headliner text-5xl md:text-6xl lg:text-7xl gradient-heading mb-8 leading-[0.9]">
                RIVERINAS<br />PREMIUM<br />BARBERSHOP
              </h2>
              <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
                <p>Modern Mancave is more than a haircut.</p>
                <p>It&apos;s a place to switch off, have a laugh, enjoy a proper chat, and walk out looking and feeling your best.</p>
                <p>Since 2017, we&apos;ve built a reputation across Griffith and the Riverina for precision cuts, attention to detail, and genuine service. Clean fades, sharp beard work, traditional hot towel shaves — all delivered with care and consistency.</p>
                <p>A one-stop destination for the modern man. With a full-time tattoo artist operating from one of our locations, grooming and lifestyle under one roof.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="relative bg-zinc-950 py-32 md:py-44 overflow-hidden section-blend-dark">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Portfolio</span>
              <h2 className="font-headliner gradient-heading text-5xl md:text-7xl lg:text-8xl leading-[0.85]">OUR WORK</h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 max-w-md">
                From clean fades to razor-sharp lineups and detailed beard work — every cut is a craft. Here&apos;s a sample of what walks out our doors.
              </p>
              <Link href="/prices" className="group flex items-center gap-2 text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300 self-start">
                <span>View Pricing</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <WorkMarquee />

          <div className="text-center mt-16">
            <a href={SOCIAL.instagram.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-gray-500 hover:text-brand-red transition-colors text-xs tracking-[0.2em] uppercase">
              <InstagramIcon className="w-5 h-5" />
              <span>Follow and see more on Instagram</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Tattooing */}
      <section className="relative bg-black py-0 overflow-hidden">
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 items-center md:min-h-[80vh]">
            <div className="relative aspect-[16/9] md:aspect-auto md:absolute md:inset-y-0 md:left-0 md:w-1/2 overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/tattoo-loop.mp4" type="video/mp4" />
              </video>
              {/* Mobile: blend top and bottom only */}
              <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
              {/* Desktop: blend right, top, bottom — left edge bleeds to screen edge */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
            </div>

            <div className="px-6 py-16 md:py-0 md:col-start-2 md:pl-12 lg:pl-16 md:pr-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Ink Studio</span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>
              <h2 className="font-headliner text-5xl md:text-6xl lg:text-7xl gradient-heading mb-8 leading-[0.9]">TATTOOS<br />ON SITE</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Get inked at the cave. Our in-house tattoo studio delivers custom designs in a space you already know and trust. Walk-ins welcome or book your session.
              </p>
              <CTALink href="/prices#tattooing" variant="ghost">
                <span>GET IN TOUCH</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </CTALink>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-black py-20 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="absolute top-16 left-6 md:left-16 text-[10rem] md:text-[18rem] lg:text-[28rem] font-serif text-brand-red/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">&ldquo;</div>

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

          <div className="mb-20">
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-heading leading-snug md:leading-[1.15] max-w-4xl mb-10" style={{ animationDuration: '8s' }}>
              &ldquo;{TESTIMONIALS[0].text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-brand-red" />
              <span className="text-sm text-gray-400 tracking-widest uppercase">{TESTIMONIALS[0].name}</span>
              <span className="text-xs text-gray-600">— {TESTIMONIALS[0].source}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(1).map((review, i) => (
              <div key={i} className="card-hover border-l-2 border-brand-red/30 pl-8 py-6">
                <p className="text-gray-300 text-lg leading-relaxed mb-5 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 tracking-wide">{review.name}</span>
                  <span className="text-xs text-gray-700">— {review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative py-36 md:py-48 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">
          <h2 className="font-headliner text-5xl md:text-8xl lg:text-[10rem] gradient-heading leading-[0.8] mb-10">BOOK YOUR<br />NEXT CUT</h2>
          <p className="text-gray-500 text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Skip the wait. Lock in your appointment with Nick at our Banna Avenue location.
          </p>
          <CTALink href="/booking">BOOK NOW</CTALink>
        </div>
      </section>

    </main>
  )
}
