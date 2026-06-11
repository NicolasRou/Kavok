'use client'

import { useEffect, useRef, useState } from 'react'

interface HeroSectionProps {
  onOpenModal: () => void
  fontFamily?: string
}

export default function HeroSection({ onOpenModal, fontFamily = 'serif' }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-24 md:py-32"
      style={{ backgroundColor: '#F9F7F2' }}
    >
      {/* Aro decorativo de fondo — grande, baja opacidad */}
      <div className="pointer-events-none absolute right-[-8%] top-1/2 -translate-y-1/2" aria-hidden="true">
        <svg
          width="420"
          height="290"
          viewBox="0 0 420 290"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.08 }}
        >
          <ellipse cx="210" cy="145" rx="195" ry="125" stroke="#3A4733" strokeWidth="18" fill="none" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* Eyebrow */}
        <p
          className={`mb-5 text-xs font-semibold uppercase tracking-widest transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ color: '#88A47C', transitionDelay: '0ms' }}
        >
          Gestión para estudios de Pilates
        </p>

        {/* H1 */}
        <h1
          className={`mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontFamily, color: '#3A4733', transitionDelay: '80ms' }}
        >
          Gestioná tu estudio<br />
          de Pilates en un solo lugar.
        </h1>

        {/* Subtítulo */}
        <p
          className={`mb-8 max-w-xl text-lg leading-relaxed transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ color: '#6B7A65', transitionDelay: '160ms' }}
        >
          Clases, alumnos, créditos y asistencias — sin planillas, sin enredos.
        </p>

        {/* Badge */}
        <div
          className={`mb-10 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ backgroundColor: '#88A47C', color: '#F9F7F2', transitionDelay: '240ms' }}
        >
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          15 días de prueba GRATIS · Sin tarjeta de crédito
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col gap-4 sm:flex-row transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '320ms' }}
        >
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-200 active:scale-95"
            style={{ backgroundColor: '#3A4733', color: '#F9F7F2' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2C3328')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3A4733')}
          >
            Solicitar demo
          </button>
          <a
            href="#planes"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border px-8 py-4 text-base font-semibold transition-all duration-200"
            style={{ borderColor: '#3A4733', color: '#3A4733' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3A4733'
              e.currentTarget.style.color = '#F9F7F2'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#3A4733'
            }}
          >
            Ver planes
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
