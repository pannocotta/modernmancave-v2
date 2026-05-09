'use client'

import { useEffect, useRef } from 'react'

type Props = {
  src: string
  poster?: string
  className?: string
  eager?: boolean
}

export default function AmbientVideo({ src, poster, className, eager = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const tryPlay = () => {
      video.play().catch(() => {})
    }

    if (eager) {
      tryPlay()
      return
    }

    const preloadIO = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = 'auto'
          video.load()
          preloadIO.disconnect()
        }
      },
      { rootMargin: '800px 0px' }
    )
    preloadIO.observe(video)

    const playIO = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay()
        } else {
          video.pause()
        }
      },
      { threshold: 0.1 }
    )
    playIO.observe(video)

    return () => {
      preloadIO.disconnect()
      playIO.disconnect()
    }
  }, [eager])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? 'auto' : 'metadata'}
      className={className}
    />
  )
}
