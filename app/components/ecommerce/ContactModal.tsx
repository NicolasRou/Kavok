'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const PHONE = '59899313544'
const MAIL = 'kavokuy@gmail.com'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  function handleCopy() {
    navigator.clipboard.writeText(MAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (!isOpen) return null

  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, quiero saber más sobre Kavok Ecommerce')}`
  const mailUrl = `mailto:${MAIL}?subject=${encodeURIComponent('Consulta Kavok Ecommerce')}&body=${encodeURIComponent('Hola, quiero saber más sobre Kavok Ecommerce.')}`

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contacto Kavok Ecommerce"
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      <div
        className="animate-ke-modal relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{ backgroundColor: '#13141F', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        {/* Cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
          style={{ color: '#9096A8' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <div className="mb-5 flex justify-center">
          <Image src="/assets/logo-dark.png" alt="Kavok Ecommerce" width={220} height={44} className="h-11 w-auto" />
        </div>

        <h2 className="mb-1 text-center text-xl font-bold text-white">
          Hablemos de tu negocio
        </h2>
        <p className="mb-7 text-center text-sm" style={{ color: '#9096A8' }}>
          Respondemos en menos de 24h.
        </p>

        {/* Email */}
        <a
          href={mailUrl}
          className="mb-3 flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold text-white transition-all duration-200 active:scale-95"
          style={{ backgroundColor: '#E8A030' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d4911f')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8A030')}
        >
          <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Escribir a kavokuy@gmail.com
        </a>

        {/* Separador */}
        <div className="mb-3 flex items-center gap-3">
          <div className="flex-1 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }} />
          <span className="text-xs" style={{ color: '#5a6070' }}>o</span>
          <div className="flex-1 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold text-white transition-all duration-200 active:scale-95"
          style={{ backgroundColor: '#25D366' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1ebe5d')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5 shrink-0" fill="white" aria-hidden="true">
            <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.627 4.64 1.813 6.64L2.667 29.333l6.88-1.787A13.267 13.267 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24a10.587 10.587 0 01-5.44-1.507l-.387-.227-4.08 1.053 1.08-3.946-.253-.4A10.56 10.56 0 015.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.004 26.667zm5.84-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.693.08-.32-.16-1.35-.497-2.573-1.587-.95-.84-1.59-1.88-1.777-2.2-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.627-.52-.54-.72-.547-.186-.006-.4-.008-.613-.008-.214 0-.56.08-.853.4-.294.32-1.12 1.093-1.12 2.666 0 1.574 1.147 3.094 1.307 3.307.16.214 2.253 3.44 5.46 4.827.763.327 1.36.52 1.82.667.767.24 1.466.206 2.02.126.616-.09 1.893-.773 2.16-1.52.267-.746.267-1.386.187-1.52-.08-.133-.294-.213-.614-.373z" />
          </svg>
          Escribir por WhatsApp
        </a>

        {/* Copy email */}
        <p className="mt-5 text-center text-xs" style={{ color: '#9096A8' }}>
          o copiá el email:
        </p>
        <div
          className="mt-2 flex items-center gap-2 rounded-xl px-4 py-2"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <input
            type="text"
            value={MAIL}
            readOnly
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: '#9096A8' }}
          />
          <button
            onClick={handleCopy}
            className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 active:scale-95"
            style={{ backgroundColor: '#5B6BF8' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4a59e0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#5B6BF8')}
          >
            {copied ? '¡Copiado!' : 'Copiar'}
          </button>
        </div>
      </div>
    </div>
  )
}
