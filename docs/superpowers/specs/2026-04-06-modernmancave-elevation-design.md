# Modern Mancave V2 — Elevation Rebuild Spec

**Date:** 2026-04-06
**Client:** Tristan Sergi (Modern Mancave, Griffith NSW)
**Goal:** Elevate existing website to $10K production quality — polish, performance, code quality. Not a ground-up rebuild.

---

## Scope

Tristan likes the current site. This is a **polish and elevate** job:
- Keep all 13 existing pages
- Keep all existing copy and images
- Improve execution: spacing, typography, animations, responsive, performance, code quality
- No new features, no AI/voice/SMS, no backend integrations yet
- Acuity booking = placeholder (months away)
- Stripe shop = placeholder (not ready)
- Forms = client-side only (no email backend until Tristan's email is set up)

## Brand Direction

- **Evolve, don't replace** the current design
- **Black and white dominant**, red as accent (hints only, not primary)
- Same general edgy/masculine barbershop feel, modernized execution
- Current fonts kept: Awakening (display), Poppins (body), Bebas Neue, Playfair Display
- Remove unused fonts (Great Vibes, Sancreek, Montserrat) unless actually rendered

## Priority Order

1. **Visual polish** — spacing, typography consistency, animations, responsive, image optimization
2. **Performance** — Next.js Image everywhere, lazy loading, font display swap, debounced scroll
3. **Code quality** — dead code cleanup, TypeScript strictness, shared config/data, component architecture
4. **Functional completeness** — forms show success messages, proper placeholders for Acuity/Stripe
5. **Accessibility** — alt text, semantic HTML, keyboard nav, reduced motion
6. **SEO** — metadata per page, sitemap, robots.txt, structured data (JSON-LD local business), Open Graph

## Tech Stack

- **Stay on current versions**: Next.js 14, React 18, Tailwind 3
- Patch security fixes only, no major version jumps
- Upgrade as a separate task once site is delivered and stable

## Approach

**Page-by-page elevation (Approach A):**
- Quick infrastructure pass first (shared config, dead code cleanup)
- Then work through each page systematically — fully "done" before moving on
- Each page is a deliverable milestone

---

## Phase 0: Infrastructure Foundation

### Delete dead files
- `components/BarberCarousel.tsx` — unused, fake data (Marco/Tony/Alex don't match real team)
- `components/InstagramFeed.tsx` — unused, fake Elfsight widget ID
- `components/Logo.tsx` — unused, Header uses hardcoded img
- `components/LoyaltyCard.tsx` — unused
- `next.config.mjs` — duplicate empty file (next.config.js exists)

### Keep but fix
- `components/AnimatedSection.tsx` — currently unused but will be used in elevation. Add `prefers-reduced-motion` support
- `components/SmokeReveal.tsx` — add reduced motion support, add `will-change`

### Create shared config
- **`lib/config.ts`** — single source of truth:
  - Phone numbers (Nick: 0458 520 456)
  - Addresses (4 locations with hours)
  - Social URLs (Instagram: @modern_mancave, Facebook: TristansBarberShop)
  - Brand colors as constants
  - Google review URL (placeholder until Place ID obtained)
- **`lib/services.ts`** — service names, prices, durations. Used by both prices and booking pages. Resolves current data inconsistency between the two pages.

### Fix shared components
- `Header.tsx` — refactor nav to map over array, switch `<img>` to Next.js `Image`
- `FloatingBookButton.tsx` — debounce scroll listener
- `CartDrawer.tsx` — keep functional, used by shop

### Layout fixes
- Move `viewport` and `themeColor` from metadata to `generateViewport()` export (fixes build warnings on every page)
- Add `error.tsx` and `not-found.tsx` at app root
- Extract brand colors to Tailwind config: `brand-red`, `brand-black`, `brand-white`
- Replace all hardcoded `#ff0000` and `bg-[#ff0000]` with `brand-red` class
- Fix font loading: change `display: 'block'` to `display: 'swap'` for all Google fonts
- Remove unused font imports (Great Vibes, Sancreek, Montserrat — verify usage first)

---

## Phase 1: Home Page

### Current state
- Hero section with badge, about grid, services, work gallery (12 images), testimonials, CTAs
- 4 raw `<img>` tags in about grid
- Fake testimonials ("Alex M.", "Michael T.", "David K.")
- Google review link = `YOUR_GOOGLE_PLACE_ID` (placeholder)
- Instagram URL inconsistency (@modernmancave vs @modern_mancave)
- 12 work gallery images load immediately with no lazy loading
- Inline `clamp()` styles throughout

### Elevation
1. Replace all `<img>` with `next/image`, `loading="lazy"` on below-fold images
2. Replace fake testimonials with real Google reviews:
   - "Best barbershop in town by far! An experience like no other..." (5 stars)
   - "The best haircut I have had in Griffith by far... very professional and friendly staff..." (5 stars)
   - "Great atmosphere and absolutely immaculate service! Competitive pricing too!" (5 stars)
   - Add "4.5 stars from 183+ Google Reviews" badge
3. Fix Instagram URL to `@modern_mancave` everywhere
4. Remove Google review link until Place ID obtained (or add to config as placeholder)
5. Add `AnimatedSection` entrance animations on scroll
6. Move inline `clamp()` styles to globals.css or Tailwind utilities
7. Tighten section spacing — consistent vertical rhythm

---

## Phase 2: Booking Page

### Current state
- 8 hardcoded services (different prices from prices page)
- Acuity iframe with owner ID 38789653
- Nick-specific copy (intentional — he's the only one taking bookings)
- Service selector doesn't integrate with Acuity embed

### Elevation
1. Pull services from shared `lib/services.ts`
2. Replace Acuity iframe with polished "Coming Soon" booking placeholder — styled card: "Online booking launching soon. Call Nick to book:" + phone number from config
3. Fix grammar: "Expert service from our expert barber" → better copy (no repeated "expert")
4. Keep service browser as visual menu (useful even without live booking)
5. Switch `<img>` to Next.js `Image`

---

## Phase 3: Prices Page

### Current state
- 10 service categories hardcoded in component
- Teeth whitening before/after images (good content)
- Tattoo section with separate Instagram/phone
- "Prices up to date as of March 2026" hardcoded

### Elevation
1. Move all pricing data to `lib/services.ts` — single source shared with booking
2. Replace hardcoded date notice or remove entirely
3. Switch all `<img>` to Next.js `Image`
4. Tighten visual hierarchy — consistent card styling

---

## Phase 4: Team Page

### Current state
- 4 barbers with letter-circle placeholders (N, K, D, L)
- Tristan's extensive bio with `tristan-hero.png`
- Social links hardcoded per barber

### Elevation
1. Style letter placeholders properly — clean branded circles, not placeholder-looking
2. Tristan's section gets hero treatment — featured block with photo + bio
3. Pull social links into `lib/config.ts`
4. Subtle hover interactions on team cards

---

## Phase 5: Locations Page

### Current state
- 4 locations hardcoded with Google Maps iframes
- Address inconsistency ("10-12 Yambil Street" vs "Shop 43-44 Griffith Central")

### Elevation
1. Move location data to `lib/config.ts`
2. Add skeleton/loading state for map iframes
3. Fix address inconsistencies
4. Consistent card layout across all locations

---

## Phase 6: Community Page

### Current state
- 22 charity images load all at once
- Stats: "30+ Projects, 150+ Hours, 500+ Free Haircuts"
- 22 Instagram post links (2017-2024)

### Elevation
1. Lazy load all images with Next.js `Image`
2. Masonry or staggered grid for gallery (more visual interest)
3. Keep stats and Instagram links as-is (real content, strong differentiator)

---

## Phase 7: Mobile Barber + Enquiry

### Mobile Barber page
- Solid marketing page. Polish: Next.js Image, consistent section spacing, refine inline SVG icons.

### Mobile Barber Enquiry
- Form submits to nowhere. Keep form, show "We'll be in touch" on submit (client-side only). Clean up form styling for consistency.

---

## Phase 8: Franchise Page

- Same treatment as mobile barber enquiry
- Polish the application form, keep client-side only
- No backend until Tristan's email is ready

---

## Phase 9: Shop Pages

### Shop
- 3 products with image carousels
- Next.js Image, add "Coming Soon" badge
- Keep cart context working for future Stripe integration

### Checkout
- Disable or simplify — show "Coming Soon" state
- Keep the cart summary UI (it's well built)

### Success
- Keep as-is, minimal changes needed

---

## Phase 10: App Page

- PWA download page
- Clean up phone mockup styling
- Keep platform-specific install instructions
- Remove fake QR code placeholder

---

## Phase 11: SEO Sweep (all pages)

- Add proper metadata to every page (title, description, Open Graph)
- Create `sitemap.ts` and `robots.ts`
- Add JSON-LD structured data (LocalBusiness schema) to layout
- Open Graph images for social sharing

---

## Business Data (verified)

| Field | Value |
|-------|-------|
| Business name | Modern Mancave |
| Owner | Tristan Sergi |
| Instagram | @modern_mancave |
| Facebook | facebook.com/TristansBarberShop |
| Nick's phone | 0458 520 456 |
| Tattoo phone | 0413 074 669 |
| Tattoo Instagram | @relentless_image_tattoo_shop |
| Google rating | 4.5 stars (183 reviews) |
| Facebook rating | 92% recommend (52 reviews) |
| Locations | Banna Ave, Griffith Central, Yambil St, Tattoo Studio |
| Walk-ins | Walk-ins only (no appointments) — booking page is for Nick only |

---

## Out of Scope

- AI chat widget
- AI voice assistant
- SMS/email automations
- Analytics dashboard
- Loyalty program
- Payment processing (Stripe)
- Backend form submission (email)
- Acuity Scheduling integration
- Native mobile app
- Tech stack upgrades (Next.js 15+, React 19, Tailwind 4)
