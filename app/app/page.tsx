import type { Metadata } from 'next'
import Header from '@/components/Header'
import InstallExperience from '@/components/InstallExperience'

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

      {/* Install — adapts to the user's device */}
      <section className="relative section-blend-dark bg-black py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Installation</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <InstallExperience />
          <p className="text-gray-600 text-sm tracking-wide text-center mt-12">
            Need help? Ask at any of our locations.
          </p>
        </div>
      </section>

      {/* Why install */}
      <section className="relative bg-zinc-950 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">Why Install</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="grid sm:grid-cols-3 gap-px border border-zinc-800/50 bg-zinc-800/50">
            {[
              {
                label: 'No App Store',
                detail: 'Installs directly from your browser. No downloads, no waiting, no account needed.',
              },
              {
                label: 'Full Screen',
                detail: 'Opens in its own window without browser bars. Looks and feels like a native app.',
              },
              {
                label: 'One Tap Booking',
                detail: 'Lock in your next cut from your home screen. Skip typing the address every time.',
              },
            ].map(({ label, detail }) => (
              <div key={label} className="bg-black px-8 py-8">
                <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-3">{label}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
