import Link from 'next/link'
import MystudioLogo from './MystudioLogo'

interface MystudioNavbarProps {
  fontFamily?: string
}

export default function MystudioNavbar({ fontFamily = 'serif' }: MystudioNavbarProps) {
  return (
    <nav
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{ borderBottom: '1px solid #EDEAE3', backgroundColor: 'rgba(249,247,242,0.92)' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/mystudio" className="flex items-center">
          <MystudioLogo size={30} fontFamily={fontFamily} />
        </Link>

        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-xl border border-[#3A4733] px-5 py-2 text-sm font-semibold text-[#3A4733] transition-all duration-200 hover:bg-[#3A4733] hover:text-[#F9F7F2]"
        >
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver
        </Link>
      </div>
    </nav>
  )
}
