import { ACUITY_SERVICES, FEATURED_SERVICE_IDS } from '@/lib/acuity'

export default function LaunchPhonePreview({
  className = 'w-[240px] md:w-[300px]',
}: {
  className?: string
}) {
  const featured = FEATURED_SERVICE_IDS.map(
    (id) => ACUITY_SERVICES.find((s) => s.id === id)!,
  )

  return (
    <div className="relative flex justify-center">
      {/* Ambient red glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none" aria-hidden="true">
        <div
          className="w-[420px] h-[520px]"
          style={{
            background:
              'radial-gradient(ellipse, rgba(255,0,0,0.22) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Phone */}
      <div
        className={`relative ${className} aspect-[9/19.5] bg-[#0a0a0a] border-2 border-[#1f1f1f] rounded-[38px] p-[10px] shadow-[0_0_80px_rgba(255,0,0,0.08),inset_0_0_30px_rgba(0,0,0,0.6)] overflow-hidden`}
        style={{ transform: 'perspective(1500px) rotateX(2deg) rotateY(-3deg)' }}
      >
        {/* Notch */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[70px] h-[16px] bg-black rounded-[12px] z-[5]" />

        {/* Screen */}
        <div className="relative w-full h-full rounded-[28px] overflow-hidden app-launch-bg">

          {/* SCREEN 1 — Launch Home */}
          <div className="absolute inset-0 app-screen-1 p-3">
            <PhoneHeader />

            <div className="px-2 mt-3">
              <p className="text-brand-red text-[6px] font-bold tracking-[0.3em] uppercase mb-1.5">
                Good Afternoon
              </p>
              <h3 className="font-headliner gradient-heading text-[18px] leading-[0.85] mb-2">
                BOOK YOUR<br />NEXT VIP CUT
              </h3>
              <p className="text-gray-400 text-[7px] leading-snug">
                Reserved private setting, hot towel ritual, one-on-one with Nik.
              </p>
            </div>

            <p className="text-[6px] font-bold tracking-[0.3em] uppercase text-gray-500 mt-4 mb-1.5 px-2">
              Most Booked
            </p>

            <div className="grid grid-cols-2 gap-1.5 px-2">
              {featured.map((service) => (
                <div
                  key={service.id}
                  className="relative border border-zinc-800 p-1.5 min-h-[44px] flex flex-col justify-between overflow-hidden"
                >
                  <p className="text-white font-bold text-[7px] leading-tight">
                    {service.name}
                  </p>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-brand-red text-[8px] font-bold">
                      ${service.price}
                    </span>
                    <span className="text-gray-600 text-[5px]">
                      {service.duration} min
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SCREEN 2 — Booking Flow */}
          <div className="absolute inset-0 app-screen-2 p-3">
            <PhoneHeader />

            <div className="px-2 mt-3 mb-2">
              <p className="text-brand-red text-[6px] font-bold tracking-[0.3em] uppercase mb-1.5">
                Booking
              </p>
              <h3 className="font-headliner gradient-heading text-[18px] leading-[0.85] mb-1">
                MEN&apos;S CUT<br />WITH NIK
              </h3>
              <p className="text-gray-500 text-[6px]">$60 · 30 min · Banna Avenue</p>
            </div>

            <p className="text-[6px] font-bold tracking-[0.3em] uppercase text-gray-500 mt-3 mb-1.5 px-2">
              Choose Date
            </p>
            <div className="grid grid-cols-4 gap-1 px-2 mb-2">
              <DateTile day="Wed" date="15" />
              <DateTile day="Thu" date="16" active />
              <DateTile day="Fri" date="17" />
              <DateTile day="Sat" date="18" />
            </div>

            <p className="text-[6px] font-bold tracking-[0.3em] uppercase text-gray-500 mt-3 mb-1.5 px-2">
              Choose Time
            </p>
            <div className="grid grid-cols-3 gap-1 px-2">
              <TimeTile label="10:00" />
              <TimeTile label="10:30" />
              <TimeTile label="11:00" />
              <TimeTile label="11:30" />
              <TimeTile label="2:30 PM" active />
              <TimeTile label="3:00" />
            </div>
          </div>

          {/* SCREEN 3 — Confirmed */}
          <div className="absolute inset-0 app-screen-3 p-3">
            <PhoneHeader />

            <div className="px-2 mt-3">
              <p className="text-brand-red text-[6px] font-bold tracking-[0.3em] uppercase mb-1.5">
                Good Afternoon
              </p>
              <h3 className="font-headliner gradient-heading text-[18px] leading-[0.85] mb-3">
                BOOK YOUR<br />NEXT VIP CUT
              </h3>
            </div>

            <div className="mx-2 border-2 border-emerald-500/60 bg-emerald-500/5 rounded-md p-2.5">
              <div className="flex items-center gap-1 mb-1.5">
                <svg
                  className="w-2.5 h-2.5 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-500 text-[6px] font-bold tracking-[0.3em] uppercase">
                  Confirmed
                </span>
              </div>
              <p className="text-[6px] text-gray-400 tracking-[0.2em] uppercase mb-1">
                Your Next Appointment
              </p>
              <p className="font-bold text-white text-[12px] leading-tight mb-1">
                Thu 16 May · 2:30 PM
              </p>
              <p className="text-[7px] text-gray-300">Men&apos;s Cut · with Nik</p>
              <p className="text-[6px] text-gray-500 mt-0.5">Banna Avenue · Griffith</p>
            </div>

            <p className="text-[6px] font-bold tracking-[0.3em] uppercase text-gray-500 mt-4 mb-1.5 px-2">
              Most Booked
            </p>
            <div className="grid grid-cols-2 gap-1.5 px-2 opacity-60">
              {featured.slice(0, 2).map((service) => (
                <div key={service.id} className="border border-zinc-800 p-1.5 min-h-[36px]">
                  <p className="text-gray-400 text-[7px] leading-tight">{service.name}</p>
                  <span className="text-brand-red text-[7px] font-bold">${service.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function PhoneHeader() {
  return (
    <div className="flex items-center justify-between pt-4 px-2 pb-3">
      <div className="flex items-center gap-1.5">
        <span className="text-brand-red font-black tracking-[0.15em] text-[8px]">MMC</span>
        <span className="h-px w-2.5 bg-brand-red/50" />
        <span className="text-white/60 text-[6px] tracking-[0.25em] uppercase">Modern Mancave</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-emerald-500" />
        <span className="text-white/70 text-[6px] tracking-[0.2em] uppercase">Open</span>
      </div>
    </div>
  )
}

function DateTile({ day, date, active = false }: { day: string; date: string; active?: boolean }) {
  return (
    <div
      className={`py-1.5 text-center border ${
        active ? 'border-brand-red bg-brand-red/10 app-tile-pulse' : 'border-zinc-800'
      }`}
    >
      <div
        className={`text-[5px] uppercase tracking-wider ${
          active ? 'text-brand-red' : 'text-gray-500'
        }`}
      >
        {day}
      </div>
      <div className="text-white font-bold text-[10px]">{date}</div>
    </div>
  )
}

function TimeTile({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`py-1 text-center text-white text-[7px] font-bold border ${
        active ? 'border-brand-red bg-brand-red/10' : 'border-zinc-800'
      }`}
    >
      {label}
    </div>
  )
}
