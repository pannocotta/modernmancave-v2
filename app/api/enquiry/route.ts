import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, type } = body

    if (!name || !email || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Email delivery pending — will wire up Resend when Tristan's custom domain email is ready
    if (process.env.NODE_ENV === 'development') {
      console.log(`[ENQUIRY] ${type}:`, JSON.stringify(body))
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
