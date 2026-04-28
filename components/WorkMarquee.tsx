import Image from 'next/image'

// All work photos are 800x800 squares — keep tiles square so the cut
// is never cropped. Vary tile *size* instead for visual rhythm.
type TileSize = 'sm' | 'md' | 'lg'

const SIZE_CLASS: Record<TileSize, string> = {
  sm: 'w-[200px] h-[200px] md:w-[240px] md:h-[240px]',
  md: 'w-[240px] h-[240px] md:w-[300px] md:h-[300px]',
  lg: 'w-[280px] h-[280px] md:w-[360px] md:h-[360px]',
}

const ROW_TOP: { src: string; size: TileSize }[] = [
  { src: '/work/1.jpg', size: 'md' },
  { src: '/work/3.jpg', size: 'lg' },
  { src: '/work/5.jpg', size: 'sm' },
  { src: '/work/7.jpg', size: 'md' },
  { src: '/work/9.jpg', size: 'lg' },
  { src: '/work/11.jpg', size: 'sm' },
]

const ROW_BOTTOM: { src: string; size: TileSize }[] = [
  { src: '/work/2.jpg', size: 'lg' },
  { src: '/work/4.jpg', size: 'sm' },
  { src: '/work/6.jpg', size: 'md' },
  { src: '/work/8.jpg', size: 'lg' },
  { src: '/work/10.jpg', size: 'sm' },
  { src: '/work/12.jpg', size: 'md' },
]

function MarqueeRow({
  tiles,
  reverse = false,
}: {
  tiles: { src: string; size: TileSize }[]
  reverse?: boolean
}) {
  // Render twice for seamless loop — keyframes animate to -50%.
  const doubled = [...tiles, ...tiles]
  return (
    <div className={`work-marquee-track ${reverse ? 'reverse' : ''}`}>
      {doubled.map((tile, i) => (
        <div
          key={`${tile.src}-${i}`}
          className={`relative shrink-0 overflow-hidden rounded-md group ${SIZE_CLASS[tile.size]}`}
        >
          <Image
            src={tile.src}
            alt="Modern Mancave portfolio"
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
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
