'use client'

import Link from 'next/link'

const barbers = [
  {
    id: '1',
    name: 'MARCO',
    specialty: 'Skin Fades & Modern Cuts',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
    rating: 4.9,
    cuts: 2847
  },
  {
    id: '2',
    name: 'TONY',
    specialty: 'Classic Cuts & Beard Styling',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80',
    rating: 4.8,
    cuts: 3192
  },
  {
    id: '3',
    name: 'ALEX',
    specialty: 'Creative Styles & Color',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80',
    rating: 4.9,
    cuts: 2156
  }
]

export default function BarberCarousel() {
  return (
    <div className="overflow-x-auto -mx-6 px-6 pb-6 hide-scrollbar">
      <div className="flex gap-4 min-w-max">
        {barbers.map((barber) => (
          <Link
            key={barber.id}
            href="/booking"
            className="group relative w-[280px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0"
          >
            <img
              src={barber.image}
              alt={barber.name}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-headliner mb-2">{barber.name}</h3>
              <p className="text-sm text-gray-300 mb-3">{barber.specialty}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-bold">{barber.rating}</span>
                </div>
                <div className="text-gray-400">{barber.cuts.toLocaleString()} cuts</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
