# CONTEXT.md — Kavok Landing Page

> Documento de contexto técnico para agentes de IA y desarrolladores.
> Última actualización: 2026-04-02

---

## 1. ¿Qué es Kavok?

**Kavok** es un **Venture Studio & Software Factory** radicado en **Montevideo, Uruguay**. Construye productos SaaS propios para nichos específicos y ofrece desarrollo de software a medida para empresas.

**Contacto del fundador:** nicolasheredia02@gmail.com (personal, hasta tener correo corporativo).

---

## 2. Stack Técnico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.1 |
| Lenguaje | TypeScript | ^5 |
| Estilos | Tailwind CSS | v4 |
| PostCSS | @tailwindcss/postcss | ^4 |
| Fuente principal | Plus Jakarta Sans | via next/font/google |
| Fuente monoespaciada | Geist Mono | via next/font/google |
| Linting | ESLint + eslint-config-next | ^9 / 16.2.1 |
| Hosting previsto | Vercel (free tier inicial) | — |
| Dominio | Pendiente (usa kavok.vercel.app) | — |

---

## 3. Estructura de Archivos

```
Kavok/
├── app/
│   ├── actions/
│   │   └── contact.ts          # Server Action — formulario de contacto
│   ├── components/
│   │   ├── ContactForm.tsx     # Client component — formulario con validaciones
│   │   └── LogoKavok.tsx       # Logo "El Horizonte" (SVG + wordmark)
│   ├── globals.css             # Design tokens, animaciones, gradient helpers
│   ├── layout.tsx              # Root layout — metadata, OG, JSON-LD, fonts
│   ├── page.tsx                # Landing page completa (todas las secciones)
│   ├── robots.ts               # robots.txt dinámico (Next.js API)
│   ├── sitemap.ts              # sitemap.xml dinámico (Next.js API)
│   └── favicon.ico
├── public/
│   └── og-image.png            # Imagen OpenGraph 1200×630
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── CONTEXT.md                  # ← Este archivo
```

> **Nota**: Existe una carpeta `next-app/` en la raíz que fue el scaffold original. El proyecto activo corre desde la raíz `Kavok/`.

---

## 4. Sistema de Diseño

### Paleta de colores
- **Fondo general**: `bg-zinc-950` (#09090b)
- **Superficies (tarjetas/navbar)**: `bg-zinc-900` con `border-zinc-800`
- **Texto principal**: `text-zinc-50`
- **Texto secundario**: `text-zinc-400`
- **Acento primario**: Índigo (`bg-indigo-600`, hover `bg-indigo-500`)
- **Acento secundario**: Cyan (productos IA)
- **Acento terciario**: Amber (Agenda Pro)

### Logo elegido
**Opción 2 — "El Horizonte"**: SVG con 3 barras horizontales (2 grises + 1 índigo desplazada) + wordmark "Kavok". Componente reutilizable en `LogoKavok.tsx`.

### Modo
Estrictamente **Dark Mode**. No hay toggle claro/oscuro.

### Animaciones (CSS custom)
- `animate-fade-in-up` — entrada con fade + translateY
- `animate-glow-pulse` — pulso suave de opacidad para orbes de luz
- Clases de delay: `.animation-delay-100` a `.animation-delay-600`
- `.text-gradient-indigo` — gradiente de texto Índigo → Cyan

---

## 5. Estructura de la Landing Page

1. **Navbar** — Sticky, frosted glass (`backdrop-blur-md bg-zinc-950/50`)
2. **Hero** — Título con gradiente, orbes de glow, 2 CTAs
3. **Ecosistema SaaS** — Grid de 3 tarjetas (CoreStudio, Escáner IA, Agenda Pro)
4. **Software Factory** — Card con borde gradiente, 3 capabilities
5. **Filosofía** — 3 pilares (Hiperespecialización, Cloud, Soporte Local)
6. **Contacto** — Formulario con Server Action
7. **Footer** — Logo, ubicación, copyright

---

## 6. Productos del Ecosistema

| Producto | Estado | Descripción |
|---|---|---|
| **CoreStudio** | ✅ Activo (otro repo) | Software de gestión para estudios de Pilates/Yoga |
| **Escáner Inteligente IA** | 🔜 Próximamente | Visión artificial para digitalización de documentos |
| **Agenda Pro** | 🔜 Próximamente | Sistema de reservas para barberías, estética, tatuajes |

---

## 7. Decisiones Técnicas Clave

### Formulario de Contacto
- Usa **Server Actions** de Next.js (`app/actions/contact.ts`).
- Validación server-side: nombre (min 2 chars), teléfono (solo dígitos, 6-15), email (regex).
- Genera un `mailto:` URL que abre el cliente de correo del usuario.
- Si el interés seleccionado es **"CoreStudio"**, el subject se prefija con `[LEAD-CORE]` para filtrado en Gmail.
- Destino actual: `nicolasheredia02@gmail.com`.

### SEO
- **Metadata**: Title, description, keywords configurados en `layout.tsx`.
- **OpenGraph + Twitter Cards**: Configurados con imagen OG.
- **JSON-LD**: Schema.org `Organization` + `ProfessionalService`.
- **robots.ts / sitemap.ts**: Generados dinámicamente con la API de Next.js.
- **Semántica**: `<nav>`, `<main>`, `<section>`, `<footer>` con heading hierarchy correcto (h1 → h2 → h3).

### CoreStudio (Proyecto separado — repo Agenda-pilates)
- Arquitectura **Multi-Tenant** con Supabase/PostgreSQL.
- Aislamiento de datos vía **Row Level Security (RLS)** con JWT claims.
- Tabla `estudios` como tenant principal, `estudio_id` en todas las tablas.
- Calendario automático de clases con generación on-demand.

---

## 8. Tareas Pendientes

- [ ] **Deploy a Vercel** — Subir el proyecto y configurar el dominio provisional.
- [ ] **Comprar dominio** — Definir dominio real (kavok.dev / kavok.com.uy) y actualizar `metadataBase`, sitemap, robots.
- [ ] **Email corporativo** — Crear correo@kavok.dev y actualizar footer + formulario de contacto.
- [ ] **Integración email real** — Reemplazar `mailto:` por servicio tipo Resend/SendGrid para envío directo desde el server.
- [ ] **Analytics** — Integrar Vercel Analytics o Google Analytics.
- [ ] **OG Image real** — Reemplazar imagen generada por IA con el logo vectorial definitivo.
- [ ] **Limpiar carpeta next-app/** — Eliminar el scaffold duplicado de la raíz.
- [ ] **Landing pages individuales** — Crear `/corestudio` y `/agenda-pro` cuando los productos estén listos.
