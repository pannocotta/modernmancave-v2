import Image from 'next/image'
import Header from '@/components/Header'
import { StaggerContainer, StaggerItem } from '@/components/StaggerReveal'
import { SERVICE_CATEGORIES, TEETH_WHITENING } from '@/lib/services'
import { SOCIAL, CONTACT } from '@/lib/config'
import { ArrowRightIcon } from '@/components/icons'
import { CTALink } from '@/components/CTA'
import TeethSlideshow from '@/components/TeethSlideshow'

export const metadata = {
  title: 'Barbershop Prices in Griffith NSW',
  description: 'Transparent pricing for haircuts, beard trims, fades, hot towel shaves, and teeth whitening at Modern Mancave Griffith. Walk-ins welcome at all three locations.',
  alternates: { canonical: '/prices' },
}

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* VIP Feature Hero */}
      <section className="relative bg-black pt-32 md:pt-48 pb-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />

        {/* Faint background metallic ghost type */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="font-headliner text-[20rem] md:text-[32rem] gradient-heading opacity-[0.04] leading-none whitespace-nowrap">VIP</span>
        </div>

        {/* Brand corner brackets */}
        <div className="absolute top-28 left-6 md:left-16 w-12 h-12 md:w-16 md:h-16 border-t border-l border-brand-red/30" />
        <div className="absolute top-28 right-6 md:right-16 w-12 h-12 md:w-16 md:h-16 border-t border-r border-brand-red/30" />
        <div className="absolute bottom-16 left-6 md:left-16 w-12 h-12 md:w-16 md:h-16 border-b border-l border-brand-red/30" />
        <div className="absolute bottom-16 right-6 md:right-16 w-12 h-12 md:w-16 md:h-16 border-b border-r border-brand-red/30" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 md:w-12 h-px bg-brand-red/50" />
            <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">The VIP Experience</span>
            <div className="w-8 md:w-12 h-px bg-brand-red/50" />
          </div>

          {/* Hero heading */}
          <h1 className="font-headliner text-6xl md:text-8xl lg:text-9xl gradient-heading leading-[0.85] mb-10">
            RESERVE<br />THE ROOM
          </h1>

          {/* Body */}
          <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            A private room. A reserved hour with Nick. The signature hot towel ritual to close. Your time begins the moment you walk in.
          </p>

          {/* Inclusions as 4-up horizontal grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-14 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-brand-red text-2xl md:text-3xl font-headliner mb-2">01</div>
              <div className="text-white text-xs md:text-sm font-bold tracking-wide mb-1">Private Room</div>
              <div className="text-gray-600 text-[10px] md:text-xs leading-snug">Closed-door booth</div>
            </div>
            <div className="text-center">
              <div className="text-brand-red text-2xl md:text-3xl font-headliner mb-2">02</div>
              <div className="text-white text-xs md:text-sm font-bold tracking-wide mb-1">Hot Towel Ritual</div>
              <div className="text-gray-600 text-[10px] md:text-xs leading-snug">Steamed finish</div>
            </div>
            <div className="text-center">
              <div className="text-brand-red text-2xl md:text-3xl font-headliner mb-2">03</div>
              <div className="text-white text-xs md:text-sm font-bold tracking-wide mb-1">Reserved Time</div>
              <div className="text-gray-600 text-[10px] md:text-xs leading-snug">No waiting</div>
            </div>
            <div className="text-center">
              <div className="text-brand-red text-2xl md:text-3xl font-headliner mb-2">04</div>
              <div className="text-white text-xs md:text-sm font-bold tracking-wide mb-1">With Nick</div>
              <div className="text-gray-600 text-[10px] md:text-xs leading-snug">Owner, Banna Ave</div>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-baseline gap-3">
              <span className="text-gray-600 text-xs tracking-[0.3em] uppercase">Walk-in price +</span>
              <span className="font-headliner text-5xl text-white">$20</span>
            </div>
            <CTALink href="/booking">RESERVE YOUR VIP</CTALink>
          </div>

          {/* Walk-in disclaimer line */}
          <div className="mt-20 pt-8 border-t border-zinc-900">
            <p className="text-gray-600 text-xs tracking-[0.2em] uppercase">
              — or walk in. <a href="#prices" className="text-gray-400 hover:text-white transition-colors">Standard prices below ↓</a>
            </p>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section id="prices" className="relative min-h-[60vh] flex items-end pb-20 md:pb-28 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/barbershop-tools.jpg" alt="" fill priority sizes="100vw" className="object-cover grayscale opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Services</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="font-headliner text-5xl md:text-7xl lg:text-8xl gradient-heading leading-[0.85] mb-4">OUR PRICES</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-lg">These are walk-in prices only. All bookings are surcharged and require full payment upfront.</p>
        </div>
      </section>

      {/* Good to Know Banner */}
      <div className="border-y border-zinc-800/50 py-4 md:py-5">
        <div className="flex justify-center items-center gap-3 md:gap-6 text-gray-400 text-[8px] md:text-[11px] tracking-[0.15em] uppercase px-4">
          <span>Walk-ins only</span>
          <span className="text-zinc-700">|</span>
          <span>All payment methods</span>
          <span className="text-zinc-700">|</span>
          <span>Bookings require full payment</span>
          <span className="text-zinc-700">|</span>
          <span>Surcharges for Sundays &amp; bookings</span>
        </div>
      </div>

      {/* Price Grid */}
      <section className="py-16 md:py-44 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <StaggerContainer className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {SERVICE_CATEGORIES.map((category) => (
              <StaggerItem key={category.name}>
                <div>
                  <h3 className="font-headliner text-xl md:text-2xl gradient-heading mb-6">{category.name}</h3>
                  <div className="space-y-4">
                    {category.services.map((service) => (
                      <div key={service.name} className="flex justify-between items-baseline gap-4">
                        <span className="text-gray-300 text-sm md:text-base">{service.name}</span>
                        <div className="flex-1 border-b border-dotted border-zinc-800 min-w-[40px] mb-1" />
                        <span className="text-white font-bold text-sm md:text-base">${service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Teeth Whitening Feature */}
      <section id="teeth-whitening" className="relative section-blend-dark py-16 md:py-44 bg-zinc-950 scroll-mt-24">
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Featured Service</span>
              <h2 className="font-headliner text-4xl md:text-5xl lg:text-6xl gradient-heading leading-[0.9] mb-4">TEETH WHITENING</h2>
              <div className="text-3xl md:text-4xl font-bold text-white mb-6">${TEETH_WHITENING.price}</div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                Professional teeth whitening to keep your smile as sharp as your cut. 2 hour session with visible results.
              </p>
              <p className="text-gray-500 text-xs mb-8">
                Available on <span className="text-white">{TEETH_WHITENING.availability}</span> only.
              </p>
              <CTALink href="/booking">BOOK NOW</CTALink>
            </div>

            {/* Before & After Slideshow */}
            <TeethSlideshow />
          </div>
        </div>
      </section>

      {/* Tattooing */}
      <section id="tattooing" className="py-16 md:py-44 bg-black scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Gallery */}
            <div className="grid grid-cols-2 gap-3 order-2 md:order-1">
              {[
                { src: '/tattoo/1.jpg', alt: 'Rose and mandala sleeve tattoo' },
                { src: '/tattoo/2.jpg', alt: 'Portrait tattoo' },
                { src: '/tattoo/3.jpg', alt: 'Medusa tattoo' },
                { src: '/tattoo/4.jpg', alt: 'Day of the dead tattoo' },
              ].map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Ink Studio</span>
              <h2 className="font-headliner text-4xl md:text-5xl lg:text-6xl gradient-heading leading-[0.9] mb-6">INK STUDIO</h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                All tattoo bookings go through Cameron directly. Get in touch to discuss your design, pricing, and availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={SOCIAL.tattooInstagram.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300">
                  <span>{SOCIAL.tattooInstagram.handle}</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={CONTACT.tattoo.phoneHref} className="text-gray-500 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors">
                  {CONTACT.tattoo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-32 md:py-40 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-headliner text-5xl md:text-7xl lg:text-8xl gradient-heading leading-[0.85] mb-6">
            BOOK YOUR<br />APPOINTMENT
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            All bookings require full payment. Spots are limited — secure yours today.
          </p>
          <CTALink href="/booking">BOOK NOW</CTALink>
        </div>
      </section>
    </main>
  )
}
