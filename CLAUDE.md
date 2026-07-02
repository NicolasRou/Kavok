# Kavok — CLAUDE.md

## Qué es este proyecto
Landing site de **Kavok**, un Venture Studio & Software Factory radicado en Montevideo, Uruguay. El sitio marketing presenta la empresa y sus dos productos SaaS propios.

## Stack
- **Framework**: Next.js 16.2.1 (App Router)
- **UI**: React 19, TypeScript, Tailwind CSS v4
- **Fuentes**: Plus Jakarta Sans (texto), Geist Mono (código decorativo)
- **Deploy**: kavokuy.com (producción en Vercel, auto-deploy desde `main`)
- **Sin backend propio**: el formulario de contacto usa `mailto:` como fallback

## Estructura de rutas
```
/              → Home (app/page.tsx)
/mystudio      → Landing de Mystudio (app/mystudio/page.tsx)
/ecommerce     → Landing de Kavok Ecommerce (app/ecommerce/page.tsx)
/brand         → Página de branding (app/brand/page.tsx)
```

## Productos
| Producto | Descripción | Precios |
|---|---|---|
| **Mystudio** | Gestión integral de estudios de Pilates (clases, alumnos, créditos, asistencia) | Starter $35/mo · Pro $55/mo · Studio+ $79/mo |
| **Kavok Ecommerce** | Tienda online con Mercado Pago, sync Mercado Libre, IA para imágenes | Setup desde $490 · Mantenimiento desde $49/mo |

## Componentes clave
- `app/components/BackgroundAnimation.tsx` — Animación de fondo: canvas con partículas, snippets de código en parallax, barras del logo animadas por scroll
- `app/components/BackgroundAnimationLoader.tsx` — Lazy loader con `dynamic()`, `ssr: false`, `loading: () => null` para evitar flash en hidratación
- `app/components/ProductGrid.tsx` — Grid de tarjetas de productos con entrada animada (IntersectionObserver) y lightbox para imágenes
- `app/components/ContactForm.tsx` — Formulario de contacto con `useActionState` (React 19)
- `app/components/WhatsAppButton.tsx` — Botón flotante de WhatsApp, cambia el mensaje según la ruta activa
- `app/components/SolucionesDropdown.tsx` — Dropdown del navbar con hover y click, con delay para evitar cierre accidental
- `app/components/LogoKavok.tsx` — Logo SVG de Kavok
- `app/actions/contact.ts` — Server action del formulario: valida y construye URL `mailto:`

Cada producto tiene su propio set de sub-componentes bajo:
- `app/components/mystudio/` (Navbar, Hero, Problem, Features, Pricing, Cta, Download, ContactModal)
- `app/components/ecommerce/` (ídem)

## Estilos y animaciones (globals.css)
- `animate-fade-in-up` + delays 100-600ms → entrada de elementos del hero
- `animate-glow-pulse` → orbes de fondo
- `text-gradient-indigo` → texto con gradiente indigo→cyan
- `animate-ms-modal` / `animate-ke-modal` → entrada de modales
- Color base: `#09090b` (zinc-950), acento: indigo-600
- Mystudio usa tema claro: `#F9F7F2` fondo, sage green `#88A47C` acento, fuentes serif

## Assets (public/assets/)
Screenshots de Mystudio: `calendario_de_clases.png`, `reagenda_autonoma.png`, `control_de_asistencia.png`, `gestion_de_alumnos.png`, `reportes_exportables.png`, `sedes_1.png`, `sedes_2.png`  
Screenshots de Ecommerce: `echz1-5.png` (desktop), `ecvc1-6.png` (móvil)  
Branding: `logo-color-light.png`, `logo-dark.png`, `branding.png`  
Documento: `Kavok-Planes-y-Precios.pdf`

## Contacto
- Email: `nicolasheredia02@gmail.com`
- WhatsApp: `+598 99 313 544`

## SEO / GEO

### Archivos de SEO
- `app/sitemap.ts` — sitemap automático, BASE = `https://kavokuy.com`. 4 rutas: `/` (priority 1), `/mystudio` (0.9), `/ecommerce` (0.9), `/brand` (0.1)
- `app/robots.ts` — permite rastreo de AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, CCBot, anthropic-ai, Claude-Web, PerplexityBot, cohere-ai, Googlebot, Applebot, Bingbot). Solo bloquea `/api/`. **Nunca bloquear `/_next/`** — sin eso Google no renderiza JS y los crawlers LLM no leen el contenido.

### OG Images dinámicas (next/og)
- `app/opengraph-image.tsx` — Home: dark bg #09090b, glow indigo, logo + 3 product pills
- `app/mystudio/opengraph-image.tsx` — Mystudio: light #F9F7F2, sage green, serif, chips de features
- `app/ecommerce/opengraph-image.tsx` — Ecommerce: dark #0D0E14, amber glow, chips MP/ML/IA
- Todas: `runtime = 'edge'`, `size = { width: 1200, height: 630 }`, `contentType = 'image/png'`
- Next.js las detecta automáticamente — no referencias manuales en metadata necesarias

### Metadata
- Root layout: `title.template = "%s | Kavok"` — sub-páginas solo ponen su título base
- Descriptions: home 148 chars, mystudio 151 chars, ecommerce 155 chars (todas bajo 160)
- Todas las páginas tienen `alternates.canonical`, `robots.googleBot`, keywords, OG y Twitter cards

### JSON-LD @graph
Cada página tiene un `<script type="application/ld+json">` con schema `@graph` completo:
- **Home**: Organization (con contactPoint, hasOfferCatalog, geo, telephone, email) + WebSite + WebPage (con mentions)
- **Mystudio**: SoftwareApplication + WebPage (mentions) + BreadcrumbList + FAQPage (6 preguntas)
- **Ecommerce**: SoftwareApplication + WebPage (mentions) + BreadcrumbList + FAQPage (6 preguntas)
- Organization `@id`: `https://kavokuy.com/#organization`
- Organization image apunta a `https://kavokuy.com/opengraph-image` (la imagen dinámica)

## Analytics
- **Google Analytics 4**: `G-SH4SZ2CYT1` — integrado via `@next/third-parties` con componente `<GoogleAnalytics>` en el root layout (`app/layout.tsx`). Carga con `afterInteractive`.
- **Microsoft Clarity**: proyecto `xf91suolgu` — integrado via `next/script` con `strategy="afterInteractive"` en el root layout. Provee heatmaps, grabaciones de sesión y métricas de scroll.
- Ambos se cargan fuera del `<body>`, antes del cierre de `</html>`, para no bloquear el render.

## Performance (next.config.ts)
- `poweredByHeader: false` — no expone versión de Next
- `compress: true` — gzip/brotli
- `images.formats: ["image/avif", "image/webp"]` — formatos modernos
- `images.minimumCacheTTL: 31536000` — 1 año de cache para imágenes
- Headers de seguridad en todas las rutas: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`
- Cache inmutable en `/_next/static/`: `public, max-age=31536000, immutable`

## Patrones a recordar
- **Anchor scroll offset**: si un anchor apunta a una sección bajo el navbar sticky (~70px), agregar `scroll-mt-20` (80px) a la sección. Ejemplo: `<section id="planes" className="scroll-mt-20 ...">` en PricingSection.tsx
- **Lazy components client-only**: usar `dynamic(() => import(...), { ssr: false, loading: () => null })` — el `loading: () => null` evita el flash de hidratación

## Pendiente
- **Google Search Console**: el usuario debe ir a search.google.com/search-console, agregar `https://kavokuy.com` como URL prefix, elegir verificación "HTML tag", y pasar el valor del atributo `content=`. Luego agregar en `app/layout.tsx` dentro de `metadata`: `verification: { google: "XXXXXXXX" }`. Alternativa: registro DNS TXT (no requiere cambio de código).

## Comandos
```bash
npm run dev    # servidor de desarrollo
npm run build  # build de producción
npm run lint   # eslint
```
