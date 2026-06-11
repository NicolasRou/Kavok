import { Playfair_Display, DM_Sans } from 'next/font/google'
import MystudioNavbar from '../components/mystudio/MystudioNavbar'
import './print.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function MystudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const fontFamily = `var(--font-playfair), Georgia, serif`

  return (
    <div
      className={`${playfair.variable} ${dmSans.variable} min-h-screen overflow-x-hidden`}
      style={{
        backgroundColor: '#F9F7F2',
        fontFamily: `var(--font-dm-sans), system-ui, sans-serif`,
      }}
    >
      <MystudioNavbar fontFamily={fontFamily} />
      {children}
    </div>
  )
}
