import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modern Mancave Merch',
  description: 'Modern Mancave branded apparel and merchandise — t-shirts, hoodies, hats. Available in-store at all Griffith locations.',
  alternates: { canonical: '/shop' },
}

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children
}
