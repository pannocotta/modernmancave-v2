'use client'

import { useState } from 'react'
import { LOCATIONS } from '@/lib/config'
import { ArrowRightIcon } from '@/components/icons'
import { CTAAnchor, CTALink } from '@/components/CTA'

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
              <CTAAnchor
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </CTAAnchor>
              {location.hasBooking && (
                <CTALink href="/booking" variant="ghost">
                  <span>BOOK NOW</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </CTALink>
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
