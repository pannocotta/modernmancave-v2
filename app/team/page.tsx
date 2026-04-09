import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import { StaggerContainer, StaggerItem } from '@/components/StaggerReveal'
import { TEAM } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Our Team - Modern Mancave',
  description: 'Meet the skilled barbers at Modern Mancave Griffith. Expert cuts, fades, and grooming from our experienced team.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Tristan Hero */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/barber-cutting.jpg" alt="" fill className="object-cover grayscale opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <Image
                src="/tristan-hero.png"
                alt="Tristan — Owner & Master Barber"
                width={600}
                height={800}
                className="w-full h-auto"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                }}
              />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">The Founder</span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>

              <h1 className="font-headliner text-5xl md:text-7xl gradient-heading leading-[0.9] mb-2">
                MEET<br />TRISTAN
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-2">Owner &amp; Master Barber</p>
              <p className="text-base md:text-lg text-brand-red/80 font-headliner tracking-wide italic mb-8">All designs for the modern man</p>

              <div className="space-y-5 text-gray-400 leading-relaxed text-base md:text-lg">
                <p>
                  I got into barbering in an unusual way. In 2015, I was teaching myself to cut hair at a women&apos;s salon in Griffith. Being a young guy in that space raised a few eyebrows, but I loved it, learned fast, and slowly proved I knew my stuff.
                </p>
                <p>
                  By 2017, I opened Modern Mancave with one goal: a space where men could actually feel comfortable looking after themselves. Classic cuts and fades came first, then facials, waxing, teeth whitening, and manicures, all designed for the modern man. I even took it on the road with a mobile barbershop, bringing quality cuts to small towns and helping local stylists sharpen their skills.
                </p>
                <p>
                  Now we have two locations in Griffith and a tattoo studio in the works. Along the way, I&apos;ve sponsored barbers from the Philippines and given free haircuts to people in need here and abroad. At the heart of it, it&apos;s always been the same: build community, help others, and give every guy who walks in a proper grooming experience that actually makes him feel good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-32 md:py-44 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Our Barbers</span>
            <h2 className="font-headliner text-5xl md:text-7xl gradient-heading">THE TEAM</h2>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <div className="border border-zinc-800 bg-zinc-950/50 p-8 text-center hover:border-brand-red/30 transition-all duration-300 h-full flex flex-col">
                  {/* Initial avatar */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full border border-zinc-700 flex items-center justify-center">
                    <span className="text-4xl font-headliner gradient-heading">{member.initial}</span>
                  </div>

                  <h3 className="text-2xl font-headliner text-white mb-1">{member.name}</h3>
                  <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5">{member.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{member.bio}</p>

                  <a
                    href={member.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-brand-red text-xs tracking-wide transition-colors"
                  >
                    {member.instagram.handle}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  )
}
