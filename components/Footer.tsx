import Link from 'next/link'
import Image from 'next/image'
import { LOCATIONS, SOCIAL } from '@/lib/config'
import { InstagramIcon, FacebookIcon } from '@/components/icons'

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 pt-1 pb-20 section-blend-dark">
      <div className="h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent mb-20" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div className="md:col-span-1">
            <Link href="/">
              <Image src="/1.png" alt="Modern Mancave" width={112} height={32} sizes="112px" className="h-8 w-auto mb-6" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Premium grooming for men in Griffith and the Riverina since 2017.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Our Locations</h3>
            <ul className="space-y-5 text-sm text-gray-500">
              {LOCATIONS.map((location) => (
                <li key={location.name}>
                  <div className="font-semibold text-white text-[10px] tracking-[0.2em] uppercase">{location.name}</div>
                  <div className="mt-0.5">{location.address}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Visit</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/team" className="hover:text-white transition">Our Team</Link></li>
              <li><Link href="/prices" className="hover:text-white transition">Prices</Link></li>
              <li><Link href="/booking" className="hover:text-white transition">Book Now</Link></li>
              <li><Link href="/locations" className="hover:text-white transition">Locations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">More</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/mobile-barber" className="hover:text-white transition">Mobile Barber</Link></li>
              <li><Link href="/franchise" className="hover:text-white transition">Franchise</Link></li>
              <li><Link href="/community" className="hover:text-white transition">Community</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">Merch</Link></li>
              <li><Link href="/app" className="hover:text-white transition">Download App</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <div>© {new Date().getFullYear()} Modern Mancave. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href={SOCIAL.instagram.url} target="_blank" className="hover:text-white transition" aria-label="Instagram">
              <InstagramIcon />
            </Link>
            <Link href={SOCIAL.facebook.url} target="_blank" className="hover:text-white transition" aria-label="Facebook">
              <FacebookIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
