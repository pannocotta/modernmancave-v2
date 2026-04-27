import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import { StaggerContainer, StaggerItem } from '@/components/StaggerReveal'
import { TEAM } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Our Team — Expert Barbers in Griffith',
  description: 'Meet the skilled barbers at Modern Mancave Griffith. Nick, Leka, and the team — expert cuts, fades, and grooming with years of experience.',
  alternates: { canonical: '/team' },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Tristan Hero */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/barber-cutting.jpg" alt="" fill priority sizes="100vw" className="object-cover grayscale opacity-30" />
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
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
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


              <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
                <p>
                  I got into barbering in an unusual way. In 2015, I was teaching myself to cut hair at a women&apos;s salon in Griffith. Being a young guy in that space raised a few eyebrows, but I loved it, learned fast, and slowly proved I knew my stuff.
                </p>
                <p>
                  By 2017, I opened Modern Mancave with one goal: a space where men could actually feel comfortable looking after themselves. Classic cuts and fades came first, then facials, waxing, teeth whitening, and manicures, all designed for the modern man. I even took it on the road with a mobile barbershop, bringing quality cuts to small towns and helping local stylists sharpen their skills.
                </p>
                <p>
                  Now we have three locations in Griffith and a tattoo studio. Along the way, I&apos;ve sponsored barbers from the Philippines and given free haircuts to people in need here and abroad. At the heart of it, it&apos;s always been the same: build community, help others, and give every guy who walks in a proper grooming experience that actually makes him feel good.
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

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center group h-full flex flex-col">
                  {/* Photo with bottom blend */}
                  <div className="relative mb-8 aspect-[3/4] overflow-hidden rounded-sm">
                    <Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>

                  {/* Name + title */}
                  <h3 className="text-xl font-headliner text-white tracking-wider mb-1">{member.name}</h3>
                  <div className="w-8 h-px bg-brand-red/40 mx-auto my-3" />
                  <p className="text-brand-red/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">{member.title}</p>

                  {/* Bio */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{member.bio}</p>

                  {/* Instagram */}
                  <a
                    href={member.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand-red text-xs tracking-wide transition-colors"
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
