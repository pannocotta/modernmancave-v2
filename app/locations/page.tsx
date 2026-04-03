'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { useState } from 'react'

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(0)
  const [expandedCard, setExpandedCard] = useState<number | null>(0)
  
  const locations = [
    {
      name: 'BANNA AVE',
      address: '224a Banna Ave, Griffith NSW 2680',
      hours: [
        'Mon-Wed, Fri: 8:00am - 5:30pm',
        'Thursday: 8:00am - 6:00pm',
        'Saturday: 7:00am - 4:00pm',
        'Sunday: 8:00am - 4:00pm'
      ],
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=224a+Banna+Ave+Griffith+NSW+2680',
      mapUrl: 'https://maps.google.com/maps?q=224a%20Banna%20Ave%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed'
    },
    {
      name: 'GRIFFITH CENTRAL',
      address: '10-12 Yambil Street, Griffith NSW 2680',
      hours: [
        'Mon-Wed, Fri: 8:00am - 5:30pm',
        'Thursday: 8:00am - 6:00pm',
        'Saturday: 7:00am - 4:00pm',
        'Sunday: 8:00am - 4:00pm'
      ],
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=10-12+Yambil+Street+Griffith+NSW+2680',
      mapUrl: 'https://maps.google.com/maps?q=10-12%20Yambil%20Street%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed'
    },
    {
      name: 'YAMBIL ST',
      address: 'Shop 1, 168 Yambil Street, Griffith NSW 2680',
      hours: [
        'Mon-Fri: 8:00am - 5:30pm',
        'Thursday: 8:00am - 6:00pm',
        'Saturday: 7:00am - 4:00pm',
        'Sunday: Closed'
      ],
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=168+Yambil+Street+Griffith+NSW+2680',
      mapUrl: 'https://maps.google.com/maps?q=168%20Yambil%20Street%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed'
    },
    {
      name: 'MODERN MANCAVE TATTOO STUDIO',
      address: '224a Banna Ave, Griffith NSW 2680',
      hours: [
        'Mon-Wed, Fri: 8:00am - 5:30pm',
        'Thursday: 8:00am - 6:00pm',
        'Saturday: 7:00am - 4:00pm',
        'Sunday: 8:00am - 4:00pm'
      ],
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=224a+Banna+Ave+Griffith+NSW+2680',
      mapUrl: 'https://maps.google.com/maps?q=224a%20Banna%20Ave%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed'
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/stock/barbershop-tools.jpg"
            alt=""
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
        </div>
        
        <div className="relative z-20 w-full px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headliner gradient-heading mb-4 md:mb-6">
              OUR LOCATIONS
            </h1>
            <div className="w-16 md:w-20 h-1 bg-[#ff0000] mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-xl text-gray-300">
              Visit any of our Griffith locations. Walk in anytime and get a top-tier cut.
            </p>
          </div>
        </div>
      </section>

      {/* Location Cards and Map */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[400px_1fr] gap-8">
            {/* Left: Location Cards */}
            <div className="space-y-6">
            {locations.map((location, index) => {
              const isExpanded = expandedCard === index
              return (
                <div 
                  key={index} 
                  onClick={() => {
                    setSelectedLocation(index)
                    // Toggle expansion
                    setExpandedCard(isExpanded ? null : index)
                  }}
                  className="bg-zinc-900 p-8 rounded-lg shadow-2xl hover:shadow-white/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-headliner text-2xl text-white">{location.name}</h3>
                    <svg 
                      className={`w-6 h-6 text-[#ff0000] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                
                <div className={`space-y-6 mb-8 ${isExpanded ? 'block' : 'hidden'}`}>
                  <div>
                    <div className="text-sm font-bold mb-2 text-gray-500 tracking-wider">ADDRESS</div>
                    <p className="text-white">{location.address}</p>
                  </div>

                  <div>
                    <div className="text-sm font-bold mb-2 text-gray-500 tracking-wider">HOURS</div>
                    <div className="text-white space-y-1 text-sm">
                      {location.hours.map((hour, i) => (
                        <div key={i}>{hour}</div>
                      ))}
                    </div>
                  </div>

                </div>

                <div className={`space-y-3 ${isExpanded ? 'block' : 'hidden'}`}>
                  <a 
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button w-full text-center block"
                  >
                    GET DIRECTIONS
                  </a>
                  
                  {location.name === 'BANNA' && (
                    <Link 
                      href="/booking"
                      className="cta-button w-full text-center block"
                    >
                      BOOK NOW
                    </Link>
                  )}
                </div>
              </div>
              )
            })}
            </div>

            {/* Right: Google Maps */}
            <div className="sticky top-24 h-fit hidden md:block">
              <div className="aspect-square rounded-lg overflow-hidden bg-zinc-900">
                <iframe
                  key={selectedLocation}
                  src={locations[selectedLocation].mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Mobile: Map below cards */}
            <div className="md:hidden mt-8">
              <div className="aspect-[16/9] rounded-lg overflow-hidden bg-zinc-900">
                <iframe
                  key={selectedLocation}
                  src={locations[selectedLocation].mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
