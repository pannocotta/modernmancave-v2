'use client'

import { useState, useEffect } from 'react'
import { CTAButton } from '@/components/CTA'
import { ArrowRightIcon } from '@/components/icons'

type Platform = 'ios-safari' | 'ios-other' | 'android' | 'desktop' | 'installed' | 'unknown'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallExperience() {
  const [platform, setPlatform] = useState<Platform>('unknown')
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    // Already installed?
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      // iOS Safari sets navigator.standalone when added to home screen
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    if (isStandalone) {
      setPlatform('installed')
      return
    }

    // Detect device
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
        steps={[
          'Tap the three-dot menu in the top right of Chrome',
          'Tap "Install app" (or "Add to Home screen" on older Chrome)',
          'Tap "Install" in the popup to confirm',
          'A new Modern Mancave icon will appear on your home screen',
        ]}
      />
    )
  }

  if (platform === 'ios-safari') {
    return (
      <PlatformInstructions
        eyebrow="iPhone · Safari"
        heading="ADD TO HOME"
        steps={[
          'Tap the Share icon — the square with an upward arrow. On iPhone it sits in the bottom toolbar; on iPad it\'s in the top right.',
          'In the share sheet, scroll down through the action list',
          'Tap "Add to Home Screen"',
          'Tap "Add" in the top right of the next screen — the icon will appear on your home screen',
        ]}
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

  // Desktop fallback — QR points to /launch so phone users land in the
  // actual app shell, not the install instructions page. They can use it
  // immediately and the install nudge sits inside /launch for context.
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

function PlatformInstructions({
  eyebrow,
  heading,
  steps,
}: {
  eyebrow: string
  heading: string
  steps: string[]
}) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-10 md:p-16">
      <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">
        {eyebrow}
      </span>
      <h2 className="font-headliner gradient-heading text-3xl md:text-5xl mb-10">
        {heading}
      </h2>
      <ol className="space-y-7">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-6 items-start">
            <span className="text-brand-red font-bold text-2xl leading-none w-6 shrink-0">{i + 1}</span>
            <span className="text-gray-300 text-base leading-snug">{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-12 pt-8 border-t border-zinc-800 flex items-center gap-3 text-gray-500 text-sm">
        <ArrowRightIcon className="w-4 h-4 text-brand-red shrink-0" />
        <span>Once installed, open from your home screen — looks and feels like a native app.</span>
      </div>
    </div>
  )
}
