import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import FloatingBookButton from '@/components/FloatingBookButton'


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <FloatingBookButton />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg"
            alt=""
            fill
            priority
            quality={75}
            className="object-cover grayscale opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
        </div>

        <div className="relative z-20 w-full flex flex-col items-center justify-center" style={{ paddingTop: 'clamp(6rem, 15vh, 10rem)', paddingBottom: 'clamp(4rem, 10vh, 6rem)' }}>
          <div className="w-full mx-auto relative" style={{ maxWidth: 'min(85vw, 550px)', marginBottom: 'clamp(2rem, 5vh, 3rem)' }}>
            <Image
              src="/hero-badge.png"
              alt="Modern Mancave Barbershop Est 2017"
              width={1200}
              height={1200}
              priority
              quality={80}
              className="w-full h-auto"
            />
          </div>

          <div className="text-center" style={{ padding: '0 clamp(1rem, 4vw, 1.5rem)' }}>
            <Link href="/booking" className="cta-button">
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      {/* About Blurb */}
      <section className="bg-black relative overflow-hidden" style={{ paddingTop: 'clamp(4rem, 10vh, 8rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', paddingRight: 'clamp(1rem, 4vw, 1.5rem)' }}>
          <div className="grid md:grid-cols-2" style={{ gap: 'clamp(2rem, 6vw, 4rem)' }}>
            {/* Left side - 4 Image Grid */}
            <div className="order-2 md:order-1 w-full">
              <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
                <div>
                  <div className="relative aspect-square overflow-hidden group">
                    <img 
                      src="/stock/mobile-van.jpg"
                      alt="Barber at work"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative aspect-square overflow-hidden group">
                    <img 
                      src="/stock/barber-cutting.jpg"
                      alt="Fade haircut"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative aspect-square overflow-hidden group">
                    <img 
                      src="/stock/client-chair.jpg"
                      alt="Client in chair"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative aspect-square overflow-hidden group">
                    <img 
                      src="/stock/shop-interior.jpg"
                      alt="Barbershop interior"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-headliner gradient-heading mb-6 md:mb-8 leading-tight">
                RIVERINAS <br/>
                PREMIUM BARBERSHOP
              </h2>
              <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
                <p>
                  Modern Mancave is more than a barbershop. It&apos;s a place to switch off, have a yarn, and walk out looking your best.
                </p>
                <p>
                  Since 2017, we&apos;ve been looking after clients across Griffith and the Riverina with quality cuts and genuine service. Whether you&apos;re after a clean fade, a tidy up, a sharp beard trim or a proper hot towel shave, our barbers take the time to get it right.
                </p>
                <p>
                  We care about the details, and it shows in every cut.
                </p>
              </div>
              
              {/* Signature element */}
              <div className="mt-8 md:mt-12">
                <svg className="w-24 h-12 md:w-32 md:h-16" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 30 Q 30 10, 60 30 T 115 25" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section id="services" className="bg-zinc-950" style={{ paddingTop: 'clamp(4rem, 10vh, 8rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', paddingRight: 'clamp(1rem, 4vw, 1.5rem)' }}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Left - Heading */}
            <div>
              <h2 className="font-headliner gradient-heading leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                CUTS, FADES AND MORE
              </h2>
            </div>

            {/* Right - Description */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                Experienced barbers in Griffith delivering precision cuts, clean fades and expert beard trims. Whether you prefer a classic style or something modern, we&apos;ll make sure you leave looking and feeling your best.
              </p>
              <div>
                <Link href="/prices" className="cta-button">
                  VIEW PRICING
                </Link>
              </div>
            </div>
          </div>

          {/* Work Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div key={num} className="relative aspect-square overflow-hidden group">
                <Image
                  src={`/work/${num}.jpg`}
                  alt={`Modern Mancave Work ${num}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 'clamp(2rem, 6vh, 3rem)' }}>
            <a
              href="https://instagram.com/modernmancave"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ff0000] transition-colors"
              style={{ fontSize: 'clamp(0.875rem, 3vw, 1rem)' }}
            >
              Follow us on Instagram for more →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black" style={{ paddingTop: 'clamp(4rem, 10vh, 8rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', paddingRight: 'clamp(1rem, 4vw, 1.5rem)' }}>
          <div>
            <h2 className="font-headliner gradient-heading mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)' }}>
              WHAT OUR CLIENTS SAY
            </h2>
          </div>
          <p className="text-gray-400 mb-12">
            Real reviews from Google. See why men in Griffith and the Riverina choose us.
          </p>

          <div className="grid md:grid-cols-3" style={{ gap: 'clamp(1.5rem, 4vw, 2rem)' }}>
            {[
              {
                stars: 5,
                text: "Best barber in Griffith. Clean cuts, professional service every time. Highly recommend.",
                name: "ALEX M.",
                date: "2 weeks ago"
              },
              {
                stars: 5,
                text: "Great atmosphere and skilled barbers. Never disappointed. Book online makes it super easy.",
                name: "MICHAEL T.",
                date: "1 month ago"
              },
              {
                stars: 5,
                text: "Finally found a barbershop that gets it right. Quality work, friendly team.",
                name: "DAVID K.",
                date: "3 weeks ago"
              }
            ].map((review, i) => (
              <div
                key={i}
                className="bg-zinc-950 border border-zinc-800 hover:border-[#ff0000] transition-colors"
                style={{ padding: 'clamp(1.5rem, 5vw, 2rem)' }}
              >
                <div className="flex gap-1 mb-4">
                  {Array(review.stars).fill('★').map((star, j) => (
                    <span key={j} className="text-[#ff0000]" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.125rem)' }}>
                  &quot;{review.text}&quot;
                </p>
                <div className="flex justify-between items-center">
                  <div className="font-bold text-sm tracking-wide">— {review.name}</div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 'clamp(2rem, 6vh, 3rem)' }}>
            <a
              href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ff0000] transition-colors text-sm"
            >
              See all Google reviews →
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Barber CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', paddingRight: 'clamp(1rem, 4vw, 1.5rem)' }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/mobile-trailer.png"
                alt="Modern Mancave Mobile Barber Studio"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-headliner gradient-heading mb-6">
                MOBILE BARBER SERVICE
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Skip the shop. We bring premium cuts and expert grooming to your home, office, or event. Perfect for groups, functions, or corporate bookings.
              </p>
              <Link href="/mobile-barber" className="cta-button">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-[#ff0000]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-headliner mb-6 text-black tracking-wide">
            LOOK SHARP. BOOK FASTER.
          </h2>
          <p className="text-black/80 mb-10 text-lg">
            For the first time, we&apos;re offering instant bookings. Skip the wait and lock in your premium appointment now.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/booking" className="bg-black hover:bg-zinc-900 text-white px-8 py-4 rounded-md font-bold text-sm tracking-wide transition">
              BOOK MY NEXT CUT
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link href="/">
                <img src="/1.png" alt="Modern Mancave" className="h-8 w-auto mb-6" />
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed">
                Premium grooming for men in Griffith and the Riverina since 2017.
              </p>
            </div>

            <div>
              <h3 className="font-headliner text-sm mb-4 tracking-widest">OUR LOCATIONS</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <div className="font-semibold text-white">BANNA AVE</div>
                  <div>224a Banna Ave, Griffith NSW 2680</div>
                  <Link href="/locations" className="text-[#ff0000] hover:underline">View store details →</Link>
                </li>
                <li>
                  <div className="font-semibold text-white">GRIFFITH CENTRAL</div>
                  <div>Shop 43-44 Griffith Central, Griffith NSW 2680</div>
                  <Link href="/locations" className="text-[#ff0000] hover:underline">View store details →</Link>
                </li>
                <li>
                  <div className="font-semibold text-white">YAMBIL ST</div>
                  <div>154 Yambil St, Griffith NSW 2680</div>
                  <Link href="/locations" className="text-[#ff0000] hover:underline">View store details →</Link>
                </li>
                <li>
                  <div className="font-semibold text-white">TATTOO STUDIO</div>
                  <div>Banna Avenue, Griffith</div>
                  <Link href="/locations" className="text-[#ff0000] hover:underline">View store details →</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-headliner text-sm mb-4 tracking-widest">SITE MAP</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-[#ff0000] transition">Home</Link></li>
                <li><Link href="/team" className="hover:text-[#ff0000] transition">Our Team</Link></li>
                <li><Link href="/prices" className="hover:text-[#ff0000] transition">Prices</Link></li>
                <li><Link href="/booking" className="hover:text-[#ff0000] transition">Book Now</Link></li>
                <li><Link href="/mobile-barber" className="hover:text-[#ff0000] transition">Mobile Barber</Link></li>
                <li><Link href="/franchise" className="hover:text-[#ff0000] transition">Franchise</Link></li>
                <li><Link href="/shop" className="hover:text-[#ff0000] transition">Shop</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>© 2026 Modern Mancave. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="https://www.instagram.com/modern_mancave/" target="_blank" className="hover:text-[#ff0000] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#ff0000] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#ff0000] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
