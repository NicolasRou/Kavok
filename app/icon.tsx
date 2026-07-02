import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#09090b',
          borderRadius: 16,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/*
          Logo "El Horizonte" — 3 barras escaladas del viewBox 40x40 a ~22px de ancho
          Original: indigo x=12 w=28 / gray x=0 w=22 / gray x=0 w=28
          Scale factor ≈ 0.55  →  contenedor de 22px
        */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, width: 22, position: 'relative' }}>
          {/* Barra indigo — desplazada a la derecha */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: 15, height: 3, background: '#6366f1', borderRadius: 1.5 }} />
          </div>
          {/* Barra gris corta — izquierda */}
          <div style={{ width: 12, height: 3, background: '#52525b', borderRadius: 1.5 }} />
          {/* Barra gris larga — izquierda */}
          <div style={{ width: 15, height: 3, background: '#52525b', borderRadius: 1.5 }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
