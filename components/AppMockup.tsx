/**
 * Stylised iPhone-shaped mockup that depicts a calendar / time-slot
 * step for a specific service inside the booking flow. Pure HTML/CSS
 * — no static screenshot needed, so it stays in sync with the brand.
 */
export default function AppMockup() {
  // Mock calendar: 5 rows × 7 cols. Numbers are stylistic, not real dates.
  // null = empty cell, number = day, prefix `_` = past/disabled day.
  const calendarRows: (string | null)[][] = [
    [null, '_1', '_2', '_3', '_4', '_5', '_6'],
    ['_7', '_8', '_9', '_10', '11', '12', '13'],
    ['14', '15', '16', '17', '18', '19', '20'],
    ['21', '22', '23', '24', '25', '26', '27'],
    ['28', '29', '30', null, null, null, null],
  ]
  const selectedDay = '11'

  const timeSlots = ['10:00', '11:30', '13:00', '14:30']
  const selectedTime = '11:30'

  return (
    <div className="relative mx-auto w-full max-w-[280px] md:max-w-[300px]">
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
          <div className="pt-10 px-3.5 h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 pt-1">
              <span className="text-brand-red text-[10px] font-black tracking-[0.2em]">MMC</span>
              <div className="flex flex-col gap-[3px]">
                <span className="block w-4 h-px bg-brand-red" />
                <span className="block w-3 h-px bg-brand-red ml-auto" />
                <span className="block w-4 h-px bg-brand-red" />
              </div>
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-brand-red text-[6.5px] font-bold tracking-[0.3em] uppercase">Booking · Step 2 of 4</span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>

            {/* Service summary */}
            <div className="border-l-2 border-brand-red pl-2 mb-3">
              <p className="text-white font-bold text-[11px] tracking-wide leading-tight">MEN&apos;S CUT</p>
              <p className="text-gray-500 text-[7.5px] tracking-[0.15em] uppercase">$40 · 30 min · Nick</p>
            </div>

            {/* Calendar header */}
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-white text-[8px] font-bold tracking-[0.15em] uppercase">April 2026</span>
              <div className="flex gap-1.5 text-gray-500">
                <span className="text-[8px]">‹</span>
                <span className="text-[8px]">›</span>
              </div>
            </div>

            {/* Day-of-week row */}
            <div className="grid grid-cols-7 gap-px mb-0.5">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <div key={i} className="text-center text-gray-600 text-[6.5px] font-bold py-0.5">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-px mb-3">
              {calendarRows.flat().map((cell, i) => {
                if (cell === null) {
                  return <div key={i} className="aspect-square" />
                }
                const day = cell.replace('_', '')
                const isPast = cell.startsWith('_')
                const isSelected = day === selectedDay
                return (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center text-[7.5px] font-medium rounded-sm ${
                      isSelected
                        ? 'bg-brand-red text-white'
                        : isPast
                        ? 'text-gray-700'
                        : 'text-gray-300'
                    }`}
                  >
                    {day}
                  </div>
                )
              })}
            </div>

            {/* Time slots */}
            <p className="text-gray-500 text-[6.5px] font-bold tracking-[0.3em] uppercase mb-1.5">Available Times</p>
            <div className="grid grid-cols-2 gap-1 mb-3">
              {timeSlots.map((time) => {
                const isSelected = time === selectedTime
                return (
                  <div
                    key={time}
                    className={`text-center text-[8px] font-semibold py-1 border rounded-sm ${
                      isSelected
                        ? 'bg-brand-red border-brand-red text-white'
                        : 'border-zinc-800 text-gray-400'
                    }`}
                  >
                    {time}
                  </div>
                )
              })}
            </div>

            {/* Continue CTA */}
            <div className="flex items-stretch border border-white/30">
              <span className="bg-brand-red w-2 self-stretch shrink-0" />
              <span className="px-3 py-1.5 text-white font-bold text-[8px] tracking-[0.2em] uppercase flex-1 text-center">
                Continue
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
