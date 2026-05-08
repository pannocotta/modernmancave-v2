import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import MeetTristanHero from '@/components/MeetTristanHero'
import { StaggerContainer, StaggerItem } from '@/components/StaggerReveal'
import { TEAM } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Our Specialists — Expert Barbers in Griffith',
  description: 'Meet the specialists at Modern Mancave Griffith. Nik, Leka, and the team — expert cuts, fades, and grooming with years of experience.',
  alternates: { canonical: '/team' },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <MeetTristanHero />

      {/* The Team */}
      <section className="py-32 md:py-44 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Barbers At The Cave</span>
            <h2 className="font-headliner text-5xl md:text-7xl gradient-heading">OUR SPECIALISTS</h2>
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

                  {/* Name + location + origin */}
                  <h3 className="text-xl font-headliner text-white tracking-wider mb-1">{member.name}</h3>
                  <div className="w-8 h-px bg-brand-red/40 mx-auto my-3" />
                  <p className="text-brand-red/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{member.title}</p>
                  <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase mb-6 flex-1">From {member.origin}</p>

                  {/* Instagram */}
                  {'instagram' in member && member.instagram && (
                    <a
                      href={member.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand-red text-xs tracking-wide transition-colors"
                    >
                      {member.instagram.handle}
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  )
}
