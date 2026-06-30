import type { Metadata } from 'next'
import MystudioPageContent from '../components/mystudio/MystudioPageContent'

export const metadata: Metadata = {
  /* El template del root layout añade " | Kavok" automáticamente */
  title: 'Mystudio — Gestión para estudios de Pilates',

  description:
    'Gestión integral para estudios de Pilates: clases, alumnos, créditos y asistencia en un solo lugar. Reagenda autónoma desde el celular. 15 días gratis.',

  keywords: [
    'gestión estudio pilates',
    'software pilates uruguay',
    'app pilates administración',
    'control alumnos pilates',
    'sistema gestión pilates',
    'mystudio kavok',
    'agenda clases pilates',
    'créditos pilates app',
    'reagenda pilates online',
    'app estudio pilates latinoamerica',
  ],

  openGraph: {
    title: 'Mystudio — App de gestión para estudios de Pilates',
    description:
      'Clases, alumnos, créditos y asistencia en un solo lugar. Reagenda autónoma desde el celular. Probalo gratis 15 días, sin tarjeta.',
    url: 'https://kavokuy.com/mystudio',
    siteName: 'Kavok',
    /* La imagen la genera /app/mystudio/opengraph-image.tsx automáticamente */
    locale: 'es_UY',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mystudio — App de gestión para estudios de Pilates',
    description:
      'Clases, alumnos, créditos y asistencia en un solo lugar. Probalo gratis 15 días.',
    /* La imagen la hereda del opengraph-image.tsx */
  },

  alternates: {
    canonical: 'https://kavokuy.com/mystudio',
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
      '@id': 'https://kavokuy.com/mystudio#app',
      name: 'Mystudio',
      alternateName: 'Mystudio by Kavok',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      description:
        'Mystudio es el sistema de gestión integral para estudios de Pilates. Permite controlar clases, alumnos, créditos y asistencia desde un solo lugar, con reagenda autónoma para los alumnos y acceso desde el celular.',
      featureList: [
        'Calendario de clases por horario y profesor',
        'Gestión de alumnos con perfiles completos',
        'Sistema de créditos y paquetes de clases',
        'Control de asistencia',
        'Reagenda autónoma para alumnos',
        'Reportes exportables',
        'Gestión multi-sede',
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Plan Starter',
          price: '35',
          priceCurrency: 'USD',
          billingPeriod: 'P1M',
          description: 'Hasta 50 alumnos activos, 1 sede, soporte por WhatsApp.',
        },
        {
          '@type': 'Offer',
          name: 'Plan Pro',
          price: '55',
          priceCurrency: 'USD',
          billingPeriod: 'P1M',
          description: 'Alumnos ilimitados, múltiples sedes, reportes avanzados.',
        },
        {
          '@type': 'Offer',
          name: 'Plan Studio+',
          price: '79',
          priceCurrency: 'USD',
          billingPeriod: 'P1M',
          description: 'Todo el plan Pro más onboarding personalizado y soporte prioritario.',
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
      '@id': 'https://kavokuy.com/mystudio#webpage',
      url: 'https://kavokuy.com/mystudio',
      name: 'Mystudio — Gestión para estudios de Pilates | Kavok',
      description:
        'Mystudio es la app de gestión integral para estudios de Pilates. Controlá clases, alumnos, créditos y asistencia desde un solo lugar. 15 días gratis, sin tarjeta.',
      isPartOf: { '@id': 'https://kavokuy.com/#website' },
      about: { '@id': 'https://kavokuy.com/mystudio#app' },
      inLanguage: 'es-UY',
      mentions: [
        { '@type': 'Thing', name: 'Pilates' },
        { '@type': 'Thing', name: 'Gestión de clases' },
        { '@type': 'Thing', name: 'Control de asistencia' },
        { '@type': 'Place', name: 'Uruguay' },
        { '@type': 'Place', name: 'América Latina' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://kavokuy.com/mystudio#breadcrumb',
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
          name: 'Mystudio — Gestión para estudios de Pilates',
          item: 'https://kavokuy.com/mystudio',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kavokuy.com/mystudio#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta Mystudio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mystudio tiene tres planes: Starter a $35/mes (hasta 50 alumnos), Pro a $55/mes (alumnos ilimitados y multi-sede) y Studio+ a $79/mes (con onboarding personalizado y soporte prioritario). Todos incluyen 15 días de prueba gratis sin tarjeta de crédito.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué funcionalidades incluye Mystudio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mystudio incluye: calendario de clases por horario y profesor, gestión de alumnos con perfiles completos, sistema de créditos y paquetes, control de asistencia, reagenda autónoma para alumnos (pueden cancelar y reagendar sin contactar al estudio), reportes exportables y gestión multi-sede.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Mystudio funciona en celular?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Mystudio está optimizado para celulares iOS y Android. Los alumnos pueden gestionar sus propias clases desde el móvil, y el administrador del estudio puede operar el sistema desde cualquier dispositivo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Hay contrato de permanencia con Mystudio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Mystudio es un servicio mensual sin contratos de permanencia. Podés cancelar cuando quieras. El primer mes incluye 15 días de prueba gratuita, sin necesidad de tarjeta de crédito.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Mystudio sirve para estudios de Pilates en Uruguay, Argentina u otros países de la región?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Mystudio está diseñado para estudios de Pilates de toda América Latina y cuenta con soporte local en tiempo real desde Montevideo, Uruguay. Funciona perfectamente para estudios en Uruguay, Argentina, Chile, Paraguay y toda la región.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia Mystudio de otras apps de gestión de Pilates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mystudio es la única solución desarrollada en Uruguay con soporte local en español y enfoque exclusivo en estudios de Pilates. Combina gestión de clases, alumnos, créditos y asistencia en una sola app, con reagenda autónoma que elimina la necesidad de WhatsApp para cada cambio de horario.',
          },
        },
      ],
    },
  ],
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
