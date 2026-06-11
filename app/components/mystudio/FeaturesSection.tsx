'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

interface FeaturesSectionProps {
  fontFamily?: string
}

/* ── Lightbox ─────────────────────────────────── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string
  alt: string
  onClose: () => void
}) {
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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
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
          height={1400}
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

/* ── FeatureItem ─────────────────────────────── */
function FeatureItem({
  title,
  description,
  images,
  imageAlt,
  index,
  fontFamily = 'serif',
}: {
  title: string
  description: string
  images: string | string[]
  imageAlt: string
  index: number
  fontFamily?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      // Actualiza en AMBAS direcciones: al entrar Y al salir del viewport
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleClose = useCallback(() => setLightboxSrc(null), [])

  const isEven = index % 2 === 0

  const imgClass =
    'w-full h-auto rounded-3xl object-contain shadow-2xl transition-transform duration-500 ease-out cursor-pointer hover:scale-105'

  function renderImages() {
    if (Array.isArray(images)) {
      return (
        <div className="flex flex-col items-center gap-5">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 ease-out hover:scale-105 cursor-pointer w-full"
              onClick={() => setLightboxSrc(src)}
            >
              <Image
                src={src}
                alt={`${imageAlt} ${i + 1}`}
                width={700}
                height={500}
                className="w-full h-auto rounded-3xl object-contain"
              />
            </div>
          ))}
        </div>
      )
    }
    return (
      <div
        className="overflow-hidden rounded-3xl shadow-2xl"
        onClick={() => setLightboxSrc(images as string)}
      >
        <Image
          src={images as string}
          alt={imageAlt}
          width={720}
          height={1100}
          className={imgClass}
        />
      </div>
    )
  }

  return (
    <>
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} alt={imageAlt} onClose={handleClose} />
      )}

      <div ref={ref} className="grid items-center gap-12 md:grid-cols-2">

        {/* Texto */}
        <div
          className={`transition-all duration-700 ease-out ${isEven ? 'md:order-1' : 'md:order-2'} ${
            inView
              ? 'opacity-100 translate-x-0'
              : isEven
              ? 'opacity-0 -translate-x-16'
              : 'opacity-0 translate-x-16'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <h3
            className="mb-4 text-2xl font-bold sm:text-3xl"
            style={{ fontFamily, color: '#2C3328' }}
          >
            {title}
          </h3>
          <p className="text-base leading-relaxed" style={{ color: '#6B7A65' }}>
            {description}
          </p>
        </div>

        {/* Imagen */}
        <div
          className={`flex items-center justify-center transition-all duration-700 ease-out ${isEven ? 'md:order-2' : 'md:order-1'} ${
            inView
              ? 'opacity-100 translate-x-0'
              : isEven
              ? 'opacity-0 translate-x-16'
              : 'opacity-0 -translate-x-16'
          }`}
          style={{ transitionDelay: '120ms' }}
        >
          {renderImages()}
        </div>

      </div>
    </>
  )
}

/* ── Features list ───────────────────────────── */
const FEATURES = [
  {
    title: 'Calendario de clases',
    description:
      'Organizá clases por día, horario y profesor. Tus alumnos saben siempre cuándo y dónde es cada clase.',
    images: '/assets/calendario_de_clases.png',
    imageAlt: 'Calendario de clases Mystudio',
  },
  {
    title: 'Gestión de alumnos y créditos',
    description:
      'Registrá alumnos, asignales clases y controlá su saldo de créditos en un clic. Todo el historial en un solo lugar.',
    images: '/assets/gestion_de_alumnos.png',
    imageAlt: 'Gestión de alumnos y créditos Mystudio',
  },
  {
    title: 'Control de asistencia',
    description:
      'Marcá presentes desde el celular al inicio de cada clase. Sin papel, sin olvidos. Tu equipo siempre al día.',
    images: '/assets/control_de_asistencia.png',
    imageAlt: 'Control de asistencia Mystudio',
  },
  {
    title: 'Reagenda autónoma',
    description:
      'Tus alumnos pueden cancelar y reagendar sus propias clases sin necesidad de contactarte. Menos mensajes para vos, más autonomía para ellos.',
    images: '/assets/reagenda_autonoma.png',
    imageAlt: 'Reagenda autónoma Mystudio',
  },
  {
    title: 'Reportes exportables',
    description:
      'Descargá informes de asistencia, alumnos activos y clases del período en segundos. Información clara para tomar mejores decisiones.',
    images: '/assets/reportes_exportables.png',
    imageAlt: 'Reportes exportables Mystudio',
  },
  {
    title: 'Multi-sede',
    description:
      'Administrá todas tus sedes desde un solo panel. Profesores y alumnos separados por ubicación, todo centralizado.',
    images: ['/assets/sedes_1.png', '/assets/sedes_2.png'],
    imageAlt: 'Multi-sede Mystudio',
  },
  {
    title: 'Branding de tu estudio',
    description:
      'Logo, nombre y colores de tu estudio en toda la plataforma. Tus alumnos ven tu marca, no una app genérica.',
    images: '/assets/branding.png',
    imageAlt: 'Branding Mystudio',
  },
]

/* ── Section ─────────────────────────────────── */
export default function FeaturesSection({ fontFamily = 'serif' }: FeaturesSectionProps) {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerInView, setHeaderInView] = useState(false)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="overflow-x-hidden px-6 py-24" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-20 text-center transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: '#88A47C' }}
          >
            Todo lo que necesitás
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily, color: '#2C3328' }}
          >
            Una app. Todo tu estudio.
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-28">
          {FEATURES.map((feature, i) => (
            <FeatureItem
              key={i}
              index={i}
              title={feature.title}
              description={feature.description}
              images={feature.images}
              imageAlt={feature.imageAlt}
              fontFamily={fontFamily}
            />
          ))}
        </div>

        {/* Nota final */}
        <p
          className="mt-20 text-center text-sm italic"
          style={{ color: '#88A47C' }}
        >
          Todas las herramientas son intuitivas y cuentan con su guía de uso, para que cada perfil de usuario se adapte rápidamente.
        </p>

      </div>
    </section>
  )
}
