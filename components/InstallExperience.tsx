'use client'

import { useState, useEffect } from 'react'
import { CTAButton } from '@/components/CTA'

type Platform = 'ios-safari' | 'ios-other' | 'android' | 'desktop' | 'installed' | 'unknown'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

interface InstallStep {
  title: string
  detail: string
  icon: React.ReactNode
}

export default function InstallExperience() {
  const [platform, setPlatform] = useState<Platform>('unknown')
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    if (isStandalone) {
      setPlatform('installed')
      return
    }
    const ua = navigator.userAgent.toLowerCase()
    const isIOS = /iphone|ipad|ipod/.test(ua)
    const isAndroid = /android/.test(ua)
    const isSafari = /safari/.test(ua) && !/chrome|crios|fxios|edgios/.test(ua)
    if (isIOS) {
      setPlatform(isSafari ? 'ios-safari' : 'ios-other')
    } else if (isAndroid) {
      setPlatform('android')
    } else {
      setPlatform('desktop')
    }
    const onBeforeInstall = (e: Event) => {
      e.preventDefault()
      setInstallPromptEvent(e as BeforeInstallPromptEvent)
    }
    const onAppInstalled = () => {
      setPlatform('installed')
      setInstallPromptEvent(null)
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onAppInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onAppInstalled)
    }
  }, [])

  async function handleInstall() {
    if (!installPromptEvent) return
    await installPromptEvent.prompt()
    const result = await installPromptEvent.userChoice
    if (result.outcome === 'accepted') {
      setInstallPromptEvent(null)
    }
  }

  if (platform === 'unknown') {
    return <div className="bg-zinc-950 p-10 md:p-14 min-h-[300px]" />
  }

  if (platform === 'installed') {
    return (
      <div className="border border-zinc-800 bg-zinc-950 p-10 md:p-16 text-center">
        <div className="w-12 h-px bg-brand-red mx-auto mb-8" />
        <h2 className="font-headliner gradient-heading text-3xl md:text-5xl mb-6">
          YOU&apos;RE ALL SET
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
          Modern Mancave is installed on this device. Open it from your home screen and you&apos;ll go straight to the booking page.
        </p>
      </div>
    )
  }

  if (platform === 'android' && installPromptEvent) {
    return (
      <div className="border border-zinc-800 bg-zinc-950 p-10 md:p-16 text-center">
        <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">
          One Tap Install
        </span>
        <h2 className="font-headliner gradient-heading text-3xl md:text-5xl mb-6">
          INSTALL THE APP
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-md mx-auto mb-10">
          Tap below to add Modern Mancave to your home screen. No app store, no waiting.
        </p>
        <div className="flex justify-center">
          <CTAButton onClick={handleInstall}>Install App</CTAButton>
        </div>
      </div>
    )
  }

  if (platform === 'android') {
    return (
      <PlatformInstructions
        eyebrow="Android · Chrome"
        heading="ADD TO HOME"
        steps={ANDROID_STEPS}
      />
    )
  }

  if (platform === 'ios-safari') {
    return (
      <PlatformInstructions
        eyebrow="iPhone · Safari"
        heading="ADD TO HOME"
        steps={IOS_STEPS}
        intro="Takes about 20 seconds. After this, Modern Mancave will live on your home screen just like any other app."
      />
    )
  }

  if (platform === 'ios-other') {
    return (
      <div className="border border-zinc-800 bg-zinc-950 p-10 md:p-16 text-center">
        <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">
          Switch Browser
        </span>
        <h2 className="font-headliner gradient-heading text-3xl md:text-5xl mb-6">
          OPEN IN SAFARI
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-md mx-auto mb-6">
          On iPhone and iPad, only Safari can install web apps to the home screen — Apple doesn&apos;t allow other browsers to do it.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
          Copy the address <span className="text-white font-mono">modernmancave.com.au/app</span> into Safari, then come back to this page.
        </p>
      </div>
    )
  }

  // Desktop fallback — QR points to /launch so phone users land in the app shell.
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&bgcolor=000000&color=FFFFFF&margin=8&data=${encodeURIComponent('https://modernmancave.com.au/launch')}`
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-10 md:p-16 text-center">
      <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">
        Mobile Only
      </span>
      <h2 className="font-headliner gradient-heading text-3xl md:text-5xl mb-6">
        SCAN ON YOUR PHONE
      </h2>
      <p className="text-gray-400 leading-relaxed max-w-md mx-auto mb-8">
        Point your phone camera at the QR code below. It opens the Modern Mancave app on your phone — you can book straight away or add it to your home screen for one-tap access.
      </p>
      <div className="inline-block p-3 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qrUrl} width={240} height={240} alt="QR code linking to modernmancave.com.au/launch" className="block" />
      </div>
      <p className="text-gray-600 text-xs tracking-[0.15em] uppercase mt-6">
        Or visit modernmancave.com.au/launch on your phone
      </p>
    </div>
  )
}

/* ─── Step icons (inline SVG, brand-coloured) ───────────────────── */

function SafariIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="10" />
      <polygon points="15.5 8.5 13 13 8.5 15.5 11 11" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 L12 15" />
      <path d="M8 7 L12 3 L16 7" />
      <path d="M5 12 L5 20 L19 20 L19 12" />
    </svg>
  )
}

function PlusBoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M12 8 L12 16" />
      <path d="M8 12 L16 12" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13 L10 18 L20 7" />
    </svg>
  )
}

function ChromeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2 L12 8.5" />
      <path d="M21 12 L14 12" />
      <path d="M3.5 6 L9 9.5" />
    </svg>
  )
}

function ThreeDotsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 L12 16" />
      <path d="M7 11 L12 16 L17 11" />
      <path d="M4 18 L4 21 L20 21 L20 18" />
    </svg>
  )
}

/* ─── Step definitions ───────────────────────────────────── */

const IOS_STEPS: InstallStep[] = [
  {
    title: 'Make sure you\'re in Safari',
    detail: 'On iPhone, only Safari can install apps to your home screen. If you\'re not in Safari, copy this page\'s address and open it there.',
    icon: <SafariIcon />,
  },
  {
    title: 'Tap the Share button',
    detail: 'It\'s the square with an upward arrow. On iPhone it sits in the bottom toolbar; on iPad it\'s usually in the top right.',
    icon: <ShareIcon />,
  },
  {
    title: 'Tap "Add to Home Screen"',
    detail: 'Scroll down through the share sheet — it appears in the second row of options alongside "Find on Page" and others.',
    icon: <PlusBoxIcon />,
  },
  {
    title: 'Tap "Add" in the top right',
    detail: 'You can rename the app first if you want — but the default works fine. The Modern Mancave icon will appear on your home screen.',
    icon: <CheckIcon />,
  },
]

const ANDROID_STEPS: InstallStep[] = [
  {
    title: 'Make sure you\'re in Chrome',
    detail: 'Chrome handles installs cleanest on Android. If you\'re in Samsung Internet or Firefox, the steps are similar but the menu item may be named differently.',
    icon: <ChromeIcon />,
  },
  {
    title: 'Tap the three-dot menu',
    detail: 'In the top right of Chrome. Three vertical dots opens the menu with Settings, Bookmarks, and Install.',
    icon: <ThreeDotsIcon />,
  },
  {
    title: 'Tap "Install app"',
    detail: 'On older Chrome versions this is called "Add to Home screen". Either way it\'s the same outcome.',
    icon: <DownloadIcon />,
  },
  {
    title: 'Tap "Install" to confirm',
    detail: 'Chrome will ask for confirmation. Tap Install and the Modern Mancave icon appears on your home screen straight away.',
    icon: <CheckIcon />,
  },
]

/* ─── Layout component ────────────────────────────────────── */

export { IOS_STEPS, ANDROID_STEPS, PlatformInstructions }

function PlatformInstructions({
  eyebrow,
  heading,
  steps,
  intro,
}: {
  eyebrow: string
  heading: string
  steps: InstallStep[]
  intro?: string
}) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-10">
      <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
        {eyebrow}
      </span>
      <h2 className="font-headliner gradient-heading text-3xl md:text-5xl leading-[0.85] mb-4">
        {heading}
      </h2>
      {intro && (
        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">{intro}</p>
      )}

      <div className="space-y-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="border border-zinc-900 bg-black p-5 flex items-start gap-5"
          >
            {/* Number + icon stack */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm">
                {i + 1}
              </div>
              <div className="w-7 h-7 text-brand-red">{step.icon}</div>
            </div>

            {/* Text */}
            <div className="flex-1 pt-1">
              <p className="text-white font-bold text-sm tracking-wide mb-1.5">
                {step.title}
              </p>
              <p className="text-gray-400 text-[13px] leading-relaxed">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Outcome card */}
      <div className="mt-6 border border-brand-red/40 bg-zinc-950 p-5 flex items-center gap-4">
        <div className="w-8 h-8 text-brand-red shrink-0">
          <CheckIcon />
        </div>
        <p className="text-white text-sm leading-relaxed">
          Once installed, tap the Modern Mancave icon any time you want to book — it opens straight to the booking screen.
        </p>
      </div>
    </div>
  )
}
