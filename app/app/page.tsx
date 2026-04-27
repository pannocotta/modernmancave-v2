import type { Metadata } from 'next'
import Header from '@/components/Header'
import AppMockup from '@/components/AppMockup'
import { IOS_STEPS, ANDROID_STEPS, PlatformInstructions } from '@/components/InstallExperience'

export const metadata: Metadata = {
  title: 'Download the App',
  description: 'Install Modern Mancave on your phone — no app store required. Add to your home screen for instant bookings and a native app experience.',
  alternates: { canonical: '/app' },
}

const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&bgcolor=000000&color=FFFFFF&margin=8&data=${encodeURIComponent('https://modernmancave.com.au/launch')}`

export default function AppPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero — 2-col on desktop, mockup-on-top on mobile */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10" />
          <div
            className="absolute inset-0 z-10 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none grain-overlay" />
          <div className="absolute top-0 left-0 w-full h-px z-10 bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px z-10 bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-red/[0.18] blur-3xl rounded-full" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/[0.1] blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-red/[0.08] blur-3xl rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full border border-brand-red/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full border border-brand-red/5" />
              </div>
              <AppMockup />
            </div>

            <div className="order-2 md:order-1 text-center md:text-left">
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">PWA</span>
              <h1 className="font-headliner gradient-heading text-5xl md:text-7xl lg:text-8xl leading-[0.85] mb-8">
                DOWNLOAD<br />THE APP
              </h1>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                No app store required. Add Modern Mancave to your home screen for instant bookings and a native app experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1 — On a desktop? Scan this QR with your phone */}
      <section className="relative bg-black py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">On Your Computer?</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="border border-zinc-800 bg-zinc-950 p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center">
            <div className="bg-white p-3 mx-auto md:mx-0 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={QR_URL} width={200} height={200} alt="QR code linking to modernmancave.com.au/launch" className="block w-[200px] h-[200px]" />
            </div>
            <div>
              <h2 className="font-headliner gradient-heading text-3xl md:text-4xl leading-[0.85] mb-4">
                SCAN WITH<br />YOUR PHONE
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Point your phone camera at the QR code. Tap the link that pops up. The Modern Mancave app opens on your phone — book straight away, or follow the instructions below to add it to your home screen.
              </p>
              <p className="text-gray-600 text-xs tracking-wide">
                Or visit <span className="text-white font-mono">modernmancave.com.au/launch</span> in your phone&apos;s browser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 — Install instructions, BOTH platforms always visible */}
      <section className="relative section-blend-dark bg-zinc-950 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">On Your Phone</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="font-headliner gradient-heading text-4xl md:text-6xl leading-[0.85] mb-4">
            INSTALL ON<br />YOUR HOME SCREEN
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
            Pick your phone below — iPhone or Android — and follow the steps. Takes about 20 seconds. Once it&apos;s installed, tap the icon any time you want to book and you&apos;ll go straight to the booking page.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <PlatformInstructions
              eyebrow="iPhone · Safari"
              heading="ON IPHONE"
              steps={IOS_STEPS}
              intro="On iPhone or iPad you have to use Safari — Apple doesn't allow other browsers to install apps."
            />
            <PlatformInstructions
              eyebrow="Android · Chrome"
              heading="ON ANDROID"
              steps={ANDROID_STEPS}
              intro="Chrome handles installs cleanest on Android. Other browsers (Samsung Internet, Firefox) work too with similar steps."
            />
          </div>

          <p className="text-gray-600 text-sm tracking-wide text-center mt-12">
            Stuck? Ask at any of our locations — we&apos;ll get you set up in 30 seconds.
          </p>
        </div>
      </section>

      {/* Why install */}
      <section className="relative bg-black py-24 md:py-32 overflow-hidden">
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
              <div key={label} className="bg-zinc-950 px-8 py-8">
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
