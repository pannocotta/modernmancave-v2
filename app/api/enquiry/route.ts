import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, type } = body

    if (!name || !email || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: Send to Tristan's email (custom domain TBD — will set up via Google Workspace later)
    console.log(`[ENQUIRY] ${type}:`, JSON.stringify(body))

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
