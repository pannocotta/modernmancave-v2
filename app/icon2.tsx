import { ImageResponse } from 'next/og'

export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon2() {
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
          fontSize: 250,
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
