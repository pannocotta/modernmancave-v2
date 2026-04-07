# Modern Mancave V2 — Elevation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate the existing Modern Mancave website to $10K production quality — polish spacing, typography, animations, responsive, performance, and code quality across all 13 pages.

**Architecture:** Page-by-page elevation with an infrastructure-first pass. No new features, no backend, no tech stack upgrades. Keep all existing content and design direction (black/white/red accent). Create shared config files to eliminate data duplication, then systematically improve each page.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS 3, TypeScript

**Spec:** `docs/superpowers/specs/2026-04-06-modernmancave-elevation-design.md`

---

## File Structure

### New files to create
- `lib/config.ts` — Single source of truth: phone numbers, addresses, hours, social URLs, brand colors
- `lib/services.ts` — Service names, prices, durations (shared between prices + booking pages)
- `app/error.tsx` — Global error boundary
- `app/not-found.tsx` — Custom 404 page
- `app/sitemap.ts` — Dynamic sitemap generation
- `app/robots.ts` — Robots.txt generation

### Files to modify
- `tailwind.config.ts` — Add `brand-red`, `brand-black`, `brand-white` color tokens
- `app/globals.css` — Fix Awakening font-display, clean up unused utilities
- `app/layout.tsx` — Remove unused font imports, fix `display: 'block'` → `'swap'`, extract viewport to `generateViewport()`
- `components/Header.tsx` — Refactor nav links to map over array, switch `<img>` to `next/image`
- `components/FloatingBookButton.tsx` — Debounce scroll listener
- `components/AnimatedSection.tsx` — Add `prefers-reduced-motion` support
- All 13 page files — Replace raw `<img>` with `next/image`, replace `#ff0000` with `brand-red`, add per-page metadata, add animations

### Files to delete
- `components/BarberCarousel.tsx` — Unused, fake data
- `components/InstagramFeed.tsx` — Unused, fake widget ID
- `components/Logo.tsx` — Unused
- `components/LoyaltyCard.tsx` — Unused
- `next.config.mjs` — Duplicate (next.config.js exists)

---

## Task 1: Delete Dead Code & Clean Config Files

**Files:**
- Delete: `components/BarberCarousel.tsx`, `components/InstagramFeed.tsx`, `components/Logo.tsx`, `components/LoyaltyCard.tsx`, `next.config.mjs`
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css:20-26` (font-display)

- [ ] **Step 1: Delete unused components and duplicate config**

```bash
cd /Users/alexp/Projects/modernmancave-v2
rm components/BarberCarousel.tsx components/InstagramFeed.tsx components/Logo.tsx components/LoyaltyCard.tsx next.config.mjs
```

- [ ] **Step 2: Add brand color tokens to Tailwind config**

In `tailwind.config.ts`, replace the colors section:

```ts
colors: {
  black: '#000000',
  'brand-red': '#ff0000',
  'brand-black': '#000000',
  'brand-white': '#ffffff',
},
```

- [ ] **Step 3: Fix Awakening font-display in globals.css**

Change `font-display: block;` to `font-display: swap;` in the `@font-face` rule (line 26).

- [ ] **Step 4: Verify the app builds**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

Expected: Build succeeds with no errors related to deleted files.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "chore: delete dead components, add brand color tokens, fix font-display"
```

---

## Task 2: Fix Layout — Fonts, Viewport, Error Pages

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/error.tsx`
- Create: `app/not-found.tsx`

- [ ] **Step 1: Fix layout.tsx — remove unused fonts, fix display, extract viewport**

Replace the entire `app/layout.tsx` with:

```tsx
import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display, Bebas_Neue } from 'next/font/google'
import './globals.css'
import PWAPrompt from '@/components/PWAPrompt'
import { CartProvider } from '@/lib/cart-context'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ff0000',
}

export const metadata: Metadata = {
  title: 'Modern Mancave - Premium Grooming for the Modern Man',
  description: 'Precision hairstyling, beard trims, and hot towel shaves. Where style begins with confidence.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Modern Mancave',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preload" href="/fonts/AwakenningPersonalUse-DOLPD.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} ${bebas.variable} font-sans`}>
        <CartProvider>
          {children}
          <PWAPrompt />
        </CartProvider>
      </body>
    </html>
  )
}
```

Key changes:
- Removed Great_Vibes, Sancreek, Montserrat (unused in rendered pages)
- Changed all `display: 'block'` to `display: 'swap'`
- Extracted `viewport` and `themeColor` to separate `viewport` export (fixes Next.js build warnings)
- Removed `themeColor` and `viewport` from metadata object

- [ ] **Step 2: Remove unused font families from Tailwind config**

In `tailwind.config.ts`, remove these from fontFamily:

```ts
// REMOVE these lines:
script: ['var(--font-script)'],
sancreek: ['var(--font-sancreek)'],
montserrat: ['var(--font-montserrat)'],
```

Keep: `sans`, `serif`, `display`, `headliner`.

- [ ] **Step 3: Create error.tsx**

Create `app/error.tsx`:

```tsx
'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-headliner gradient-heading mb-6">SOMETHING WENT WRONG</h1>
        <p className="text-gray-400 mb-8">We hit a snag. Give it another shot.</p>
        <button
          onClick={reset}
          className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 font-bold transition"
        >
          TRY AGAIN
        </button>
      </div>
    </main>
  )
}
```

- [ ] **Step 4: Create not-found.tsx**

Create `app/not-found.tsx`:

```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl font-headliner gradient-heading mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">This page doesn't exist.</p>
        <Link
          href="/"
          className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 font-bold transition"
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  )
}
```

- [ ] **Step 5: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "fix: clean up fonts, extract viewport, add error and 404 pages"
```

---

## Task 3: Create Shared Config & Services Data

**Files:**
- Create: `lib/config.ts`
- Create: `lib/services.ts`

- [ ] **Step 1: Create lib/config.ts**

```ts
export const SITE = {
  name: 'Modern Mancave',
  tagline: 'Premium Grooming for the Modern Man',
  established: 2017,
  owner: 'Tristan Sergi',
  googleRating: { stars: 4.5, count: 183 },
  facebookRating: { percent: 92, count: 52 },
} as const

export const CONTACT = {
  nick: { name: 'Nick', phone: '0458 520 456', phoneHref: 'tel:0458520456', whatsapp: 'https://wa.me/61458520456' },
  tattoo: { name: 'Cameron', phone: '0413 074 669', phoneHref: 'tel:0413074669' },
} as const

export const SOCIAL = {
  instagram: { handle: '@modern_mancave', url: 'https://www.instagram.com/modern_mancave/' },
  facebook: { url: 'https://www.facebook.com/TristansBarberShop' },
  nickInstagram: { handle: '@barberniks', url: 'https://www.instagram.com/barberniks' },
  kevinInstagram: { handle: '@kevinmarkarana', url: 'https://www.instagram.com/kevinmarkarana' },
  delvinInstagram: { handle: '@dhelatyourservice', url: 'https://www.instagram.com/dhelatyourservice' },
  lekaInstagram: { handle: '@barber.leka', url: 'https://www.instagram.com/barber.leka' },
  tattooInstagram: { handle: '@relentless_image_tattoo_shop', url: 'https://www.instagram.com/relentless_image_tattoo_shop' },
} as const

export const LOCATIONS = [
  {
    name: 'BANNA AVE',
    address: '224a Banna Ave, Griffith NSW 2680',
    hours: [
      'Mon-Wed, Fri: 8:00am - 5:30pm',
      'Thursday: 8:00am - 6:00pm',
      'Saturday: 7:00am - 4:00pm',
      'Sunday: 8:00am - 4:00pm',
    ],
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=224a+Banna+Ave+Griffith+NSW+2680',
    mapUrl: 'https://maps.google.com/maps?q=224a%20Banna%20Ave%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed',
    hasBooking: true,
  },
  {
    name: 'GRIFFITH CENTRAL',
    address: '10-12 Yambil Street, Griffith NSW 2680',
    hours: [
      'Mon-Wed, Fri: 8:00am - 5:30pm',
      'Thursday: 8:00am - 6:00pm',
      'Saturday: 7:00am - 4:00pm',
      'Sunday: 8:00am - 4:00pm',
    ],
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=10-12+Yambil+Street+Griffith+NSW+2680',
    mapUrl: 'https://maps.google.com/maps?q=10-12%20Yambil%20Street%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed',
    hasBooking: false,
  },
  {
    name: 'YAMBIL ST',
    address: 'Shop 1, 168 Yambil Street, Griffith NSW 2680',
    hours: [
      'Mon-Fri: 8:00am - 5:30pm',
      'Thursday: 8:00am - 6:00pm',
      'Saturday: 7:00am - 4:00pm',
      'Sunday: Closed',
    ],
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=168+Yambil+Street+Griffith+NSW+2680',
    mapUrl: 'https://maps.google.com/maps?q=168%20Yambil%20Street%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed',
    hasBooking: false,
  },
  {
    name: 'MODERN MANCAVE TATTOO STUDIO',
    address: '224a Banna Ave, Griffith NSW 2680',
    hours: [
      'Mon-Wed, Fri: 8:00am - 5:30pm',
      'Thursday: 8:00am - 6:00pm',
      'Saturday: 7:00am - 4:00pm',
      'Sunday: 8:00am - 4:00pm',
    ],
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=224a+Banna+Ave+Griffith+NSW+2680',
    mapUrl: 'https://maps.google.com/maps?q=224a%20Banna%20Ave%2C%20Griffith%20NSW%202680&t=&z=18&ie=UTF8&iwloc=&output=embed',
    hasBooking: false,
  },
] as const

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'THE TEAM', href: '/team' },
  { label: 'COMMUNITY', href: '/community' },
  { label: 'PRICES', href: '/prices' },
  { label: 'LOCATIONS', href: '/locations' },
  { label: 'MOBILE BARBER', href: '/mobile-barber' },
  { label: 'MERCH', href: '/shop' },
  { label: 'FRANCHISE', href: '/franchise' },
  { label: 'DOWNLOAD APP', href: '/app' },
] as const

export const BOOKING_LINK = { label: 'BOOK NOW', href: '/booking' } as const

export const TESTIMONIALS = [
  {
    stars: 5,
    text: 'Best barbershop in town by far! An experience like no other...',
    name: 'GOOGLE REVIEWER',
    source: 'Google',
  },
  {
    stars: 5,
    text: 'The best haircut I have had in Griffith by far... very professional and friendly staff...',
    name: 'GOOGLE REVIEWER',
    source: 'Google',
  },
  {
    stars: 5,
    text: 'Great atmosphere and absolutely immaculate service! Competitive pricing too!',
    name: 'GOOGLE REVIEWER',
    source: 'Google',
  },
] as const
```

- [ ] **Step 2: Create lib/services.ts**

```ts
export interface ServiceCategory {
  name: string
  services: { name: string; price: number; duration?: number }[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "KIDS CUTS",
    services: [
      { name: 'Baby', price: 30 },
      { name: 'Baby Double Zero Fade', price: 35 },
      { name: 'Primary', price: 35 },
      { name: 'Primary School, Skin Fade', price: 38 },
      { name: 'High School', price: 35 },
      { name: 'High School, Skin Fade', price: 38 },
    ],
  },
  {
    name: "MEN'S CUTS",
    services: [
      { name: "Men's Cut", price: 40 },
      { name: "Men's Cut & Beard Trim", price: 50 },
      { name: "Men's Cut, Beard Trim, Line up & Shape", price: 58 },
    ],
  },
  {
    name: 'SKIN FADES',
    services: [
      { name: 'Skin Fade', price: 45 },
      { name: 'Skin Fade, Beard Trim, Line up & Shape', price: 60 },
    ],
  },
  {
    name: 'BUZZ CUTS',
    services: [
      { name: 'Buzz Cut', price: 30 },
      { name: 'Buzz Cut & Beard Trim', price: 40 },
      { name: 'Buzz Cut, Beard Trim, Line up & Shape', price: 50 },
    ],
  },
  {
    name: 'HEAD SHAVES',
    services: [
      { name: 'Head Shave', price: 40 },
      { name: 'Head Shave & Beard Trim', price: 45 },
      { name: 'Head Shave, Beard Trim, Line up & Shape', price: 60 },
    ],
  },
  {
    name: 'HOT TOWEL SHAVES',
    services: [
      { name: 'Hot Towel Shave', price: 45 },
      { name: "Hot Towel Shave & Men's Hair Cut", price: 65 },
    ],
  },
  {
    name: 'BEARD SERVICES',
    services: [
      { name: 'Beard Trim', price: 20 },
      { name: 'Beard Trim, Line Up & Shape', price: 25 },
    ],
  },
  {
    name: 'EXTRAS',
    services: [
      { name: 'Hair Art', price: 15 },
      { name: 'Pensioner (any haircut)', price: 30 },
    ],
  },
]

export const TEETH_WHITENING = {
  name: 'Teeth Whitening',
  price: 250,
  duration: 90,
  availability: 'Mondays and Wednesdays',
} as const

/**
 * Booking page services — simplified list for Nick's appointment selector.
 * NOTE: These prices differ from the walk-in prices page (e.g. Haircut $35 vs $40).
 * The booking page is Nick-only with a $20 premium for private appointments,
 * so the base prices shown here are lower. Confirm with Tristan if this is intentional.
 */
export const BOOKING_SERVICES = [
  { name: 'Haircut', price: 35, duration: 30 },
  { name: 'Beard Trim', price: 20, duration: 15 },
  { name: 'Haircut & Beard', price: 50, duration: 45 },
  { name: 'Head Shave', price: 30, duration: 30 },
  { name: 'Kids Cut (Under 12)', price: 25, duration: 20 },
  { name: 'Hot Towel Shave', price: 40, duration: 30 },
  { name: 'Hair Design / Pattern', price: 45, duration: 45 },
  { name: 'Teeth Whitening', price: 250, duration: 90 },
] as const
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add lib/config.ts lib/services.ts && git commit -m "feat: add shared config and services data"
```

---

## Task 4: Refactor Header Component

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Refactor Header to use shared config**

Replace `components/Header.tsx` with:

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, BOOKING_LINK } from '@/lib/config'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', paddingRight: 'clamp(1rem, 4vw, 1.5rem)', paddingTop: 'clamp(1rem, 3vh, 1.25rem)', paddingBottom: 'clamp(1rem, 3vh, 1.25rem)' }}>
          <Link href="/" className="flex items-center hover:opacity-80 transition">
            <Image src="/1.png" alt="Modern Mancave" width={112} height={28} style={{ height: 'clamp(24px, 5vw, 28px)', width: 'auto' }} priority />
          </Link>

          <button
            onClick={() => setDrawerOpen(true)}
            className="flex flex-col justify-center items-end group p-2 -mr-2"
            style={{ width: 'clamp(40px, 8vw, 48px)', height: 'clamp(40px, 8vw, 48px)', gap: 'clamp(5px, 1.5vw, 6px)' }}
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

        <nav className="flex flex-col gap-6 p-12 pt-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className="text-white text-2xl font-headliner tracking-wide hover:translate-x-2 transition-transform"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={BOOKING_LINK.href}
            onClick={closeDrawer}
            className="text-brand-red text-2xl font-headliner tracking-wide hover:translate-x-2 transition-transform"
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
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx && git commit -m "refactor: Header uses shared config, next/image, mapped nav links"
```

---

## Task 5: Fix AnimatedSection, SmokeReveal & FloatingBookButton

**Files:**
- Modify: `components/AnimatedSection.tsx`
- Modify: `components/SmokeReveal.tsx`
- Modify: `components/FloatingBookButton.tsx`

- [ ] **Step 1: Add reduced-motion support to AnimatedSection**

Replace `components/AnimatedSection.tsx`:

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight'
  delay?: number
}

export default function AnimatedSection({ children, className = '', animation = 'fadeIn', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)

    if (mq.matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const animations = {
    fadeIn: 'opacity-0 translate-y-0',
    slideUp: 'opacity-0 translate-y-8',
    slideLeft: 'opacity-0 translate-x-8',
    slideRight: 'opacity-0 -translate-x-8',
  }

  const baseStyle = prefersReducedMotion
    ? ''
    : `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : animations[animation]}`

  return (
    <div
      ref={ref}
      className={`${baseStyle} ${className}`}
      style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms` }}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Add reduced-motion and will-change to SmokeReveal**

Replace `components/SmokeReveal.tsx`:

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function SmokeReveal({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)

    if (mq.matches) {
      setRevealed(true)
      return
    }

    const timer = setTimeout(() => setRevealed(true), 300)
    return () => clearTimeout(timer)
  }, [])

  if (prefersReducedMotion) {
    return <div>{children}</div>
  }

  return (
    <div className="relative">
      <div className={`transition-all duration-2000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-2000 ease-out will-change-[transform,opacity] ${
          revealed ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
        }`}
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(0,0,0,0.9) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 30%, rgba(0,0,0,0.8) 0%, transparent 40%),
            radial-gradient(ellipse at 40% 70%, rgba(0,0,0,0.7) 0%, transparent 45%),
            radial-gradient(ellipse at 80% 50%, rgba(0,0,0,0.9) 0%, transparent 50%)
          `,
          filter: 'blur(20px)',
        }}
      />
    </div>
  )
}
```

- [ ] **Step 3: Debounce FloatingBookButton scroll listener**

Replace `components/FloatingBookButton.tsx`:

```tsx
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
      className="fixed bottom-6 right-6 z-40 bg-brand-red text-white px-6 py-3 font-bold text-sm tracking-wider shadow-lg shadow-brand-red/30 hover:bg-red-600 transition-colors"
    >
      BOOK NOW
    </Link>
  )
}
```

- [ ] **Step 4: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add components/AnimatedSection.tsx components/SmokeReveal.tsx components/FloatingBookButton.tsx && git commit -m "fix: reduced-motion support, will-change, debounced scroll, brand-red tokens"
```

---

## Task 6: Elevate Home Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace home page**

Full rewrite of `app/page.tsx`. Key changes:
- Replace 4 raw `<img>` tags in about grid with `next/image`
- Replace fake testimonials with real Google reviews from `TESTIMONIALS` config
- Fix Instagram URL to use `SOCIAL.instagram.url`
- Remove Google review link (no Place ID yet)
- Add `AnimatedSection` entrance animations on scroll
- Replace all `#ff0000` with `brand-red` class
- Add `"4.5 stars from 183+ Google Reviews"` badge
- Wrap footer `<img>` with `next/image`
- Add lazy loading to below-fold images

The page is large (~370 lines). Replace it entirely. Import `AnimatedSection` from `@/components/AnimatedSection`, `TESTIMONIALS`, `SOCIAL`, `SITE`, `LOCATIONS` from `@/lib/config`.

**Important details for the implementer:**
- Hero section: keep as-is (already uses `next/image` with priority)
- About grid (lines 55-96): switch all 4 `<img>` to `<Image>` with `fill`, `loading="lazy"`, `sizes="(max-width: 768px) 50vw, 25vw"`
- Testimonials (lines 193-244): replace the hardcoded array with `TESTIMONIALS` import, add Google badge
- Instagram link (line 169): change `instagram.com/modernmancave` to `SOCIAL.instagram.url`
- Google review link (line 236-241): remove entirely or replace with `{/* Google review link — awaiting Place ID */}`
- Footer logo (line 297): switch `<img>` to `<Image>`
- Wrap each major section in `<AnimatedSection>`

- [ ] **Step 2: Verify build and visually check**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build && npm run dev
```

Open http://localhost:3000 in browser. Check:
- Hero loads fast (priority images)
- About images lazy load on scroll
- Testimonials show real Google reviews
- Instagram link goes to correct URL
- No broken images
- Animations trigger on scroll
- `prefers-reduced-motion` users see no animation

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "elevate: home page — real testimonials, next/image, animations, brand tokens"
```

---

## Task 7: Elevate Booking Page

**Files:**
- Modify: `app/booking/page.tsx`

- [ ] **Step 1: Update booking page**

Key changes:
- Import `BOOKING_SERVICES` from `@/lib/services` (replace hardcoded `SERVICES` array)
- Import `CONTACT` from `@/lib/config`
- Replace hero `<img>` with `next/image`
- Fix grammar: "expert service from our expert barber, nick" → "expert service from our senior barber, Nick"
- Replace all `#ff0000` with `brand-red`
- Use `CONTACT.nick.phone` and `CONTACT.nick.phoneHref` for phone links
- Replace Acuity iframe with polished "Coming Soon" placeholder:

```tsx
<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
  <h3 className="text-3xl font-headliner gradient-heading mb-4">ONLINE BOOKING COMING SOON</h3>
  <p className="text-gray-400 mb-6">We're setting up online booking. In the meantime, call Nick to secure your spot.</p>
  <a href={CONTACT.nick.phoneHref} className="inline-block bg-brand-red text-white px-8 py-3 font-bold hover:bg-red-600 transition">
    CALL {CONTACT.nick.phone}
  </a>
</div>
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/booking/page.tsx && git commit -m "elevate: booking page — shared services data, coming soon placeholder, brand tokens"
```

---

## Task 8: Elevate Prices Page

**Files:**
- Modify: `app/prices/page.tsx`

- [ ] **Step 1: Update prices page**

Key changes:
- Import `SERVICE_CATEGORIES`, `TEETH_WHITENING` from `@/lib/services`
- Import `SOCIAL` from `@/lib/config`
- Replace hardcoded 8 service categories with mapped `SERVICE_CATEGORIES`
- Replace hero and teeth whitening `<img>` tags with `next/image`
- Replace tattoo `<img>` tags with `next/image`
- Remove "Prices up to date as of March 2026" line
- Replace all `#ff0000` with `brand-red`
- Use `SOCIAL.tattooInstagram` and `CONTACT.tattoo` for tattoo section links
- Add `AnimatedSection` to sections

The pricing grid should map over `SERVICE_CATEGORIES`:

```tsx
{SERVICE_CATEGORIES.map((category) => (
  <div key={category.name} className="border border-zinc-800 p-6">
    <h3 className="font-headliner text-xl md:text-2xl mb-6 pb-3 border-b border-zinc-800">{category.name}</h3>
    <div className="space-y-3">
      {category.services.map((service) => (
        <div key={service.name} className="flex justify-between items-center">
          <span className="text-gray-300">{service.name}</span>
          <span className="text-brand-red font-bold">${service.price}</span>
        </div>
      ))}
    </div>
  </div>
))}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/prices/page.tsx && git commit -m "elevate: prices page — shared services data, next/image, brand tokens"
```

---

## Task 9: Elevate Team Page

**Files:**
- Modify: `app/team/page.tsx`

- [ ] **Step 1: Update team page**

Key changes:
- Replace raw `<img>` tags (hero bg, tristan-hero.png) with `next/image`
- Import social links from `SOCIAL` config
- Replace all `#ff0000` with `brand-red`
- Style letter placeholders with branded borders: `border-2 border-brand-red/20`
- Add subtle scale hover: `hover:scale-[1.02]` on team cards
- Add `AnimatedSection` to team grid (staggered delays: 0, 100, 200, 300ms)
- Add proper page metadata (currently missing because it's `'use client'`):
  - Move metadata to a separate `metadata` export won't work since the page is `'use client'`. Instead, add a `<title>` via `useEffect` or convert to server component with client interactivity extracted. Since the team page has no client interactivity, **remove `'use client'` directive** and add metadata export.

- [ ] **Step 2: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/team/page.tsx && git commit -m "elevate: team page — next/image, brand tokens, hover interactions, metadata"
```

---

## Task 10: Elevate Locations Page

**Files:**
- Modify: `app/locations/page.tsx`

- [ ] **Step 1: Update locations page**

Key changes:
- Import `LOCATIONS` from `@/lib/config`
- Replace hardcoded locations array with `LOCATIONS` import
- Replace hero `<img>` with `next/image`
- Replace all `#ff0000` with `brand-red`
- Use `location.hasBooking` instead of checking `location.name === 'BANNA'` (which was already broken — config uses 'BANNA AVE')
- Add page metadata: extract `'use client'` to a client component for accordion state, keep the page as a server component with metadata

- [ ] **Step 2: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/locations/page.tsx components/LocationCards.tsx && git commit -m "elevate: locations page — shared config, next/image, fix booking button logic"
```

Note: May need to create `components/LocationCards.tsx` as a `'use client'` component for the interactive accordion, while keeping the page as a server component for metadata.

---

## Task 11: Elevate Community Page

**Files:**
- Modify: `app/community/page.tsx`

- [ ] **Step 1: Update community page**

Key changes:
- Replace hero `<img>` and stats background `<img>` with `next/image`
- Add `loading="lazy"` to all charity gallery images (they already use `next/image` but check `sizes`)
- Replace all `#ff0000` with `brand-red`
- Remove `'use client'` — this page has no client interactivity. Convert to server component.
- Add page metadata export
- Add `AnimatedSection` to stats section (staggered)
- Consider staggered/masonry grid for charity gallery (CSS columns or grid with varying row spans) for more visual interest — spec suggests this but keep it simple if the current grid looks good

- [ ] **Step 2: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/community/page.tsx && git commit -m "elevate: community page — next/image, metadata, brand tokens"
```

---

## Task 12: Elevate Mobile Barber + Enquiry Pages

**Files:**
- Modify: `app/mobile-barber/page.tsx`
- Modify: `app/mobile-barber-enquiry/page.tsx`

- [ ] **Step 1: Update mobile barber page**

Key changes:
- Replace hero `<img>` and trailer `<img>` with `next/image`
- Replace all `#ff0000` with `brand-red`
- Add page metadata (this page is already a server component — no `'use client'`)
- Add `AnimatedSection` to key sections

- [ ] **Step 2: Update mobile barber enquiry page**

Key changes:
- Replace `#ff0000` with `brand-red`
- Keep form client-side only (shows success message)
- Add consistent form styling (match franchise page)

- [ ] **Step 3: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add app/mobile-barber/page.tsx app/mobile-barber-enquiry/page.tsx && git commit -m "elevate: mobile barber pages — next/image, metadata, brand tokens"
```

---

## Task 13: Elevate Franchise Page

**Files:**
- Modify: `app/franchise/page.tsx`

- [ ] **Step 1: Update franchise page**

Key changes:
- Replace hero `<img>` with `next/image`
- Replace all `#ff0000` with `brand-red`
- Keep form client-side only
- Fix "10+" years stat (business started 2017, so 8-9 years in 2026 — change to "8+" or use `SITE.established` to calculate)

- [ ] **Step 2: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/franchise/page.tsx && git commit -m "elevate: franchise page — next/image, brand tokens, correct stats"
```

---

## Task 14: Elevate Shop, Checkout, Success & App Pages

**Files:**
- Modify: `app/shop/page.tsx`
- Modify: `app/shop/checkout/page.tsx`
- Modify: `app/shop/success/page.tsx`
- Modify: `app/app/page.tsx`

- [ ] **Step 1: Update shop page**

Key changes:
- Replace hero `<img>` and product `<img>` tags with `next/image`
- Replace all `#ff0000` with `brand-red`
- Add "In-Store Only" badge instead of "Coming Soon"
- Remove add-to-cart functionality (keep product display)

- [ ] **Step 2: Update checkout page**

- Add "Coming Soon" state — disable the form, show message that online ordering is coming
- Replace `#ff0000` with `brand-red`

- [ ] **Step 3: Update app page**

- Remove fake QR code placeholder — replace with styled text explaining PWA install
- Replace `#ff0000` with `brand-red`
- Add metadata

- [ ] **Step 4: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add app/shop/ app/app/page.tsx && git commit -m "elevate: shop and app pages — next/image, brand tokens, placeholders"
```

---

## Task 15: SEO Sweep — Metadata, Sitemap, Robots, Structured Data

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Modify: `app/layout.tsx` (add JSON-LD structured data)

- [ ] **Step 1: Create sitemap.ts**

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://modernmancave.com.au'

  const routes = [
    '', '/team', '/community', '/prices', '/locations',
    '/mobile-barber', '/mobile-barber-enquiry', '/franchise',
    '/booking', '/shop', '/app',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
```

Note: The base URL may need to be confirmed with Tristan. Use `modernmancave.com.au` as placeholder — update if different.

- [ ] **Step 2: Create robots.ts**

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://modernmancave.com.au/sitemap.xml',
  }
}
```

- [ ] **Step 3: Add JSON-LD structured data to layout**

Add a `<script type="application/ld+json">` tag in the `<head>` of layout.tsx:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BarberShop',
      name: 'Modern Mancave',
      description: 'Premium barbershop in Griffith, NSW. Precision hairstyling, beard trims, and hot towel shaves since 2017.',
      url: 'https://modernmancave.com.au',
      telephone: '+61458520456',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '224a Banna Ave',
        addressLocality: 'Griffith',
        addressRegion: 'NSW',
        postalCode: '2680',
        addressCountry: 'AU',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.5',
        reviewCount: '183',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'], opens: '08:00', closes: '17:30' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '08:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '16:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '16:00' },
      ],
      sameAs: [
        'https://www.instagram.com/modern_mancave/',
        'https://www.facebook.com/TristansBarberShop',
      ],
    }),
  }}
/>
```

- [ ] **Step 4: Add Open Graph image metadata**

Add a default OG image to layout metadata. Use the existing `/hero-badge.png` as the OG image for now (a proper OG image can be designed later):

```ts
openGraph: {
  title: 'Modern Mancave - Premium Grooming for the Modern Man',
  description: 'Precision hairstyling, beard trims, and hot towel shaves. Griffith, NSW.',
  url: 'https://modernmancave.com.au',
  siteName: 'Modern Mancave',
  images: [{ url: '/hero-badge.png', width: 1200, height: 1200, alt: 'Modern Mancave' }],
  locale: 'en_AU',
  type: 'website',
},
```

- [ ] **Step 5: Verify metadata per page**

Each page should have unique `title` and `description` in its metadata export. Verify all pages have this.

- [ ] **Step 6: Verify build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

- [ ] **Step 7: Commit**

```bash
git add app/sitemap.ts app/robots.ts app/layout.tsx && git commit -m "feat: SEO sweep — sitemap, robots.txt, JSON-LD, Open Graph"
```

---

## Task 16: Global Brand Token Sweep

**Files:**
- All page and component files

- [ ] **Step 1: Replace all remaining `#ff0000` and `[#ff0000]` references**

Search all files for `#ff0000` and replace with `brand-red` in Tailwind classes:
- `text-[#ff0000]` → `text-brand-red`
- `bg-[#ff0000]` → `bg-brand-red`
- `border-[#ff0000]` → `border-brand-red`
- `shadow-[#ff0000]` → `shadow-brand-red`
- `hover:text-[#ff0000]` → `hover:text-brand-red`
- `hover:bg-[#ff0000]` → `hover:bg-brand-red`
- `hover:border-[#ff0000]` → `hover:border-brand-red`

**Do NOT replace** `#ff0000` in CSS files (`globals.css`) — the `.cta-button` and scrollbar styles use raw hex, which is fine.

- [ ] **Step 2: Verify build and visual check**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build && npm run dev
```

Spot-check 3-4 pages to confirm red accent renders correctly.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "refactor: replace all hardcoded #ff0000 with brand-red token"
```

---

## Task 17: Final Build Verification & Cleanup

- [ ] **Step 1: Full production build**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm run build
```

Expected: Clean build, no warnings about viewport/themeColor in metadata, no missing image warnings.

- [ ] **Step 2: Check for any remaining raw `<img>` tags**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && grep -rn '<img ' app/ components/ --include="*.tsx"
```

Expected: Only `CartDrawer.tsx` checkout summary (line 206, uses `item.image` dynamically) and any intentionally kept instances. Fix any others.

- [ ] **Step 3: Check for unused imports**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npx next lint
```

Fix any lint errors.

- [ ] **Step 4: Final commit**

```bash
git add -A && git commit -m "chore: final cleanup — lint fixes, remaining img tags"
```

- [ ] **Step 5: Push**

```bash
git push
```
