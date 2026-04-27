import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire the Mobile Studio',
  description: 'Enquire about hiring the Modern Mancave mobile barber studio for your wedding, corporate event, or party in Griffith and the Riverina.',
  alternates: { canonical: '/mobile-barber-enquiry' },
}

export default function MobileBarberEnquiryLayout({ children }: { children: React.ReactNode }) {
  return children
}
