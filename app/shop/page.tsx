'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import FloatingBookButton from '@/components/FloatingBookButton'
import { products } from '@/lib/products'

export default function ShopPage() {
  const [currentImages, setCurrentImages] = useState<{ [key: string]: number }>({
    'tshirt-black': 0,
    'hat-black': 0,
    'hoodie-black': 0
  })

  const nextImage = (productId: string, imagesLength: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [productId]: (prev[productId] + 1) % imagesLength
    }))
  }

  const prevImage = (productId: string, imagesLength: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [productId]: prev[productId] === 0 ? imagesLength - 1 : prev[productId] - 1
    }))
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <FloatingBookButton />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 md:pb-28 pt-32 md:pt-40 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock/merch-bg.jpg"
            alt=""
            fill
            priority
            quality={80}
            className="object-cover grayscale opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none grain-overlay" />
        </div>

        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Shop</span>
          <h1 className="font-headliner gradient-heading text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] mb-6">
            OUR MERCH
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
            Available in-store at all locations.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-32 md:py-44">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map((product) => {
              const currentImageIndex = currentImages[product.id] || 0

              return (
                <div
                  key={product.id}
                  className="overflow-hidden transition-all duration-300 group"
                >
                  {/* Product Image Slideshow */}
                  <div className="relative aspect-square overflow-hidden bg-zinc-950 group/img">
                    <Image
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Navigation Arrows */}
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(product.id, product.images.length)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200"
                          aria-label="Previous image"
                        >
                          <span className="text-white text-sm font-bold">&#8249;</span>
                        </button>
                        <button
                          onClick={() => nextImage(product.id, product.images.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200"
                          aria-label="Next image"
                        >
                          <span className="text-white text-sm font-bold">&#8250;</span>
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {product.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImages(prev => ({ ...prev, [product.id]: idx }))}
                              className={`h-px transition-all ${
                                idx === currentImageIndex
                                  ? 'bg-brand-red w-6'
                                  : 'bg-white/40 w-3'
                              }`}
                              aria-label={`View image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="pt-5 pb-2">
                    <div className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                      {product.category}
                    </div>
                    <h3 className="font-headliner text-2xl md:text-3xl gradient-heading leading-tight mb-3">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-white">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* In-store strip */}
      <div className="relative border-y border-zinc-800/50 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-3 gap-x-4 md:gap-x-0">
            {['THREE LOCATIONS', 'GRIFFITH NSW', 'OPEN 7 DAYS', 'IN-STORE ONLY', 'EST. 2017'].map((item, i, arr) => (
              <div key={item} className="flex items-center">
                <span className="text-[10px] md:text-xs text-gray-500 tracking-[0.3em] uppercase font-bold">
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span className="hidden md:block ml-4 md:ml-6 lg:ml-8 w-px h-3 bg-zinc-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
