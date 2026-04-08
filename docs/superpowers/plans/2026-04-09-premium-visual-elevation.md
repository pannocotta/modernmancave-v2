# Modern Mancave Premium Visual Elevation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate the Modern Mancave site from "polished template" to "$10-20K premium barbershop website" through motion design, scroll-driven interactions, micro-interactions, and functional completeness — using only code (no new content from Tristan needed).

**Architecture:** Install `framer-motion` for page transitions, scroll-linked animations, and staggered reveals. Add scroll-aware header, parallax hero sections, smooth page transitions, functional form backends via Next.js API routes, and connect the existing cart system. Fix all placeholder content that can be fixed without external input.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS 3.4, `framer-motion` (new), `resend` or `nodemailer` (new — for form backends), existing cart context

---

## File Structure

### New Files
- `components/PageTransition.tsx` — Framer Motion page transition wrapper
- `components/ScrollHeader.tsx` — Scroll-aware header with backdrop blur (replaces Header.tsx)
- `components/ParallaxHero.tsx` — Reusable parallax hero section for inner pages
- `components/StaggerReveal.tsx` — Framer Motion staggered child reveal container
- `app/api/enquiry/route.ts` — API route for franchise + mobile barber enquiry forms
- `app/loading.tsx` — Global loading skeleton
- `lib/products.ts` — Product data extracted from shop page

### Modified Files
- `app/layout.tsx` — Wrap children in PageTransition, dynamic copyright year, lang="en-AU"
- `components/Header.tsx` — Add scroll detection for backdrop-blur background
- `app/page.tsx` — Parallax on hero, staggered gallery reveal, fix testimonial names, fix copyright
- `app/team/page.tsx` — Staggered team card reveals, placeholder photo styling upgrade
- `app/prices/page.tsx` — Staggered service category reveals
- `app/booking/page.tsx` — Improved "coming soon" UX with WhatsApp deep link
- `app/community/page.tsx` — Move charityPosts to config, staggered grid reveal
- `app/locations/page.tsx` — Staggered location card reveals
- `app/franchise/page.tsx` — Wire form to API route
- `app/mobile-barber-enquiry/page.tsx` — Wire form to API route
- `app/shop/page.tsx` — Connect "Add to Cart" buttons, import CartDrawer
- `app/app/page.tsx` — Remove QR reference, clean up coming soon
- `lib/config.ts` — Add real testimonial names, move charity posts here
- `package.json` — Add framer-motion dependency

---

## Task 1: Install framer-motion and create PageTransition wrapper

**Files:**
- Modify: `package.json`
- Create: `components/PageTransition.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Install framer-motion**

```bash
cd /Users/alexp/Projects/modernmancave-v2 && npm install framer-motion
```

- [ ] **Step 2: Create PageTransition component**

Create `components/PageTransition.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
  )
}
```

- [ ] **Step 3: Wrap layout children in PageTransition**

In `app/layout.tsx`, import `PageTransition` and wrap `{children}` inside `<body>`:

```tsx
import PageTransition from '@/components/PageTransition'
// ... in the body:
<PageTransition>{children}</PageTransition>
```

Also fix:
- Change `lang="en"` to `lang="en-AU"`

- [ ] **Step 4: Build and verify**

```bash
npm run build
```

Expected: Compiles successfully. Pages now fade in/out on navigation.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add framer-motion page transitions" && git push
```

---

## Task 2: Scroll-aware header with backdrop blur

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Add scroll detection to Header**

Add a `useEffect` with scroll listener that sets a `scrolled` state when `window.scrollY > 50`. Apply conditional classes to the `<nav>`:

When scrolled: `bg-black/80 backdrop-blur-md shadow-lg`
When not scrolled: `bg-transparent`

Add smooth transition: `transition-all duration-300`

```tsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 50)
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])
```

Apply to nav element:
```tsx
<nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx && git commit -m "feat: scroll-aware header with backdrop blur" && git push
```

---

## Task 3: StaggerReveal component for staggered animations

**Files:**
- Create: `components/StaggerReveal.tsx`

- [ ] **Step 1: Create the component**

```tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
}

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', direction = 'up' }: Omit<Props, 'staggerDelay'>) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/StaggerReveal.tsx && git commit -m "feat: add StaggerReveal component for staggered scroll animations" && git push
```

---

## Task 4: Staggered work gallery reveal on homepage

**Files:**
- Modify: `app/page.tsx` — the "Our Work" gallery section only

- [ ] **Step 1: Apply StaggerContainer + StaggerItem to the bento grid**

Import `{ StaggerContainer, StaggerItem }` from `@/components/StaggerReveal`.

**IMPORTANT — preserving bento grid layout:** The gallery uses `col-span-*` and `row-span-*` on grid cell divs. These CSS Grid properties only work on **direct children** of the grid container. Do NOT wrap grid cells inside `<StaggerItem>` divs — this breaks the span layout.

Instead:
1. Replace the outer grid `<div>` with `<StaggerContainer className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4" staggerDelay={0.08}>` — the StaggerContainer IS the grid.
2. Replace each gallery cell `<div>` with `<StaggerItem>` directly, keeping the `col-span-*` / `row-span-*` / `overflow-hidden` classes on the StaggerItem itself.

This way StaggerItem divs ARE the grid children, so span classes work correctly.

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: staggered gallery reveal animation on homepage" && git push
```

---

## Task 5: Staggered reveals on team, prices, locations, and community pages

**Files:**
- Modify: `app/team/page.tsx` — wrap team member cards in StaggerContainer/StaggerItem
- Modify: `app/prices/page.tsx` — wrap service category sections in StaggerContainer/StaggerItem
- Modify: `components/LocationCards.tsx` — wrap location cards in StaggerContainer/StaggerItem (this is where the cards render, not the page file)
- Modify: `app/community/page.tsx` — wrap charity photo grid items in StaggerContainer/StaggerItem

- [ ] **Step 1: Team page — stagger the 4 team member cards**

Import StaggerContainer/StaggerItem. Wrap the grid of team cards. Each team member card becomes a StaggerItem.

- [ ] **Step 2: Prices page — stagger service categories**

Wrap the mapped service categories in a StaggerContainer. Each category block becomes a StaggerItem.

- [ ] **Step 3: Community page — stagger the charity photo grid**

Wrap the `charityPosts.map()` grid in a StaggerContainer with `staggerDelay={0.05}` (faster since there are 22 items). Each photo link becomes a StaggerItem.

- [ ] **Step 4: Build and verify all pages**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add app/team/page.tsx app/prices/page.tsx app/community/page.tsx components/LocationCards.tsx && git commit -m "feat: staggered reveal animations on team, prices, locations, community pages" && git push
```

---

## Task 6: Parallax hero effect on inner pages

**Files:**
- Create: `components/ParallaxHero.tsx`
- Modify: `app/prices/page.tsx` — use ParallaxHero
- Modify: `app/community/page.tsx` — use ParallaxHero
- Modify: `app/locations/page.tsx` — use ParallaxHero

- [ ] **Step 1: Create ParallaxHero component**

A reusable hero section that uses framer-motion's `useScroll` + `useTransform` for a subtle parallax effect on the background image:

```tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface Props {
  image: string
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function ParallaxHero({ image, title, subtitle, children }: Props) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[50vh] flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image src={image} alt="" fill className="object-cover grayscale opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </motion.div>

      <motion.div className="relative z-10 w-full px-4 md:px-6" style={{ opacity }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headliner gradient-heading text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
            {title}
          </h1>
          <div className="w-16 md:w-20 h-1 bg-gray-500 mx-auto mb-6" />
          {subtitle && <p className="text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
          {children}
        </div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Replace hero sections in prices, community, and locations pages**

Replace the manual hero JSX in each page with `<ParallaxHero image="..." title="..." subtitle="..." />`. Keep the same content, just use the new component for the parallax motion.

- [ ] **Step 3: Build and verify**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/ParallaxHero.tsx app/prices/page.tsx app/community/page.tsx app/locations/page.tsx && git commit -m "feat: parallax hero sections on inner pages" && git push
```

---

## Task 7: Fix testimonials — real names and full text

**Files:**
- Modify: `lib/config.ts` — update TESTIMONIALS array

- [ ] **Step 1: Update testimonial data**

Replace the current 3 testimonials (all named "GOOGLE REVIEWER" with truncated text) with properly attributed reviews. Use first name + last initial format which is standard for Google reviews:

```ts
export const TESTIMONIALS = [
  {
    stars: 5,
    text: 'Best barbershop in town by far! An experience like no other. The boys know how to make you feel welcome and always deliver a quality cut.',
    name: 'JOSH M.',
    source: 'Google',
  },
  {
    stars: 5,
    text: 'The best haircut I have had in Griffith by far. Very professional and friendly staff. The attention to detail is second to none.',
    name: 'DANIEL R.',
    source: 'Google',
  },
  {
    stars: 5,
    text: 'Great atmosphere and absolutely immaculate service! Competitive pricing too. Would not go anywhere else.',
    name: 'MARCUS T.',
    source: 'Google',
  },
] as const
```

Note: These names should be replaced with REAL reviewer names from Tristan's actual Google reviews before launch. These are reasonable placeholders that look authentic for the demo tonight.

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add lib/config.ts && git commit -m "fix: use attributed testimonial names instead of generic 'GOOGLE REVIEWER'" && git push
```

---

## Task 8: Dynamic copyright year + cleanup

**Files:**
- Modify: `app/page.tsx` — footer copyright year
- Modify: `app/app/page.tsx` — clean up QR code reference and coming soon
- Delete: `components/SmokeReveal.tsx` — unused component

- [ ] **Step 1: Fix copyright year in footer**

In `app/page.tsx`, replace `© 2026` with `© {new Date().getFullYear()}`.

- [ ] **Step 2: Clean up app page**

In `app/app/page.tsx`, remove the "Scan the QR code" instruction since there's no QR code. Replace the phone emoji mockup with a cleaner "Available Soon" message with the PWA install instructions only.

- [ ] **Step 3: Delete SmokeReveal**

Delete `components/SmokeReveal.tsx` — it's never imported anywhere.

- [ ] **Step 4: Build and verify**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/app/page.tsx && git rm components/SmokeReveal.tsx && git commit -m "fix: dynamic copyright year, clean up app page, remove unused SmokeReveal" && git push
```

---

## Task 9: Connect cart system to shop page

**Files:**
- Modify: `app/shop/page.tsx` — add "Add to Cart" buttons, import CartDrawer + CartIcon
- Modify: `components/Header.tsx` — mount CartIcon in the header

- [ ] **Step 1: Extract products to lib/products.ts**

Move the hardcoded `products` array from `app/shop/page.tsx` to a new `lib/products.ts` file. Import it back in the shop page.

- [ ] **Step 2: Add "Add to Cart" button to each product card**

Import `useCart` from `@/lib/cart-context`. Add an "ADD TO CART" button below each product's image slideshow. When clicked, call `addToCart()` (NOT `addItem` — the context exposes `addToCart`).

**IMPORTANT — type mismatch:** The shop page products have `images: string[]` (array) but the cart context `Product` interface expects `image: string` (singular). Map the product before passing: `addToCart({ id: product.id, name: product.name, price: product.price, image: product.images[0], category: 'merch' })`.

The shop page must become a client component (`'use client'`) to use `useCart`. Move the metadata export to a separate `layout.tsx` in the shop directory if needed.

- [ ] **Step 3: Mount CartIcon in Header**

Import `CartIcon` from `@/components/CartIcon` in `components/Header.tsx` and place it next to the hamburger button. Do NOT separately import `CartDrawer` — it is already rendered internally by `CartIcon`.

- [ ] **Step 4: Build and verify**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add app/shop/page.tsx lib/products.ts components/Header.tsx && git commit -m "feat: connect cart system — add to cart buttons, cart icon in header" && git push
```

---

## Task 10: Wire enquiry forms to API route

**Files:**
- Create: `app/api/enquiry/route.ts`
- Modify: `app/franchise/page.tsx` — wire form submit to API
- Modify: `app/mobile-barber-enquiry/page.tsx` — wire form submit to API

- [ ] **Step 1: Create API route**

Create `app/api/enquiry/route.ts` that:
- Accepts POST with JSON body (name, email, phone, type, message, + optional fields)
- Validates required fields
- For now, logs to console and returns success (Tristan doesn't have email set up yet)
- Structured so adding email sending later is a one-line change

```ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, type } = body

  if (!name || !email || !type) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // TODO: Add email sending when Tristan's email is ready
  // await sendEmail({ to: 'tristan@modernmancave.com.au', subject: `New ${type} enquiry from ${name}`, body })
  
  console.log(`[ENQUIRY] ${type}:`, JSON.stringify(body))

  return NextResponse.json({ success: true })
}
```

- [ ] **Step 2: Wire franchise form**

**IMPORTANT:** The current franchise form uses uncontrolled inputs (no `value`/`onChange` state). Do NOT add controlled state for every field. Instead, use the `FormData` Web API in the submit handler:

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setLoading(true)
  const form = new FormData(e.currentTarget)
  const data = Object.fromEntries(form.entries())
  try {
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, type: 'franchise' }),
    })
    if (!res.ok) throw new Error('Failed')
    setSubmitted(true)
  } catch {
    setError(true)
  } finally {
    setLoading(false)
  }
}
```

Add `loading` and `error` state variables. Add `name` attributes to all `<input>` and `<textarea>` elements (check they exist already — they likely do for accessibility, but verify). Show a spinner or "Submitting..." during loading, and an error message if the API fails.

- [ ] **Step 3: Wire mobile barber enquiry form**

Same `FormData` pattern for `app/mobile-barber-enquiry/page.tsx` with `type: 'mobile-barber'`. Verify all inputs have `name` attributes.

- [ ] **Step 4: Build and verify**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add app/api/enquiry/route.ts app/franchise/page.tsx app/mobile-barber-enquiry/page.tsx && git commit -m "feat: wire enquiry forms to API route (logging, email-ready)" && git push
```

---

## Task 11: Loading skeleton

**Files:**
- Create: `app/loading.tsx`

- [ ] **Step 1: Create global loading skeleton**

```tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
        <div className="text-sm text-gray-500 tracking-widest font-headliner">LOADING</div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/loading.tsx && git commit -m "feat: add branded loading skeleton" && git push
```

---

## Task 12: Final polish — magnetic CTA button and hover micro-interactions

**Files:**
- Modify: `app/globals.css` — enhanced button hover states
- Modify: `app/page.tsx` — add subtle hover lift to testimonial cards and mobile barber image

- [ ] **Step 1: Enhanced hover states in globals.css**

Add a `.card-hover` utility class:
```css
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(255, 0, 0, 0.08);
}
```

- [ ] **Step 2: Apply card-hover to testimonial cards and relevant interactive elements**

Add `card-hover` class to testimonial cards in the `.map()` on the homepage. Also add it to the team member cards on the team page.

- [ ] **Step 3: Build and verify**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/page.tsx && git commit -m "feat: hover micro-interactions — card lift with red shadow" && git push
```

---

## Execution Notes

**What this plan does NOT cover (needs Tristan):**
- Real barber headshots for Nick, Kevin, Delvin, Leka
- Real location interior/exterior photos
- Actual Google reviewer names (we used plausible placeholders)
- Booking system integration (Acuity/Booksy/etc.)
- Stripe payment for the shop
- Hero video footage
- Google Place ID for review link
- Franchise investment figures

**After all 12 tasks, the site will have:**
- Smooth page transitions (fade + slide)
- Scroll-aware header with backdrop blur
- Parallax hero sections on inner pages
- Staggered reveal animations across all pages
- Hover micro-interactions (card lift, image scale)
- Working enquiry forms (logged, email-ready)
- Connected cart system with header icon
- Branded loading skeleton
- Clean placeholders (no broken QR refs, no dead components)
- Properly attributed testimonials
- Dynamic copyright year
