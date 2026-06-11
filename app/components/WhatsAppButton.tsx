'use client'

import { usePathname } from 'next/navigation'

const PHONE = '59899313544'

const MESSAGES: Record<string, string> = {
  '/mystudio':
    'Hola! Te quiero consultar por el sistema Mystudio...',
  '/ecommerce':
    'Hola! Te quiero consultar por Kavok Ecommerce...',
}

const DEFAULT_MESSAGE = 'Hola! Me comunico desde kavokuy.com...'

export default function WhatsAppButton() {
  const pathname = usePathname()

  // Coincidencia por prefijo para rutas anidadas (ej: /mystudio/algo)
  const message =
    Object.entries(MESSAGES).find(([key]) => pathname.startsWith(key))?.[1] ??
    DEFAULT_MESSAGE

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
      style={{ backgroundColor: '#25D366' }}
    >
      {/* WhatsApp icon */}
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.627 4.64 1.813 6.64L2.667 29.333l6.88-1.787A13.267 13.267 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24a10.587 10.587 0 01-5.44-1.507l-.387-.227-4.08 1.053 1.08-3.946-.253-.4A10.56 10.56 0 015.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.004 26.667zm5.84-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.693.08-.32-.16-1.35-.497-2.573-1.587-.95-.84-1.59-1.88-1.777-2.2-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.627-.52-.54-.72-.547-.186-.006-.4-.008-.613-.008-.214 0-.56.08-.853.4-.294.32-1.12 1.093-1.12 2.666 0 1.574 1.147 3.094 1.307 3.307.16.214 2.253 3.44 5.46 4.827.763.327 1.36.52 1.82.667.767.24 1.466.206 2.02.126.616-.09 1.893-.773 2.16-1.52.267-.746.267-1.386.187-1.52-.08-.133-.294-.213-.614-.373z" />
      </svg>
    </a>
  )
}
