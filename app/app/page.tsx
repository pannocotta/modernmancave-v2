import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Download App - Modern Mancave',
  description: 'Install the Modern Mancave app on your phone for instant bookings and exclusive deals.',
}

export default function AppPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section - Book on Our App */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-headliner gradient-heading mb-6 leading-tight">
                BOOK ON<br/>
                OUR APP
              </h1>
              <div className="w-20 h-1 bg-gray-500 mb-8"></div>
              <p className="text-xl text-gray-300 mb-8">
                Download the Modern Mancave app for instant bookings, exclusive deals, and a seamless grooming experience.
              </p>

              {/* Install note */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 inline-block mb-8">
                <p className="text-gray-400 text-sm">Visit modernmancave.com.au on your phone to install</p>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[640px] bg-zinc-900 rounded-[3rem] p-4 shadow-2xl border-8 border-zinc-800">
                  <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden">
                    {/* Placeholder for app screenshot */}
                    <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📱</div>
                        <p className="text-gray-500">App Screenshot<br/>Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headliner gradient-heading text-center mb-4">
            HOW TO INSTALL
          </h2>
          <div className="w-20 h-1 bg-gray-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* iOS Instructions */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <h3 className="text-2xl font-headliner">iPhone / iPad</h3>
              </div>
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-brand-red font-bold">1.</span>
                  <span>Scan the QR code or visit the website in Safari</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-red font-bold">2.</span>
                  <span>Tap the Share button at the bottom</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-red font-bold">3.</span>
                  <span>Scroll down and tap &quot;Add to Home Screen&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-red font-bold">4.</span>
                  <span>Tap &quot;Add&quot; in the top right corner</span>
                </li>
              </ol>
            </div>

            {/* Android Instructions */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C4.1 11.26 2.5 13.96 2.5 17h19c0-3.04-1.6-5.74-3.9-7.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
                </svg>
                <h3 className="text-2xl font-headliner">Android</h3>
              </div>
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-brand-red font-bold">1.</span>
                  <span>Scan the QR code or visit the website in Chrome</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-red font-bold">2.</span>
                  <span>Tap the menu button (three dots) in the top right</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-red font-bold">3.</span>
                  <span>Tap &quot;Add to Home screen&quot; or &quot;Install app&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-red font-bold">4.</span>
                  <span>Tap &quot;Add&quot; or &quot;Install&quot; to confirm</span>
                </li>
              </ol>
            </div>

          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Need help? Contact us at any of our locations
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
