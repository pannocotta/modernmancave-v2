import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import { StaggerContainer, StaggerItem } from '@/components/StaggerReveal'
import { ArrowRightIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Mobile Barber - Modern Mancave',
  description: 'Bring the Modern Mancave experience to your home, office, or event. Fully equipped mobile barber studio in Griffith and the Riverina.',
}

const EVENTS = [
  { title: 'Weddings', description: 'Keep the bridesmaids and groomsmen looking sharp on the big day. Hair and makeup on location.' },
  { title: 'Corporate', description: 'On-site cuts and grooming for your team. Perfect for team building days or client events.' },
  { title: 'Community', description: 'Premium grooming for rural towns, youth programs, and local community initiatives.' },
  { title: 'Festivals', description: 'Birthday parties, bachelor parties, and celebrations. We bring the vibe and the cuts.' },
  { title: 'Markets', description: 'Set up at farmers markets and community events. Fresh cuts where the people are.' },
  { title: 'Charity', description: 'Support your fundraiser with premium grooming. We give back wherever we can.' },
]

const FEATURES = [
  'Professional barber stations',
  'Premium grooming products',
  'Climate-controlled interior',
  'Self-contained power and water',
  'Suitable for groups of any size',
  'Complete Modern Mancave experience',
]

const TRAINING_MODULES = [
  { title: 'Cutting Fundamentals', description: 'Clipper work, scissor technique, fades, tapers, and blending. The core skills every barber needs to master.' },
  { title: 'Beard Shaping & Hot Towel Shaves', description: 'Straight razor technique, beard design, and the full hot towel shave experience. Premium services that set you apart.' },
  { title: 'Client Experience & Business', description: 'Consultation skills, upselling premium services, building loyalty, and creating an atmosphere that keeps clients coming back.' },
  { title: 'On-Site At Your Location', description: 'We come to you. Your salon, your tools, your team. Training is tailored to your business and skill level.' },
]

export default function MobileBarberPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-20 md:pb-28 pt-32 md:pt-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/barber-cutting.jpg" alt="" fill priority sizes="100vw" className="object-cover grayscale opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Mobile Studio</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h1 className="font-headliner text-5xl md:text-7xl lg:text-8xl gradient-heading leading-[0.85] max-w-4xl mb-6">
            THE MANCAVE<br />COMES TO YOU
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            Hands-on barbering training for hairdressers, plus a fully equipped mobile studio serving Griffith and the surrounding towns.
          </p>
          <Link href="/mobile-barber-enquiry" className="group relative bg-brand-red text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 inline-block hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02]">
            <span className="relative z-10">BOOK OR HIRE THE STUDIO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </section>

      {/* Trailer Video + Features */}
      <section className="relative py-0 bg-black overflow-hidden">
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 items-center md:min-h-[80vh]">
            <div className="relative aspect-[16/9] md:aspect-auto md:absolute md:inset-y-0 md:left-0 md:w-1/2 overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/mobile-barber-video.mp4" type="video/mp4" />
              </video>
              {/* Mobile: blend top and bottom only */}
              <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
              {/* Desktop: blend right, top, bottom — left edge bleeds to screen edge */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
            </div>

            <div className="px-6 py-16 md:py-0 md:col-start-2 md:pl-12 lg:pl-16 md:pr-10">
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">The Studio</span>
              <h2 className="font-headliner text-4xl md:text-5xl lg:text-6xl gradient-heading leading-[0.9] mb-6">
                THE ULTIMATE<br />MOBILE EXPERIENCE
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                A fully self-contained barbershop on wheels. Climate-controlled, professionally equipped, and ready to set up anywhere. Your guests get the exact same premium experience as walking into one of our Griffith locations.
              </p>
              <ul className="space-y-4">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Barber Training */}
      <section className="py-16 md:py-44 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Education</span>
              <h2 className="font-headliner text-4xl md:text-5xl lg:text-6xl gradient-heading leading-[0.9] mb-8">
                BARBER<br />TRAINING
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
                We bring expert barbering education directly to hairdressing salons and businesses across the region. Whether you&apos;re upskilling your team or starting from scratch, our hands-on training covers everything from foundational techniques to advanced styling.
              </p>
              <Link href="/mobile-barber-enquiry" className="group flex items-center gap-2 text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300">
                <span>Enquire About Training</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-6">
              {TRAINING_MODULES.map((mod) => (
                <div key={mod.title} className="border-l-2 border-brand-red/30 pl-6 py-2">
                  <h3 className="text-sm font-bold text-white tracking-wide mb-2">{mod.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where We Go */}
      <section className="relative section-blend-dark py-16 md:py-44 bg-zinc-950">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">On Location</span>
            <h2 className="font-headliner text-4xl md:text-6xl gradient-heading">WHEREVER YOU NEED US</h2>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {EVENTS.map((event) => (
              <StaggerItem key={event.title}>
                <div className="text-center py-8">
                  <h3 className="font-headliner text-xl md:text-2xl text-white mb-3">{event.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      {/* CTA */}
      <section className="py-16 md:py-40 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-headliner text-4xl md:text-6xl lg:text-7xl gradient-heading leading-[0.85] mb-6">
            HIRE THE<br />MOBILE STUDIO
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Book or hire our mobile studio for your next event. Weddings, corporate days, bridal parties with hair and makeup at your location of choice — get in touch for a custom quote.
          </p>
          <Link href="/mobile-barber-enquiry" className="group relative bg-brand-red text-white px-12 py-5 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 inline-block hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02]">
            <span className="relative z-10">ENQUIRE NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </section>
    </main>
  )
}
