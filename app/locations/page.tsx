import type { Metadata } from 'next'
import Header from '@/components/Header'
import LocationCards from '@/components/LocationCards'
import ParallaxHero from '@/components/ParallaxHero'

export const metadata: Metadata = {
  title: 'Our Locations - Modern Mancave',
  description: 'Find your nearest Modern Mancave barbershop in Griffith, NSW. Three locations plus a tattoo studio.',
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <ParallaxHero image="/stock/barbershop-tools.jpg" title="OUR LOCATIONS" subtitle="Four locations across Griffith. Walk-ins welcome." />

      {/* Location Cards and Map */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <LocationCards />
        </div>
      </section>
    </main>
  )
}
