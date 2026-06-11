'use client'

import { useEffect, useRef, useState } from 'react'

interface CtaSectionProps {
  onOpenModal: () => void
  fontFamily?: string
}

export default function CtaSection({ onOpenModal, fontFamily = 'serif' }: CtaSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="px-6 py-28 text-center"
      style={{ backgroundColor: '#F9F7F2' }}
    >
      <div
        className={`mx-auto max-w-2xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2
          className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          style={{ fontFamily, color: '#3A4733' }}
        >
          ¿Listo para ordenar tu estudio?
        </h2>

        <p className="mb-6 text-lg" style={{ color: '#6B7A65' }}>
          Empezá gratis hoy. Sin tarjeta. Sin ataduras.
        </p>

        {/* Badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium"
          style={{ backgroundColor: 'rgba(136,164,124,0.15)', color: '#3A4733' }}
        >
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: '#88A47C' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          15 días gratis incluidos en todos los planes
        </div>

        {/* CTA principal */}
        <div className="flex justify-center">
          <button
            onClick={onOpenModal}
            className="rounded-2xl px-10 py-4 text-base font-semibold transition-all duration-200 active:scale-95"
            style={{ backgroundColor: '#3A4733', color: '#F9F7F2' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2C3328')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3A4733')}
          >
            Quiero empezar
          </button>
        </div>

        {/* Texto email directo */}
        <p className="mt-6 text-sm" style={{ color: '#6B7A65' }}>
          o escribinos directamente a{' '}
          <a
            href="mailto:kavokuy@gmail.com?subject=Consulta%20Mystudio"
            className="font-medium underline underline-offset-2 transition-colors hover:no-underline"
            style={{ color: '#3A4733' }}
          >
            kavokuy@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
