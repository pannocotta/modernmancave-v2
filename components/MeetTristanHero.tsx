'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function MeetTristanHero() {
  const outerRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [isDesktop, setIsDesktop] = useState(false)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isDesktop || !trackRef.current || !viewportRef.current) {
      setDistance(0)
      return
    }
    const measure = () => {
      const trackHeight = trackRef.current?.scrollHeight ?? 0
      const viewportHeight = viewportRef.current?.clientHeight ?? 0
      setDistance(Math.max(0, trackHeight - viewportHeight))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(trackRef.current)
    ro.observe(viewportRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [isDesktop])

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -distance])

  const outerStyle =
    isDesktop && distance > 0
      ? { height: `calc(100vh + ${distance}px)` }
      : undefined

  return (
    <section
      ref={outerRef}
      style={outerStyle}
      className="relative bg-black text-white"
    >
      <div className="lg:sticky lg:top-0 lg:h-screen relative flex items-center pt-24 md:pt-32 pb-12 lg:py-0 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock/barber-cutting.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Portrait — unchanged from original */}
            <div>
              <Image
                src="/tristan-hero.webp"
                alt="Tristan — Owner & Master Barber"
                width={600}
                height={800}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                }}
              />
            </div>

            {/* Text — pinned/scrolled on desktop, normal flow on mobile */}
            <div
              ref={viewportRef}
              className="relative lg:h-[78vh] lg:overflow-hidden meet-tristan-viewport"
            >
              <motion.div
                ref={trackRef}
                style={{ y: isDesktop ? y : 0 }}
                className="lg:py-[18vh]"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">
                    The Founder
                  </span>
                  <div className="h-px flex-1 bg-zinc-800" />
                </div>

                <h1 className="font-headliner text-5xl md:text-7xl gradient-heading leading-[0.9] mb-10">
                  MEET<br />TRISTAN
                </h1>

                <div className="space-y-5 text-gray-400 leading-relaxed text-sm md:text-base">
                  <p className="text-white text-base md:text-lg">
                    I never followed the traditional path.
                  </p>

                  <p>
                    Before barbering, I worked across multiple industries — from cabinet making to wineries around Griffith — but I always felt drawn toward barbering. Growing up in a country town, men&apos;s grooming wasn&apos;t seen the way it is today, and becoming a barber as a young guy wasn&apos;t the common path.
                  </p>

                  <p>Everything changed during a trip to Europe in my early twenties.</p>

                  <div className="flex items-center gap-4 pt-6 pb-2 text-[10px] tracking-[0.3em] uppercase text-gray-600">
                    <div className="w-6 h-px bg-brand-red" />
                    <span>The Spark</span>
                  </div>

                  <p>
                    While travelling through Italy, I walked into a modern barbershop for the first time and instantly connected with the atmosphere, culture, and experience. From that moment, I knew I wanted to bring that same energy back home to Griffith.
                  </p>

                  <p>
                    In 2014, I moved to Sydney to pursue barbering. After facing rejection from multiple barbershops due to lack of experience, I stepped away from the industry and spent over a year driving trucks — but the passion never left.
                  </p>

                  <blockquote className="my-10 py-7 border-y border-zinc-800/80 font-headliner text-3xl md:text-4xl leading-tight tracking-wide text-white">
                    After cutting a friend&apos;s hair one night,
                    <br />
                    <span className="text-brand-red">the spark came back.</span>
                  </blockquote>

                  <p>
                    I returned to Griffith, set up a single barber chair inside my sister&apos;s salon, and dedicated myself to mastering the craft and building a loyal clientele from the ground up.
                  </p>

                  <div className="flex items-center gap-4 pt-6 pb-2 text-[10px] tracking-[0.3em] uppercase text-gray-600">
                    <div className="w-6 h-px bg-brand-red" />
                    <span>The Cave</span>
                  </div>

                  <p>
                    In 2017, I opened the first Modern Mancave with a vision to create a premium grooming experience for regional Australia — combining quality service, great atmosphere, and a space where men could feel confident and comfortable.
                  </p>

                  <p>
                    What started as one chair has now grown into multiple locations, a mobile barbershop servicing remote communities, luxury VIP grooming experiences, and the expansion of MMC Studio.
                  </p>

                  <div className="flex items-center gap-4 pt-6 pb-2 text-[10px] tracking-[0.3em] uppercase text-gray-600">
                    <div className="w-6 h-px bg-brand-red" />
                    <span>What&apos;s Next</span>
                  </div>

                  <p>
                    Today, Modern Mancave continues to evolve — with the next chapter focused on franchising the brand and expanding the vision even further.
                  </p>
                </div>

                <div className="mt-12 pt-7 border-t border-zinc-900 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-gray-600">
                  <strong className="text-white font-semibold">Tristan Sergi</strong>
                  <span>· Founder, Modern Mancave</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
