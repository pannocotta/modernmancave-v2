'use client'

import { useEffect } from 'react'

export default function HashScrollHandler() {
  useEffect(() => {
    if (!window.location.hash) return
    const id = window.location.hash.slice(1)
    const target = document.getElementById(id)
    if (!target) return
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
    })
  }, [])
  return null
}
