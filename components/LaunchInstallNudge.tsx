'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Mode = 'unknown' | 'installed' | 'android-prompt' | 'android-steps' | 'ios-safari' | 'ios-other' | 'desktop'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

/**
 * Smaller, contextual install nudge that lives at the bottom of /launch.
 * Hidden if the page is already running as the installed PWA, or if the
 * user has dismissed it this session. Adapts copy + actions per platform.
 */
export default function LaunchInstallNudge() {
  const [mode, setMode] = useState<Mode>('unknown')
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('mmc-install-nudge-dismissed') === '1') {
      setDismissed(true)
    }

    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    if (isStandalone) {
      setMode('installed')
      return
    }

    const ua = navigator.userAgent.toLowerCase()
    const isIOS = /iphone|ipad|ipod/.test(ua)
    const isAndroid = /android/.test(ua)
    const isSafari = /safari/.test(ua) && !/chrome|crios|fxios|edgios/.test(ua)

    if (isIOS) {
      setMode(isSafari ? 'ios-safari' : 'ios-other')
    } else if (isAndroid) {
      setMode('android-steps')
    } else {
      setMode('desktop')
    }

    const onBeforeInstall = (e: Event) => {
      e.preventDefault()
      setInstallPromptEvent(e as BeforeInstallPromptEvent)
      setMode('android-prompt')
    }
    const onAppInstalled = () => {
      setMode('installed')
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onAppInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onAppInstalled)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem('mmc-install-nudge-dismissed', '1')
    setDismissed(true)
  }

  async function handleInstall() {
    if (!installPromptEvent) return
    await installPromptEvent.prompt()
    const result = await installPromptEvent.userChoice
    if (result.outcome === 'accepted') {
      setMode('installed')
    }
  }

  if (mode === 'unknown' || mode === 'installed' || mode === 'desktop' || dismissed) {
    return null
  }

  return (
    <div className="border border-brand-red/40 bg-zinc-950/80 p-5 mt-2 mb-2 relative">
      <button
        onClick={dismiss}
        aria-label="Dismiss install nudge"
        className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-gray-600 hover:text-white text-lg leading-none"
      >
        ×
      </button>

      <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-3 pr-8">Make This Faster</p>

      {mode === 'android-prompt' && (
        <>
          <p className="text-white font-bold text-sm leading-tight mb-2">Add Modern Mancave to your home screen</p>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            One tap to book next time. Opens like a native app — no app store needed.
          </p>
          <button
            onClick={handleInstall}
            className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group"
          >
            <span className="bg-brand-red w-2 self-stretch group-hover:w-8 transition-all duration-300" />
            <span className="px-5 py-2 text-white font-bold text-[10px] tracking-[0.2em] uppercase">Install</span>
          </button>
        </>
      )}

      {mode === 'android-steps' && (
        <>
          <p className="text-white font-bold text-sm leading-tight mb-2">Add Modern Mancave to your home screen</p>
          <p className="text-gray-400 text-xs leading-relaxed mb-3">
            One tap to book next time. In Chrome:
          </p>
          <ol className="text-gray-400 text-xs leading-relaxed space-y-1 mb-4 pl-4 list-decimal">
            <li>Tap the three-dot menu in the top right</li>
            <li>Tap &quot;Install app&quot; or &quot;Add to Home screen&quot;</li>
            <li>Confirm</li>
          </ol>
          <Link
            href="/app"
            className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group"
          >
            <span className="bg-brand-red w-2 self-stretch group-hover:w-8 transition-all duration-300" />
            <span className="px-5 py-2 text-white font-bold text-[10px] tracking-[0.2em] uppercase">More Help</span>
          </Link>
        </>
      )}

      {mode === 'ios-safari' && (
        <>
          <p className="text-white font-bold text-sm leading-tight mb-2">Add Modern Mancave to your home screen</p>
          <p className="text-gray-400 text-xs leading-relaxed mb-3">
            One tap to book next time. To install:
          </p>
          <ol className="text-gray-400 text-xs leading-relaxed space-y-1 mb-4 pl-4 list-decimal">
            <li>Tap the Share icon (square with up arrow) in your Safari toolbar</li>
            <li>Scroll down, tap &quot;Add to Home Screen&quot;</li>
            <li>Tap &quot;Add&quot; in the top right</li>
          </ol>
        </>
      )}

      {mode === 'ios-other' && (
        <>
          <p className="text-white font-bold text-sm leading-tight mb-2">Add Modern Mancave to your home screen</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            On iPhone, only Safari can install web apps to the home screen. Open <span className="text-white font-mono">modernmancave.com.au/launch</span> in Safari, then come back to this page.
          </p>
        </>
      )}
    </div>
  )
}
