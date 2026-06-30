import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Kavok Ecommerce — Tu tienda online con IA y Mercado Pago'
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
          backgroundColor: '#0D0E14',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Amber radial glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            background:
              'radial-gradient(ellipse 800px 400px at 600px 260px, rgba(245,158,11,0.14) 0%, transparent 68%)',
          }}
        />

        {/* "by Kavok" badge */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '52px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#18181b',
            border: '1px solid #27272a',
            borderRadius: '999px',
            padding: '6px 16px',
          }}
        >
          <div
            style={{
              width: '28px',
              height: '5px',
              borderRadius: '999px',
              background: 'linear-gradient(90deg, #4f46e5, #818cf8)',
              display: 'flex',
            }}
          />
          <span style={{ color: '#71717a', fontSize: '16px' }}>by Kavok</span>
        </div>

        {/* Product name */}
        <div
          style={{
            color: '#fafafa',
            fontSize: '80px',
            fontWeight: 800,
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: '16px',
            display: 'flex',
          }}
        >
          Kavok Ecommerce
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#f59e0b',
            fontSize: '30px',
            fontWeight: 600,
            marginBottom: '48px',
            display: 'flex',
          }}
        >
          Tu tienda online con IA
        </div>

        {/* Feature chips */}
        <div style={{ display: 'flex', gap: '14px', marginBottom: '48px' }}>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: '1px solid rgba(245,158,11,0.30)',
              backgroundColor: 'rgba(245,158,11,0.08)',
              color: '#fbbf24',
              fontSize: '20px',
              fontWeight: 500,
              display: 'flex',
            }}
          >
            Mercado Pago
          </div>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: '1px solid rgba(245,158,11,0.30)',
              backgroundColor: 'rgba(245,158,11,0.08)',
              color: '#fbbf24',
              fontSize: '20px',
              fontWeight: 500,
              display: 'flex',
            }}
          >
            Mercado Libre
          </div>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: '1px solid rgba(245,158,11,0.30)',
              backgroundColor: 'rgba(245,158,11,0.08)',
              color: '#fbbf24',
              fontSize: '20px',
              fontWeight: 500,
              display: 'flex',
            }}
          >
            IA integrada
          </div>
        </div>

        {/* CTA + price */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div
            style={{
              backgroundColor: '#f59e0b',
              color: '#0D0E14',
              fontSize: '20px',
              fontWeight: 700,
              padding: '12px 28px',
              borderRadius: '12px',
              display: 'flex',
            }}
          >
            Sin pago inicial
          </div>
          <div style={{ color: '#71717a', fontSize: '20px', display: 'flex' }}>
            Mantenimiento desde $49/mes
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
