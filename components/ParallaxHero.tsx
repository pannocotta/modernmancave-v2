'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface Props {
  image: string
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function ParallaxHero({ image, title, subtitle, children }: Props) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[50vh] flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image src={image} alt="" fill className="object-cover grayscale opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </motion.div>

      <motion.div className="relative z-10 w-full px-4 md:px-6" style={{ opacity }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headliner gradient-heading text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="w-16 md:w-20 h-1 bg-gray-500 mx-auto mb-6" />
          {subtitle && <p className="text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
          {children}
        </div>
      </motion.div>
    </section>
  )
}
