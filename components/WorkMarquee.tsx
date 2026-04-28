import Image from 'next/image'

// All work photos are 800x800 squares. Uniform tile size reads as a
// curated gallery; motion + opposite-direction rows give the energy.
const TILE_CLASS = 'w-[240px] h-[240px] md:w-[280px] md:h-[280px]'

const ROW_TOP = [
  '/work/1.jpg',
  '/work/3.jpg',
  '/work/5.jpg',
  '/work/7.jpg',
  '/work/9.jpg',
  '/work/11.jpg',
]

const ROW_BOTTOM = [
  '/work/2.jpg',
  '/work/4.jpg',
  '/work/6.jpg',
  '/work/8.jpg',
  '/work/10.jpg',
  '/work/12.jpg',
]

function MarqueeRow({
  tiles,
  reverse = false,
}: {
  tiles: string[]
  reverse?: boolean
}) {
  // Render twice for seamless loop — keyframes animate to -50%.
  const doubled = [...tiles, ...tiles]
  return (
    <div className={`work-marquee-track ${reverse ? 'reverse' : ''}`}>
      {doubled.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`relative shrink-0 overflow-hidden rounded-md group ${TILE_CLASS}`}
        >
          <Image
            src={src}
            alt="Modern Mancave portfolio"
            fill
            sizes="280px"
            className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      ))}
    </div>
  )
}

export default function WorkMarquee() {
  return (
    <div className="work-marquee-wrap relative -mx-6 md:-mx-10 overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent" />

      <div className="flex flex-col gap-4">
        <MarqueeRow tiles={ROW_TOP} />
        <MarqueeRow tiles={ROW_BOTTOM} reverse />
      </div>
    </div>
  )
}
