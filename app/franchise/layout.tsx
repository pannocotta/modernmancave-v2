import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise Opportunities',
  description: 'Own a Modern Mancave barbershop. Proven business, recognised brand, full operational support. Apply for a franchise location across regional Australia.',
  alternates: { canonical: '/franchise' },
}

export default function FranchiseLayout({ children }: { children: React.ReactNode }) {
  return children
}
