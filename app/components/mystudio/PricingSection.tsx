'use client'

import { useEffect, useRef, useState } from 'react'

interface PricingSectionProps {
  onOpenModal: () => void
  fontFamily?: string
}

const PLANS = [
  {
    name: 'Starter',
    price: 35,
    descriptor: 'Para estudios pequeños que están digitalizando su gestión por primera vez.',
    features: [
      '1 sede',
      'Hasta 50 alumnos',
      'Calendario de clases + gestión de asistencia',
      '1 administrador + profesores ilimitados',
      'Branding básico (logo y nombre del estudio)',
      'Guías de uso incluidas',
      'Trial de 15 días gratis',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 55,
    descriptor: 'Para estudios en crecimiento que necesitan herramientas más completas.',
    features: [
      'Todo lo de Starter, más:',
      'Hasta 100 alumnos',
      'Importación masiva de alumnos vía CSV',
      'Reportes avanzados descargables',
      'Soporte 48hs',
      'Trial de 15 días gratis',
    ],
    highlighted: true,
    badge: 'Más popular',
  },
  {
    name: 'Studio+',
    price: 79,
    descriptor: 'Para estudios con múltiples sedes o que requieren soporte directo.',
    features: [
      'Todo lo de Pro, más:',
      'Multi-sede (sedes ilimitadas)',
      'Alumnos ilimitados',
      'Backup semanal automático',
      'Soporte prioritario (24hs)',
      'Trial de 15 días gratis',
    ],
    highlighted: false,
  },
]

export default function PricingSection({ onOpenModal, fontFamily = 'serif' }: PricingSectionProps) {
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
    <section id="planes" ref={ref} className="px-6 py-24" style={{ backgroundColor: '#EDEAE3' }}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`mb-6 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: '#88A47C' }}>
            Precios transparentes
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily, color: '#2C3328' }}
          >
            Elegí el plan para tu estudio
          </h2>
          <p className="mt-3 text-base" style={{ color: '#6B7A65' }}>
            Todos los planes incluyen 15 días de prueba gratis. Sin tarjeta de crédito.
          </p>
        </div>

        {/* Badge prominente */}
        <div
          className={`mb-12 flex justify-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '80ms' }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            style={{ backgroundColor: '#3A4733', color: '#F9F7F2' }}
          >
            🎁 15 días GRATIS · Sin tarjeta · Sin compromisos
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl p-8 transition-all duration-700 ${
                plan.highlighted
                  ? 'animate-ms-border-pulse scale-[1.02] shadow-xl'
                  : 'shadow-sm'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                backgroundColor: '#F9F7F2',
                border: plan.highlighted ? '2px solid #88A47C' : '1px solid #EDEAE3',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Badge Más popular */}
              {plan.highlighted && (
                <div className="mb-4 self-start">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: '#88A47C', color: '#F9F7F2' }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3
                className="text-xl font-bold"
                style={{ fontFamily, color: '#2C3328' }}
              >
                {plan.name}
              </h3>

              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold" style={{ color: '#3A4733' }}>
                  U$S {plan.price}
                </span>
                <span className="text-sm" style={{ color: '#6B7A65' }}>/mes</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed" style={{ color: '#6B7A65' }}>
                {plan.descriptor}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: '#2C3328' }}>
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      style={{ color: '#88A47C' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenModal}
                className="mt-8 w-full rounded-2xl py-3.5 text-sm font-semibold transition-all duration-200 active:scale-95"
                style={
                  plan.highlighted
                    ? { backgroundColor: '#3A4733', color: '#F9F7F2' }
                    : { backgroundColor: 'transparent', color: '#3A4733', border: '1.5px solid #3A4733' }
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2C3328'
                  e.currentTarget.style.color = '#F9F7F2'
                  e.currentTarget.style.borderColor = '#2C3328'
                }}
                onMouseLeave={(e) => {
                  if (plan.highlighted) {
                    e.currentTarget.style.backgroundColor = '#3A4733'
                    e.currentTarget.style.color = '#F9F7F2'
                    e.currentTarget.style.borderColor = '#3A4733'
                  } else {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#3A4733'
                    e.currentTarget.style.borderColor = '#3A4733'
                  }
                }}
              >
                Empezar gratis
              </button>
            </div>
          ))}
        </div>

        {/* Nota onboarding */}
        <p
          className={`mt-8 text-center text-sm italic transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#6B7A65', transitionDelay: '320ms' }}
        >
          El onboarding inicial con los datos de tu estudio es opcional y se cotiza por separado.{' '}
          El soporte incluido es soporte asistencial; las urgencias de funcionamiento se resuelven lo antes posible.{' '}
          <button onClick={onOpenModal} className="underline hover:no-underline" style={{ color: '#3A4733' }}>
            Consultanos.
          </button>
        </p>
      </div>
    </section>
  )
}
