'use client'

import { useState, useEffect } from 'react'

type Step = 0 | 1 | 2 | 3

const STEP_DURATIONS = [3000, 3000, 3000, 2400]

export default function AppMockup() {
  const [step, setStep] = useState<Step>(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setStep(((step + 1) % 4) as Step)
    }, STEP_DURATIONS[step])
    return () => clearTimeout(id)
  }, [step])

  return (
    <div className="relative mx-auto w-full max-w-[280px] md:max-w-[300px]">
      {/* iPhone frame */}
      <div className="relative aspect-[9/19.5] rounded-[42px] bg-zinc-900 p-2.5 shadow-2xl shadow-black/60 border border-zinc-800">
        <div className="absolute top-32 -right-1 w-1 h-14 bg-zinc-800 rounded-r-sm" aria-hidden="true" />
        <div className="absolute top-24 -left-1 w-1 h-8 bg-zinc-800 rounded-l-sm" aria-hidden="true" />
        <div className="absolute top-36 -left-1 w-1 h-12 bg-zinc-800 rounded-l-sm" aria-hidden="true" />

        {/* Screen */}
        <div className="relative w-full h-full overflow-hidden rounded-[34px] bg-black">
          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-24 h-6 bg-black rounded-full" aria-hidden="true" />
          {/* Status bar */}
          <div className="absolute top-2.5 left-0 right-0 z-20 flex items-center justify-between px-6 text-white text-[9px] font-semibold">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[8px]">●●●</span>
              <span className="text-[8px]">●</span>
              <span className="text-[8px]">100</span>
            </div>
          </div>

          {/* Persistent header */}
          <div className="absolute top-10 left-0 right-0 px-3.5 z-10">
            <div className="flex items-center justify-between mb-3 pt-1">
              <span className="text-brand-red text-[10px] font-black tracking-[0.2em]">MMC</span>
              <div className="flex flex-col gap-[3px]">
                <span className="block w-4 h-px bg-brand-red" />
                <span className="block w-3 h-px bg-brand-red ml-auto" />
                <span className="block w-4 h-px bg-brand-red" />
              </div>
            </div>
          </div>

          {/* Step indicator */}
          <div className="absolute top-[68px] left-3.5 right-3.5 z-10 flex items-center gap-2">
            <span className="text-brand-red text-[6.5px] font-bold tracking-[0.3em] uppercase">
              Booking · Step {step === 3 ? 'Done' : step + 1} {step !== 3 && 'of 3'}
            </span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* Animated screen area */}
          <div className="absolute top-[88px] bottom-3 left-0 right-0 px-3.5">
            <ServiceScreen visible={step === 0} step={step} />
            <DateScreen visible={step === 1} step={step} />
            <TimeScreen visible={step === 2} step={step} />
            <ConfirmedScreen visible={step === 3} step={step} />
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenWrap({
  visible,
  children,
}: {
  visible: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={`absolute inset-0 px-3.5 transition-opacity duration-500 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {children}
    </div>
  )
}

function ServiceScreen({ visible, step }: { visible: boolean; step: number }) {
  const services = [
    { name: "Men's Cut", price: 40 },
    { name: 'Skin Fade', price: 45, selected: true },
    { name: 'Cut & Beard', price: 50 },
    { name: 'Hot Towel Shave', price: 45 },
  ]
  return (
    <ScreenWrap visible={visible}>
      <p className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-3">Select Service</p>
      <div className="space-y-1.5">
        {services.map((s) => (
          <div
            key={s.name}
            className={`relative flex items-center justify-between py-2 px-2 border rounded-sm ${
              s.selected ? 'border-brand-red bg-brand-red/10' : 'border-zinc-800'
            }`}
          >
            <span className={`text-[9px] font-semibold ${s.selected ? 'text-white' : 'text-gray-400'}`}>
              {s.name}
            </span>
            <span className={`text-[9px] font-bold ${s.selected ? 'text-brand-red' : 'text-gray-600'}`}>
              ${s.price}
            </span>
            {s.selected && step === 0 && (
              <span
                key={`s-${step}`}
                className="absolute inset-0 rounded-sm border border-brand-red animate-tap-flash pointer-events-none"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </ScreenWrap>
  )
}

function DateScreen({ visible, step }: { visible: boolean; step: number }) {
  const calendarRows: (string | null)[][] = [
    [null, '_1', '_2', '_3', '_4', '_5', '_6'],
    ['_7', '_8', '_9', '_10', '11', '12', '13'],
    ['14', '15', '16', '17', '18', '19', '20'],
    ['21', '22', '23', '24', '25', '26', '27'],
    ['28', '29', '30', null, null, null, null],
  ]
  const selectedDay = '11'
  return (
    <ScreenWrap visible={visible}>
      <div className="border-l-2 border-brand-red pl-2 mb-3">
        <p className="text-white font-bold text-[10px] tracking-wide leading-tight">SKIN FADE</p>
        <p className="text-gray-500 text-[7.5px] tracking-[0.15em] uppercase">$45 · 30 min · Nick</p>
      </div>
      <p className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-2">Pick a Date</p>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-gray-400 text-[8px] font-bold tracking-[0.15em] uppercase">April 2026</span>
        <div className="flex gap-1.5 text-gray-500">
          <span className="text-[8px]">‹</span>
          <span className="text-[8px]">›</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px mb-0.5">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} className="text-center text-gray-600 text-[6.5px] font-bold py-0.5">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-px relative">
        {calendarRows.flat().map((cell, i) => {
          if (cell === null) return <div key={i} className="aspect-square" />
          const day = cell.replace('_', '')
          const isPast = cell.startsWith('_')
          const isSelected = day === selectedDay
          return (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center text-[7.5px] font-medium rounded-sm relative ${
                isSelected ? 'bg-brand-red text-white' : isPast ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              {day}
              {isSelected && step === 1 && (
                <span
                  key={`d-${step}`}
                  className="absolute inset-0 rounded-sm border border-brand-red animate-tap-flash pointer-events-none"
                  aria-hidden="true"
                />
              )}
            </div>
          )
        })}
      </div>
    </ScreenWrap>
  )
}

function TimeScreen({ visible, step }: { visible: boolean; step: number }) {
  const slots = ['10:00', '11:30', '13:00', '14:30']
  const selected = '11:30'
  return (
    <ScreenWrap visible={visible}>
      <div className="border-l-2 border-brand-red pl-2 mb-3">
        <p className="text-white font-bold text-[10px] tracking-wide leading-tight">SKIN FADE · APR 11</p>
        <p className="text-gray-500 text-[7.5px] tracking-[0.15em] uppercase">$45 · 30 min · Nick</p>
      </div>
      <p className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-2">Pick a Time</p>
      <div className="grid grid-cols-2 gap-1.5 mb-4">
        {slots.map((t) => {
          const isSelected = t === selected
          return (
            <div
              key={t}
              className={`relative text-center text-[9px] font-semibold py-1.5 border rounded-sm ${
                isSelected ? 'bg-brand-red border-brand-red text-white' : 'border-zinc-800 text-gray-400'
              }`}
            >
              {t}
              {isSelected && step === 2 && (
                <span
                  key={`t-${step}`}
                  className="absolute inset-0 rounded-sm border border-brand-red animate-tap-flash pointer-events-none"
                  aria-hidden="true"
                />
              )}
            </div>
          )
        })}
      </div>
      <div className="flex items-stretch border border-white/30">
        <span className="bg-brand-red w-2 self-stretch shrink-0" />
        <span className="px-3 py-1.5 text-white font-bold text-[8px] tracking-[0.2em] uppercase flex-1 text-center">
          Continue
        </span>
      </div>
    </ScreenWrap>
  )
}

function ConfirmedScreen({ visible, step }: { visible: boolean; step: number }) {
  return (
    <ScreenWrap visible={visible}>
      <div className="flex flex-col items-center justify-center text-center pt-6">
        <div
          key={`c-${step}`}
          className={`w-12 h-12 rounded-full bg-brand-red/15 border border-brand-red flex items-center justify-center mb-4 ${
            step === 3 ? 'animate-tap-flash' : ''
          }`}
        >
          <svg
            className="w-6 h-6 text-brand-red"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-bold text-[10px] tracking-[0.25em] uppercase mb-2">Booking Confirmed</p>
        <div className="border border-zinc-800 rounded-sm px-3 py-2 mt-1 w-full">
          <p className="text-gray-500 text-[7px] tracking-[0.2em] uppercase mb-0.5">Skin Fade with Nick</p>
          <p className="text-white text-[9px] font-semibold">Sat 11 Apr · 11:30 AM</p>
          <p className="text-brand-red text-[9px] font-bold mt-0.5">$45.00</p>
        </div>
        <p className="text-gray-600 text-[7px] tracking-wide mt-3 leading-snug px-2">
          Confirmation sent to your email.
        </p>
      </div>
    </ScreenWrap>
  )
}
