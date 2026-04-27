import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'tristan@modernmancave.com.au'
const FROM_EMAIL = 'Modern Mancave Website <onboarding@resend.dev>'

const TYPE_LABELS: Record<string, string> = {
  'mobile-barber': 'Mobile Studio Enquiry',
  franchise: 'Franchise Application',
  community: 'Community / Sponsorship Enquiry',
}

const FIELD_LABELS: Record<string, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  organisation: 'Organisation',
  organization: 'Organisation',
  eventType: 'Event type',
  eventDate: 'Event date',
  location: 'Location',
  guests: 'Guests',
  message: 'Message',
  notes: 'Notes',
  cause: 'Cause / event',
  preferredLocation: 'Preferred location',
  experience: 'Experience',
  funding: 'Funding',
  timeline: 'Timeline',
}

const SKIP_KEYS = new Set(['type', 'firstName', 'lastName'])

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, string>
    const { name, email, type } = body

    if (!name || !email || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('[ENQUIRY] RESEND_API_KEY not set — skipping send')
      console.log(`[ENQUIRY] ${type}:`, JSON.stringify(body))
      return NextResponse.json({ success: true })
    }

    const resend = new Resend(apiKey)
    const formLabel = TYPE_LABELS[type] ?? 'Website Enquiry'
    const subject = `New ${formLabel.toLowerCase()} from ${name}`

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html: renderEmailHtml({ formLabel, body }),
      text: renderEmailText({ formLabel, body }),
    })

    if (error) {
      console.error('[ENQUIRY] Resend error:', error)
      return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[ENQUIRY]', err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}

function prettyKey(key: string) {
  if (FIELD_LABELS[key]) return FIELD_LABELS[key]
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function fieldEntries(body: Record<string, unknown>) {
  return Object.entries(body)
    .filter(([k, v]) => !SKIP_KEYS.has(k) && v !== '' && v !== null && v !== undefined)
    .map(([k, v]) => [prettyKey(k), String(v)] as const)
}

function renderEmailHtml({ formLabel, body }: { formLabel: string; body: Record<string, unknown> }) {
  const rows = fieldEntries(body)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #1f1f1f;color:#888;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;width:170px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #1f1f1f;color:#fff;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
        </tr>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#000;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0a0a0a;border:1px solid #1f1f1f;">
          <tr>
            <td style="padding:32px 32px 24px;border-bottom:1px solid #1f1f1f;">
              <p style="margin:0 0 8px;color:#ff0000;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;">Modern Mancave</p>
              <h1 style="margin:0;color:#fff;font-size:24px;font-weight:800;text-transform:uppercase;letter-spacing:0.04em;">${escapeHtml(formLabel)}</h1>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;color:#666;font-size:12px;line-height:1.5;">
              Reply directly to this email to respond to ${escapeHtml(String(body.name ?? ''))}.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function renderEmailText({ formLabel, body }: { formLabel: string; body: Record<string, unknown> }) {
  const lines = fieldEntries(body).map(([label, value]) => `${label}: ${value}`)
  return [`MODERN MANCAVE — ${formLabel.toUpperCase()}`, '', ...lines, '', `Reply directly to respond to ${body.name ?? ''}.`].join('\n')
}
