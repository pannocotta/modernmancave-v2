import type { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import ParallaxHero from '@/components/ParallaxHero'
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

      <ParallaxHero image="/stock/community.jpg" title="MAKING IMPACT<br/>BEYOND THE CHAIR" subtitle="Modern Mancave has always been about more than haircuts. From charity events and fundraisers to supporting local families and sponsoring community programs, giving back to communities locally and abroad is part of who we are." />

      {/* Social Proof Stats */}
      <section className="relative py-16 px-6 bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/community.jpg" alt="" fill className="object-cover grayscale opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="slideUp" delay={0}>
              <div className="text-center">
                <AnimatedCounter target={30} suffix="+" className="text-5xl md:text-6xl font-bold text-brand-red mb-3" />
                <div className="text-xl text-gray-300">Community Projects</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={100}>
              <div className="text-center">
                <AnimatedCounter target={150} suffix="+" className="text-5xl md:text-6xl font-bold text-brand-red mb-3" />
                <div className="text-xl text-gray-300">Hours of Community Work</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="text-center">
                <AnimatedCounter target={500} suffix="+" className="text-5xl md:text-6xl font-bold text-brand-red mb-3" />
                <div className="text-xl text-gray-300">Free Hair Cuts</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Charity Posts Grid */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {charityPosts.map((post, index) => (
              <StaggerItem key={index} className="aspect-square bg-zinc-900 rounded-lg overflow-hidden relative">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={post.image}
                    alt={`Community impact post ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={85}
                  />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  )
}
