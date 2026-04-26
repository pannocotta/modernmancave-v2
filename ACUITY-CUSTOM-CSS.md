# Acuity Custom CSS — Modern Mancave Branding

Paste this CSS into Acuity to match the Modern Mancave site (black bg, red accents, Poppins font).

---

## Step 1 — Apply colours in Acuity dashboard

1. Log into Acuity → **Customize Appearance**
2. Set:
   - **Primary colour:** `#FF0000`
   - **Background colour:** `#000000`
   - **Text colour:** `#FFFFFF`
   - **Logo:** upload Modern Mancave logo (white version on transparent bg)
3. Hide Acuity branding (Powerhouse plan setting) → toggle off "Powered by Acuity Scheduling"

---

## Step 2 — Paste this CSS

In Acuity dashboard → **Customize Appearance → Advanced CSS** (or wherever the custom CSS textarea lives on the Powerhouse plan), paste the block below.

```css
/* ─── Modern Mancave brand styling for Acuity scheduler ─── */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

body,
.scheduling-page,
input,
select,
textarea,
button {
  font-family: 'Poppins', system-ui, -apple-system, sans-serif !important;
  background-color: #000000 !important;
  color: #ffffff !important;
}

/* Headings */
h1, h2, h3, h4, h5,
.scheduling-page h1,
.scheduling-page h2,
.scheduling-page h3 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.02em !important;
  color: #ffffff !important;
}

/* Service / category blocks */
.appointment-type,
.service-list-item,
.category-list-item,
.calendar-day,
.time-slot,
.appt-type-info {
  background-color: #0a0a0a !important;
  border: 1px solid #1f1f1f !important;
  color: #ffffff !important;
  border-radius: 0 !important;
  transition: border-color 0.2s ease, background-color 0.2s ease !important;
}

.appointment-type:hover,
.service-list-item:hover,
.calendar-day:hover,
.time-slot:hover {
  border-color: #ff0000 !important;
  background-color: #111111 !important;
}

/* Selected states */
.appointment-type.selected,
.calendar-day.selected,
.time-slot.selected,
.calendar-day.active {
  background-color: #ff0000 !important;
  border-color: #ff0000 !important;
  color: #ffffff !important;
}

/* Prices */
.appointment-type .price,
.price,
.appt-type-price {
  color: #ff0000 !important;
  font-weight: 700 !important;
}

/* Primary buttons (Continue, Confirm, Book) */
button,
input[type="submit"],
.btn,
.button,
a.button,
.continue-button {
  background-color: #ff0000 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 999px !important;
  font-weight: 700 !important;
  font-size: 12px !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  padding: 14px 32px !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
  cursor: pointer !important;
}

button:hover,
input[type="submit"]:hover,
.btn:hover,
.button:hover,
.continue-button:hover {
  transform: scale(1.02) !important;
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.3) !important;
  background-color: #ff0000 !important;
}

/* Secondary / cancel buttons */
.btn-secondary,
.cancel-button,
button.cancel {
  background-color: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: #ffffff !important;
}

.btn-secondary:hover,
.cancel-button:hover {
  border-color: rgba(255, 255, 255, 0.4) !important;
  background-color: transparent !important;
}

/* Form inputs */
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
input[type="password"],
select,
textarea {
  background-color: #0a0a0a !important;
  border: 1px solid #2a2a2a !important;
  border-radius: 0 !important;
  color: #ffffff !important;
  padding: 14px 16px !important;
  font-size: 14px !important;
  font-family: 'Poppins', sans-serif !important;
}

input:focus,
select:focus,
textarea:focus {
  outline: none !important;
  border-color: #ff0000 !important;
  box-shadow: 0 0 0 1px #ff0000 !important;
}

/* Labels */
label,
.form-label {
  color: #888888 !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  margin-bottom: 6px !important;
}

/* Links */
a {
  color: #ff0000 !important;
}

a:hover {
  color: #ff3333 !important;
}

/* Dividers */
hr,
.divider {
  border-color: #1f1f1f !important;
  background-color: #1f1f1f !important;
}

/* Calendar header (month name, nav arrows) */
.calendar-header,
.month-name {
  color: #ffffff !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
}

/* Disabled / unavailable days */
.calendar-day.disabled,
.calendar-day.unavailable,
.time-slot.disabled {
  background-color: #050505 !important;
  color: #333333 !important;
  border-color: #0f0f0f !important;
  cursor: not-allowed !important;
}

/* Stripe payment block */
.payment-section,
.stripe-section,
.StripeElement {
  background-color: #0a0a0a !important;
  border: 1px solid #2a2a2a !important;
  padding: 16px !important;
}
```

---

## Step 3 — Test

1. Save in Acuity
2. Open `/booking` on the live site (or local dev) and confirm the embed renders dark
3. Walk through a test booking end-to-end — verify:
   - Service list reads cleanly on black
   - Calendar / time-slot selection states are visible
   - Form inputs match site
   - Buttons are red, rounded, hoverable
   - Stripe payment step renders correctly
4. Iterate on any selectors that didn't catch (Acuity's class names occasionally differ between accounts/plans — inspect the iframe and add overrides as needed)

---

## Notes

- Acuity's iframe is sandboxed, so the parent site's fonts can't pass through. We import Poppins from Google Fonts inside the CSS instead.
- The display headline font (Awakening) isn't used inside Acuity — it has no number glyphs and the dense booking UI suits Poppins better.
- If a selector doesn't take effect, right-click the iframe element in the browser, "Inspect Frame", and add the actual class name to this CSS.
