import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mystudio — App de gestión para estudios de Pilates'
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
          backgroundColor: '#F9F7F2',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Sage green glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            background:
              'radial-gradient(ellipse 800px 400px at 600px 280px, rgba(136,164,124,0.18) 0%, transparent 70%)',
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
            backgroundColor: '#edeae3',
            border: '1px solid #d4cfc4',
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
          <span style={{ color: '#6b6b6b', fontSize: '16px', fontFamily: 'system-ui, sans-serif' }}>
            by Kavok
          </span>
        </div>

        {/* Product name */}
        <div
          style={{
            color: '#1a1a1a',
            fontSize: '96px',
            fontWeight: 700,
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: '20px',
            display: 'flex',
          }}
        >
          mystudio
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#4a4a4a',
            fontSize: '28px',
            fontWeight: 400,
            marginBottom: '44px',
            display: 'flex',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          App de gestión para estudios de Pilates
        </div>

        {/* Feature chips */}
        <div style={{ display: 'flex', gap: '14px', marginBottom: '48px' }}>
          {['Clases', 'Alumnos', 'Créditos', 'Asistencia'].map((label, i) => (
            <div
              key={i}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: '1px solid #88A47C',
                backgroundColor: 'rgba(136,164,124,0.12)',
                color: '#5a7a50',
                fontSize: '20px',
                fontWeight: 500,
                display: 'flex',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* CTA + price */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div
            style={{
              backgroundColor: '#2d3a29',
              color: '#F9F7F2',
              fontSize: '20px',
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: '12px',
              display: 'flex',
            }}
          >
            Probalo gratis 15 días
          </div>
          <div style={{ color: '#6b6b6b', fontSize: '20px', display: 'flex' }}>
            desde $35/mes · sin tarjeta
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
