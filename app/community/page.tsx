import type { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedCounter from '@/components/AnimatedCounter'
import { StaggerContainer, StaggerItem } from '@/components/StaggerReveal'

export const metadata: Metadata = {
  title: 'Community - Modern Mancave',
  description: 'Modern Mancave giving back to Griffith and beyond. 30+ community projects, 500+ free haircuts since 2017.',
}

const charityPosts = [
  { url: 'https://www.instagram.com/p/BeSUyEvD8Rl/', image: '/charity/1.jpg' },
  { url: 'https://www.instagram.com/p/Bcy1vizDK7I/', image: '/charity/2.jpg' },
  { url: 'https://www.instagram.com/p/BcyfZk7Dcxq/', image: '/charity/3.jpg' },
  { url: 'https://www.instagram.com/p/BctzxE1DPBm/', image: '/charity/4.jpg' },
  { url: 'https://www.instagram.com/p/BfNqcjyFBEV/', image: '/charity/5.jpg' },
  { url: 'https://www.instagram.com/p/BnQtg2MBbfh/', image: '/charity/6.jpg' },
  { url: 'https://www.instagram.com/p/Bn0tadZBrTS/', image: '/charity/7.jpg' },
  { url: 'https://www.instagram.com/p/BpY5mQjhuQA/', image: '/charity/8.jpg' },
  { url: 'https://www.instagram.com/p/BtibYrVgJdr/', image: '/charity/9.jpg' },
  { url: 'https://www.instagram.com/p/BzQFu3dH8yc/', image: '/charity/10.jpg' },
  { url: 'https://www.instagram.com/p/B5mn2M1HPhh/', image: '/charity/11.jpg' },
  { url: 'https://www.instagram.com/p/CEq6iTIjrvt/', image: '/charity/12.jpg' },
  { url: 'https://www.instagram.com/p/CMRa-9WHaFH/', image: '/charity/13.jpg' },
  { url: 'https://www.instagram.com/p/CeqaDfBvFrB/', image: '/charity/14.jpg' },
  { url: 'https://www.instagram.com/p/CftLuCEPgeY/', image: '/charity/15.jpg' },
  { url: 'https://www.instagram.com/p/C7lw1NOPv4k/', image: '/charity/16.jpg' },
  { url: 'https://www.instagram.com/p/DUxWCTzkyFx/', image: '/charity/17.jpg' },
  { url: 'https://www.instagram.com/p/CKOJUX9HXFQ/', image: '/charity/18.jpg' },
  { url: 'https://www.instagram.com/p/CE9GdG5HMKA/', image: '/charity/19.jpg' },
  { url: 'https://www.instagram.com/p/CEbdo4fHRUt/', image: '/charity/20.jpg' },
  { url: 'https://www.instagram.com/p/B5XLajkn83f/', image: '/charity/21.jpg' },
  { url: 'https://www.instagram.com/p/BsNbhn8F9cg/', image: '/charity/22.jpg' },
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero — bold statement, not just a title */}
      <section className="relative min-h-[80vh] flex items-end pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/community.jpg" alt="" fill className="object-cover grayscale opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Community</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h1 className="font-headliner text-5xl md:text-7xl lg:text-8xl gradient-heading leading-[0.85] max-w-4xl mb-6">
            MOST BARBERSHOPS<br />CUT HAIR.<br />WE GIVE BACK.
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            Since 2017, Modern Mancave has been part of the fabric of Griffith. Charity events, free haircuts for those in need, fundraisers, and community sponsorships — giving back isn&apos;t something we do on the side. It&apos;s who we are.
          </p>
        </div>
      </section>

      {/* Impact Stats — monumental */}
      <section className="py-24 md:py-32 border-y border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <AnimatedCounter target={30} suffix="+" className="font-headliner text-5xl md:text-7xl lg:text-8xl gradient-heading leading-none" />
              <div className="text-[10px] md:text-xs text-gray-500 tracking-[0.3em] uppercase mt-3">Community Projects</div>
            </div>
            <div className="text-center">
              <AnimatedCounter target={150} suffix="+" className="font-headliner text-5xl md:text-7xl lg:text-8xl gradient-heading leading-none" />
              <div className="text-[10px] md:text-xs text-gray-500 tracking-[0.3em] uppercase mt-3">Volunteer Hours</div>
            </div>
            <div className="text-center">
              <AnimatedCounter target={500} suffix="+" className="font-headliner text-5xl md:text-7xl lg:text-8xl gradient-heading leading-none" />
              <div className="text-[10px] md:text-xs text-gray-500 tracking-[0.3em] uppercase mt-3">Free Haircuts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact story + featured image */}
      <section className="py-32 md:py-44">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Featured image — pulled from the grid */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image src="/charity/17.jpg" alt="Modern Mancave community work" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 shadow-[inset_0_0_60px_30px_rgba(0,0,0,0.7)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white text-sm md:text-base font-bold">500+ free haircuts</p>
                <p className="text-gray-400 text-xs">For those in need — locally and abroad</p>
              </div>
            </div>

            {/* Story text */}
            <div>
              <h2 className="font-headliner text-4xl md:text-5xl lg:text-6xl gradient-heading leading-[0.9] mb-8">
                IT STARTED<br />WITH ONE<br />FREE CUT
              </h2>
              <div className="space-y-5 text-gray-400 text-sm md:text-base leading-relaxed">
                <p>
                  When Tristan opened Modern Mancave in 2017, the first thing he did was offer free haircuts to anyone who couldn&apos;t afford one. Not as a promotion — because he&apos;d been there himself and knew what it meant to feel looked after.
                </p>
                <p>
                  That one gesture became a philosophy. Today, the team regularly runs charity events, sponsors local families, supports school programs, and has given hundreds of free cuts to people in need — both in Griffith and overseas in the Philippines.
                </p>
                <p>
                  No other barbershop in the region comes close to this level of community involvement. It&apos;s not marketing. It&apos;s the reason Modern Mancave exists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-32 md:py-44 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">In Action</span>
            <h2 className="font-headliner text-4xl md:text-6xl gradient-heading">THE IMPACT</h2>
          </div>

          <StaggerContainer staggerDelay={0.04} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {charityPosts.map((post, index) => (
              <StaggerItem key={index} className="relative aspect-square overflow-hidden rounded-sm group">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <Image
                    src={post.image}
                    alt={`Community impact ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-headliner text-4xl md:text-6xl lg:text-7xl gradient-heading leading-[0.85] mb-6">
            WANT US AT YOUR<br />NEXT EVENT?
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            We bring the full barbershop experience to community events, fundraisers, and corporate functions across the Riverina.
          </p>
          <Link href="/mobile-barber-enquiry" className="group relative bg-brand-red text-white px-12 py-5 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 inline-block hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02]">
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </section>
    </main>
  )
}
