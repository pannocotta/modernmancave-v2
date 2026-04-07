'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  category: string
}

const products: Product[] = [
  {
    id: 'tshirt-black',
    name: 'Modern Mancave T-Shirt',
    price: 35.00,
    images: ['/tshirt-1.jpg', '/tshirt-2.jpg'],
    category: 'Apparel'
  },
  {
    id: 'hat-black',
    name: 'Modern Mancave Snapback',
    price: 25.00,
    images: ['/Hat-1.jpg', '/Hat-2.jpg'],
    category: 'Headwear'
  },
  {
    id: 'hoodie-black',
    name: 'Modern Mancave Hoodie',
    price: 40.00,
    images: ['/Jumper-1.jpg', '/Jumper-2.jpg'],
    category: 'Apparel'
  }
]

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

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-24 md:pt-32 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock/merch-bg.jpg"
            alt=""
            fill
            className="object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
        </div>

        <div className="relative z-20 w-full px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headliner gradient-heading mb-4">
              CHECK OUT OUR MERCH
            </h1>
            <div className="w-16 md:w-20 h-1 bg-gray-500 mx-auto mb-6"></div>
            <p className="text-base md:text-xl text-gray-300">
              All Modern Mancave merchandise can be purchased at any of our locations. Visit us in-store to see the full range and get your merch today!
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const currentImageIndex = currentImages[product.id] || 0

              return (
                <div
                  key={product.id}
                  className="bg-zinc-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-brand-red/20 transition-all duration-300"
                >
                  {/* Product Image Slideshow */}
                  <div className="relative aspect-square overflow-hidden bg-zinc-800 group">
                    <Image
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500"
                    />

                    {/* Navigation Arrows */}
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(product.id, product.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Previous image"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => nextImage(product.id, product.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Next image"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {product.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImages(prev => ({ ...prev, [product.id]: idx }))}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex ? 'bg-brand-red w-4' : 'bg-white/50'
                              }`}
                              aria-label={`View image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <div className="text-xs text-gray-400 mb-2">{product.category}</div>
                    <h3 className="text-xl font-headliner mb-3">{product.name}</h3>
                    <p className="text-2xl font-bold text-brand-red">
                      ${product.price.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">Available in-store only</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-headliner gradient-heading mb-4">VISIT US IN STORE</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-400">
            <div>
              <svg className="w-8 h-8 mx-auto mb-2 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm">Three locations in Griffith</p>
            </div>
            <div>
              <svg className="w-8 h-8 mx-auto mb-2 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm">Open 7 days a week</p>
            </div>
            <div>
              <svg className="w-8 h-8 mx-auto mb-2 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-sm">Expert staff to assist you</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
