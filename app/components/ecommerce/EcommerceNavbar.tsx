import Image from 'next/image'
import Link from 'next/link'

export default function EcommerceNavbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(13,14,20,0.9)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Image
        src="/assets/logo-dark.png"
        alt="Kavok Ecommerce"
        width={280}
        height={56}
        className="h-12 w-auto"
        priority
      />

      <Link
        href="/"
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-[#5B6BF8] hover:text-white"
        style={{
          border: '1px solid rgba(255,255,255,0.15)',
          color: '#9096A8',
        }}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver
      </Link>
    </nav>
  )
}
