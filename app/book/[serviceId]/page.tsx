'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import type { StripeCardElementOptions } from '@stripe/stripe-js'
import { ArrowRightIcon } from '@/components/icons'
import { getServiceById, type AcuityService } from '@/lib/acuity'
import { getStripe } from '@/lib/stripe'
import { saveBooking } from '@/lib/bookings'

type Step = 'date' | 'time' | 'details' | 'confirm' | 'success'

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export default function BookFlowPage({ params }: { params: { serviceId: string } }) {
  const serviceId = Number(params.serviceId)
  const service = getServiceById(serviceId)

  const [step, setStep] = useState<Step>('date')
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>({ firstName: '', lastName: '', email: '', phone: '' })
  const [formError, setFormError] = useState<string | null>(null)

  if (!service) {
    return (
      <main className="min-h-[100svh] bg-black text-white flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Service not found</p>
          <h1 className="font-headliner gradient-heading text-4xl mb-6">UNAVAILABLE</h1>
          <p className="text-gray-400 mb-8 max-w-sm mx-auto">
            This booking link is no longer valid. Pick another service from the list.
          </p>
          <Link
            href="/launch"
            className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group"
          >
            <span className="bg-brand-red w-2 self-stretch group-hover:w-12 transition-all duration-300" />
            <span className="px-6 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase">Back to Services</span>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-[100svh] bg-black text-white relative overflow-hidden">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-[60vh] bg-brand-red/[0.1] blur-3xl rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] grain-overlay" />
      </div>

      {/* App-style header */}
      <header className="relative z-10 px-5 pt-10 pb-4 flex items-center justify-between border-b border-zinc-900">
        <Link
          href="/launch"
          aria-label="Back"
          className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-brand-red transition-colors"
        >
          <ArrowRightIcon className="w-5 h-5 rotate-180" />
        </Link>
        <p className="text-white/80 text-xs tracking-[0.2em] uppercase font-semibold">Book</p>
        <Link
          href="/launch"
          aria-label="Close"
          className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white text-2xl leading-none"
        >
          ×
        </Link>
      </header>

      <div className="relative z-10 px-6 pt-6 pb-24 max-w-md mx-auto">
        {/* Service summary */}
        <div className="border-l-2 border-brand-red pl-4 mb-6">
          <p className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-1">Selected Service</p>
          <p className="text-white font-bold text-lg leading-tight">{service.name}</p>
          <p className="text-gray-500 text-xs tracking-wide mt-1">
            ${service.price} · {service.duration} min · with Nick
          </p>
        </div>

        {/* Step indicator */}
        <StepIndicator step={step} />

        {/* Step content */}
        <div className="mt-8">
          {step === 'date' && (
            <DateStep
              service={service}
              onPick={(date) => {
                setSelectedDate(date)
                setSelectedTime(null)
                setStep('time')
              }}
            />
          )}
          {step === 'time' && selectedDate && (
            <TimeStep
              service={service}
              date={selectedDate}
              onBack={() => setStep('date')}
              onPick={(time) => {
                setSelectedTime(time)
                setStep('details')
              }}
            />
          )}
          {step === 'details' && (
            <DetailsStep
              form={form}
              onChange={setForm}
              error={formError}
              onBack={() => setStep('time')}
              onSubmit={() => {
                const error = validateForm(form)
                if (error) {
                  setFormError(error)
                  return
                }
                setFormError(null)
                setStep('confirm')
              }}
            />
          )}
          {step === 'confirm' && selectedDate && selectedTime && (
            <Elements stripe={getStripe()}>
              <ConfirmStep
                service={service}
                date={selectedDate}
                time={selectedTime}
                form={form}
                onBack={() => setStep('details')}
                onSuccess={() => setStep('success')}
              />
            </Elements>
          )}
          {step === 'success' && selectedDate && selectedTime && (
            <SuccessStep service={service} date={selectedDate} time={selectedTime} form={form} />
          )}
        </div>
      </div>
    </main>
  )
}

function StepIndicator({ step }: { step: Step }) {
  const labels: { key: Step; label: string }[] = [
    { key: 'date', label: 'Date' },
    { key: 'time', label: 'Time' },
    { key: 'details', label: 'Details' },
    { key: 'confirm', label: 'Pay' },
  ]
  // 'success' state: render every step as completed
  const currentIndex = step === 'success' ? labels.length : labels.findIndex((l) => l.key === step)
  return (
    <div className="flex items-center gap-1.5">
      {labels.map((l, i) => {
        const done = i < currentIndex
        const active = i === currentIndex
        return (
          <div key={l.key} className="flex-1 flex items-center gap-1.5">
            <div className="flex-1 flex flex-col items-center gap-1.5">
              <div className={`w-full h-0.5 ${active || done ? 'bg-brand-red' : 'bg-zinc-800'}`} />
              <span
                className={`text-[8px] font-bold tracking-[0.2em] uppercase ${
                  active ? 'text-white' : done ? 'text-brand-red' : 'text-gray-600'
                }`}
              >
                {l.label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ─── Date step ─────────────────────────────────────────── */

function DateStep({ service, onPick }: { service: AcuityService; onPick: (date: string) => void }) {
  const [monthOffset, setMonthOffset] = useState(0)
  const [dates, setDates] = useState<string[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const month = useMemo(() => {
    const d = new Date()
    d.setDate(1)
    d.setMonth(d.getMonth() + monthOffset)
    return d
  }, [monthOffset])

  const monthKey = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetch(`/api/book/dates?serviceId=${service.id}&month=${monthKey}`)
      .then(async (r) => {
        if (!r.ok) throw new Error('Failed')
        return r.json()
      })
      .then((j) => {
        if (cancelled) return
        setDates(j.dates ?? [])
      })
      .catch(() => {
        if (cancelled) return
        setError('Could not load availability. Try another month.')
        setDates([])
      })
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [service.id, monthKey])

  const grid = useMemo(() => buildCalendarGrid(month, new Set(dates ?? [])), [month, dates])

  return (
    <div>
      <p className="text-white font-bold text-base tracking-wide mb-4">Pick a date</p>

      {/* Month navigator */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setMonthOffset((m) => Math.max(0, m - 1))}
          disabled={monthOffset === 0}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-red disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous month"
        >
          ‹
        </button>
        <span className="text-white text-sm font-bold tracking-[0.15em] uppercase">
          {month.toLocaleString('en-AU', { month: 'long', year: 'numeric' })}
        </span>
        <button
          onClick={() => setMonthOffset((m) => m + 1)}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-red"
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} className="text-center text-gray-500 text-[10px] font-bold tracking-wider py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-4 min-h-[260px]">
        {grid.map((cell, i) => {
          if (!cell) return <div key={i} className="aspect-square" />
          const { day, dateStr, available } = cell
          return (
            <button
              key={i}
              onClick={() => available && onPick(dateStr)}
              disabled={!available}
              className={`aspect-square flex items-center justify-center text-sm rounded-sm transition-colors ${
                available
                  ? 'border border-zinc-800 text-white hover:border-brand-red hover:bg-brand-red/10 active:scale-[0.95]'
                  : 'text-gray-700 cursor-not-allowed'
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>

      {loading && (
        <p className="text-gray-500 text-xs text-center tracking-wide">Loading availability…</p>
      )}
      {!loading && error && (
        <p className="text-red-400 text-xs text-center tracking-wide">{error}</p>
      )}
      {!loading && !error && dates && dates.length === 0 && (
        <p className="text-gray-500 text-xs text-center tracking-wide leading-relaxed">
          No availability this month. Try the next month.
        </p>
      )}
    </div>
  )
}

interface CalendarCell {
  day: number
  dateStr: string
  available: boolean
}

function buildCalendarGrid(monthStart: Date, availableDates: Set<string>): (CalendarCell | null)[] {
  const year = monthStart.getFullYear()
  const month = monthStart.getMonth()
  const firstDayWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (CalendarCell | null)[] = []
  for (let i = 0; i < firstDayWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    cells.push({ day: d, dateStr, available: availableDates.has(dateStr) })
  }
  // Pad to multiples of 7
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

/* ─── Time step ─────────────────────────────────────────── */

function TimeStep({
  service,
  date,
  onBack,
  onPick,
}: {
  service: AcuityService
  date: string
  onBack: () => void
  onPick: (time: string) => void
}) {
  const [times, setTimes] = useState<string[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetch(`/api/book/times?serviceId=${service.id}&date=${date}`)
      .then(async (r) => {
        if (!r.ok) throw new Error('Failed')
        return r.json()
      })
      .then((j) => {
        if (cancelled) return
        setTimes((j.times ?? []).map((t: { time: string }) => t.time))
      })
      .catch(() => {
        if (cancelled) return
        setError('Could not load times. Pick another date.')
        setTimes([])
      })
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [service.id, date])

  return (
    <div>
      <button
        onClick={onBack}
        className="text-gray-500 text-[10px] tracking-[0.2em] uppercase hover:text-white mb-4 inline-flex items-center gap-1"
      >
        <span>‹</span>
        <span>Change date</span>
      </button>

      <p className="text-white font-bold text-base tracking-wide mb-1">Pick a time</p>
      <p className="text-gray-500 text-xs tracking-wide mb-4">{formatHumanDate(date)}</p>

      {loading && (
        <p className="text-gray-500 text-xs text-center tracking-wide py-12">Loading times…</p>
      )}
      {!loading && error && (
        <p className="text-red-400 text-xs text-center tracking-wide py-12">{error}</p>
      )}
      {!loading && !error && times && times.length === 0 && (
        <p className="text-gray-500 text-sm text-center tracking-wide py-12 leading-relaxed">
          No times available on this date. Pick another day.
        </p>
      )}

      {!loading && times && times.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {times.map((t) => (
            <button
              key={t}
              onClick={() => onPick(t)}
              className="border border-zinc-800 hover:border-brand-red active:scale-[0.97] transition-all py-3 text-white text-sm font-semibold"
            >
              {formatTime(t)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Details step ──────────────────────────────────────── */

function DetailsStep({
  form,
  onChange,
  error,
  onBack,
  onSubmit,
}: {
  form: FormState
  onChange: (f: FormState) => void
  error: string | null
  onBack: () => void
  onSubmit: () => void
}) {
  const inputClass =
    'w-full bg-transparent border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors placeholder:text-zinc-700'
  const labelClass = 'block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-2'

  return (
    <div>
      <button
        onClick={onBack}
        className="text-gray-500 text-[10px] tracking-[0.2em] uppercase hover:text-white mb-4 inline-flex items-center gap-1"
      >
        <span>‹</span>
        <span>Change time</span>
      </button>

      <p className="text-white font-bold text-base tracking-wide mb-5">Your details</p>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
        className="space-y-5"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>First name</label>
            <input
              type="text"
              autoComplete="given-name"
              required
              value={form.firstName}
              onChange={(e) => onChange({ ...form, firstName: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Last name</label>
            <input
              type="text"
              autoComplete="family-name"
              required
              value={form.lastName}
              onChange={(e) => onChange({ ...form, lastName: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => onChange({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(e) => onChange({ ...form, phone: e.target.value })}
            className={inputClass}
          />
        </div>

        {error && <p className="text-red-400 text-xs tracking-wide">{error}</p>}

        <button
          type="submit"
          className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group w-full mt-4"
        >
          <span className="bg-brand-red w-2 self-stretch group-hover:w-12 transition-all duration-300" />
          <span className="px-5 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase flex-1 text-center">
            Review Booking
          </span>
        </button>
      </form>
    </div>
  )
}

/* ─── Confirm step ──────────────────────────────────────── */

function ConfirmStep({
  service,
  date,
  time,
  form,
  onBack,
  onSuccess,
}: {
  service: AcuityService
  date: string
  time: string
  form: FormState
  onBack: () => void
  onSuccess: () => void
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '15px',
        '::placeholder': { color: '#525252' },
        iconColor: '#ff3333',
      },
      invalid: {
        color: '#f87171',
        iconColor: '#f87171',
      },
    },
    hidePostalCode: false,
  }

  async function handlePay() {
    if (!stripe || !elements) return
    const card = elements.getElement(CardElement)
    if (!card) return

    setSubmitting(true)
    setError(null)

    // 1. Tokenise the card via Stripe (this happens entirely client-side
    //    and the card data never touches our server)
    const tokenResult = await stripe.createToken(card, {
      name: `${form.firstName} ${form.lastName}`,
    })
    if (tokenResult.error) {
      setError(tokenResult.error.message ?? 'Card could not be processed')
      setSubmitting(false)
      return
    }

    // 2. Send the token + booking details to our server, which creates
    //    the appointment in Acuity. Acuity charges the card via their
    //    connected Stripe account.
    try {
      const res = await fetch('/api/book/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: service.id,
          datetime: time, // already an ISO string with timezone from Acuity
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          stripeToken: tokenResult.token.id,
        }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? 'Booking failed')
      }
      const data = await res.json()
      const apt = data.appointment as { id: number; confirmationPage?: string } | undefined
      if (apt?.id) {
        saveBooking({
          appointmentId: apt.id,
          serviceId: service.id,
          serviceName: service.name,
          servicePrice: service.price,
          serviceDuration: service.duration,
          datetime: time, // ISO with timezone from Acuity
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          confirmationPage: apt.confirmationPage,
        })
      }
      onSuccess()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Booking failed'
      setError(message)
      setSubmitting(false)
    }
  }

  return (
    <div>
      <button
        onClick={onBack}
        disabled={submitting}
        className="text-gray-500 text-[10px] tracking-[0.2em] uppercase hover:text-white mb-4 inline-flex items-center gap-1 disabled:opacity-40"
      >
        <span>‹</span>
        <span>Edit details</span>
      </button>

      <p className="text-white font-bold text-base tracking-wide mb-5">Review and pay</p>

      <div className="border border-zinc-800 divide-y divide-zinc-900 mb-6">
        <SummaryRow label="Service" value={service.name} />
        <SummaryRow label="When" value={`${formatHumanDate(date)} · ${formatTime(time)}`} />
        <SummaryRow label="Duration" value={`${service.duration} min`} />
        <SummaryRow label="Name" value={`${form.firstName} ${form.lastName}`} />
        <SummaryRow label="Email" value={form.email} />
        <SummaryRow label="Phone" value={form.phone} />
        <SummaryRow label="Total" value={`$${service.price.toFixed(2)}`} highlight />
      </div>

      {/* Card input */}
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">Card details</p>
      <div className="border border-zinc-800 bg-zinc-950 px-4 py-4 mb-3">
        <CardElement options={cardOptions} />
      </div>
      <p className="text-gray-600 text-[11px] leading-relaxed mb-5">
        Card processed securely by Stripe. We don&apos;t see or store your card details.
      </p>

      {error && (
        <p className="text-red-400 text-xs leading-relaxed mb-4 border border-red-500/30 bg-red-500/[0.05] px-4 py-3">
          {error}
        </p>
      )}

      <button
        onClick={handlePay}
        disabled={submitting || !stripe}
        className="inline-flex items-stretch border border-white/30 hover:border-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors group w-full"
      >
        <span className="bg-brand-red w-2 self-stretch group-hover:w-12 transition-all duration-300" />
        <span className="px-5 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase flex-1 text-center">
          {submitting ? 'Processing…' : `Pay $${service.price.toFixed(2)}`}
        </span>
      </button>
    </div>
  )
}

/* ─── Success step ──────────────────────────────────────── */

function SuccessStep({
  service,
  date,
  time,
  form,
}: {
  service: AcuityService
  date: string
  time: string
  form: FormState
}) {
  return (
    <div>
      <div className="border border-brand-red/40 bg-zinc-950 p-8 text-center mb-6">
        <div className="w-14 h-14 rounded-full bg-brand-red/15 border border-brand-red flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-brand-red" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-headliner gradient-heading text-3xl md:text-4xl mb-3">BOOKING CONFIRMED</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Payment received. A confirmation email is on its way to {form.email}.
        </p>
      </div>

      <div className="border border-zinc-800 divide-y divide-zinc-900 mb-6">
        <SummaryRow label="Service" value={service.name} />
        <SummaryRow label="When" value={`${formatHumanDate(date)} · ${formatTime(time)}`} />
        <SummaryRow label="Name" value={`${form.firstName} ${form.lastName}`} />
        <SummaryRow label="Paid" value={`$${service.price.toFixed(2)}`} highlight />
      </div>

      <p className="text-gray-500 text-[11px] leading-relaxed mb-5">
        Please arrive 10 minutes before your appointment. We&apos;re at our Banna Avenue location.
      </p>

      <Link
        href="/launch"
        className="inline-flex items-stretch border border-white/30 hover:border-white transition-colors group w-full"
      >
        <span className="bg-brand-red w-2 self-stretch group-hover:w-12 transition-all duration-300" />
        <span className="px-5 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase flex-1 text-center">
          Done
        </span>
      </Link>
    </div>
  )
}

function SummaryRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">{label}</span>
      <span className={`text-sm font-semibold tracking-wide ${highlight ? 'text-brand-red' : 'text-white'}`}>
        {value}
      </span>
    </div>
  )
}

/* ─── Helpers ───────────────────────────────────────────── */

function validateForm(f: FormState): string | null {
  if (!f.firstName.trim()) return 'First name is required'
  if (!f.lastName.trim()) return 'Last name is required'
  if (!/^\S+@\S+\.\S+$/.test(f.email)) return 'Valid email is required'
  if (f.phone.trim().length < 6) return 'Valid phone number is required'
  return null
}

function formatTime(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit', hour12: true })
}

function formatHumanDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' })
}
