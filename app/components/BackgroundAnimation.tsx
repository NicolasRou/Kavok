'use client'

import { useEffect, useRef } from 'react'

/* ── Static data ──────────────────────────────────────── */
const ITEMS = [
  { t: "const studio = await kavok.create()", x: 4,  y: 12, f: 0.12, sz: 11, op: 0.13 },
  { t: "export default function Dashboard()",  x: 60, y: 33, f: 0.23, sz: 11, op: 0.11 },
  { t: "<MyStudio plan='pro' />",              x: 7,  y: 62, f: 0.09, sz: 12, op: 0.14 },
  { t: "type Lead = { name: string }",          x: 68, y: 70, f: 0.29, sz: 11, op: 0.11 },
  { t: "import { ai } from '@kavok/core'",      x: 28, y: 87, f: 0.18, sz: 11, op: 0.13 },
  { t: "{  }",                                  x: 2,  y: 42, f: 0.11, sz: 36, op: 0.08 },
  { t: "</>",                                   x: 84, y: 20, f: 0.34, sz: 30, op: 0.09 },
  { t: "=>",                                    x: 52, y: 8,  f: 0.17, sz: 28, op: 0.08 },
  { t: "( )",                                   x: 20, y: 80, f: 0.21, sz: 26, op: 0.08 },
  { t: "{ }",                                   x: 78, y: 55, f: 0.15, sz: 32, op: 0.08 },
]

interface Pt {
  x: number; y: number; vx: number; vy: number
  r: number; op: number; ind: boolean
}

/* ── Component ────────────────────────────────────────── */
export default function BackgroundAnimation() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const pxRefs     = useRef<(HTMLDivElement | null)[]>(Array(ITEMS.length).fill(null))
  const indigoRef  = useRef<HTMLDivElement>(null)
  const gray1Ref   = useRef<HTMLDivElement>(null)
  const gray2Ref   = useRef<HTMLDivElement>(null)
  const rafRef     = useRef<number | null>(null)

  /* ── Canvas particles ─────────────────────────────── */
  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const cx = cv.getContext('2d')
    if (!cx) return

    const mobile = window.matchMedia('(max-width:768px)').matches
    const N = mobile ? 28 : 55
    let W = window.innerWidth
    let H = window.innerHeight
    cv.width = W
    cv.height = H

    const ps: Pt[] = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 0.8 + Math.random() * 1.8,
      op: 0.09 + Math.random() * 0.30,
      ind: Math.random() < 0.3,
    }))

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      cv.width = W
      cv.height = H
    }
    window.addEventListener('resize', onResize, { passive: true })

    const tick = () => {
      cx.clearRect(0, 0, W, H)
      for (const p of ps) {
        p.x = (p.x + p.vx + W) % W
        p.y = (p.y + p.vy + H) % H
        cx.beginPath()
        cx.arc(p.x, p.y, p.r, 0, 6.2832)
        cx.fillStyle = p.ind
          ? `rgba(99,102,241,${p.op})`
          : `rgba(255,255,255,${p.op})`
        cx.fill()
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('resize', onResize)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  /* ── Scroll: logo bars + parallax ────────────────── */
  useEffect(() => {
    const mobile = window.matchMedia('(max-width:768px)').matches
    const sf = mobile ? 0.48 : 1

    // Initial displacements (CSS px) — interpolate to 0 as progress → 1
    const D = {
      ind: { x:  200 * sf, y: -200 * sf, r:  15 },
      g1:  { x: -150 * sf, y:  150 * sf, r: -10 },
      g2:  { x:  180 * sf, y:  180 * sf, r:   8 },
    }

    const applyBar = (
      el: HTMLDivElement | null,
      dx: number, dy: number, dr: number, ease: number
    ) => {
      if (!el) return
      el.style.transform = `translate3d(${dx * ease}px,${dy * ease}px,0) rotate(${dr * ease}deg)`
    }

    const update = () => {
      const sy = window.scrollY
      const sol = document.getElementById('soluciones')
      if (!sol) return

      const solEnd = sol.offsetTop + sol.offsetHeight
      const range  = Math.max(1, solEnd - window.innerHeight * 0.5)
      const prog   = Math.max(0, Math.min(1, sy / range))
      const ease   = 1 - prog

      applyBar(indigoRef.current, D.ind.x, D.ind.y, D.ind.r, ease)
      applyBar(gray1Ref.current,  D.g1.x,  D.g1.y,  D.g1.r,  ease)
      applyBar(gray2Ref.current,  D.g2.x,  D.g2.y,  D.g2.r,  ease)

      const limit = mobile ? 5 : ITEMS.length
      for (let i = 0; i < limit; i++) {
        const el = pxRefs.current[i]
        if (el) el.style.transform = `translate3d(0,${-sy * ITEMS[i].f}px,0)`
      }
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  /* ── JSX ──────────────────────────────────────────── */
  return (
    <>
      {/* Layer 1 — Radial gradient base */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse 70% 55% at 50% 38%, rgba(49,46,129,0.22) 0%, transparent 72%)',
        }}
      />

      {/* Layer 2 — Canvas particles */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Layer 3 — Parallax code snippets */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 2 }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={i}
            ref={el => { pxRefs.current[i] = el }}
            className="absolute select-none whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: item.sz,
              left: `${item.x}%`,
              top: `${item.y}%`,
              color: `rgba(161,161,170,${item.op})`,
              willChange: 'transform',
            }}
          >
            {item.t}
          </div>
        ))}
      </div>

      {/* Layer 4 — Logo bars (animate toward assembled state on scroll) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none flex items-center justify-center"
        style={{ zIndex: 3 }}
      >
        {/* Container sized proportionally to SVG viewBox 40×40 */}
        <div
          className="relative w-[280px] h-[280px] md:w-[560px] md:h-[560px]"
          style={{ opacity: 0.17 }}
        >
          {/* Indigo bar — SVG: x=12, y=14, w=28, h=5  (30% / 35% / 70% / 12.5%) */}
          <div
            ref={indigoRef}
            style={{
              position: 'absolute',
              left: '30%', top: '35%',
              width: '70%', height: '12.5%',
              borderRadius: 999,
              background: 'linear-gradient(90deg, #4f46e5, #6366f1, #818cf8)',
              willChange: 'transform',
            }}
          />
          {/* Gray bar 1 — SVG: x=0, y=24, w=22, h=5  (0% / 60% / 55% / 12.5%) */}
          <div
            ref={gray1Ref}
            style={{
              position: 'absolute',
              left: 0, top: '60%',
              width: '55%', height: '12.5%',
              borderRadius: 999,
              background: 'linear-gradient(90deg, #3f3f46, #52525b)',
              willChange: 'transform',
            }}
          />
          {/* Gray bar 2 — SVG: x=0, y=34, w=28, h=5  (0% / 85% / 70% / 12.5%) */}
          <div
            ref={gray2Ref}
            style={{
              position: 'absolute',
              left: 0, top: '85%',
              width: '70%', height: '12.5%',
              borderRadius: 999,
              background: 'linear-gradient(90deg, #3f3f46, #52525b)',
              willChange: 'transform',
            }}
          />
        </div>
      </div>
    </>
  )
}
