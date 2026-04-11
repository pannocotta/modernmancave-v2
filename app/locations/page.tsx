import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import LocationCards from '@/components/LocationCards'

export const metadata: Metadata = {
  title: 'Our Locations - Modern Mancave',
  description: 'Find your nearest Modern Mancave barbershop in Griffith, NSW. Three locations plus a tattoo studio.',
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/stock/barbershop-tools.jpg" alt="" fill priority sizes="100vw" className="object-cover grayscale opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Find Us</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h1 className="font-headliner text-5xl md:text-7xl lg:text-8xl gradient-heading leading-[0.85] mb-4">OUR LOCATIONS</h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg">Four locations across Griffith. Walk-ins welcome at all stores.</p>
        </div>
      </section>

      {/* Location Cards + Map */}
      <section className="py-16 md:py-44 px-6 md:px-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <LocationCards />
        </div>
      </section>
    </main>
  )
}
