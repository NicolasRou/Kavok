'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

/* ── Lightbox ─────────────────────────────────── */
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
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
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] max-w-[92vw] overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Vista ampliada"
          width={1400}
          height={1000}
          className="max-h-[92vh] w-auto rounded-2xl object-contain"
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

/* ── ImageCarousel ────────────────────────────── */
function ImageCarousel({
  images,
  label,
  fit = 'cover',
}: {
  images: string[]
  label: string
  fit?: 'cover' | 'contain'
}) {
  const [current, setCurrent] = useState(0)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const handleClose = useCallback(() => setLightboxSrc(null), [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={handleClose} />}
      <div className="flex flex-col gap-3">
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl"
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            backgroundColor: fit === 'contain' ? '#0a0b10' : undefined,
          }}
          onClick={() => setLightboxSrc(images[current])}
        >
          <div className="relative h-72 w-full sm:h-80 lg:h-120">
            {images.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <Image
                  src={src}
                  alt={`${label} ${i + 1}`}
                  fill
                  className={`rounded-2xl transition-transform duration-500 ${
                    fit === 'contain'
                      ? 'object-contain group-hover:scale-[1.01]'
                      : 'object-cover group-hover:scale-[1.02]'
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Imagen ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '16px' : '6px',
                  height: '6px',
                  backgroundColor: i === current ? '#E8A030' : 'rgba(255,255,255,0.4)',
                }}
              />
            ))}
          </div>
          {/* Expand hint */}
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </div>
        </div>
        {/* Label */}
        <p className="text-center text-xs font-medium" style={{ color: '#5a6070' }}>{label}</p>
      </div>
    </>
  )
}

const FEATURES = [
  {
    title: 'Tienda online completa',
    desc: 'Catálogo con variantes (talle, color, etc.), galería de fotos, ficha de producto, colecciones y categorías.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Cobros con Mercado Pago',
    desc: 'Checkout Pro ya configurado y probado. Cobrás con tarjeta, débito, efectivo y cuotas.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Control de stock',
    desc: 'Stock por variante. Alertas de stock bajo. El sistema descuenta automáticamente con cada venta.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Envíos por departamento',
    desc: 'Configurá métodos de envío, tarifas por zona, envío gratis desde cierto monto, pickup en local.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: 'Emails automáticos',
    desc: 'Confirmación de compra, aviso de preparación, notificación de envío. Tu cliente siempre informado.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Sincronización con Mercado Libre',
    desc: 'Importá todo tu catálogo de ML. El stock se sincroniza en tiempo real: una venta en ML descuenta en tu tienda.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: 'Cupones y descuentos',
    desc: 'Creá cupones por porcentaje o monto fijo, con límite de usos, vencimiento y aplicación por producto o categoría.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-4.125-2.062-4.125 2.063-4.125-2.063L3 21.75V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: 'Diseño 100% personalizable',
    desc: 'Cambiá colores, tipografías, logo, banners y layout desde tu panel. Sin tocar código.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Gestión de tu equipo',
    desc: 'Sumá operadores que gestionan stock y pedidos sin acceso al resto del panel. Control granular de permisos.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Reseñas de clientes',
    desc: 'Tus compradores pueden dejar reseñas con fotos y estrellas. Vos aprobás qué se publica.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
]

export default function FeaturesSection() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-6 py-24" style={{ backgroundColor: '#0D0E14' }}>
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-14 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: '#5B6BF8' }}>
            Todo lo que incluye
          </p>
          <h2
            className="text-3xl font-bold text-white sm:text-4xl"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Una plataforma. Todo lo que necesitás para vender.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`flex gap-4 rounded-2xl p-5 transition-all duration-700 hover:scale-[1.005] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                backgroundColor: '#13141F',
                border: '1px solid rgba(255,255,255,0.07)',
                transitionDelay: `${(i % 4) * 60}ms`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(91,107,248,0.3)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
            >
              <div
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(91,107,248,0.12)', color: '#5B6BF8' }}
              >
                {f.icon}
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9096A8' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Banner de capturas ── */}
        <div className="mt-16">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest" style={{ color: '#5a6070' }}>
            Capturas de pantalla
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <ImageCarousel
              images={[
                '/assets/echz1.png',
                '/assets/echz2.png',
                '/assets/echz3.png',
                '/assets/echz4.png',
                '/assets/echz5.png',
              ]}
              label="Vista desktop"
            />
            <ImageCarousel
              images={[
                '/assets/ecvc1.png',
                '/assets/ecvc2.png',
                '/assets/ecvc3.png',
                '/assets/ecvc4.png',
                '/assets/ecvc5.png',
                '/assets/ecvc6.png',
              ]}
              label="Vista mobile"
              fit="contain"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
