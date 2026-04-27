import { ImageResponse } from 'next/og'

export const size = { width: 192, height: 192 }
export const contentType = 'image/png'

export default function Icon1() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 96,
          fontWeight: 900,
          color: '#ff0000',
          lineHeight: 1,
          fontFamily: 'sans-serif',
        }}
      >
        MM
      </div>
    ),
    { ...size },
  )
}
