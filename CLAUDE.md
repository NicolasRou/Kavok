# Kavok — CLAUDE.md

## Qué es este proyecto
Landing site de **Kavok**, un Venture Studio & Software Factory radicado en Montevideo, Uruguay. El sitio marketing presenta la empresa y sus dos productos SaaS propios.

## Stack
- **Framework**: Next.js 16.2.1 (App Router)
- **UI**: React 19, TypeScript, Tailwind CSS v4
- **Fuentes**: Plus Jakarta Sans (texto), Geist Mono (código decorativo)
- **Deploy**: kavokuy.com (producción)
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
- `app/components/BackgroundAnimationLoader.tsx` — Lazy loader del componente anterior (carga solo en cliente)
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

## Assets (public/assets/)
Screenshots de Mystudio: `calendario_de_clases.png`, `reagenda_autonoma.png`, `control_de_asistencia.png`, `gestion_de_alumnos.png`, `reportes_exportables.png`, `sedes_1.png`, `sedes_2.png`
Screenshots de Ecommerce: `echz1-5.png` (desktop), `ecvc1-6.png` (móvil)
Branding: `logo-color-light.png`, `logo-dark.png`, `branding.png`
Documento: `Kavok-Planes-y-Precios.pdf`

## Contacto
- Email: `nicolasheredia02@gmail.com`
- WhatsApp: `+598 99 313 544`

## Comandos
```bash
npm run dev    # servidor de desarrollo
npm run build  # build de producción
npm run lint   # eslint
```
