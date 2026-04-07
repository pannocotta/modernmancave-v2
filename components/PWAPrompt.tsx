'use client'

import { useEffect, useState } from 'react'

export default function PWAPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    const hasPrompted = localStorage.getItem('pwa-prompted')
    
    if (!isStandalone && !hasPrompted) {
      // Show prompt after 10 seconds
      const timer = setTimeout(() => {
        setShowPrompt(true)
      }, 10000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleInstall = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-prompted', 'true')
    // Note: Actual install prompt requires beforeinstallprompt event
    alert('To install: \n\niPhone: Tap Share → Add to Home Screen\nAndroid: Tap menu → Install App')
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-prompted', 'true')
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-50 animate-slide-up">
      <div className="bg-zinc-900 border-2 border-brand-red rounded-lg p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="text-4xl">📱</div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Install Modern Mancave</h3>
            <p className="text-sm text-gray-400 mb-4">
              Add to your home screen for faster booking and exclusive offers
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleInstall}
                className="bg-brand-red hover:bg-[#cc0000] text-white px-4 py-2 rounded-md text-sm font-bold transition"
              >
                Install App
              </button>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white text-sm transition"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
