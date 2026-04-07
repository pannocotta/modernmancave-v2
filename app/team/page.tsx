import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import AnimatedSection from '@/components/AnimatedSection'
import { SOCIAL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Our Team - Modern Mancave',
  description: 'Meet the skilled barbers at Modern Mancave Griffith. Expert cuts, fades, and grooming from our experienced team.',
}

export default function TeamPage() {

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section with Photo */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/stock/barber-cutting.jpg" alt="" fill className="object-cover grayscale opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Photo */}
            <div>
              <Image
                src="/tristan-hero.png"
                alt="Tristan - Owner & Master Barber"
                width={600}
                height={800}
                className="w-full h-auto"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-headliner gradient-heading leading-tight">
                MEET<br/>
                <span className="text-brand-red">TRISTAN</span>
              </h1>

              <div className="w-20 h-1 bg-brand-red"></div>

              <p className="text-xl md:text-2xl text-gray-300">
                Owner &amp; Master Barber
              </p>
              <p className="text-lg md:text-xl text-brand-red font-headliner tracking-wide italic">
                All designs for the modern man
              </p>

              <div className="space-y-4 text-gray-400 leading-relaxed text-base md:text-lg">
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
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-headliner gradient-heading text-center mb-4">THE TEAM</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Nick */}
            <AnimatedSection animation="slideUp" delay={0}>
              <div className="border border-zinc-800 bg-zinc-950 p-8 text-center group hover:border-brand-red/30 hover:scale-[1.02] transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-zinc-900 border-2 border-brand-red/20 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl font-headliner text-zinc-700">N</span>
                </div>
                <h3 className="text-2xl font-headliner text-white mb-1">NICK</h3>
                <p className="text-brand-red text-sm font-semibold tracking-wider mb-4">SENIOR BARBER</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Nick runs the private appointment space at our Banna Avenue location. It&apos;s a one-on-one premium grooming experience with a complimentary drink, hot towel treatment, and personalised service you won&apos;t find anywhere else.
                </p>
                <a
                  href={SOCIAL.nickInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:underline text-sm"
                >
                  {SOCIAL.nickInstagram.handle}
                </a>
              </div>
            </AnimatedSection>

            {/* Kevin */}
            <AnimatedSection animation="slideUp" delay={100}>
              <div className="border border-zinc-800 bg-zinc-950 p-8 text-center group hover:border-brand-red/30 hover:scale-[1.02] transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-zinc-900 border-2 border-brand-red/20 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl font-headliner text-zinc-700">K</span>
                </div>
                <h3 className="text-2xl font-headliner text-white mb-1">KEVIN</h3>
                <p className="text-brand-red text-sm font-semibold tracking-wider mb-4">SENIOR BARBER</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  With over a decade of experience from the Philippines, Kevin brings precision and artistry to every cut. His sharp eye for detail and calm, focused approach make him a client favourite. Classic tapers, skin fades, or something bold, Kevin delivers every time.
                </p>
                <a
                  href={SOCIAL.kevinInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:underline text-sm"
                >
                  {SOCIAL.kevinInstagram.handle}
                </a>
              </div>
            </AnimatedSection>

            {/* Delvin */}
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="border border-zinc-800 bg-zinc-950 p-8 text-center group hover:border-brand-red/30 hover:scale-[1.02] transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-zinc-900 border-2 border-brand-red/20 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl font-headliner text-zinc-700">D</span>
                </div>
                <h3 className="text-2xl font-headliner text-white mb-1">DELVIN</h3>
                <p className="text-brand-red text-sm font-semibold tracking-wider mb-4">SENIOR BARBER</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Delvin brings 10+ years of barbering expertise from the Philippines with a style that blends technical skill and genuine care. Known for his versatility and warm energy, he makes every client feel at home in the chair. From clean fades to textured crops, Delvin delivers consistently sharp results every time.
                </p>
                <a
                  href={SOCIAL.delvinInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:underline text-sm"
                >
                  {SOCIAL.delvinInstagram.handle}
                </a>
              </div>
            </AnimatedSection>

            {/* Leka */}
            <AnimatedSection animation="slideUp" delay={300}>
              <div className="border border-zinc-800 bg-zinc-950 p-8 text-center group hover:border-brand-red/30 hover:scale-[1.02] transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-zinc-900 border-2 border-brand-red/20 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl font-headliner text-zinc-700">L</span>
                </div>
                <h3 className="text-2xl font-headliner text-white mb-1">LEKA</h3>
                <p className="text-brand-red text-sm font-semibold tracking-wider mb-4">SENIOR BARBER</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Straight out of Tonga with over a decade in the game, Leka is a powerhouse behind the chair. His island roots bring a unique edge to his work. Bold, clean, and full of personality. Whether you&apos;re after a sharp lineup or a fresh new look, Leka&apos;s got the skills and the vibe to match. Walk-ins welcome.
                </p>
                <a
                  href={SOCIAL.lekaInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:underline text-sm"
                >
                  {SOCIAL.lekaInstagram.handle}
                </a>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

    </main>
  )
}
