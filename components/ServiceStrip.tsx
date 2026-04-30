const SERVICES = [
  'CUTS',
  'FADES',
  'BEARDS',
  'SHAVES',
  'LINEUPS',
  'TATTOOS',
  'HOT TOWELS',
  'TEETH WHITENING',
]

export default function ServiceStrip() {
  return (
    <div className="relative border-y border-zinc-800/50 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-3 gap-x-4 md:gap-x-0">
          {SERVICES.map((service, i) => (
            <div key={service} className="flex items-center">
              <span className="text-[10px] md:text-xs text-gray-500 tracking-[0.3em] uppercase font-bold">
                {service}
              </span>
              {i < SERVICES.length - 1 && (
                <span className="hidden md:block ml-4 md:ml-6 lg:ml-8 w-px h-3 bg-zinc-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
