import type { ReactNode } from 'react'
import EcommerceNavbar from '../components/ecommerce/EcommerceNavbar'

export default function EcommerceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0D0E14' }}>
      <EcommerceNavbar />
      {children}
    </div>
  )
}
