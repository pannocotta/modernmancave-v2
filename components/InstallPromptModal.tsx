'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'mmc-install-prompt-seen'

type Mode = 'unknown' | 'installed' | 'android-prompt' | 'android-steps' | 'ios-safari' | 'ios-other' | 'desktop'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

/**
 * First-visit install popup that appears on /launch.
 * - Hidden if already running as the installed PWA.
 * - Hidden if previously dismissed (persisted in localStorage).
 * - Adapts copy + CTA per platform.
 */
export default function InstallPromptModal() {
  const [mode, setMode] = useState<Mode>('unknown')
  const [open, setOpen] = useState(false)
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    // Skip entirely if running as installed PWA
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    if (isStandalone) {
      setMode('installed')
      return
    }

    // Skip if user has already seen the popup
    if (localStorage.getItem(STORAGE_KEY) === '1') return

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

    // Slight delay so the page renders first, then the popup fades in
    const t = setTimeout(() => setOpen(true), 600)

    const onBeforeInstall = (e: Event) => {
      e.preventDefault()
      setInstallPromptEvent(e as BeforeInstallPromptEvent)
      setMode('android-prompt')
    }
    const onAppInstalled = () => {
      setMode('installed')
      setOpen(false)
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onAppInstalled)
    return () => {
      clearTimeout(t)
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onAppInstalled)
    }
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setOpen(false)
  }

  async function handleInstall() {
    if (!installPromptEvent) return
    await installPromptEvent.prompt()
    const result = await installPromptEvent.userChoice
    if (result.outcome === 'accepted') {
      setMode('installed')
    }
    dismiss()
  }

  if (!open || mode === 'unknown' || mode === 'installed') return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-zinc-950 border border-zinc-800 p-6 md:p-7 animate-[slideUp_0.4s_ease-out]">
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white text-xl leading-none"
        >
          ×
        </button>

        {/* Tiny phone icon */}
        <div className="w-10 h-12 mb-5 mx-auto border-2 border-brand-red rounded-md relative flex items-center justify-center">
          <span className="text-brand-red font-black text-[10px] tracking-[0.1em]">MMC</span>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-brand-red rounded-full" />
        </div>

        <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-center">Install the App</p>
        <h2 className="font-headliner gradient-heading text-2xl md:text-3xl leading-[0.85] mb-3 text-center">
          ADD TO YOUR<br />HOME SCREEN
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 text-center">
          One tap to book next time. Opens like a native app — no app store needed.
        </p>

        {mode === 'android-prompt' && (
          <div className="flex flex-col gap-3">
            <button
              onClick={handleInstall}
              className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group w-full"
            >
              <span className="bg-brand-red w-2 self-stretch group-hover:w-12 transition-all duration-300" />
              <span className="px-5 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase flex-1 text-center">
                Install Now
              </span>
            </button>
            <button onClick={dismiss} className="text-gray-500 hover:text-white text-xs tracking-[0.2em] uppercase py-2">
              Maybe Later
            </button>
          </div>
        )}

        {mode === 'android-steps' && (
          <>
            <ol className="text-gray-400 text-xs leading-relaxed space-y-2 mb-5 pl-4 list-decimal">
              <li>Tap the three-dot menu in the top right of Chrome</li>
              <li>Tap &quot;Install app&quot; (or &quot;Add to Home screen&quot; on older Chrome)</li>
              <li>Confirm — the icon appears on your home screen</li>
            </ol>
            <button
              onClick={dismiss}
              className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group w-full"
            >
              <span className="bg-brand-red w-2 self-stretch group-hover:w-12 transition-all duration-300" />
              <span className="px-5 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase flex-1 text-center">
                Got It
              </span>
            </button>
          </>
        )}

        {mode === 'ios-safari' && (
          <>
            <ol className="text-gray-400 text-xs leading-relaxed space-y-2 mb-5 pl-4 list-decimal">
              <li>Tap the Share icon in your Safari toolbar (the square with an upward arrow)</li>
              <li>Scroll down, tap &quot;Add to Home Screen&quot;</li>
              <li>Tap &quot;Add&quot; in the top right — done</li>
            </ol>
            <button
              onClick={dismiss}
              className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group w-full"
            >
              <span className="bg-brand-red w-2 self-stretch group-hover:w-12 transition-all duration-300" />
              <span className="px-5 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase flex-1 text-center">
                Got It
              </span>
            </button>
          </>
        )}

        {mode === 'ios-other' && (
          <>
            <p className="text-gray-400 text-xs leading-relaxed mb-5">
              On iPhone, only Safari can install web apps. Open <span className="text-white font-mono">modernmancave.com.au/launch</span> in Safari, then come back to this page.
            </p>
            <button
              onClick={dismiss}
              className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group w-full"
            >
              <span className="bg-brand-red w-2 self-stretch group-hover:w-12 transition-all duration-300" />
              <span className="px-5 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase flex-1 text-center">
                Got It
              </span>
            </button>
          </>
        )}

        {mode === 'desktop' && (
          <>
            <p className="text-gray-400 text-xs leading-relaxed mb-5">
              The Modern Mancave app installs to your phone&apos;s home screen, not your computer. Open this page on your phone to install.
            </p>
            <button
              onClick={dismiss}
              className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group w-full"
            >
              <span className="bg-brand-red w-2 self-stretch group-hover:w-12 transition-all duration-300" />
              <span className="px-5 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase flex-1 text-center">
                Got It
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
