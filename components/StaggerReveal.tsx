'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

interface ItemProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'fade'
}

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: ContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', direction = 'up' }: ItemProps) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
