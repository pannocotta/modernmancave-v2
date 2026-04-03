'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100vh
      setIsVisible(window.scrollY > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link
      href="/booking"
      className={`fixed bottom-6 right-6 z-50 bg-[#ff0000] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-2xl shadow-[#ff0000]/50 transition-all duration-500 hover:scale-110 active:scale-95 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      BOOK NOW
    </Link>
  )
}
