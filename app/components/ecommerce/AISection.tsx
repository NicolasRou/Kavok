'use client'

import { useEffect, useRef, useState } from 'react'

interface AISectionProps {
  onOpenModal: () => void
}

export default function AISection({ onOpenModal }: AISectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="px-6 py-24"
      style={{
        backgroundColor: '#0f1025',
        borderTop: '1px solid rgba(91,107,248,0.2)',
        borderBottom: '1px solid rgba(91,107,248,0.2)',
      }}
    >
      <div className="mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`mb-14 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: '#5B6BF8' }}>
            Inteligencia artificial incluida
          </p>
          <h2
            className="mb-3 text-3xl font-bold text-white sm:text-4xl"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Tecnología de punta. Sin complicaciones.
          </h2>
          <p className="text-base" style={{ color: '#9096A8' }}>
            Dos módulos de IA integrados directamente en tu panel de administración.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Card 1 — Imágenes IA */}
          <div
            className={`rounded-2xl p-7 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ backgroundColor: '#13141F', border: '1px solid rgba(91,107,248,0.25)' }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(91,107,248,0.15)', color: '#5B6BF8' }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                style={{ backgroundColor: 'rgba(91,107,248,0.2)', color: '#5B6BF8' }}
              >
                Nuevo
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-white">Fotos de producto con IA</h3>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: '#9096A8' }}>
              Describí el producto, elegí el estilo y la IA genera imágenes profesionales listas para subir a tu tienda. Sin fotógrafo, sin Photoshop.
            </p>

            <ul className="space-y-2">
              {[
                'Múltiples estilos: producto solo, lifestyle, fondo blanco',
                'Compatible con Gemini y Hugging Face',
                'Hasta 15 imágenes por día en el plan gratuito',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#9096A8' }}>
                  <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: '#5B6BF8' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Reportes IA */}
          <div
            className={`rounded-2xl p-7 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ backgroundColor: '#13141F', border: '1px solid rgba(232,160,48,0.25)' }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(232,160,48,0.12)', color: '#E8A030' }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#2a1f0a', color: '#E8A030' }}
              >
                Exclusivo
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-white">Reportes con análisis inteligente</h3>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: '#9096A8' }}>
              La IA analiza tus ventas, stock y compradores y te entrega un resumen claro con lo más importante. Sin necesidad de interpretar tablas.
            </p>

            <ul className="space-y-2">
              {[
                'Resumen de ventas del período',
                'Stock crítico con alertas automáticas',
                'Comportamiento y segmentación de compradores',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#9096A8' }}>
                  <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: '#E8A030' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-10 flex justify-center transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-95"
            style={{ border: '1.5px solid rgba(91,107,248,0.5)', color: '#5B6BF8' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#5B6BF8'
              e.currentTarget.style.backgroundColor = 'rgba(91,107,248,0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(91,107,248,0.5)'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Consultanos sobre estas funciones →
          </button>
        </div>
      </div>
    </section>
  )
}
