'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { CTALink } from '@/components/CTA'

export default function FloatingBookButton() {
  const pathname = usePathname()
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

  // Don't show on routes where it's redundant or in the way
  if (
    pathname === '/booking' ||
    pathname === '/mobile-barber-enquiry' ||
    pathname === '/launch' ||
    pathname.startsWith('/book/')
  ) {
    return null
  }
  if (!visible) return null

  return (
    <CTALink
      href="/booking"
      className="fixed bottom-6 right-6 z-40 bg-black shadow-lg shadow-black/40"
    >
      BOOK NOW
    </CTALink>
  )
}
