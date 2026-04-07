import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Mobile Barber - Modern Mancave',
  description: 'Bring the Modern Mancave experience to your home, office, or event. Fully equipped mobile barber studio in Griffith and the Riverina.',
}

export default function MobileBarberPage() {
  const events = [
    {
      title: 'Wedding Day',
      description: 'Keep the groom and groomsmen looking sharp on the big day.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="50" cy="30" rx="18" ry="20" transform="rotate(-5 50 30)"/>
          <path d="M32 48 Q30 50 28 55 L28 75 Q28 78 31 80 L69 80 Q72 78 72 75 L72 55 Q70 50 68 48" strokeWidth="3"/>
          <circle cx="45" cy="20" r="4"/>
          <circle cx="55" cy="22" r="4"/>
          <path d="M35 60 Q37 62 39 62 M61 62 Q63 62 65 60" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Community Programs',
      description: 'Bringing premium grooming to rural towns, youth programs, and local initiatives.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="30" cy="25" r="10" transform="rotate(2 30 25)"/>
          <path d="M15 70 Q15 50 30 45 Q45 50 45 70" strokeWidth="3"/>
          <circle cx="70" cy="28" r="9" transform="rotate(-3 70 28)"/>
          <path d="M56 70 Q56 52 70 48 Q84 52 84 70" strokeWidth="3"/>
          <line x1="15" y1="70" x2="84" y2="70" strokeWidth="3"/>
          <path d="M40 35 Q42 37 45 38" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Corporate Events',
      description: 'On-site cuts and grooming for team building or client appreciation.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 35 L20 75 Q20 78 23 80 L77 80 Q80 78 80 75 L80 35 Q80 32 77 30 L23 30 Q20 32 20 35 Z" strokeWidth="3"/>
          <path d="M35 30 L35 22 Q35 18 38 18 L62 18 Q65 18 65 22 L65 30" strokeWidth="3"/>
          <line x1="50" y1="50" x2="50" y2="65" strokeWidth="2"/>
          <line x1="43" y1="58" x2="57" y2="58" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Festivals & Parties',
      description: 'Birthday parties, bachelor parties, and celebrations made sharper.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 20 L55 35 L70 37 L60 47 L62 62 L50 55 L38 62 L40 47 L30 37 L45 35 Z" strokeWidth="3" transform="rotate(-8 50 45)"/>
          <line x1="48" y1="15" x2="48" y2="25" strokeWidth="2"/>
          <line x1="72" y1="32" x2="65" y2="38" strokeWidth="2"/>
          <line x1="78" y1="55" x2="68" y2="55" strokeWidth="2"/>
          <line x1="35" y1="38" x2="28" y2="32" strokeWidth="2"/>
          <line x1="32" y1="55" x2="22" y2="55" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Local Markets',
      description: 'Bring Modern Mancave to farmers markets and community events.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M30 25 L45 25 L50 35 L30 35 Z" strokeWidth="3" transform="rotate(-10 40 30)"/>
          <path d="M55 55 L70 55 L75 65 L55 65 Z" strokeWidth="3" transform="rotate(8 65 60)"/>
          <line x1="40" y1="35" x2="38" y2="50" strokeWidth="2.5"/>
          <line x1="65" y1="65" x2="67" y2="80" strokeWidth="2.5"/>
          <circle cx="40" cy="52" r="8" strokeWidth="2.5"/>
          <circle cx="67" cy="82" r="8" strokeWidth="2.5"/>
          <path d="M48 52 Q55 60 59 60" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Charity Events',
      description: 'Support fundraisers with premium grooming for your community.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 75 L28 53 Q22 47 22 38 Q22 28 30 25 Q38 22 45 30 L50 35 L55 30 Q62 22 70 25 Q78 28 78 38 Q78 47 72 53 Z" strokeWidth="3" transform="rotate(-3 50 50)"/>
          <path d="M45 42 Q48 45 50 48" strokeWidth="2"/>
          <path d="M55 42 Q52 45 50 48" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  const features = [
    'Professional barber stations',
    'Premium grooming products',
    'Climate-controlled interior',
    'Self-contained power and water',
    'Suitable for groups of any size',
    'Complete Modern Mancave experience wherever you are'
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center pt-24 md:pt-32 pb-6 md:pb-8">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/barber-cutting.jpg" alt="" fill className="object-cover grayscale opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headliner gradient-heading mb-6 leading-tight">
            THE MANCAVE<br/>
            COMES TO YOU
          </h1>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Bring the Modern Mancave experience to your home, office, or event. Our fully equipped mobile studio delivers expert cuts and grooming wherever you need it.
          </p>
          <Link href="#contact" className="cta-button">
            BOOK THE MOBILE STUDIO
          </Link>
        </div>
      </section>

      {/* Image + Features Section */}
      <section className="py-12 md:py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[58%_42%] gap-16 items-center">
            {/* Left: Image */}
            <div>
              <Image
                src="/mobile-trailer.png"
                alt="Modern Mancave Mobile Barber Studio"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right: Features */}
            <div>
              <h2 className="text-5xl md:text-6xl font-headliner gradient-heading mb-8">
                THE ULTIMATE MOBILE<br/>
                BARBER EXPERIENCE
              </h2>
              <div className="w-20 h-1 bg-brand-red mb-8"></div>
              <AnimatedSection>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-red mr-3 text-xl">✓</span>
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Barber Training Section */}
      <section className="py-24 md:py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-headliner gradient-heading mb-6">
                BARBER<br/>TRAINING
              </h2>
              <div className="w-20 h-1 bg-brand-red mb-8"></div>
              <p className="text-gray-300 text-lg mb-8">
                We bring expert barbering education directly to your hairdressing salon or business. Whether you&apos;re upskilling your team or starting from scratch, our hands-on training covers everything from foundational techniques to advanced styling.
              </p>
              <Link href="/mobile-barber-enquiry" className="cta-button">
                ENQUIRE ABOUT TRAINING
              </Link>
            </div>

            <div className="space-y-6">
              <div className="border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="font-headliner text-lg text-brand-red mb-2">CUTTING FUNDAMENTALS</h3>
                <p className="text-gray-400 text-sm">Clipper work, scissor technique, fades, tapers, and blending. The core skills every barber needs to master.</p>
              </div>
              <div className="border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="font-headliner text-lg text-brand-red mb-2">BEARD SHAPING & HOT TOWEL SHAVES</h3>
                <p className="text-gray-400 text-sm">Straight razor technique, beard design, and the full hot towel shave experience. Premium services that set you apart.</p>
              </div>
              <div className="border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="font-headliner text-lg text-brand-red mb-2">CLIENT EXPERIENCE & BUSINESS</h3>
                <p className="text-gray-400 text-sm">Consultation skills, upselling premium services, building loyalty, and creating an atmosphere that keeps clients coming back.</p>
              </div>
              <div className="border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="font-headliner text-lg text-brand-red mb-2">ON-SITE AT YOUR LOCATION</h3>
                <p className="text-gray-400 text-sm">We come to you. Your hairdressing salon, your tools, your team. Training is tailored to your business and skill level. Groups of any size welcome.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-24 md:py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headliner gradient-heading text-center mb-16">
            WHEREVER YOU NEED US
          </h2>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-black p-8 rounded-lg hover:bg-zinc-900 transition-colors text-center">
                  <div className="text-white mb-4 flex justify-center">{event.icon}</div>
                  <h3 className="font-headliner text-xl mb-4 text-brand-red">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-brand-red">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-headliner mb-6 text-black">
            BOOK YOUR NEXT EVENT
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch today to discuss your event and secure a custom quote for the mobile barber studio.
          </p>
          <Link
            href="/mobile-barber-enquiry"
            className="inline-block bg-black text-white px-8 py-4 text-lg font-bold tracking-wider hover:bg-zinc-900 transition-colors"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </section>
    </main>
  )
}
