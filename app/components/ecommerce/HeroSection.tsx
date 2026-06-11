'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface HeroSectionProps {
  onOpenModal: () => void
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
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
      className="relative overflow-hidden px-6 pb-24 pt-16"
      style={{ backgroundColor: '#0D0E14' }}
    >
      {/* Decorativo: 3 barras Kavok */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.04]" aria-hidden="true">
        <svg viewBox="0 0 400 600" className="h-full w-full" fill="none">
          <rect x="260" y="60" width="90" height="28" rx="8" fill="#5B6BF8" />
          <rect x="220" y="108" width="130" height="28" rx="8" fill="#5B6BF8" />
          <rect x="180" y="156" width="170" height="28" rx="8" fill="#5B6BF8" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Logo grande */}
        <div
          className={`mb-8 flex justify-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <Image src="/assets/logo-dark.png" alt="Kavok Ecommerce" width={320} height={64} className="h-14 w-auto" priority />
        </div>

        {/* Badge */}
        <div
          className={`mb-8 flex justify-center transition-all duration-700 delay-75 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest"
            style={{ backgroundColor: '#2a1f0a', color: '#E8A030', border: '1px solid rgba(232,160,48,0.3)' }}
          >
            ⚡ ECOMMERCE PROFESIONAL CON IA INTEGRADA
          </span>
        </div>

        {/* H1 */}
        <h1
          className={`mb-6 text-center text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
        >
          Tu tienda online,<br />
          <span style={{ color: '#E8A030' }}>lista para vender.</span>
        </h1>

        {/* Subtítulo */}
        <p
          className={`mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ color: '#9096A8' }}
        >
          Vendé por internet con cobros online, control de stock,
          integración con Mercado Libre e inteligencia artificial.
          Sin conocimientos técnicos.
        </p>

        {/* Card destacada */}
        <div
          className={`mx-auto mb-10 max-w-lg rounded-2xl p-6 text-center transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ backgroundColor: '#1a150a', border: '1.5px solid rgba(232,160,48,0.35)' }}
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#E8A030' }}>
            Sin pago inicial
          </p>
          <p className="text-4xl font-extrabold text-white">
            U$S 93 <span className="text-2xl font-semibold" style={{ color: '#9096A8' }}>/ mes durante 12 meses</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: '#9096A8' }}>
            Puesta en marcha + mantenimiento todo incluido.<br />
            Después del mes 12, solo U$S 49/mes.
          </p>
          <p className="mt-2 text-xs" style={{ color: '#5a6070' }}>
            Plan Básico en cuotas (U$S 44/mes) + Mantenimiento Básico (U$S 49/mes)
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-[400ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-200 active:scale-95"
            style={{ backgroundColor: '#E8A030' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d4911f')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8A030')}
          >
            Quiero mi tienda →
          </button>
          <a
            href="#planes"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-200 active:scale-95"
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
            Ver planes ↓
          </a>
        </div>
      </div>
    </section>
  )
}
