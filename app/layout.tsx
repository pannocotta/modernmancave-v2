import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display, Bebas_Neue } from 'next/font/google'
import './globals.css'
import PWAPrompt from '@/components/PWAPrompt'
import { CartProvider } from '@/lib/cart-context'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preload" href="/fonts/AwakenningPersonalUse-DOLPD.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} ${bebas.variable} font-sans`}>
        <CartProvider>
          {children}
          <PWAPrompt />
        </CartProvider>
      </body>
    </html>
  )
}
