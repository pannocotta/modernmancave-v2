import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

import { Analytics } from '@vercel/analytics/next'
import PageTransition from '@/components/PageTransition'
import Footer from '@/components/Footer'
import FloatingBookButton from '@/components/FloatingBookButton'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ff0000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://modernmancave.com.au'),
  title: {
    default: 'Premium Barbershop in Griffith NSW | Modern Mancave',
    template: '%s | Modern Mancave',
  },
  description: 'Precision hairstyling, beard trims, and hot towel shaves at Modern Mancave Griffith. Three locations, walk-ins welcome, online booking with Nik.',
  keywords: ['barbershop', 'Griffith', 'NSW', 'mens haircut', 'beard trim', 'hot towel shave', 'fade', 'Modern Mancave'],
  manifest: '/manifest.json',
  alternates: { canonical: '/' },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Modern Mancave',
  },
  openGraph: {
    title: 'Modern Mancave — Premium Barbershop in Griffith NSW',
    description: 'Precision hairstyling, beard trims, and hot towel shaves. Three locations in Griffith. Walk-ins welcome.',
    url: 'https://modernmancave.com.au',
    siteName: 'Modern Mancave',
    images: [{ url: '/hero-badge-new.png', width: 1200, height: 1200, alt: 'Modern Mancave Barbershop' }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Mancave — Premium Barbershop in Griffith NSW',
    description: 'Precision hairstyling, beard trims, and hot towel shaves. Three locations in Griffith.',
    images: ['/hero-badge-new.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preload" href="/fonts/AwakenningPersonalUse-DOLPD.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BarberShop',
              name: 'Modern Mancave',
              description: 'Premium barbershop in Griffith, NSW. Precision hairstyling, beard trims, and hot towel shaves since 2017.',
              url: 'https://modernmancave.com.au',
              telephone: '+61458520456',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '224a Banna Ave',
                addressLocality: 'Griffith',
                addressRegion: 'NSW',
                postalCode: '2680',
                addressCountry: 'AU',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.5',
                reviewCount: '183',
              },
              openingHoursSpecification: [
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'], opens: '08:00', closes: '17:30' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '08:00', closes: '18:00' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '16:00' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '16:00' },
              ],
              sameAs: [
                'https://www.instagram.com/modern_mancave/',
                'https://www.facebook.com/TristansBarberShop',
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>
        <PageTransition>
          {children}
          <Footer />
        </PageTransition>
        <FloatingBookButton />
        <Analytics />
      </body>
    </html>
  )
}
