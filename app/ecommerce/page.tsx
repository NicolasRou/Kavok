import type { Metadata } from 'next'
import EcommercePageContent from '../components/ecommerce/EcommercePageContent'

export const metadata: Metadata = {
  title: 'Kavok Ecommerce — Tu tienda online profesional con IA | Kavok',
  description:
    'Kavok Ecommerce: tienda online completa con cobros por Mercado Pago, integración Mercado Libre, IA para imágenes y reportes. Desde U$S 93/mes todo incluido, sin pago inicial.',
  keywords: [
    'tienda online uruguay',
    'ecommerce uruguay',
    'vender por internet uruguay',
    'mercado pago ecommerce',
    'tienda online profesional',
    'kavok ecommerce',
    'crear tienda online',
    'software ecommerce uruguay',
    'integración mercado libre',
    'ecommerce con inteligencia artificial',
  ],
  openGraph: {
    title: 'Kavok Ecommerce — Tu tienda online con IA integrada',
    description:
      'Vendé por internet con cobros online, stock automático, sync con Mercado Libre e IA. Desde U$S 93/mes sin pago inicial.',
    url: 'https://kavokuy.com/ecommerce',
    siteName: 'Kavok',
    images: [{ url: '/assets/logo-dark.png', width: 400, height: 80, alt: 'Kavok Ecommerce' }],
    locale: 'es_UY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavok Ecommerce — Tu tienda online con IA integrada',
    description: 'Vendé por internet con cobros online, stock automático y IA. Desde U$S 93/mes.',
  },
  alternates: {
    canonical: 'https://kavokuy.com/ecommerce',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kavok Ecommerce',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Plataforma de ecommerce profesional con integración Mercado Pago, Mercado Libre, IA para imágenes de producto y análisis inteligente de negocio.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Puesta en marcha Básico',
      price: '490',
      priceCurrency: 'USD',
      description: 'Tienda online completa con Mercado Pago, stock y pedidos',
    },
    {
      '@type': 'Offer',
      name: 'Puesta en marcha Estándar',
      price: '790',
      priceCurrency: 'USD',
      description: 'Todo lo del Básico + ML sync, IA, reseñas, analytics',
    },
    {
      '@type': 'Offer',
      name: 'Mantenimiento Básico',
      price: '49',
      priceCurrency: 'USD',
      billingPeriod: 'P1M',
    },
    {
      '@type': 'Offer',
      name: 'Mantenimiento Estándar',
      price: '69',
      priceCurrency: 'USD',
      billingPeriod: 'P1M',
    },
    {
      '@type': 'Offer',
      name: 'Mantenimiento Premium',
      price: '89',
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

export default function EcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EcommercePageContent />
    </>
  )
}
