'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  '/teeth-whitening/teeth-before-after-1.jpg',
  '/teeth-whitening/teeth-before-after-2.jpg',
  '/teeth-whitening/teeth-before-after-3.jpg',
  '/teeth-whitening/teeth-before-after-4.jpg',
]

export default function TeethSlideshow() {
  const [index, setIndex] = useState(0)
  const total = SLIDES.length

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="w-full">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-black group">
        {SLIDES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Teeth whitening before and after ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-500 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase text-white">
          <span className="text-brand-red">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-gray-500"> / {String(total).padStart(2, '0')}</span>
        </div>

        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-brand-red backdrop-blur-sm text-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-brand-red backdrop-blur-sm text-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 transition-all ${
              i === index ? 'bg-brand-red w-8' : 'bg-zinc-700 hover:bg-zinc-500 w-4'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
