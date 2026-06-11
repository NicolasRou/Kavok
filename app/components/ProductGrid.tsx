'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

/* ── Lightbox ─────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] max-w-[92vw] overflow-hidden rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={1600}
          quality={95}
          className="max-h-[92vh] w-auto rounded-3xl object-contain"
          priority
        />
        <button
          onClick={onClose}
          aria-label="Cerrar imagen"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

/* ── InView hook ─────────────────────────────────────── */
function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

/* ── ProductGrid ─────────────────────────────────────── */
export default function ProductGrid() {
  const ms = useInView()
  const ec = useInView()
  const wp = useInView()

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState('')
  const closeLight = useCallback(() => setLightboxSrc(null), [])

  function openLight(src: string, alt: string) {
    setLightboxSrc(src)
    setLightboxAlt(alt)
  }

  return (
    <div className="flex flex-col gap-8">
      {lightboxSrc && <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={closeLight} />}

      {/* ══════════════════════════════════════
          CARD 1 — MyStudio  (texto izq | imgs der)
          Entra desde la IZQUIERDA
      ══════════════════════════════════════ */}
      <div
        ref={ms.ref}
        className={`overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 transition-all duration-700 ease-out ${
          ms.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
        }`}
      >
        <div className="grid lg:grid-cols-2">

          {/* Texto */}
          <div className="flex flex-col justify-center px-8 pt-8 pb-0 sm:px-10 sm:pt-10 sm:pb-0 lg:p-14">
            <span className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-indigo-500/25 bg-indigo-600/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Producto Estrella
            </span>

            <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              Mystudio
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-zinc-400 sm:text-base">
              La app de gestión integral para estudios de Pilates. Clases, alumnos, créditos y asistencia — todo en un solo lugar, desde el celular.
            </p>

            <ul className="mb-8 space-y-5">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-600/15">
                  <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">Calendario de clases</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                    Organizá clases por día, horario y profesor. Tus alumnos saben siempre cuándo y dónde es cada clase.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-600/15">
                  <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">Reagenda autónoma</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                    Tus alumnos pueden cancelar y reagendar sus propias clases sin necesidad de contactarte. Menos mensajes, más autonomía.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="/mystudio"
              className="group/lnk self-start inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
            >
              Conocer más
              <svg className="h-4 w-4 transition-transform duration-200 group-hover/lnk:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Screenshots — dos phones solapados */}
          <div
            className="relative flex items-start lg:items-end justify-center pt-0 pb-0 px-4 lg:px-6 lg:pt-6 lg:min-h-82.5"
          >
            {/* Glow de fondo */}
            <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.14) 0%, transparent 70%)' }} />

            {/* Phone 1 — izquierda, ligeramente detrás */}
            <button
              onClick={() => openLight('/assets/calendario_de_clases.png', 'Calendario de clases Mystudio')}
              className="group/img relative z-10 flex-none overflow-hidden rounded-t-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.03]"
              style={{
                width: '52%',
                marginRight: '-10%',
                border: '1px solid rgba(99,102,241,0.30)',
                borderBottom: 'none',
              }}
            >
              <Image
                src="/assets/calendario_de_clases.png"
                alt="Calendario de clases Mystudio"
                width={720}
                height={1440}
                quality={90}
                sizes="(max-width: 1023px) 50vw, 26vw"
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-black/20">
                <div className="rounded-full bg-black/50 p-2 backdrop-blur-sm">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Phone 2 — derecha, más al frente, desplazado abajo */}
            <button
              onClick={() => openLight('/assets/reagenda_autonoma.png', 'Reagenda autónoma Mystudio')}
              className="group/img relative z-20 flex-none overflow-hidden rounded-t-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.03] mt-6 lg:mt-0 lg:mb-6"
              style={{
                width: '52%',
                border: '1px solid rgba(99,102,241,0.30)',
                borderBottom: 'none',
              }}
            >
              <Image
                src="/assets/reagenda_autonoma.png"
                alt="Reagenda autónoma Mystudio"
                width={720}
                height={1440}
                quality={90}
                sizes="(max-width: 1023px) 50vw, 26vw"
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-black/20">
                <div className="rounded-full bg-black/50 p-2 backdrop-blur-sm">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════
          CARD 2 — Kavok Ecommerce (imgs izq | texto der)
          Entra desde la DERECHA
      ══════════════════════════════════════ */}
      <div
        ref={ec.ref}
        className={`overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 transition-all duration-700 ease-out ${
          ec.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
        }`}
      >
        <div className="grid lg:grid-cols-2">

          {/* Screenshots — columna IZQUIERDA en desktop */}
          <div className="flex flex-col gap-3 overflow-hidden p-6 lg:order-1 lg:p-10">
            {/* Glow de fondo */}
            <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(245,158,11,0.07) 0%, transparent 60%)' }} />

            {/* Screenshot desktop */}
            <button
              onClick={() => openLight('/assets/echz2.png', 'Tienda online Kavok Ecommerce')}
              className="group/img relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
              style={{ border: '1px solid rgba(245,158,11,0.2)' }}
            >
              <Image
                src="/assets/echz2.png"
                alt="Tienda online Kavok Ecommerce"
                width={900}
                height={510}
                quality={90}
                sizes="(max-width: 1023px) 90vw, 46vw"
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-black/20">
                <div className="rounded-full bg-black/50 p-2 backdrop-blur-sm">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Dos screenshots mobile */}
            <div className="flex gap-3">
              <button
                onClick={() => openLight('/assets/ecvc1.png', 'Vista mobile Ecommerce')}
                className="group/img relative w-1/2 overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                style={{ border: '1px solid rgba(245,158,11,0.15)', height: '220px', backgroundColor: '#0d0e14' }}
              >
                <Image
                  src="/assets/ecvc1.png"
                  alt="Vista mobile Ecommerce"
                  fill
                  quality={90}
                  sizes="(max-width: 1023px) 44vw, 23vw"
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-black/20">
                  <div className="rounded-full bg-black/50 p-2 backdrop-blur-sm">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </button>
              <button
                onClick={() => openLight('/assets/ecvc3.png', 'Vista mobile Ecommerce')}
                className="group/img relative w-1/2 overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                style={{ border: '1px solid rgba(245,158,11,0.15)', height: '220px', backgroundColor: '#0d0e14' }}
              >
                <Image
                  src="/assets/ecvc3.png"
                  alt="Vista mobile Ecommerce"
                  fill
                  quality={90}
                  sizes="(max-width: 1023px) 44vw, 23vw"
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-black/20">
                  <div className="rounded-full bg-black/50 p-2 backdrop-blur-sm">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Texto — columna DERECHA en desktop */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:order-2 lg:p-14">
            <span className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-amber-500/25 bg-amber-600/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              E-commerce
            </span>

            <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              Kavok Ecommerce
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Tiendas online con cobros por Mercado Pago, control de stock e inteligencia artificial. Sin conocimientos técnicos.
            </p>

            <ul className="mb-8 space-y-5">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                  <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">Tienda online completa</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                    Catálogo con variantes (talle, color, etc.), galería de fotos, ficha de producto, colecciones y categorías.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                  <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-4.125-2.062-4.125 2.063-4.125-2.063L3 21.75V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">Cupones y descuentos</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                    Creá cupones por porcentaje o monto fijo, con límite de usos, vencimiento y aplicación por producto o categoría.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                  <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">Sincronización con Mercado Libre</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                    Importá todo tu catálogo de ML. El stock se sincroniza en tiempo real: una venta en ML descuenta en tu tienda.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="/ecommerce"
              className="group/lnk self-start inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 transition-colors duration-200 hover:text-amber-300"
            >
              Conocer más
              <svg className="h-4 w-4 transition-transform duration-200 group-hover/lnk:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════
          CARD 3 — Páginas Web  (texto izq | visual der)
          Entra desde la IZQUIERDA
      ══════════════════════════════════════ */}
      <div
        ref={wp.ref}
        className={`overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 transition-all duration-700 ease-out ${
          wp.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
        }`}
      >
        <div className="grid lg:grid-cols-2">

          {/* Texto */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <span className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-violet-500/25 bg-violet-600/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
              Software Factory
            </span>

            <h3 className="mb-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              Creación y edición de páginas web únicas
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Páginas web de alto impacto con experiencias interactivas y modelos 3D innovadores. Más allá del diseño estático: tu marca cobra vida desde el primer scroll.
            </p>

            <ul className="mb-8 space-y-5">
              {[
                {
                  title: 'Modelos 3D integrados',
                  desc: 'Elementos tridimensionales que sorprenden y diferencian tu marca del resto.',
                  icon: (
                    <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  ),
                },
                {
                  title: 'Animaciones e interactividad',
                  desc: 'Efectos visuales personalizados, transiciones fluidas y microinteracciones que enganchan.',
                  icon: (
                    <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ),
                },
                {
                  title: 'Diseño único a medida',
                  desc: 'Sin templates genéricos. Cada página es diseñada y desarrollada para tu identidad de marca.',
                  icon: (
                    <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    </svg>
                  ),
                },
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-600/10">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">{f.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="group/lnk self-start inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 transition-colors duration-200 hover:text-violet-300"
            >
              Conocer más
              <svg className="h-4 w-4 transition-transform duration-200 group-hover/lnk:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Visual abstracto — mock browser con 3D */}
          <div className="relative flex items-center justify-center overflow-hidden p-8 lg:p-12" style={{ minHeight: '340px' }}>
            <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(139,92,246,0.10) 0%, transparent 70%)' }} />

            <div
              className="relative w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl"
              style={{ border: '1px solid rgba(139,92,246,0.25)', boxShadow: '0 8px 48px rgba(139,92,246,0.18)' }}
            >
              <div className="flex items-center gap-2.5 bg-zinc-800 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                </div>
                <div className="flex-1 rounded-md bg-zinc-700/80 px-3 py-1 text-xs text-zinc-400">
                  tu-marca.com
                </div>
              </div>

              <div
                className="relative overflow-hidden"
                style={{
                  height: '260px',
                  background: 'linear-gradient(135deg, #12082a 0%, #0b1527 50%, #0c1a10 100%)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <div className="absolute" style={{ top: '28px', left: '50%', transform: 'translateX(-50%)', width: '88px', height: '88px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 32%, rgba(192,168,255,0.85), rgba(139,92,246,0.4) 50%, rgba(79,54,164,0.1) 80%, transparent)', boxShadow: '0 0 48px rgba(139,92,246,0.45), inset 0 1px 1px rgba(255,255,255,0.25)' }} />
                <div className="absolute" style={{ top: '52px', right: '28px', width: '44px', height: '44px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 32%, rgba(129,200,255,0.7), rgba(59,130,246,0.25) 60%, transparent)', boxShadow: '0 0 24px rgba(59,130,246,0.30)' }} />
                <div className="absolute" style={{ top: '70px', left: '24px', width: '32px', height: '32px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 32%, rgba(250,168,210,0.6), rgba(236,72,153,0.15) 70%, transparent)', boxShadow: '0 0 16px rgba(236,72,153,0.2)' }} />
                <div className="absolute" style={{ top: '24px', left: '50%', transform: 'translateX(-50%) rotateX(70deg)', width: '120px', height: '120px', borderRadius: '50%', border: '1.5px solid rgba(139,92,246,0.35)' }} />
                <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
                  <div className="h-2 w-28 rounded-full" style={{ background: 'rgba(255,255,255,0.18)' }} />
                  <div className="h-1.5 w-16 rounded-full" style={{ background: 'rgba(255,255,255,0.09)' }} />
                  <div className="mt-1 h-6 w-20 rounded-lg" style={{ background: 'rgba(139,92,246,0.35)', border: '1px solid rgba(139,92,246,0.5)' }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
