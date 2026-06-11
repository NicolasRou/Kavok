'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const TOTAL_FRAMES = 61
const frameSrc = (i: number) =>
  `/frames/mystudio/ezgif-frame-${String(i).padStart(3, '0')}.jpg`

interface HeroScrollSequenceProps {
  fontFamily?: string
}

export default function HeroScrollSequence({
  fontFamily = 'var(--font-playfair), Georgia, serif',
}: HeroScrollSequenceProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)
  const framesRef = useRef<(HTMLImageElement | null)[]>([])
  const rafRef = useRef<number | null>(null)
  const lastFrameRef = useRef<number>(-1)

  const [loadedCount, setLoadedCount] = useState(0)
  const [hasFailed, setHasFailed] = useState(false)
  const allLoaded = loadedCount === TOTAL_FRAMES

  // Draw a specific frame on the canvas.
  // Mobile (<768px wide): cover — fills screen, mild crop on sides.
  // Desktop: hybrid fit — at least 60% canvas width, crops top/bottom symmetrically.
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current
    const img = framesRef.current[index]
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight
    const imgRatio = iw / ih
    const cvRatio = cw / ch
    const isMobile = cw < 768

    if (isMobile) {
      // Cover: fill canvas, crop a small amount from the sides
      let sx = 0, sy = 0, sw = iw, sh = ih
      if (imgRatio > cvRatio) {
        sw = ih * cvRatio
        sx = (iw - sw) / 2
      } else {
        sh = iw / cvRatio
        sy = (ih - sh) / 2
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch)
    } else {
      // Desktop: hybrid fit — no black pillars, controlled top/bottom crop.
      //
      // Two candidate scales:
      //   sH  = fit by height (pure contain, zero crop, but tiny width on landscape monitors)
      //   sW6 = scale needed to reach minimum 60 % of canvas width
      //
      // We pick the larger scale. On landscape desktops sW6 always wins,
      // which fills ~60 % of the width and crops equal margins top & bottom.
      // Canvas clips anything drawn outside its bounds automatically.
      const sH  = ch / ih            // contain-by-height scale
      const sW6 = (cw * 0.6) / iw   // min-60%-width scale
      const s   = Math.max(sH, sW6)

      const dw = iw * s
      const dh = ih * s
      const dx = (cw - dw) / 2   // centre horizontally (positive: pillarbox)
      const dy = (ch - dh) / 2   // centre vertically   (negative: crop top/bottom)

      ctx.fillStyle = '#0d0f13'
      ctx.fillRect(0, 0, cw, ch)
      ctx.drawImage(img, 0, 0, iw, ih, dx, dy, dw, dh)
    }
  }, [])

  // Preload all frames
  useEffect(() => {
    let count = 0
    let errored = false

    framesRef.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image()
      img.onload = () => {
        count++
        setLoadedCount(count)
      }
      img.onerror = () => {
        if (!errored) {
          errored = true
          setHasFailed(true)
        }
      }
      img.src = frameSrc(i + 1)
      return img
    })

    return () => {
      framesRef.current = []
    }
  }, [])

  // Keep canvas pixel dimensions in sync with its CSS size
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ro = new ResizeObserver(() => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (w === 0 || h === 0) return
      canvas.width = w
      canvas.height = h
      if (lastFrameRef.current >= 0) drawFrame(lastFrameRef.current)
    })

    ro.observe(canvas)
    return () => ro.disconnect()
  }, [drawFrame])

  // Scroll-scrubbing loop — active once all frames are loaded
  useEffect(() => {
    if (!allLoaded) return

    // Render frame 0 immediately so the canvas isn't blank
    if (lastFrameRef.current < 0) {
      lastFrameRef.current = 0
      drawFrame(0)
    }

    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current
        if (!section) return

        const rect = section.getBoundingClientRect()
        const sectionH = section.offsetHeight
        const vpH = window.innerHeight
        // p = 0 at section top, 1 at section bottom
        const p = Math.max(0, Math.min(1, -rect.top / (sectionH - vpH)))

        // Frame index
        const fi = Math.min(TOTAL_FRAMES - 1, Math.round(p * (TOTAL_FRAMES - 1)))
        if (fi !== lastFrameRef.current) {
          lastFrameRef.current = fi
          drawFrame(fi)
        }

        // Text overlay: fade in from 70% → 90%
        const textOp = Math.max(0, Math.min(1, (p - 0.70) / 0.20))
        if (textRef.current) {
          textRef.current.style.opacity = String(textOp)
          textRef.current.style.pointerEvents = textOp > 0.05 ? 'auto' : 'none'
        }

        // Bottom cream gradient: fade in from 88% → 100%
        if (gradientRef.current) {
          gradientRef.current.style.opacity = String(
            Math.max(0, Math.min(1, (p - 0.88) / 0.12))
          )
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // sync on mount in case user is already scrolled

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [allLoaded, drawFrame])

  const waUrl = `https://wa.me/59899313544?text=${encodeURIComponent(
    'Hola! Quiero probar Mystudio gratis 15 días.'
  )}`

  return (
    <div ref={sectionRef} style={{ height: '150vh', position: 'relative' }}>
      {/* ── Sticky viewport ── stays pinned to top while scrolling through 300vh */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          backgroundColor: '#0d0f13',
          overflow: 'hidden',
        }}
      >
        {/* Loading progress bar */}
        {!allLoaded && !hasFailed && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            <p style={{ fontSize: '0.85rem', color: '#71717a', fontWeight: 500 }}>
              Cargando animación...
            </p>
            <div
              style={{
                width: '12rem',
                height: '3px',
                borderRadius: '9999px',
                backgroundColor: '#27272a',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: '9999px',
                  backgroundColor: '#a1a1aa',
                  width: `${(loadedCount / TOTAL_FRAMES) * 100}%`,
                  transition: 'width 0.15s linear',
                }}
              />
            </div>
            <p style={{ fontSize: '0.7rem', color: '#52525b' }}>
              {loadedCount} / {TOTAL_FRAMES}
            </p>
          </div>
        )}

        {/* Fallback: static last frame if images fail */}
        {hasFailed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/frames/mystudio/ezgif-frame-061.jpg"
            alt="Mystudio dashboard"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}

        {/* Canvas — frames rendered here */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: allLoaded ? 'block' : 'none',
          }}
        />

        {/* Text + CTA overlay — opacity controlled imperatively via rAF */}
        <div
          ref={textRef}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 'max(4rem, env(safe-area-inset-bottom, 4rem))',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            textAlign: 'center',
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          {/* Gradient scrim so text is readable over dark frames */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.40) 45%, transparent 72%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '38rem', width: '100%' }}>
            <p
              style={{
                marginBottom: '0.75rem',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#88A47C',
              }}
            >
              Gestión para estudios de Pilates
            </p>

            <h1
              style={{
                fontFamily,
                marginBottom: '1rem',
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#ffffff',
              }}
            >
              Software para estudios<br />de Pilates
            </h1>

            <p
              style={{
                marginBottom: '2rem',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                lineHeight: 1.65,
                color: '#c4cbbf',
              }}
            >
              Calendario, alumnos, asistencias y planes.
              <br />
              Todo en un solo lugar.
            </p>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                borderRadius: '0.875rem',
                padding: '0.9rem 1.75rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: '#25D366',
                textDecoration: 'none',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)'
                e.currentTarget.style.boxShadow = '0 6px 22px rgba(37,211,102,0.38)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <svg
                viewBox="0 0 32 32"
                style={{ width: '1.15rem', height: '1.15rem', flexShrink: 0 }}
                fill="white"
                aria-hidden="true"
              >
                <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.627 4.64 1.813 6.64L2.667 29.333l6.88-1.787A13.267 13.267 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24a10.587 10.587 0 01-5.44-1.507l-.387-.227-4.08 1.053 1.08-3.946-.253-.4A10.56 10.56 0 015.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.004 26.667zm5.84-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.693.08-.32-.16-1.35-.497-2.573-1.587-.95-.84-1.59-1.88-1.777-2.2-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.627-.52-.54-.72-.547-.186-.006-.4-.008-.613-.008-.214 0-.56.08-.853.4-.294.32-1.12 1.093-1.12 2.666 0 1.574 1.147 3.094 1.307 3.307.16.214 2.253 3.44 5.46 4.827.763.327 1.36.52 1.82.667.767.24 1.466.206 2.02.126.616-.09 1.893-.773 2.16-1.52.267-.746.267-1.386.187-1.52-.08-.133-.294-.213-.614-.373z" />
              </svg>
              Probá 15 días gratis
            </a>
          </div>
        </div>

        {/* Bottom cream fade — eases the transition to the next (cream) section */}
        <div
          ref={gradientRef}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '10rem',
            background: 'linear-gradient(to bottom, transparent, #F9F7F2)',
            opacity: 0,
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}
