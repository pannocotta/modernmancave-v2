'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/config'

export default function LocationCards() {
  const [selectedLocation, setSelectedLocation] = useState(0)
  const [expandedCard, setExpandedCard] = useState<number | null>(0)

  return (
    <div className="grid md:grid-cols-[400px_1fr] gap-8">
      {/* Left: Location Cards */}
      <div className="space-y-6">
        {LOCATIONS.map((location, index) => {
          const isExpanded = expandedCard === index
          return (
            <div
              key={index}
              onClick={() => {
                setSelectedLocation(index)
                setExpandedCard(isExpanded ? null : index)
              }}
              className="bg-zinc-900 p-8 rounded-lg shadow-2xl hover:shadow-white/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headliner text-2xl text-white">{location.name}</h3>
                <svg
                  className={`w-6 h-6 text-brand-red transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
                {location.hasBooking && (
                  <Link href="/booking" className="cta-button w-full text-center block">
                    BOOK NOW
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Right: Google Maps (desktop) */}
      <div className="sticky top-24 h-fit hidden md:block">
        <div className="aspect-square rounded-lg overflow-hidden bg-zinc-900">
          <iframe
            key={selectedLocation}
            src={LOCATIONS[selectedLocation].mapUrl}
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
            key={`mobile-${selectedLocation}`}
            src={LOCATIONS[selectedLocation].mapUrl}
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
  )
}
