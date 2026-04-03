# Squire Setup Guide - Modern Mancave

**Status:** Documented but NOT ACTIVE  
**Last Updated:** 2026-03-16  
**Purpose:** Complete setup guide for when Tristan is ready to activate Squire (estimated: few months from now)

---

## What is Squire?

Squire is a barbershop management system that provides:
- Online booking system (widget + mobile app)
- Appointment scheduling
- Point of sale (POS)
- Staff management
- Client database
- Payment processing
- Marketing tools
- Analytics

**Website:** https://getsquire.com  
**Resources:** https://resources.getsquire.com/welcome/

---

## Setup Process Overview

### Phase 1: Account Setup (Tristan's responsibility)
1. **Sign Up** at https://getsquire.com
2. **Initial Configuration Call** - Squire onboarding team will:
   - Confirm shop details (Modern Mancave, Griffith, NSW)
   - Set up services (haircuts, fades, beard trims, etc.)
   - Configure pricing
   - Add staff/barbers
   - Set operating hours
   - Configure payment processing

3. **Contract** - Sign Squire agreement (pricing varies by features needed)

### Phase 2: Shop Configuration
**Info Needed:**
- Business name: Modern Mancave
- Address: Griffith, NSW (exact address)
- Phone: (Tristan's business line)
- Email: enquiries@modernmancave.com.au (once set up)
- Services: Pull from /prices page (Kids Cuts, Men's Cuts, Skin Fades, etc.)
- Staff: Tristan + any other barbers
- Hours: (Tristan to provide)

### Phase 3: Booking Widget Integration (Our job)

**Two Options:**

#### Option A: Direct Booking Link (Easiest)
Squire provides a unique booking URL:
```
https://widget.getsquire.com/v2/[shop-id]
```

We can:
1. Redirect /booking page to this URL
2. Or iframe it into our site

**Implementation:**
```tsx
// app/booking/page.tsx
export default function BookingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-headliner mb-8">
            BOOK YOUR <span className="text-[#ff0000]">APPOINTMENT</span>
          </h1>
          <iframe 
            src="https://widget.getsquire.com/v2/[SHOP_ID]"
            className="w-full min-h-[800px] border-0"
            title="Book Appointment"
          />
        </div>
      </section>
    </main>
  )
}
```

#### Option B: Embedded Widget with Script
If Squire provides embed code:
```html
<!-- Add to app/booking/page.tsx -->
<div id="squire-booking-widget"></div>
<script src="https://widget.getsquire.com/embed.js"></script>
<script>
  SquireWidget.init({
    shopId: '[SHOP_ID]',
    containerId: 'squire-booking-widget'
  });
</script>
```

### Phase 4: Mobile App Setup

**Two Apps:**

1. **Customer App** - "Squire" (iOS/Android)
   - Customers download from App Store/Google Play
   - Search for "Modern Mancave" in the app
   - Book appointments directly

2. **Barber App** - "Squire for Barbers" (iPad/tablet)
   - Staff use this to manage appointments
   - Check-in customers
   - Process payments
   - View schedule

**Setup:**
- Tristan needs to configure shop branding in Squire dashboard
- Upload logo (we have this ready)
- Set brand colors (red #ff0000, black #000000)
- App will be searchable by "Modern Mancave"

### Phase 5: Staff Training
Squire provides training on:
- How to use the schedule
- Managing walk-ins vs appointments
- Processing payments
- Handling cancellations/no-shows
- Using loyalty programs

---

## Website Integration Plan

### Current Setup (When Inactive)
/booking page shows:
- Phone number to call
- Operating hours
- Contact form

### Future Setup (When Active)

**Option 1: Full Integration (Recommended)**
```tsx
// app/booking/page.tsx
'use client'

import { useEffect } from 'react'

export default function BookingPage() {
  useEffect(() => {
    // Load Squire widget script
    const script = document.createElement('script')
    script.src = 'https://widget.getsquire.com/embed.js'
    script.async = true
    document.body.appendChild(script)
    
    return () => document.body.removeChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headliner text-center mb-8">
            BOOK YOUR <span className="text-[#ff0000]">APPOINTMENT</span>
          </h1>
          
          {/* Squire Widget Container */}
          <div 
            id="squire-booking-widget"
            className="bg-zinc-950 rounded-lg p-6"
          />
        </div>
      </section>
    </main>
  )
}
```

**Option 2: Simple Redirect**
/booking → redirects to https://modernmancave.getsquire.com

---

## Mobile App Branding

Once Squire account is active:

1. **Upload Assets:**
   - Logo: /public/logo.png (current site logo)
   - Hero image: /public/hero-text.png (Modern Mancave badge)
   - Colors: Red (#ff0000), Black (#000000), White (#ffffff)

2. **App Listing:**
   - Business name: Modern Mancave
   - Description: "The Riverina's Premier Barbershop - Griffith | Est 2017"
   - Location: Griffith, NSW
   - Services: (from /prices page)

3. **Custom Domain (optional):**
   - modernmancave.getsquire.com
   - Or custom booking.modernmancave.com.au

---

## Testing Checklist (Before Going Live)

- [ ] Shop details correct in Squire dashboard
- [ ] All services added with correct pricing
- [ ] Staff/barbers configured
- [ ] Operating hours set
- [ ] Payment processing tested
- [ ] Booking widget loads on /booking page
- [ ] Widget is mobile-responsive
- [ ] Test booking flow (book appointment, receive confirmation)
- [ ] Email notifications working
- [ ] SMS notifications working (if enabled)
- [ ] Staff can see appointments in barber app
- [ ] POS system tested (if using Squire for payments)
- [ ] Cancellation/rescheduling tested

---

## Cost Considerations

Squire pricing (as of 2026):
- **Basic:** ~$50-100/month per location
- **Pro:** ~$100-200/month (includes more features)
- **Transaction fees:** Usually 2-3% on payments processed through Squire

**What Tristan needs to confirm:**
- Which plan tier
- Payment processing fees
- Any setup/onboarding costs
- Contract length

---

## Going Live Steps

When Tristan is ready:

1. **Confirm Squire account is active**
   - Get shop ID from Squire dashboard
   - Get booking widget URL/embed code

2. **Update website:**
   ```bash
   # Edit app/booking/page.tsx with Squire shop ID
   # Test locally
   npm run dev
   
   # Deploy to production
   vercel --prod
   ```

3. **Test booking flow:**
   - Book test appointment
   - Verify it shows in Squire dashboard
   - Confirm notifications sent

4. **Update marketing:**
   - Add booking link to Instagram bio
   - Update Google Business Profile with booking link
   - Social media announcement

5. **Staff training:**
   - Squire team provides training
   - Ensure all staff comfortable with system

---

## Turning It Off (Rollback Plan)

If Squire needs to be disabled:

1. **Revert booking page to contact form:**
   ```bash
   git checkout [previous-commit] app/booking/page.tsx
   vercel --prod
   ```

2. **Alternative:** Keep simple HTML booking page ready:
   - Show phone number
   - Show hours
   - Simple contact form
   - "Call to book" CTA

3. **Update social media:**
   - Remove booking links
   - Update to "Call to book"

---

## Important Files

- `/app/booking/page.tsx` - Booking page (currently placeholder)
- `/public/logo.png` - Logo for Squire branding
- `/public/hero-text.png` - Badge/branding image
- `/app/prices/page.tsx` - Services list (reference for Squire setup)

---

## Next Steps (When Ready to Activate)

1. **Tristan signs up for Squire** → receives shop ID
2. **Squire onboarding call** → shop configured
3. **Get booking widget code** from Squire dashboard
4. **We implement widget** on /booking page
5. **Test thoroughly** before promoting
6. **Go live** and update marketing

---

## Support Contacts

- **Squire Support:** https://getsquire.my.site.com/help
- **Squire Sales:** (from website once Tristan inquires)
- **Our Implementation:** Arlo (this system) handles technical integration

---

## Notes for Tristan

- **Timeline:** You mentioned "few months" - no rush
- **Cost:** Confirm Squire pricing before committing
- **Alternative:** If Squire is too expensive, we can build a simple booking system with Google Calendar integration
- **Testing:** We'll set up a full test before making it live
- **Rollback:** Can disable anytime if it doesn't work out

---

**STATUS: READY TO IMPLEMENT WHEN TRISTAN GIVES THE GO-AHEAD**
