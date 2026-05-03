import Link from 'next/link'
import LaunchPhonePreview from './LaunchPhonePreview'

export default function AppCTABanner() {
  return (
    <section className="relative bg-black py-24 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">

          {/* LEFT — animated phone */}
          <div className="relative flex justify-center md:justify-end order-2 md:order-1">
            <LaunchPhonePreview />
          </div>

          {/* RIGHT — type + copy + CTA */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="flex md:justify-start justify-center items-center gap-4 mb-6">
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">
                The Mancave App
              </span>
              <div className="h-px flex-1 bg-zinc-800 md:max-w-[120px]" />
            </div>

            <h2 className="font-headliner text-6xl md:text-7xl lg:text-9xl gradient-heading leading-[0.85] mb-10">
              IN YOUR<br />POCKET
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
              Save Modern Mancave to your home screen. Book in seconds. Hold onto every appointment.
            </p>

            <Link href="/app" className="cta-button">INSTALL THE APP</Link>

            <div className="mt-8">
              <Link
                href="/booking"
                className="text-gray-600 hover:text-gray-400 text-[10px] tracking-[0.3em] uppercase transition-colors"
              >
                Or book direct →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
