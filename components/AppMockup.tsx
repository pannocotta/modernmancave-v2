/**
 * Stylised iPhone-shaped mockup that renders a mini version of the
 * /booking page hero. Pure HTML/CSS — no static screenshot needed,
 * so it stays in sync with the live design.
 */
export default function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] md:max-w-[300px]">
      {/* Subtle red glow behind the phone */}
      <div className="absolute inset-0 -m-8 bg-brand-red/[0.08] blur-3xl rounded-full" aria-hidden="true" />

      {/* iPhone frame */}
      <div className="relative aspect-[9/19.5] rounded-[42px] bg-zinc-900 p-2.5 shadow-2xl shadow-black/60 border border-zinc-800">
        {/* Side button (right) */}
        <div className="absolute top-32 -right-1 w-1 h-14 bg-zinc-800 rounded-r-sm" aria-hidden="true" />
        {/* Volume buttons (left) */}
        <div className="absolute top-24 -left-1 w-1 h-8 bg-zinc-800 rounded-l-sm" aria-hidden="true" />
        <div className="absolute top-36 -left-1 w-1 h-12 bg-zinc-800 rounded-l-sm" aria-hidden="true" />

        {/* Screen */}
        <div className="relative w-full h-full overflow-hidden rounded-[34px] bg-black">
          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-24 h-6 bg-black rounded-full" aria-hidden="true" />

          {/* Status bar */}
          <div className="absolute top-2.5 left-0 right-0 z-20 flex items-center justify-between px-6 text-white text-[9px] font-semibold">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[8px]">●●●</span>
              <span className="text-[8px]">●</span>
              <span className="text-[8px]">100</span>
            </div>
          </div>

          {/* App content */}
          <div className="pt-10 px-4 h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-5 pt-1">
              <span className="text-brand-red text-[10px] font-black tracking-[0.2em]">MMC</span>
              <div className="flex flex-col gap-[3px]">
                <span className="block w-4 h-px bg-brand-red" />
                <span className="block w-3 h-px bg-brand-red ml-auto" />
                <span className="block w-4 h-px bg-brand-red" />
              </div>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-brand-red text-[7px] font-bold tracking-[0.3em] uppercase">Booking</span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>

            {/* Headline */}
            <h3 className="font-headliner gradient-heading text-xl leading-[0.85] mb-3">
              BOOK YOUR<br />APPOINTMENT
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-[8px] leading-relaxed mb-4">
              Book a guaranteed time with Nick at our Banna Avenue location instead of waiting 20–30 minutes for a walk-in.
            </p>

            {/* Nick-only callout */}
            <div className="border border-brand-red/40 bg-zinc-950 px-2 py-2 mb-3 flex items-start gap-1.5">
              <div className="w-px self-stretch bg-brand-red shrink-0" />
              <p className="text-gray-400 text-[7px] leading-relaxed">
                <span className="text-white font-bold tracking-[0.05em] uppercase block mb-0.5 text-[7px]">Nick Only</span>
                Other barbers walk-in only.
              </p>
            </div>

            {/* Mini rule cards */}
            <div className="grid grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800/50 mb-3">
              {['Payment', 'Arrival', 'Late'].map((label) => (
                <div key={label} className="bg-black px-1.5 py-2">
                  <p className="text-brand-red text-[6px] font-bold tracking-[0.15em] uppercase">{label}</p>
                </div>
              ))}
            </div>

            {/* CTA pill */}
            <div className="flex items-stretch border border-white/30 mt-4">
              <span className="bg-brand-red w-2 self-stretch shrink-0" />
              <span className="px-3 py-1.5 text-white font-bold text-[8px] tracking-[0.2em] uppercase">Book Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
