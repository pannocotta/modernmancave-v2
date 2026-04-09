'use client'

const ITEMS = [
  'CUTS', 'FADES', 'BEARDS', 'SHAVES', 'LINEUPS', 'DESIGNS', 'HOT TOWELS', 'COLOUR'
]

export default function Marquee() {
  // Duplicate items for seamless loop
  const items = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="relative bg-brand-red overflow-hidden py-4 md:py-5 select-none">
      <div className="marquee-track flex items-center gap-8 md:gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12">
            <span className="font-headliner text-black text-xl md:text-2xl tracking-widest">{item}</span>
            <span className="text-black/30 text-lg">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
