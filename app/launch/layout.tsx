import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modern Mancave',
  description: 'Modern Mancave — quick booking and access for installed app users.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: '/launch' },
}

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return children
}
