'use client'

import { useEffect, useRef, useState } from 'react'

interface PricingSectionProps {
  onOpenModal: () => void
}

interface SetupPlan {
  name: string
  priceContado: number
  priceCuotas?: number
  cuotaLabel?: string
  noCuotas?: boolean
  highlighted?: boolean
  badge?: string
  features: string[]
}

interface MaintenancePlan {
  name: string
  price: number
  highlighted?: boolean
  features: string[]
}

const SETUP_PLANS: SetupPlan[] = [
  {
    name: 'Básico',
    priceContado: 490,
    priceCuotas: 530,
    cuotaLabel: 'U$S 44/mes × 12',
    highlighted: false,
    features: [
      'Catálogo con variantes y control de stock',
      'Cobros online con Mercado Pago (configurado y probado)',
      'Gestión de pedidos y seguimiento de estados',
      'Emails automáticos para clientes',
      'Diseño 100% personalizable desde el panel',
      'Colecciones para agrupar productos',
    ],
  },
  {
    name: 'Estándar',
    priceContado: 790,
    priceCuotas: 860,
    cuotaLabel: 'U$S 72/mes × 12',
    highlighted: true,
    badge: 'Más completo',
    features: [
      'Todo lo del Básico, más:',
      'Conexión con Mercado Libre (sync en tiempo real)',
      'Generador de imágenes de productos con IA',
      'Reseñas con foto y estrellas (vos aprobás)',
      '1 cuenta de operador para tu equipo',
    ],
  },
  {
    name: 'Completo',
    priceContado: 1190,
    noCuotas: true,
    highlighted: false,
    features: [
      'Todo lo del Estándar, más:',
      'Operadores ilimitados para tu equipo (sumá toda la gente que necesites para gestionar stock y pedidos)',
      'Análisis inteligente de tu negocio: un resumen claro de tus ventas, tu stock crítico y el comportamiento de tus compradores.',
      'Envíos configurables por departamento de Uruguay',
      'Cupones de descuento y etiquetas de oferta',
      'Seguimiento avanzado: Google Analytics + mapas de calor'
    ],
  },
]

const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    name: 'Básico',
    price: 49,
    features: [
      'Tu tienda siempre online (hosting y base de datos)',
      'Monitoreo de errores',
      'Actualizaciones de seguridad',
      'Soporte por email (hasta 72h)',     
      'Guías de uso', 
    ],
  },
  {
    name: 'Estándar',
    price: 69,
    highlighted: true,
    features: [
      'Todo lo del Básico, más:',
      'Soporte por email más ágil (hasta 48h)',
      'Acceso a nuevas funciones lanzadas',
    ],
  },
  {
    name: 'Premium',
    price: 89,
    features: [
      'Todo lo del Estándar, más:',
      'Hasta 2 ajustes o mejoras a medida por mes',
      'Soporte prioritario (hasta 24h)',
      'Acceso anticipado a las novedades',
    ],
  },
]

function CheckIcon({ color = '#5B6BF8' }: { color?: string }) {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function PricingSection({ onOpenModal }: PricingSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="planes" ref={ref} className="px-6 py-24" style={{ backgroundColor: '#1A1410' }}>
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className={`mb-14 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: '#E8A030' }}>
            Precios transparentes
          </p>
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
            Elegí cómo arrancar
          </h2>
          <p className="mx-auto max-w-2xl text-base" style={{ color: '#9096A8' }}>
            Un único pago por la puesta en marcha + mantenimiento mensual. O financiá la puesta en marcha en hasta 12 cuotas sin interés.
          </p>
        </div>

        {/* ── Bloque destacado U$S 93/mes ── */}
        <div
          className={`mx-auto mb-16 max-w-3xl rounded-2xl p-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ backgroundColor: '#1a150a', border: '2px solid #E8A030' }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#F5C56A')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E8A030')}
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-center" style={{ color: '#E8A030' }}>
            La forma más fácil de empezar
          </p>
          <h3 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
            Tu tienda funcionando desde el primer mes
          </h3>
          <p className="mb-8 text-center text-sm" style={{ color: '#9096A8' }}>
            Financiá la puesta en marcha en 12 cuotas y pagá todo junto. Sin desembolso inicial, sin sorpresas.
          </p>

          {/* Desglose */}
          <div className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:justify-center sm:gap-0">
            <div className="flex flex-col items-center justify-center rounded-xl px-8 py-5 text-center sm:flex-1" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#9096A8' }}>Puesta en marcha Básico</p>
              <p className="text-xs mb-2" style={{ color: '#5a6070' }}>en 12 cuotas</p>
              <p className="text-2xl font-extrabold" style={{ color: '#E8A030' }}>U$S 44<span className="text-base font-semibold">/mes</span></p>
            </div>
            <div className="flex items-center justify-center px-4 text-2xl font-light" style={{ color: '#5a6070' }}>+</div>
            <div className="flex flex-col items-center justify-center rounded-xl px-8 py-5 text-center sm:flex-1" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#9096A8' }}>Mantenimiento Básico</p>
              <p className="text-xs mb-2" style={{ color: '#5a6070' }}>mensual</p>
              <p className="text-2xl font-extrabold" style={{ color: '#E8A030' }}>U$S 49<span className="text-base font-semibold">/mes</span></p>
            </div>
          </div>

          <div className="mb-2 flex justify-center">
            <span
              className="rounded-full px-6 py-2.5 text-base font-extrabold"
              style={{ backgroundColor: '#E8A030', color: '#0D0E14' }}
            >
              = U$S 93 / mes × 12 meses
            </span>
          </div>
          <p className="mb-8 text-center text-xs" style={{ color: '#5a6070' }}>
            Después del mes 12, solo pagás el mantenimiento activo: U$S 49/mes
          </p>

          <button
            onClick={onOpenModal}
            className="w-full rounded-xl py-4 text-base font-bold text-white transition-all duration-200 active:scale-95"
            style={{ backgroundColor: '#E8A030' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d4911f')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8A030')}
          >
            Quiero empezar por U$S 93/mes →
          </button>
        </div>

        {/* ── Puesta en marcha ── */}
        <div className={`mb-4 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="mb-1 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
            Pago inicial — Puesta en marcha
          </h3>
          <p className="text-sm" style={{ color: '#9096A8' }}>
            Un único pago para que armemos, configuremos y dejemos tu tienda online lista para usar.
          </p>
        </div>

        <div className="mb-16 grid gap-5 sm:grid-cols-3">
          {SETUP_PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                backgroundColor: '#13141F',
                border: plan.highlighted ? '2px solid #5B6BF8' : '1px solid rgba(255,255,255,0.07)',
                transitionDelay: `${200 + i * 80}ms`,
              }}
            >
              {plan.highlighted && (
                <span
                  className="mb-3 self-start rounded-full px-3 py-1 text-xs font-bold"
                  style={{ backgroundColor: 'rgba(91,107,248,0.18)', color: '#5B6BF8' }}
                >
                  {plan.badge}
                </span>
              )}
              <h4 className="mb-3 text-lg font-bold text-white" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
                {plan.name}
              </h4>
              <div className="mb-1">
                <span className="text-3xl font-extrabold text-white">U$S {plan.priceContado.toLocaleString('es-UY')}</span>
                <span className="ml-1 text-sm" style={{ color: '#9096A8' }}>contado</span>
              </div>
              {!plan.noCuotas && plan.priceCuotas && (
                <p className="mb-4 text-xs" style={{ color: '#5a6070' }}>
                  U$S {plan.priceCuotas.toLocaleString('es-UY')} en cuotas · {plan.cuotaLabel}
                </p>
              )}
              {plan.noCuotas && (
                <p className="mb-4 text-xs" style={{ color: '#5a6070' }}>Solo disponible al contado</p>
              )}
              <ul className="flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#9096A8' }}>
                    <CheckIcon color={plan.highlighted ? '#5B6BF8' : '#5B6BF8'} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenModal}
                className="mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 active:scale-95"
                style={
                  plan.highlighted
                    ? { backgroundColor: '#5B6BF8', color: '#fff' }
                    : { border: '1.5px solid rgba(91,107,248,0.4)', color: '#5B6BF8' }
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = plan.highlighted ? '#4a59e0' : 'rgba(91,107,248,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = plan.highlighted ? '#5B6BF8' : 'transparent'
                }}
              >
                Consultar
              </button>
            </div>
          ))}
        </div>

        {/* ── Mantenimiento ── */}
        <div className={`mb-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="mb-1 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
            Mantenimiento mensual
          </h3>
          <p className="text-sm" style={{ color: '#9096A8' }}>
            Comienza después de la puesta en marcha. Tu tienda siempre online, segura y actualizada.
          </p>
        </div>

        <div className="mb-10 grid gap-5 sm:grid-cols-3">
          {MAINTENANCE_PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                backgroundColor: '#13141F',
                border: plan.highlighted ? '2px solid rgba(232,160,48,0.5)' : '1px solid rgba(255,255,255,0.07)',
                transitionDelay: `${360 + i * 80}ms`,
              }}
            >
              <h4 className="mb-3 text-lg font-bold text-white" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
                {plan.name}
              </h4>
              <div className="mb-4">
                <span className="text-3xl font-extrabold" style={{ color: plan.highlighted ? '#E8A030' : '#fff' }}>
                  U$S {plan.price}
                </span>
                <span className="ml-1 text-sm" style={{ color: '#9096A8' }}>/mes</span>
              </div>
              <ul className="flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#9096A8' }}>
                    <CheckIcon color={plan.highlighted ? '#E8A030' : '#5B6BF8'} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenModal}
                className="mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 active:scale-95"
                style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: '#9096A8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(232,160,48,0.5)'
                  e.currentTarget.style.color = '#E8A030'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.color = '#9096A8'
                }}
              >
                Consultar
              </button>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <p
          className={`mx-auto max-w-3xl text-center text-xs italic leading-relaxed transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#5a6070' }}
        >
          Los valores están expresados en dólares estadounidenses (U$S). Esta propuesta es orientativa y podemos adaptarla a las necesidades de tu negocio. Si preferís que carguemos los productos, armemos la página principal y capacitemos a tu equipo, ofrecemos un servicio adicional de acompañamiento —{' '}
          <button onClick={onOpenModal} className="underline hover:no-underline" style={{ color: '#9096A8' }}>
            consultanos sin compromiso.
          </button>
        </p>

      </div>
    </section>
  )
}
