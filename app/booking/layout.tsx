import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Appointment in Griffith',
  description: 'Book your appointment with Nick at Modern Mancave Banna Avenue. Skip the walk-in queue, lock in a private barber experience with full payment online.',
  alternates: { canonical: '/booking' },
}

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children
}
