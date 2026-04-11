'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FloatingBookButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > window.innerHeight * 0.5)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <Link
      href="/booking"
      className="fixed bottom-6 right-6 z-40 bg-brand-red text-white px-8 py-3 rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-lg shadow-brand-red/30 hover:bg-red-600 transition-colors"
    >
      BOOK NOW
    </Link>
  )
}
