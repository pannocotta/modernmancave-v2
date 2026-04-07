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

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock/barbershop-tools.jpg"
            alt=""
            fill
            className="object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
        </div>

        <div className="relative z-20 w-full px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headliner gradient-heading mb-4 md:mb-6">
              OUR LOCATIONS
            </h1>
            <div className="w-16 md:w-20 h-1 bg-brand-red mx-auto mb-6 md:mb-8" />
            <p className="text-base md:text-xl text-gray-300">
              Visit any of our Griffith locations. Walk in anytime and get a top-tier cut.
            </p>
          </div>
        </div>
      </section>

      {/* Location Cards and Map */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <LocationCards />
        </div>
      </section>
    </main>
  )
}
