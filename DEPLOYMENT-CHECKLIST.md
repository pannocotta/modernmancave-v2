# Squire Activation Checklist

**Use this checklist when Tristan is ready to activate Squire booking.**

---

## Pre-Activation (Tristan's Part)

- [ ] Tristan signs up at https://getsquire.com
- [ ] Completes onboarding call with Squire team
- [ ] Shop configured in Squire dashboard
- [ ] Services & pricing added
- [ ] Staff/barbers added
- [ ] Operating hours set
- [ ] Payment processing configured
- [ ] Tristan receives **Shop ID** from Squire

---

## Technical Integration (Our Part)

### 1. Get Shop ID
```
Shop ID: _______________ (Tristan provides this)
```

### 2. Update Booking Page

**Option A: Using embed script (recommended)**
```bash
# 1. Open the Squire-ready file
cd /root/modernmancave-v2

# 2. Edit page.squire.tsx.example
# Update line 18: const SQUIRE_SHOP_ID = 'YOUR_SHOP_ID_HERE'
# Replace with actual shop ID

# 3. Backup current booking page
cp app/booking/page.tsx app/booking/page.whatsapp-backup.tsx

# 4. Activate Squire version
cp app/booking/page.squire.tsx.example app/booking/page.tsx

# 5. Test locally
npm run dev
# Visit http://localhost:3000/booking
# Verify widget loads

# 6. Deploy
vercel --prod
```

**Option B: Simple iframe (if embed script fails)**
```tsx
// Replace widget container in page.tsx with:
<iframe 
  src="https://widget.getsquire.com/v2/[SHOP_ID]"
  className="w-full min-h-[800px] border-0 rounded-lg"
  title="Book Appointment"
/>
```

---

## Testing Checklist

- [ ] Booking page loads without errors
- [ ] Widget displays correctly on desktop
- [ ] Widget displays correctly on mobile
- [ ] Can select a service
- [ ] Can select a date/time
- [ ] Can select a barber
- [ ] Can complete a test booking
- [ ] Test booking appears in Squire dashboard
- [ ] Confirmation email/SMS received (if configured)
- [ ] Payment processing works (if enabled)

---

## Go-Live Checklist

- [ ] Update Google Business Profile with booking link
- [ ] Update Instagram bio with booking link
- [ ] Post social media announcement
- [ ] Test from customer perspective (have friend book)
- [ ] Monitor first few bookings closely
- [ ] Verify Tristan can manage bookings in Squire app

---

## Post-Launch Monitoring

**Day 1:**
- [ ] Check all bookings came through correctly
- [ ] Verify notifications working
- [ ] Confirm payment processing (if enabled)

**Week 1:**
- [ ] Review booking volume
- [ ] Check for any customer complaints/issues
- [ ] Verify Tristan comfortable with system

**Month 1:**
- [ ] Compare booking volume to pre-Squire
- [ ] Check no-show rate (should be lower with upfront payment)
- [ ] Review whether cost is justified

---

## Rollback Plan (If Needed)

**To revert to WhatsApp booking:**

```bash
cd /root/modernmancave-v2

# Restore backup
cp app/booking/page.whatsapp-backup.tsx app/booking/page.tsx

# Deploy
vercel --prod
```

**Then:**
- Update social media (remove booking links)
- Update Google Business (remove booking link)
- Announce "Book via WhatsApp or call"

---

## Common Issues & Fixes

### Widget not loading
**Fix:** Check browser console for errors, verify Shop ID is correct

### Widget shows wrong services
**Fix:** Update services in Squire dashboard

### Bookings not showing in Squire
**Fix:** Verify integration using correct Shop ID, check Squire status page

### Mobile display issues
**Fix:** Adjust iframe min-height, test on actual devices

---

## Support Contacts

**Squire Technical Support:**
- Help Center: https://getsquire.my.site.com/help
- Phone: (from Squire dashboard)

**Our Integration:**
- Documented in SQUIRE-SETUP.md
- Code in app/booking/page.tsx

---

## Cost Tracking

**Monthly costs to monitor:**
- Squire subscription: $______/month
- Transaction fees: ____% per booking
- Total monthly cost: $______

**Compare to:**
- No-show reduction savings
- Time saved on manual booking
- Increased booking volume

**Worth it if:** Benefits > Costs

---

## Notes

Add any shop-specific notes here:

```
[Empty - add notes during setup]
```

---

**STATUS: READY TO DEPLOY WHEN SHOP ID PROVIDED**

Last updated: 2026-03-16
