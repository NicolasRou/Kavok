interface MystudioLogoProps {
  size?: number
  colorAro?: string
  colorPuntos?: string
  colorTexto?: string
  showText?: boolean
  fontFamily?: string
}

export default function MystudioLogo({
  size = 32,
  colorAro = '#3A4733',
  colorPuntos = '#88A47C',
  colorTexto = '#3A4733',
  showText = true,
  fontFamily,
}: MystudioLogoProps) {
  const h = Math.round(size * 0.7)
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={h}
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Aro elíptico — pilates ring en perspectiva */}
        <ellipse
          cx="20"
          cy="14"
          rx="18"
          ry="11.5"
          stroke={colorAro}
          strokeWidth="2.5"
          fill="none"
        />
        {/* Punto extremo superior-izquierdo */}
        <circle cx="5.5" cy="5.5" r="2.5" fill={colorPuntos} />
        {/* Punto extremo inferior-derecho */}
        <circle cx="34.5" cy="22.5" r="2.5" fill={colorPuntos} />
      </svg>
      {showText && (
        <span
          style={{
            fontFamily: fontFamily ?? 'serif',
            color: colorTexto,
            fontSize: `${Math.round(size * 0.65)}px`,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          Mystudio
        </span>
      )}
    </div>
  )
}
