import type { Metadata } from 'next'
import MystudioPageContent from '../components/mystudio/MystudioPageContent'

export const metadata: Metadata = {
  title: 'Mystudio — Gestión para estudios de Pilates | Kavok',
  description:
    'Mystudio es la app de gestión integral para estudios de Pilates. Controlá clases, alumnos, créditos y asistencia desde un solo lugar. 15 días gratis, sin tarjeta.',
  keywords: [
    'gestión estudio pilates',
    'software pilates uruguay',
    'app pilates administración',
    'control alumnos pilates',
    'sistema gestión pilates',
    'mystudio kavok',
    'agenda clases pilates',
    'créditos pilates app',
  ],
  openGraph: {
    title: 'Mystudio — Tu app de gestión de Pilates',
    description: 'Clases, alumnos, créditos y asistencia en un solo lugar. Probalo gratis 15 días.',
    url: 'https://kavokuy.com/mystudio',
    siteName: 'Kavok',
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mystudio — Gestión para estudios de Pilates',
    description: 'Clases, alumnos, créditos y asistencia en un solo lugar. Probalo gratis 15 días.',
  },
  alternates: {
    canonical: 'https://kavokuy.com/mystudio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Mystudio',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  description:
    'Sistema de gestión integral para estudios de Pilates. Control de clases, alumnos, créditos y asistencia.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter',
      price: '35',
      priceCurrency: 'USD',
      billingPeriod: 'P1M',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '55',
      priceCurrency: 'USD',
      billingPeriod: 'P1M',
    },
    {
      '@type': 'Offer',
      name: 'Studio+',
      price: '79',
      priceCurrency: 'USD',
      billingPeriod: 'P1M',
    },
  ],
  provider: {
    '@type': 'Organization',
    name: 'Kavok',
    url: 'https://kavokuy.com',
  },
}

export default function MystudioPage() {
  const fontFamily = `var(--font-playfair), Georgia, serif`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MystudioPageContent fontFamily={fontFamily} />
    </>
  )
}
