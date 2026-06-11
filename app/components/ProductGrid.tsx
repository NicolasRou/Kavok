'use client'

import { useEffect, useRef, useState } from 'react'

export default function ProductGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cardBase =
    'group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-700'

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-3">

      {/* ── Mystudio ── */}
      <div
        className={`${cardBase} hover:border-indigo-500/40 hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.15)] ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}
        style={{ transitionDelay: '0ms' }}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-600/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/15 border border-indigo-500/20">
            <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>

          <span className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-indigo-600/15 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Producto Estrella
          </span>

          <h3 className="mt-3 text-xl font-bold text-zinc-50">Mystudio</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
            App de gestión integral para estudios de Pilates. Clases,
            alumnos, créditos y asistencia — todo en un solo lugar,
            desde el celular.
          </p>

          <a
            href="/mystudio"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
          >
            Conocer más
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Páginas Web Únicas ── */}
      <div
        className={`${cardBase} hover:border-violet-500/30 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}
        style={{ transitionDelay: '120ms' }}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-500/20">
            <svg className="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253" />
            </svg>
          </div>

          <span className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 border border-violet-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            Software Factory
          </span>

          <h3 className="mt-3 text-xl font-bold text-zinc-50">Creación y edición de páginas web únicas</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
            Páginas web de alto impacto con experiencias interactivas y
            modelos 3D innovadores. Más allá del diseño estático: tu
            marca cobra vida con animaciones, efectos visuales y
            elementos tridimensionales que sorprenden desde el primer scroll.
          </p>

          <a
            href="#contacto"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 transition-colors duration-200 hover:text-violet-300"
          >
            Conocer más
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Kavok Ecommerce ── */}
      <div
        className={`${cardBase} hover:border-amber-500/30 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}
        style={{ transitionDelay: '240ms' }}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/20">
            <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>

          <h3 className="mt-3 text-xl font-bold text-zinc-50">Kavok Ecommerce</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
            Tiendas online con cobros por Mercado Pago, control de stock,
            sincronización con Mercado Libre e inteligencia artificial.
            Sin conocimientos técnicos.
          </p>

          <a
            href="/ecommerce"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 transition-colors duration-200 hover:text-amber-300"
          >
            Conocer más
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  )
}
