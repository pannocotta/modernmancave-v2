import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    has_user_id: !!process.env.ACUITY_USER_ID,
    has_api_key: !!process.env.ACUITY_API_KEY,
    user_id_len: process.env.ACUITY_USER_ID?.length ?? 0,
    api_key_len: process.env.ACUITY_API_KEY?.length ?? 0,
    runtime: process.env.NEXT_RUNTIME ?? 'nodejs',
    node_env: process.env.NODE_ENV,
  })
}
