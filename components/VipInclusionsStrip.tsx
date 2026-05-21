import { VIP_INCLUSIONS, RESERVED_INCLUSIONS } from '@/lib/vip-inclusions'
import type { BookingTier } from '@/lib/acuity'

export default function VipInclusionsStrip({ tier = 'vip' }: { tier?: BookingTier }) {
  const items = tier === 'reserved' ? RESERVED_INCLUSIONS : VIP_INCLUSIONS
  const eyebrow = tier === 'reserved' ? "Reserved Booking" : "What's Included"

  return (
    <section className="relative bg-[#050505] border-y border-zinc-900 py-14 md:py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">{eyebrow}</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>
        <div
          className={`grid gap-6 md:gap-8 ${
            tier === 'reserved'
              ? 'grid-cols-2 md:grid-cols-2 max-w-xl'
              : 'grid-cols-2 md:grid-cols-6'
          }`}
        >
          {items.map(({ number, label, caption }) => (
            <div
              key={number}
              className="text-center md:text-left md:pl-4 md:border-l md:border-zinc-800/80"
            >
              <div className="text-brand-red text-xl md:text-2xl font-bold tracking-wider mb-2">{number}</div>
              <div className="text-white text-xs md:text-sm font-bold tracking-wide mb-1">{label}</div>
              <div className="text-gray-600 text-[10px] md:text-xs leading-snug">{caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
