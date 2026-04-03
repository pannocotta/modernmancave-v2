'use client'

import { useEffect, useState } from 'react'

export default function SmokeReveal({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    // Trigger reveal after mount
    const timer = setTimeout(() => setRevealed(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      {/* Content */}
      <div className={`transition-all duration-2000 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
      
      {/* Smoke overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-2000 ease-out ${
          revealed ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
        }`}
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(0,0,0,0.9) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 30%, rgba(0,0,0,0.8) 0%, transparent 40%),
            radial-gradient(ellipse at 40% 70%, rgba(0,0,0,0.7) 0%, transparent 45%),
            radial-gradient(ellipse at 80% 50%, rgba(0,0,0,0.9) 0%, transparent 50%)
          `,
          filter: 'blur(20px)',
        }}
      />
    </div>
  )
}
