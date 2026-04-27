'use client'

import { useState } from 'react'
import { CTAButton } from '@/components/CTA'

export default function CommunityForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      type: 'community',
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-zinc-800 p-12 text-center">
        <div className="w-12 h-px bg-brand-red mx-auto mb-8" />
        <h3 className="font-headliner gradient-heading text-3xl md:text-4xl mb-6">THANKS FOR REACHING OUT</h3>
        <p className="text-gray-400 leading-relaxed">We&apos;ll be in touch soon.</p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-transparent border-b border-zinc-700 px-0 py-3 text-white focus:border-brand-red focus:outline-none transition-colors placeholder:text-zinc-600'
  const labelClass =
    'block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-3'

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Your Name *</label>
          <input name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Phone</label>
        <input name="phone" type="tel" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Tell us about your cause or event *</label>
        <textarea
          name="message"
          required
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="pt-4">
        <CTAButton type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'SENDING...' : 'SUBMIT'}
        </CTAButton>
        {status === 'error' && (
          <p className="text-red-500 text-xs tracking-wide mt-6">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  )
}
