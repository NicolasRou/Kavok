'use client'

import { useEffect, useRef, useState } from 'react'

const PHONE = '59899313544'

interface CtaSectionProps {
  onOpenModal: () => void
}

export default function CtaSection({ onOpenModal }: CtaSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, quiero saber más sobre Kavok Ecommerce')}`

  return (
    <section
      className="px-6 py-28 text-center"
      style={{ background: 'linear-gradient(180deg, #0D0E14 0%, #0f1025 100%)' }}
    >
      <div ref={ref} className="mx-auto max-w-2xl">
        <h2
          className={`mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
        >
          ¿Listo para vender online?
        </h2>

        <p
          className={`mb-10 text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ color: '#9096A8' }}
        >
          Contanos sobre tu negocio y te armamos una propuesta<br />
          adaptada a lo que necesitás.
        </p>

        <div className={`mb-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button
            onClick={onOpenModal}
            className="rounded-xl px-10 py-4 text-base font-bold text-white transition-all duration-200 active:scale-95"
            style={{ backgroundColor: '#E8A030' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d4911f')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8A030')}
          >
            Hablar con Kavok →
          </button>
        </div>

        <p
          className={`mb-8 text-sm transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ color: '#5a6070' }}
        >
          o escribinos a{' '}
          <a
            href="mailto:kavokuy@gmail.com?subject=Consulta%20Kavok%20Ecommerce"
            className="underline hover:no-underline"
            style={{ color: '#9096A8' }}
          >
            kavokuy@gmail.com
          </a>
        </p>

        <div
          className={`border-t pt-8 transition-all duration-700 delay-[400ms] ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: '#5a6070' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#25D366')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6070')}
          >
            <svg viewBox="0 0 32 32" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.627 4.64 1.813 6.64L2.667 29.333l6.88-1.787A13.267 13.267 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24a10.587 10.587 0 01-5.44-1.507l-.387-.227-4.08 1.053 1.08-3.946-.253-.4A10.56 10.56 0 015.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.004 26.667zm5.84-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.693.08-.32-.16-1.35-.497-2.573-1.587-.95-.84-1.59-1.88-1.777-2.2-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.627-.52-.54-.72-.547-.186-.006-.4-.008-.613-.008-.214 0-.56.08-.853.4-.294.32-1.12 1.093-1.12 2.666 0 1.574 1.147 3.094 1.307 3.307.16.214 2.253 3.44 5.46 4.827.763.327 1.36.52 1.82.667.767.24 1.466.206 2.02.126.616-.09 1.893-.773 2.16-1.52.267-.746.267-1.386.187-1.52-.08-.133-.294-.213-.614-.373z" />
            </svg>
            También podés escribirnos directo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
