import type { Metadata } from 'next'
import EcommercePageContent from '../components/ecommerce/EcommercePageContent'

export const metadata: Metadata = {
  /* El template del root layout añade " | Kavok" automáticamente */
  title: 'Kavok Ecommerce — Tu tienda online profesional con IA',

  description:
    'Tienda online con Mercado Pago, sincronización con Mercado Libre e IA para imágenes. Stock, pedidos y reportes incluidos. Sin pago inicial, sin comisiones.',

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
    'tienda online mercado libre sync',
    'ecommerce latinoamerica',
  ],

  openGraph: {
    title: 'Kavok Ecommerce — Tienda online con IA y Mercado Pago',
    description:
      'Vendé online con Mercado Pago, sincronizá con Mercado Libre e IA para imágenes de producto. Sin pago inicial, sin comisiones por venta.',
    url: 'https://kavokuy.com/ecommerce',
    siteName: 'Kavok',
    /* La imagen la genera /app/ecommerce/opengraph-image.tsx automáticamente */
    locale: 'es_UY',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kavok Ecommerce — Tienda online con IA y Mercado Pago',
    description:
      'Mercado Pago, Mercado Libre e IA para imágenes. Sin pago inicial, sin comisiones.',
    /* La imagen la hereda del opengraph-image.tsx */
  },

  alternates: {
    canonical: 'https://kavokuy.com/ecommerce',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://kavokuy.com/ecommerce#app',
      name: 'Kavok Ecommerce',
      alternateName: 'Kavok Ecommerce — Tienda Online con IA',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Kavok Ecommerce es una plataforma de tienda online profesional diseñada para el mercado latinoamericano. Incluye cobros con Mercado Pago, sincronización bidireccional con Mercado Libre, inteligencia artificial para imágenes de producto, cupones, variantes de productos y análisis de ventas.',
      featureList: [
        'Cobros con Mercado Pago (tarjeta, transferencia, efectivo)',
        'Sincronización bidireccional con Mercado Libre',
        'Inteligencia artificial para imágenes de producto',
        'Catálogo con variantes (talle, color, etc.)',
        'Sistema de cupones y descuentos',
        'Control de stock en tiempo real',
        'Panel de reportes y analytics',
        'Reseñas de clientes',
        'Diseño responsive mobile-first',
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Puesta en marcha Básico',
          price: '490',
          priceCurrency: 'USD',
          description: 'Tienda online completa con Mercado Pago, gestión de stock y pedidos.',
        },
        {
          '@type': 'Offer',
          name: 'Puesta en marcha Estándar',
          price: '790',
          priceCurrency: 'USD',
          description: 'Todo el plan Básico más sincronización Mercado Libre, IA para imágenes, reseñas y analytics avanzado.',
        },
        {
          '@type': 'Offer',
          name: 'Mantenimiento Básico',
          price: '49',
          priceCurrency: 'USD',
          billingPeriod: 'P1M',
          description: 'Hosting, SSL, soporte y actualizaciones del plan básico.',
        },
        {
          '@type': 'Offer',
          name: 'Mantenimiento Estándar',
          price: '69',
          priceCurrency: 'USD',
          billingPeriod: 'P1M',
          description: 'Hosting, SSL, soporte y actualizaciones del plan estándar.',
        },
        {
          '@type': 'Offer',
          name: 'Mantenimiento Premium',
          price: '89',
          priceCurrency: 'USD',
          billingPeriod: 'P1M',
          description: 'Hosting, SSL, soporte prioritario, actualizaciones y funciones adicionales.',
        },
      ],
      provider: {
        '@id': 'https://kavokuy.com/#organization',
      },
      inLanguage: 'es',
      availableOnDevice: ['Desktop', 'Mobile', 'Tablet'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://kavokuy.com/ecommerce#webpage',
      url: 'https://kavokuy.com/ecommerce',
      name: 'Kavok Ecommerce — Tu tienda online profesional con IA | Kavok',
      description:
        'Kavok Ecommerce: tienda online completa con cobros por Mercado Pago, integración Mercado Libre, IA para imágenes y reportes. Desde U$S 93/mes todo incluido, sin pago inicial.',
      isPartOf: { '@id': 'https://kavokuy.com/#website' },
      about: { '@id': 'https://kavokuy.com/ecommerce#app' },
      inLanguage: 'es-UY',
      mentions: [
        { '@type': 'Thing', name: 'Mercado Pago' },
        { '@type': 'Thing', name: 'Mercado Libre' },
        { '@type': 'Thing', name: 'Inteligencia Artificial' },
        { '@type': 'Thing', name: 'E-commerce' },
        { '@type': 'Place', name: 'Uruguay' },
        { '@type': 'Place', name: 'América Latina' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://kavokuy.com/ecommerce#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://kavokuy.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Kavok Ecommerce — Tu tienda online con IA',
          item: 'https://kavokuy.com/ecommerce',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kavokuy.com/ecommerce#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta crear una tienda online con Kavok Ecommerce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La puesta en marcha tiene un costo único de $490 USD (plan Básico: tienda con Mercado Pago, stock y pedidos) o $790 USD (plan Estándar: incluye sincronización con Mercado Libre, IA para imágenes y analytics). El mantenimiento mensual va de $49 a $89 USD todo incluido: hosting, SSL, soporte y actualizaciones.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Kavok Ecommerce integra Mercado Pago?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Kavok Ecommerce integra Mercado Pago como pasarela de pago principal, aceptando tarjetas de crédito, débito, transferencia bancaria y todos los métodos disponibles en Uruguay y la región latinoamericana. Los cobros se acreditan directamente en tu cuenta de Mercado Pago.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo sincronizar mi tienda con Mercado Libre?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, con el plan Estándar. Podés importar todo tu catálogo de Mercado Libre y el stock se sincroniza en tiempo real en ambas plataformas: cuando se vende un producto en Mercado Libre, el stock se descuenta automáticamente en tu tienda Kavok Ecommerce, y viceversa.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia a Kavok Ecommerce de Tiendanube, Shopify o WooCommerce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kavok Ecommerce está diseñado específicamente para el mercado uruguayo y latinoamericano: integración nativa con Mercado Pago y Mercado Libre, soporte directo del equipo de Kavok en Uruguay, precio en dólares accesible y sin comisiones por venta. A diferencia de plataformas genéricas, incluye IA para generar imágenes de producto automáticamente y soporte local en español.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tarda en estar lista mi tienda online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una tienda Kavok Ecommerce puede estar operativa en 5 a 10 días hábiles desde la contratación, dependiendo de la cantidad de productos y el nivel de personalización requerido. El equipo de Kavok acompaña todo el proceso de configuración y carga inicial.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Kavok Ecommerce funciona para negocios en Uruguay, Argentina y otros países?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Kavok Ecommerce está disponible para negocios en Uruguay, Argentina, Chile, Paraguay y toda América Latina. La integración con Mercado Pago y Mercado Libre cubre todos los países donde estas plataformas operan.',
          },
        },
      ],
    },
  ],
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
