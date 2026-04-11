'use client'

import { useState } from 'react'

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
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-white mb-3">Thanks for reaching out</h3>
        <p className="text-gray-500">We&apos;ll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <input
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
        />
      </div>
      <input
        name="phone"
        type="tel"
        placeholder="Phone number (optional)"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell us about your cause or event"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
      />
      <div className="text-center pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group relative bg-brand-red text-white px-12 py-5 rounded-full font-bold text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02] disabled:opacity-50"
        >
          <span className="relative z-10">{status === 'sending' ? 'SENDING...' : 'SUBMIT'}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
