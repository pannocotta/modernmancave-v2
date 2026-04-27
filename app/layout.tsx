import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

import { CartProvider } from '@/lib/cart-context'
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
  title: 'Modern Mancave - Premium Grooming for the Modern Man',
  description: 'Precision hairstyling, beard trims, and hot towel shaves. Where style begins with confidence.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Modern Mancave',
  },
  openGraph: {
    title: 'Modern Mancave - Premium Grooming for the Modern Man',
    description: 'Precision hairstyling, beard trims, and hot towel shaves. Griffith, NSW.',
    url: 'https://modernmancave.com.au',
    siteName: 'Modern Mancave',
    images: [{ url: '/hero-badge.png', width: 1200, height: 1200, alt: 'Modern Mancave' }],
    locale: 'en_AU',
    type: 'website',
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
        <link rel="preload" href="/fonts/AwakenningPersonalUse-DOLPD.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
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
        <CartProvider>
          <PageTransition>
            {children}
            <Footer />
          </PageTransition>
          <FloatingBookButton />
        </CartProvider>
      </body>
    </html>
  )
}
