import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Kavok — Venture Studio & Software Factory en Uruguay'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Indigo radial glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            background:
              'radial-gradient(ellipse 900px 420px at 600px 250px, rgba(79,70,229,0.30) 0%, transparent 70%)',
          }}
        />

        {/* Logo bars */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '76px',
              height: '12px',
              borderRadius: '999px',
              background: 'linear-gradient(90deg, #4f46e5, #818cf8)',
            }}
          />
          <div
            style={{
              width: '52px',
              height: '12px',
              borderRadius: '999px',
              backgroundColor: '#3f3f46',
            }}
          />
          <div
            style={{
              width: '66px',
              height: '12px',
              borderRadius: '999px',
              backgroundColor: '#3f3f46',
            }}
          />
        </div>

        {/* Brand name */}
        <div
          style={{
            color: '#fafafa',
            fontSize: '92px',
            fontWeight: 800,
            letterSpacing: '-3px',
            lineHeight: 1,
            marginBottom: '16px',
            display: 'flex',
          }}
        >
          Kavok
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#818cf8',
            fontSize: '30px',
            fontWeight: 600,
            marginBottom: '48px',
            display: 'flex',
          }}
        >
          Venture Studio & Software Factory
        </div>

        {/* Product pills */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
          <div
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: '1px solid #27272a',
              backgroundColor: '#18181b',
              color: '#a1a1aa',
              fontSize: '20px',
              fontWeight: 500,
              display: 'flex',
            }}
          >
            Mystudio
          </div>
          <div
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: '1px solid #27272a',
              backgroundColor: '#18181b',
              color: '#a1a1aa',
              fontSize: '20px',
              fontWeight: 500,
              display: 'flex',
            }}
          >
            Kavok Ecommerce
          </div>
          <div
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: '1px solid #27272a',
              backgroundColor: '#18181b',
              color: '#a1a1aa',
              fontSize: '20px',
              fontWeight: 500,
              display: 'flex',
            }}
          >
            Software a Medida
          </div>
        </div>

        {/* URL + location */}
        <div style={{ color: '#52525b', fontSize: '20px', display: 'flex' }}>
          kavokuy.com · Montevideo, Uruguay
        </div>
      </div>
    ),
    { ...size },
  )
}
