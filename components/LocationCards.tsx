'use client'

import { useState } from 'react'
import { LOCATIONS } from '@/lib/config'
import { ArrowRightIcon } from '@/components/icons'
import Link from 'next/link'

export default function LocationCards() {
  const [selected, setSelected] = useState(0)
  const location = LOCATIONS[selected]

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-0 md:border-b border-zinc-800 mb-12 md:mb-16">
        {LOCATIONS.map((loc, i) => (
          <button
            key={loc.name}
            onClick={() => setSelected(i)}
            className={`px-5 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border md:border-0 rounded-full md:rounded-none ${
              selected === i
                ? 'text-white md:border-b-2 md:border-brand-red border-brand-red/40 bg-brand-red/10 md:bg-transparent'
                : 'text-gray-500 hover:text-gray-300 border-zinc-800 md:border-b-2 md:border-transparent'
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* Selected Location Details */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Left — Info */}
        <div>
          <h2 className="font-headliner text-4xl md:text-5xl gradient-heading leading-[0.9] mb-8">{location.name}</h2>

          <div className="space-y-8">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 block mb-2">Address</span>
              <p className="text-gray-300 text-base">{location.address}</p>
            </div>

            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 block mb-3">Hours</span>
              <div className="space-y-2">
                {location.hours.map((hour, i) => (
                  <div key={i} className="text-gray-300 text-sm">{hour}</div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-brand-red text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 inline-flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02]"
              >
                <span className="relative z-10">GET DIRECTIONS</span>
                <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              {location.hasBooking && (
                <Link
                  href="/booking"
                  className="group border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>BOOK NOW</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right — Map */}
        <div className="aspect-square md:aspect-auto md:min-h-[500px] rounded-sm overflow-hidden bg-zinc-900">
          <iframe
            key={selected}
            src={location.mapUrl}
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
