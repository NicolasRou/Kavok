import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ── SEO: Metadata global ── */
export const metadata: Metadata = {
  metadataBase: new URL("https://kavokuy.com"),

  /* Subpáginas heredan el template: "Título Página | Kavok" */
  title: {
    template: "%s | Kavok",
    default: "Kavok — Orquestamos Tecnología para Escalar tu Negocio en Uruguay",
  },

  description:
    "Venture Studio & Software Factory en Montevideo. Mystudio (Pilates), Kavok Ecommerce (IA + Mercado Pago), software a medida y automatización con IA.",

  keywords: [
    "desarrollo de software Uruguay",
    "software factory Montevideo",
    "software a medida Uruguay",
    "app gestión estudio pilates",
    "tienda online Uruguay",
    "ecommerce Mercado Pago",
    "automatización con IA Uruguay",
    "Kavok",
    "Mystudio",
    "Kavok Ecommerce",
    "venture studio Uruguay",
  ],

  authors: [{ name: "Kavok", url: "https://kavokuy.com" }],
  creator: "Kavok",

  /* ── OpenGraph ── */
  openGraph: {
    title: "Kavok — Venture Studio & Software Factory en Uruguay",
    description:
      "Mystudio (Pilates), Kavok Ecommerce (IA + Mercado Pago) y software a medida. Desde Montevideo para toda Latinoamérica.",
    url: "https://kavokuy.com",
    siteName: "Kavok",
    /* La imagen la genera /app/opengraph-image.tsx automáticamente */
    locale: "es_UY",
    type: "website",
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "Kavok — Venture Studio & Software Factory en Uruguay",
    description:
      "Mystudio, Kavok Ecommerce y desarrollo a medida. Software que escala desde Montevideo.",
    /* La imagen la hereda del opengraph-image.tsx */
  },

  /* ── Canonical ── */
  alternates: {
    canonical: "https://kavokuy.com",
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/* ── JSON-LD: Datos Estructurados ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": "https://kavokuy.com/#organization",
      name: "Kavok",
      url: "https://kavokuy.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://kavokuy.com/#logo",
        url: "https://kavokuy.com/logo-kavok.svg",
        contentUrl: "https://kavokuy.com/logo-kavok.svg",
      },
      image: {
        "@type": "ImageObject",
        url: "https://kavokuy.com/opengraph-image",
        width: 1200,
        height: 630,
      },
      description:
        "Kavok es un Venture Studio y Software Factory con base en Montevideo, Uruguay. Desarrollamos software a medida, productos SaaS propios como Mystudio (gestión de estudios de Pilates) y Kavok Ecommerce (tiendas online con IA y Mercado Pago), y soluciones de automatización con inteligencia artificial para empresas de toda América Latina.",
      telephone: "+59899313544",
      email: "nicolasheredia02@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montevideo",
        addressRegion: "Departamento de Montevideo",
        addressCountry: "UY",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -34.9011,
        longitude: -56.1915,
      },
      priceRange: "$$",
      currenciesAccepted: "USD, UYU",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+59899313544",
          contactType: "customer service",
          areaServed: ["UY", "AR", "BR", "PY", "CL"],
          availableLanguage: { "@type": "Language", name: "Spanish", alternateName: "es" },
        },
        {
          "@type": "ContactPoint",
          email: "nicolasheredia02@gmail.com",
          contactType: "sales",
          areaServed: ["UY", "AR", "BR", "PY", "CL"],
          availableLanguage: { "@type": "Language", name: "Spanish", alternateName: "es" },
        },
      ],
      areaServed: [
        { "@type": "Country", name: "Uruguay" },
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "Brasil" },
        { "@type": "Country", name: "Paraguay" },
        { "@type": "Country", name: "Chile" },
        { "@type": "Continent", name: "América del Sur" },
      ],
      knowsAbout: [
        "Desarrollo de Software",
        "Aplicaciones SaaS",
        "Inteligencia Artificial",
        "E-commerce",
        "Mercado Pago",
        "Mercado Libre",
        "Gestión de Estudios de Pilates",
        "Automatización de Procesos de Negocio",
        "Next.js",
        "React",
        "TypeScript",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Productos y Servicios de Kavok",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "SoftwareApplication",
              name: "Mystudio",
              description:
                "App de gestión integral para estudios de Pilates: clases, alumnos, créditos, asistencia y reagenda autónoma.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, iOS, Android",
              offers: [
                { "@type": "Offer", name: "Starter", price: "35", priceCurrency: "USD", billingPeriod: "P1M" },
                { "@type": "Offer", name: "Pro",     price: "55", priceCurrency: "USD", billingPeriod: "P1M" },
                { "@type": "Offer", name: "Studio+", price: "79", priceCurrency: "USD", billingPeriod: "P1M" },
              ],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "SoftwareApplication",
              name: "Kavok Ecommerce",
              description:
                "Plataforma de ecommerce con cobros por Mercado Pago, sincronización con Mercado Libre e inteligencia artificial para imágenes de producto.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: [
                { "@type": "Offer", name: "Mantenimiento Básico",    price: "49", priceCurrency: "USD", billingPeriod: "P1M" },
                { "@type": "Offer", name: "Mantenimiento Estándar",  price: "69", priceCurrency: "USD", billingPeriod: "P1M" },
                { "@type": "Offer", name: "Mantenimiento Premium",   price: "89", priceCurrency: "USD", billingPeriod: "P1M" },
              ],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo de Software a Medida",
              description:
                "Diseño y desarrollo de aplicaciones web complejas, sistemas de gestión logística, e-commerces con personalizadores en tiempo real y automatizaciones con IA.",
              provider: { "@id": "https://kavokuy.com/#organization" },
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://kavokuy.com/#website",
      url: "https://kavokuy.com",
      name: "Kavok — Venture Studio & Software Factory",
      description: "Orquestamos tecnología para escalar tu negocio desde Montevideo, Uruguay.",
      publisher: { "@id": "https://kavokuy.com/#organization" },
      inLanguage: "es-UY",
    },
    {
      "@type": "WebPage",
      "@id": "https://kavokuy.com/#webpage",
      url: "https://kavokuy.com",
      name: "Kavok — Orquestamos Tecnología para Escalar tu Negocio en Uruguay",
      description:
        "Venture Studio & Software Factory en Montevideo. Software a medida, Mystudio (gestión de Pilates), Kavok Ecommerce (IA + Mercado Pago) y automatización con IA.",
      isPartOf: { "@id": "https://kavokuy.com/#website" },
      about: { "@id": "https://kavokuy.com/#organization" },
      inLanguage: "es-UY",
      mentions: [
        { "@type": "Thing", name: "Mercado Pago" },
        { "@type": "Thing", name: "Mercado Libre" },
        { "@type": "Thing", name: "Pilates" },
        { "@type": "Thing", name: "Inteligencia Artificial" },
        { "@type": "Place", name: "Uruguay" },
        { "@type": "Place", name: "Montevideo" },
        { "@type": "Place", name: "América Latina" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-zinc-950 font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
