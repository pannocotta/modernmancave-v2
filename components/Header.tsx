'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, BOOKING_LINK } from '@/lib/config'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeDrawer = () => setDrawerOpen(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', paddingRight: 'clamp(1rem, 4vw, 1.5rem)', paddingTop: 'clamp(1rem, 3vh, 1.25rem)', paddingBottom: 'clamp(1rem, 3vh, 1.25rem)' }}>
          <Link href="/" className="flex items-center hover:opacity-80 transition">
            <Image src="/1.png" alt="Modern Mancave" width={112} height={28} style={{ height: 'clamp(24px, 5vw, 28px)', width: 'auto' }} priority />
          </Link>

          <button
          onClick={() => setDrawerOpen(true)}
          className="flex flex-col justify-center items-end group p-2 -mr-2"
          style={{ width: 'clamp(44px, 8vw, 48px)', height: 'clamp(44px, 8vw, 48px)', gap: 'clamp(5px, 1.5vw, 6px)' }}
          aria-label="Open menu"
        >
          <span className="h-0.5 bg-brand-red group-hover:opacity-70 transition-all" style={{ width: 'clamp(20px, 5vw, 28px)' }} />
          <span className="h-0.5 bg-brand-red group-hover:opacity-70 transition-all" style={{ width: 'clamp(16px, 4vw, 24px)' }} />
          <span className="h-0.5 bg-brand-red group-hover:opacity-70 transition-all" style={{ width: 'clamp(20px, 5vw, 28px)' }} />
        </button>
        </div>
      </nav>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black z-[100] transform transition-transform duration-300 ease-in-out shadow-2xl ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={closeDrawer}
          className="absolute top-8 right-8 text-white text-4xl font-light hover:rotate-90 transition-transform"
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="p-8 border-b border-zinc-800">
          <Image src="/1.png" alt="Modern Mancave" width={112} height={32} className="h-8 w-auto" />
        </div>

        <nav className="flex flex-col gap-4 p-12 pt-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className="text-white text-lg font-headliner tracking-wide hover:translate-x-2 transition-transform"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={BOOKING_LINK.href}
            onClick={closeDrawer}
            className="text-brand-red text-lg font-headliner tracking-wide hover:translate-x-2 transition-transform"
          >
            {BOOKING_LINK.label}
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90]"
          onClick={closeDrawer}
        />
      )}
    </>
  )
}
