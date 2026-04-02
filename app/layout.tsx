import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://kavok.vercel.app"),
  title: "Kavok | Orquestamos Tecnología para Escalar tu Negocio en Uruguay",
  description:
    "Venture Studio & Software Factory en Montevideo. Expertos en desarrollo de software a medida, apps de agendas para pilates, barberías y sistemas inteligentes con IA.",
  keywords: [
    "Desarrollo de software Uruguay",
    "software factory montevideo",
    "app de agendas pilates",
    "sistema de reservas online",
    "software a medida",
    "Kavok",
  ],
  authors: [{ name: "Kavok", url: "https://kavok.vercel.app" }],
  creator: "Kavok",

  /* ── OpenGraph ── */
  openGraph: {
    title: "Kavok | Desarrollo de Software & Ecosistema de Apps",
    description:
      "Creamos soluciones como CoreStudio (Agendas para Pilates) y desarrollamos tu software a medida.",
    url: "https://kavok.vercel.app",
    siteName: "Kavok",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kavok — Venture Studio & Software Factory",
      },
    ],
    locale: "es_UY",
    type: "website",
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "Kavok | Desarrollo de Software & Ecosistema de Apps",
    description:
      "Creamos soluciones como CoreStudio (Agendas para Pilates) y desarrollamos tu software a medida.",
    images: ["/og-image.png"],
  },
};

/* ── JSON-LD: Datos Estructurados ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Kavok",
  url: "https://kavok.vercel.app",
  logo: "https://kavok.vercel.app/og-image.png",
  description:
    "Venture Studio & Software Factory en Montevideo, Uruguay. Desarrollo de software a medida, productos SaaS y soluciones con IA.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montevideo",
    addressCountry: "UY",
  },
  areaServed: [
    { "@type": "Country", name: "Uruguay" },
    { "@type": "Continent", name: "South America" },
  ],
  knowsAbout: [
    "Software Development",
    "SaaS",
    "Artificial Intelligence",
    "Web Application Development",
    "E-commerce",
  ],
  serviceType: ["Software Development", "SaaS Products", "Custom Software"],
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
      <body className="min-h-full bg-zinc-950 font-sans">{children}</body>
    </html>
  );
}
