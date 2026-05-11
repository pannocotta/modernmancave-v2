import { VIP_INCLUSIONS } from '@/lib/vip-inclusions'

export default function VipInclusionsStrip() {
  return (
    <section className="relative bg-[#050505] border-y border-zinc-900 py-14 md:py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">What&apos;s Included</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8">
          {VIP_INCLUSIONS.map(({ number, label, caption }) => (
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
