import type { Metadata } from 'next'
import { Poppins, Playfair_Display, Great_Vibes, Bebas_Neue, Sancreek, Montserrat } from 'next/font/google'
import './globals.css'
import PWAPrompt from '@/components/PWAPrompt'
import { CartProvider } from '@/lib/cart-context'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'block'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'block'
})

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-script',
  display: 'block'
})

const bebas = Bebas_Neue({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-bebas',
  display: 'block'
})

const sancreek = Sancreek({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-sancreek',
  display: 'block'
})

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700'],
  variable: '--font-montserrat',
  display: 'block'
})

export const metadata: Metadata = {
  title: 'Modern Mancave - Premium Grooming for the Modern Man',
  description: 'Precision hairstyling, beard trims, and hot towel shaves. Where style begins with confidence.',
  manifest: '/manifest.json',
  themeColor: '#ff0000',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
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
      <body className={`${poppins.variable} ${playfair.variable} ${greatVibes.variable} ${bebas.variable} ${sancreek.variable} ${montserrat.variable} font-sans`}>
        <CartProvider>
          {children}
          <PWAPrompt />
        </CartProvider>
      </body>
    </html>
  )
}
