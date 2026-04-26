# Acuity Custom CSS — Modern Mancave Branding

Paste this CSS into Acuity to brand the scheduler to match the Modern Mancave site.

---

## Step 1 — Apply colours in Acuity dashboard

1. Log into Acuity → **Customize Appearance**
2. Set:
   - **Primary colour:** `#FF0000`
   - **Background colour:** `#000000`
   - **Text colour:** `#FFFFFF`
   - **Logo:** upload Modern Mancave logo (white version, transparent bg)
3. (Powerhouse plan) Toggle off "Powered by Acuity Scheduling" branding

---

## Step 2 — Paste this CSS

In Acuity dashboard → **Customize Appearance → Custom CSS** (textarea on the Powerhouse plan), paste the block below.

> **Why these selectors:** Acuity uses CSS-in-JS — most class names are unstable hashes like `css-1myzyg8` that change every Acuity deploy. This CSS targets only the **stable** semantic classes (`.business-container`, `.select-item`, `.btn`, etc.) and tag selectors (`body`, `h1`, `button`, `input`).

```css
/* ──────────────────────────────────────────
   Modern Mancave brand styling for Acuity
   ────────────────────────────────────────── */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

/* Global */
html, body {
  background-color: #000000 !important;
  color: #ffffff !important;
  font-family: 'Poppins', system-ui, -apple-system, sans-serif !important;
}

body * {
  font-family: 'Poppins', system-ui, -apple-system, sans-serif !important;
}

/* Outer wrappers */
.business-container,
.business-container > div {
  background-color: #000000 !important;
  color: #ffffff !important;
}

/* Top business name / shop name heading */
.business-name {
  color: #ffffff !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
}

/* Step titles ("Select an appointment type", "Choose a date", etc.) */
.step-title {
  color: #ffffff !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  font-size: 18px !important;
}

/* Section headings */
h1, h2, h3, h4, h5 {
  color: #ffffff !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
}

/* Service / time-slot rows (Acuity reuses .select-item for several lists) */
.select-item {
  background-color: #0a0a0a !important;
  border: 1px solid #1f1f1f !important;
  border-radius: 0 !important;
  color: #ffffff !important;
  transition: border-color 0.2s ease, background-color 0.2s ease !important;
  padding: 16px !important;
  margin-bottom: 8px !important;
}

.select-item:hover {
  border-color: #ff0000 !important;
  background-color: #111111 !important;
}

/* Service name inside each row */
.appointment-type-name {
  color: #ffffff !important;
  font-weight: 600 !important;
  font-size: 15px !important;
}

/* Primary buttons (Continue, Confirm, Book, Select) */
.btn,
button[type="submit"],
input[type="submit"] {
  background-color: #ff0000 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 999px !important;
  font-weight: 700 !important;
  font-size: 12px !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  padding: 14px 32px !important;
  cursor: pointer !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.btn:hover,
button[type="submit"]:hover,
input[type="submit"]:hover {
  background-color: #ff0000 !important;
  transform: scale(1.02) !important;
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.3) !important;
}

/* Form inputs */
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
input[type="password"],
input[type="search"],
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
label {
  color: #aaaaaa !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.18em !important;
  text-transform: uppercase !important;
}

/* Links */
a {
  color: #ff0000 !important;
}

a:hover {
  color: #ff3333 !important;
}

/* Separators / dividers */
[role="separator"],
hr {
  background-color: #1f1f1f !important;
  border-color: #1f1f1f !important;
  height: 1px !important;
}

/* Calendar / time-picker (rendered later in the flow — defensive selectors) */
[role="grid"],
[role="gridcell"],
[role="button"][aria-label*="date" i],
[role="button"][aria-label*="time" i] {
  background-color: #0a0a0a !important;
  color: #ffffff !important;
  border-color: #1f1f1f !important;
}

[role="gridcell"]:hover,
[role="button"][aria-label*="date" i]:hover,
[role="button"][aria-label*="time" i]:hover {
  border-color: #ff0000 !important;
  background-color: #111111 !important;
}

[aria-selected="true"],
[aria-pressed="true"] {
  background-color: #ff0000 !important;
  color: #ffffff !important;
  border-color: #ff0000 !important;
}

[aria-disabled="true"],
[disabled] {
  color: #444444 !important;
  background-color: #050505 !important;
  cursor: not-allowed !important;
}

/* Stripe payment block */
.StripeElement,
.__PrivateStripeElement {
  background-color: #0a0a0a !important;
  border: 1px solid #2a2a2a !important;
  padding: 14px !important;
}
```

---

## Step 3 — Test

1. Save the CSS in Acuity
2. Reload `/booking` on the live site (or local dev) — embed should now be black with red accents
3. Walk through a test booking end-to-end:
   - Select a service → service rows should be dark with red hover
   - Pick a date → calendar should be dark, today/selected red
   - Pick a time → time slots dark, hover red, selected red
   - Fill the form → inputs dark with white text, red focus ring
   - Pay through Stripe → Stripe element dark
4. **If something doesn't restyle:** open `/booking` in Chrome, right-click the iframe, **Inspect Frame Source** (or Inspect → switch context to the Acuity iframe), find the offending element's actual class/role, and let me know — I'll add a targeted override.

---

## Why some selectors look defensive

Acuity uses Emotion (CSS-in-JS) so most class names are auto-generated hashes that change on every Acuity deploy. Targeting `.css-1myzyg8` would break next week.

Stable hooks we can use:
- **Semantic class names:** `.business-container`, `.business-name`, `.step-title`, `.select-item`, `.appointment-type-name`, `.btn`, `.StripeElement`
- **Tag selectors:** `body`, `h1`–`h5`, `button`, `input`, `select`, `textarea`, `label`, `a`, `hr`
- **ARIA roles & states:** `[role="grid"]`, `[role="gridcell"]`, `[aria-selected="true"]`, `[aria-disabled="true"]`

If Acuity ever changes a semantic class, we'll see it on a regression check and patch.
