import { loadStripe, type Stripe } from '@stripe/stripe-js'

// Acuity's connected Stripe account — pulled from the public scheduling
// page (window.BUSINESS.paymentProcessors). Cards tokenised with this
// configuration belong to Acuity's Stripe, which is what their API
// expects when we POST /appointments with a stripeToken.
const ACUITY_PUBLISHABLE_KEY = 'pk_live_Y1CqsAphMF6hE2OORZmZSBYl'
const ACUITY_STRIPE_ACCOUNT = 'acct_1TPXoBAlYlwK6QLV'

let stripePromise: Promise<Stripe | null> | null = null

export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    stripePromise = loadStripe(ACUITY_PUBLISHABLE_KEY, {
      stripeAccount: ACUITY_STRIPE_ACCOUNT,
    })
  }
  return stripePromise
}
