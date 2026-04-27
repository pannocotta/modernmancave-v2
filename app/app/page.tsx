import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Download the App',
  description: 'Install Modern Mancave on your phone — no app store required. Add to your home screen for instant bookings and a native app experience.',
  alternates: { canonical: '/app' },
}

export default function AppPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-end pb-20 md:pb-28 pt-32 md:pt-40 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10" />
          <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none grain-overlay" />
        </div>

        {/* Corner accent brackets */}
        <div className="absolute top-20 left-6 md:top-28 md:left-12 z-30 w-12 h-12 md:w-16 md:h-16 border-t border-l border-brand-red/30" />
        <div className="absolute top-20 right-6 md:top-28 md:right-12 z-30 w-12 h-12 md:w-16 md:h-16 border-t border-r border-brand-red/30" />
        <div className="absolute bottom-20 left-6 md:bottom-28 md:left-12 z-30 w-12 h-12 md:w-16 md:h-16 border-b border-l border-brand-red/30" />
        <div className="absolute bottom-20 right-6 md:bottom-28 md:right-12 z-30 w-12 h-12 md:w-16 md:h-16 border-b border-r border-brand-red/30" />

        <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">PWA</span>
          <h1 className="font-headliner gradient-heading text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] mb-8">
            DOWNLOAD<br />THE APP
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
            No app store required. Add Modern Mancave to your home screen for instant bookings and a native app experience.
          </p>
        </div>
      </section>

      {/* Instructions */}
      <section className="relative section-blend-dark bg-zinc-950 py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-5 block">Installation</span>
              <h2 className="font-headliner gradient-heading text-5xl md:text-7xl lg:text-8xl leading-[0.85]">HOW TO<br />INSTALL</h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
                Takes less than a minute. Open the site in your phone&apos;s browser and follow the steps below for your device.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-800">

            {/* iOS */}
            <div className="bg-zinc-950 p-10 md:p-14">
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-8 block">iPhone / iPad</span>
              <ol className="space-y-8">
                {[
                  'Open modernmancave.com.au in Safari',
                  'Tap the Share button at the bottom of the screen',
                  'Scroll down and tap "Add to Home Screen"',
                  'Tap "Add" in the top right corner',
                ].map((step, i) => (
                  <li key={i} className="flex gap-6 items-start">
                    <span className="text-brand-red font-bold text-2xl leading-none w-6 shrink-0">{i + 1}</span>
                    <span className="text-gray-300 text-base leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Android */}
            <div className="bg-zinc-950 p-10 md:p-14">
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-8 block">Android</span>
              <ol className="space-y-8">
                {[
                  'Open modernmancave.com.au in Chrome',
                  'Tap the menu button (three dots) in the top right',
                  'Tap "Add to Home screen" or "Install app"',
                  'Tap "Add" or "Install" to confirm',
                ].map((step, i) => (
                  <li key={i} className="flex gap-6 items-start">
                    <span className="text-brand-red font-bold text-2xl leading-none w-6 shrink-0">{i + 1}</span>
                    <span className="text-gray-300 text-base leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 text-sm tracking-wide">Need help? Ask at any of our locations.</p>
          </div>

        </div>
      </section>

    </main>
  )
}
