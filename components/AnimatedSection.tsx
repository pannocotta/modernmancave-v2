'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight'
  delay?: number
}

export default function AnimatedSection({ children, className = '', animation = 'fadeIn', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)

    if (mq.matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const animations = {
    fadeIn: 'opacity-0 translate-y-0',
    slideUp: 'opacity-0 translate-y-8',
    slideLeft: 'opacity-0 translate-x-8',
    slideRight: 'opacity-0 -translate-x-8',
  }

  const baseStyle = prefersReducedMotion
    ? ''
    : `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : animations[animation]}`

  return (
    <div
      ref={ref}
      className={`${baseStyle} ${className}`}
      style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms` }}
    >
      {children}
    </div>
  )
}
