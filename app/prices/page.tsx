import Link from 'next/link'
import Header from '@/components/Header'

export const metadata = {
  title: 'Prices - Modern Mancave',
  description: 'Transparent pricing for all our barbering services',
}

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
          <img 
            src="/stock/barbershop-tools.jpg"
            alt="Barbershop tools"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20 w-full px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headliner gradient-heading mb-4 md:mb-6">
              PRICE LIST
            </h1>
            <div className="w-16 md:w-20 h-1 bg-[#ff0000] mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-xl text-gray-300 mb-8">
              Clear pricing. Quality cuts. No surprises.
            </p>
            <Link href="/booking" className="cta-button">
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Price Sections */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-black text-base md:text-lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            
            {/* KIDS CUTS */}
            <div className="border border-zinc-800 p-6">
              <h3 className="font-headliner text-xl md:text-2xl mb-6 pb-3 border-b border-zinc-800">KIDS CUTS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Baby</span>
                  <span className="text-[#ff0000] font-bold">$30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Baby Double Zero Fade</span>
                  <span className="text-[#ff0000] font-bold">$35</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Primary</span>
                  <span className="text-[#ff0000] font-bold">$35</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Primary School, Skin Fade</span>
                  <span className="text-[#ff0000] font-bold">$38</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">High School</span>
                  <span className="text-[#ff0000] font-bold">$35</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">High School, Skin Fade</span>
                  <span className="text-[#ff0000] font-bold">$38</span>
                </div>
              </div>
            </div>

            {/* MEN'S CUTS */}
            <div className="border border-zinc-800 p-6">
              <h3 className="font-headliner text-xl md:text-2xl mb-6 pb-3 border-b border-zinc-800">MEN&apos;S CUTS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Men&apos;s Cut</span>
                  <span className="text-[#ff0000] font-bold">$40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Men&apos;s Cut & Beard Trim</span>
                  <span className="text-[#ff0000] font-bold">$50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Men&apos;s Cut, Beard Trim, Line up & Shape</span>
                  <span className="text-[#ff0000] font-bold">$58</span>
                </div>
              </div>
            </div>

            {/* SKIN FADES */}
            <div className="border border-zinc-800 p-6">
              <h3 className="font-headliner text-xl md:text-2xl mb-6 pb-3 border-b border-zinc-800">SKIN FADES</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Skin Fade</span>
                  <span className="text-[#ff0000] font-bold">$45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Skin Fade, Beard Trim, Line up & Shape</span>
                  <span className="text-[#ff0000] font-bold">$60</span>
                </div>
              </div>
            </div>

            {/* BUZZ CUTS */}
            <div className="border border-zinc-800 p-6">
              <h3 className="font-headliner text-xl md:text-2xl mb-6 pb-3 border-b border-zinc-800">BUZZ CUTS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Buzz Cut</span>
                  <span className="text-[#ff0000] font-bold">$30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Buzz Cut & Beard Trim</span>
                  <span className="text-[#ff0000] font-bold">$40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Buzz Cut, Beard Trim, Line up & Shape</span>
                  <span className="text-[#ff0000] font-bold">$50</span>
                </div>
              </div>
            </div>

            {/* HEAD SHAVES */}
            <div className="border border-zinc-800 p-6">
              <h3 className="font-headliner text-xl md:text-2xl mb-6 pb-3 border-b border-zinc-800">HEAD SHAVES</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Head Shave</span>
                  <span className="text-[#ff0000] font-bold">$40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Head Shave & Beard Trim</span>
                  <span className="text-[#ff0000] font-bold">$45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Head Shave, Beard Trim, Line up & Shape</span>
                  <span className="text-[#ff0000] font-bold">$60</span>
                </div>
              </div>
            </div>

            {/* HOT TOWEL SHAVES */}
            <div className="border border-zinc-800 p-6">
              <h3 className="font-headliner text-xl md:text-2xl mb-6 pb-3 border-b border-zinc-800">HOT TOWEL SHAVES</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Hot Towel Shave</span>
                  <span className="text-[#ff0000] font-bold">$45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Hot Towel Shave & Men&apos;s Hair Cut</span>
                  <span className="text-[#ff0000] font-bold">$65</span>
                </div>
              </div>
            </div>

            {/* BEARD SERVICES */}
            <div className="border border-zinc-800 p-6">
              <h3 className="font-headliner text-xl md:text-2xl mb-6 pb-3 border-b border-zinc-800">BEARD SERVICES</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Beard Trim</span>
                  <span className="text-[#ff0000] font-bold">$20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Beard Trim, Line Up & Shape</span>
                  <span className="text-[#ff0000] font-bold">$25</span>
                </div>
              </div>
            </div>

            {/* EXTRAS */}
            <div className="border border-zinc-800 p-6">
              <h3 className="font-headliner text-xl md:text-2xl mb-6 pb-3 border-b border-zinc-800">EXTRAS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Hair Art</span>
                  <span className="text-[#ff0000] font-bold">$15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pensioner (any haircut)</span>
                  <span className="text-[#ff0000] font-bold">$30</span>
                </div>
              </div>
            </div>

          </div>

          {/* Featured: Teeth Whitening */}
          <div className="mt-8 border border-zinc-800 bg-zinc-950 p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="font-headliner text-2xl md:text-3xl mb-2">TEETH WHITENING</h3>
                <p className="text-gray-400 mb-4 md:mb-0">Professional teeth whitening to keep your smile sharp (1.5 hours)</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-[#ff0000] font-bold text-3xl md:text-4xl">$250</div>
                <Link href="/booking" className="cta-button whitespace-nowrap">
                  BOOK NOW
                </Link>
              </div>
            </div>

            {/* Before & After Photos */}
            <div className="mt-6">
              <h4 className="font-headliner text-lg mb-4 text-gray-300">BEFORE &amp; AFTER</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img src="/teeth-before.jpg" alt="Teeth whitening before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-2 text-center text-xs font-bold tracking-wider">BEFORE</div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img src="/teeth-after.jpg" alt="Teeth whitening after" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-2 text-center text-xs font-bold tracking-wider">AFTER</div>
                </div>
              </div>
            </div>

            {/* Teeth Whitening Availability Notice (Task 9) */}
            <div className="mt-6 p-4 border border-zinc-700 rounded-lg">
              <p className="text-gray-400 text-sm">Teeth whitening appointments are only available on <span className="text-white font-semibold">Mondays and Wednesdays</span>.</p>
            </div>
          </div>

          {/* Featured: Tattoo */}
          <div className="mt-8 border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="font-headliner text-2xl md:text-3xl mb-3">TATTOOING</h3>
            <p className="text-gray-400 mb-4">All tattoo bookings go through Cameron directly. Get in touch to discuss your design, pricing, and availability.</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="https://www.instagram.com/relentless_image_tattoo_shop" target="_blank" rel="noopener noreferrer" className="text-[#ff0000] hover:underline text-sm">@relentless_image_tattoo_shop</a>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <a href="tel:0413074669" className="text-[#ff0000] hover:underline text-sm">0413 074 669</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/tattoo/1.jpg', alt: 'Rose and mandala sleeve tattoo' },
                { src: '/tattoo/2.jpg', alt: 'Portrait tattoo' },
                { src: '/tattoo/3.jpg', alt: 'Medusa tattoo' },
                { src: '/tattoo/4.jpg', alt: 'Day of the dead tattoo' },
              ].map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8 md:mt-12 p-4 md:p-8 bg-zinc-950 border border-zinc-800">
            <h3 className="text-lg md:text-xl font-headliner mb-3 md:mb-4">GOOD TO KNOW</h3>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#ff0000] mt-0.5 md:mt-1">•</span>
                <span>We accept all major payment methods</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#ff0000] mt-0.5 md:mt-1">•</span>
                <span>General practice is walk-ins only</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#ff0000] mt-0.5 md:mt-1">•</span>
                <span>Online bookings require full payment</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#ff0000] mt-0.5 md:mt-1">•</span>
                <span>Prices are up to date as of March 2026</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#ff0000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headliner mb-4 md:mb-6 text-black">
            SKIP THE QUEUE AND MAKE A BOOKING
          </h2>
          <p className="text-black/80 mb-6 md:mb-8 text-base md:text-lg">
            All bookings require full payment. Spots are limited, so secure yours today.
          </p>
          <Link 
            href="/booking"
            className="inline-block bg-black text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold hover:bg-zinc-900 transition-colors"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </section>
    </main>
  )
}
