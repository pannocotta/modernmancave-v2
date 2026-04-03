# Acuity Scheduling Setup - Modern Mancave

**Status:** APPROVED - Moving forward with Acuity  
**Last Updated:** 2026-03-16  
**Plan:** Powerhouse ($49/month) for API access + custom app

---

## Why Acuity?

✅ **Full REST API** - Build completely custom branded app  
✅ **Client Management** - Full CRM with notes, history, exports  
✅ **True White-label** - Zero Acuity branding in our app  
✅ **Proven Platform** - Handles all booking/payment logic  
✅ **Custom CSS** - Fully branded website embed  
✅ **Stripe Integration** - Direct payment processing  

**Cost:** $49/month (Powerhouse plan)  
**vs Squire:** $100/month with no API  
**vs Fresha:** Free but can't build custom app  

---

## Setup Process

### Phase 1: Acuity Account (Tristan)

**1. Sign Up**
- Go to https://acuityscheduling.com
- Choose **Powerhouse Plan** ($49/month)
- 7-day free trial to test

**2. Configure Business Details**
```
Business Name: Modern Mancave
Location: Griffith, NSW
Phone: (Tristan's business number)
Email: enquiries@modernmancave.com.au
Time Zone: Australia/Sydney
```

**3. Add Services**

Pull from `/prices` page:

**Kids Cuts:**
- Baby - $30 (30min)
- Baby Double Zero Fade - $35 (30min)
- Primary - $35 (30min)
- Primary School, Skin Fade - $38 (30min)
- High School - $35 (30min)
- High School, Skin Fade - $38 (30min)

**Men's Cuts:**
- Men's Cut - $40 (30min)
- Men's Cut & Beard Trim - $50 (45min)
- Men's Cut, Beard Trim, Line up & Shape - $58 (60min)

**Skin Fades:**
- Skin Fade - $45 (30min)
- Skin Fade, Beard Trim, Line up & Shape - $60 (60min)

**Buzz Cuts:**
- Buzz Cut - $30 (20min)
- Buzz Cut & Beard Trim - $40 (30min)
- Buzz Cut, Beard Trim, Line up & Shape - $50 (45min)

**Head Shaves:**
- Head Shave - $40 (30min)
- Head Shave & Beard Trim - $45 (40min)
- Head Shave, Beard Trim, Line up & Shape - $60 (60min)

**Hot Towel Shaves:**
- Hot Towel Shave - $45 (45min)
- Hot Towel Shave & Men's Hair Cut - $65 (90min)

**Beard Services:**
- Beard Trim - $20 (15min)
- Beard Trim, Line Up & Shape - $25 (20min)

**Extras:**
- Hair Art - $15 (10min)
- Pensioner (any haircut) - $30 (30min)

**Premium:**
- Teeth Whitening - $250 (90min)

**4. Add Staff/Calendar**
- Add barbers (or just one calendar if solo)
- Set working hours
- Configure breaks/time off

**5. Enable Payments**
- Connect Stripe account
- Set deposit requirements (recommend 50% or full payment)
- Configure cancellation policy

**6. Get API Credentials**
- Settings → Integrations → API
- Generate API Key
- Note down User ID
- **Send both to us** (we need these for the app)

---

## Phase 2: Website Integration (Our Job)

### Embed Widget on /booking Page

**Setup:**
1. Get Acuity embed URL from dashboard
2. Customize with CSS to match site branding
3. Deploy to /booking page

**Code:**
```tsx
// app/booking/page.tsx
'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'

const ACUITY_EMBED_URL = 'https://app.acuityscheduling.com/schedule.php?owner=[ID]'

export default function BookingPage() {
  useEffect(() => {
    // Load Acuity embed script
    const script = document.createElement('script')
    script.src = 'https://embed.acuityscheduling.com/js/embed.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center pt-24 md:pt-32 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=1080&fit=crop&q=80"
            alt="Modern Mancave"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="relative z-20 w-full px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-headliner mb-4">
              BOOK YOUR <span className="text-[#ff0000]">APPOINTMENT</span>
            </h1>
            <div className="w-16 md:w-20 h-1 bg-[#ff0000] mx-auto mb-6"></div>
            <p className="text-base md:text-xl text-gray-300">
              Select your service and preferred time below
            </p>
          </div>
        </div>
      </section>

      {/* Acuity Widget */}
      <section className="py-12 md:py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <iframe 
            src={ACUITY_EMBED_URL}
            width="100%"
            height="800"
            frameBorder="0"
            className="rounded-lg"
          />
        </div>
      </section>
    </main>
  )
}
```

**Custom CSS** (Acuity dashboard → Customize):
```css
/* Match Modern Mancave branding */
.acuity-embed {
  --primary-color: #ff0000;
  --bg-color: #000000;
  --text-color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

.acuity-button {
  background: #ff0000 !important;
  color: white !important;
  font-weight: bold !important;
}

.acuity-button:hover {
  background: #cc0000 !important;
}
```

---

## Phase 3: Custom Mobile App (Our Job)

### Tech Stack:
- **React Native** (iOS + Android from one codebase)
- **Expo** (faster development)
- **Acuity API** (backend)
- **Stripe** (payments)

### App Features:

**1. Browse Services**
- List all services with prices
- Photos (barber chair, tools, shop)
- Filter by category

**2. Book Appointment**
- Pick service
- Select date/time (pulled from Acuity API)
- Choose barber (if multiple)
- Add notes (hair preferences)

**3. Payment**
- Stripe Checkout
- Save cards for future
- Deposit or full payment

**4. My Bookings**
- Upcoming appointments
- Past appointments
- Rebook with one tap

**5. Account**
- Save contact info
- Preferences (favorite barber, usual cut)
- Loyalty points (future)

### API Integration:

**Acuity API Endpoints We'll Use:**
```javascript
// Get available times
GET /api/v1/availability/times
  ?appointmentTypeID=1
  &calendarID=123
  &month=2026-03

// Create appointment
POST /api/v1/appointments
{
  "datetime": "2026-03-20T14:00:00",
  "appointmentTypeID": 1,
  "firstName": "John",
  "lastName": "Smith",
  "email": "[email protected]",
  "phone": "0412345678"
}

// Get client appointments
GET /api/v1/appointments
  ?email=[email protected]

// Cancel/reschedule
PUT /api/v1/appointments/{id}/reschedule
```

### Branding:

**Colors:**
- Primary: #ff0000 (red)
- Background: #000000 (black)
- Accent: #ffffff (white)

**Typography:**
- Headers: Headliner font
- Body: Montserrat

**Assets Needed:**
- App icon (1024x1024)
- Splash screen
- Service photos
- Barber photos (if multiple staff)

### App Screens:

```
App Structure:
├── Splash Screen (Modern Mancave logo)
├── Home
│   ├── Featured services
│   ├── Quick book button
│   └── Recent bookings
├── Services
│   ├── Browse all services
│   ├── Service details
│   └── Book button
├── Booking Flow
│   ├── Select service
│   ├── Pick date/time
│   ├── Enter details
│   ├── Payment
│   └── Confirmation
├── My Bookings
│   ├── Upcoming
│   ├── Past
│   └── Rebook
└── Account
    ├── Profile
    ├── Preferences
    └── Settings
```

### Development Timeline:

**Week 1:**
- Set up project
- Design screens (Figma)
- Get Tristan approval on design

**Week 2:**
- Build core screens
- Integrate Acuity API
- Implement booking flow

**Week 3:**
- Payment integration (Stripe)
- Testing
- Bug fixes

**Week 4:**
- Polish & final testing
- Submit to App Store + Google Play
- Tristan testing/feedback

**Total: 3-4 weeks for v1**

---

## Phase 4: App Store Deployment

### Apple App Store:

**Requirements:**
- Apple Developer Account ($99 USD/year)
- App built & tested
- Screenshots (6.5" iPhone, 12.9" iPad)
- App icon
- Privacy policy
- Terms of service

**Tristan Needs:**
- Create Apple Developer account (under his name/business)
- Or we use shared account and transfer later

### Google Play Store:

**Requirements:**
- Google Play Developer Account ($25 one-time)
- App built & tested
- Screenshots (phone + tablet)
- App icon
- Privacy policy
- Store listing description

**Submission Process:**
- Submit app
- Review (1-3 days Apple, hours for Google)
- Go live
- Update marketing

---

## Testing Plan

### Website Embed Test:
- [ ] Widget loads without errors
- [ ] Can select service
- [ ] Can pick date/time
- [ ] Payment works
- [ ] Confirmation email sent
- [ ] Booking appears in Acuity dashboard

### App Test:
- [ ] Installs on iOS
- [ ] Installs on Android
- [ ] Can browse services
- [ ] Booking flow works end-to-end
- [ ] Payment processes
- [ ] Push notifications work
- [ ] Can view past bookings
- [ ] Can rebook

---

## Cost Breakdown

**Monthly:**
- Acuity Powerhouse: $49/month
- Stripe fees: 2.9% + 30¢ per transaction

**One-time:**
- Apple Developer: $99/year
- Google Play: $25 one-time
- App development: (already budgeted - we're building it)

**Total monthly: ~$50-60**

---

## Going Live Checklist

**Tristan's Part:**
- [ ] Acuity account created
- [ ] Services configured
- [ ] Staff/calendar set up
- [ ] Stripe connected
- [ ] API credentials generated
- [ ] Sent credentials to us

**Our Part:**
- [ ] Website embed deployed
- [ ] Custom CSS applied
- [ ] App built & tested
- [ ] Submitted to app stores
- [ ] Apps approved & live

**Marketing:**
- [ ] Update Instagram bio with booking link
- [ ] Update Google Business Profile
- [ ] Social media announcement
- [ ] "Download our app" posts

---

## Maintenance & Updates

**Website:**
- Update services/pricing in Acuity dashboard
- Changes reflect automatically on site

**App:**
- Bug fixes: As needed
- Feature updates: Quarterly
- App store updates: Submit when needed

**Support:**
- Acuity handles booking backend
- We handle app issues
- Tristan manages day-to-day bookings

---

## Next Steps

**Immediate (This Week):**
1. Tristan signs up for Acuity ($49/month)
2. Configures services from price list
3. Sends us API credentials

**Short-term (Next 2 Weeks):**
1. We deploy website embed
2. Start app development
3. Design review with Tristan

**Medium-term (3-4 Weeks):**
1. App testing
2. Submit to stores
3. Launch marketing campaign

---

## Files We'll Create

```
/root/modernmancave-v2/
├── app/booking/page.acuity.tsx      # Acuity embed (ready)
├── mobile-app/                      # React Native app
│   ├── src/
│   │   ├── screens/
│   │   ├── components/
│   │   ├── api/acuity.ts           # API integration
│   │   └── config/branding.ts      # Colors, fonts
│   ├── assets/
│   │   ├── logo.png
│   │   └── splash.png
│   └── app.json                    # App config
└── ACUITY-APP-GUIDE.md             # App development docs
```

---

**STATUS: READY TO START - WAITING FOR ACUITY ACCOUNT**

When Tristan creates Acuity account and sends API credentials, we can:
1. Deploy website booking in 30 minutes
2. Start app development same day
3. Have working prototype in 1 week
