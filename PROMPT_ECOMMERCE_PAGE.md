# PROMPT PARA CLAUDE CODE — Página `/ecommerce` de Kavok

> **Proyecto:** Landing de Kavok (`C:\Users\nikco\Documents\Antigravity\Kavok`)  
> **Tarea:** Crear la página `/ecommerce` completa. El dropdown "Soluciones" en el navbar ya fue construido en la tarea de Mystudio — esta tarea NO lo toca, solo crea la nueva ruta.  
> **Stack:** Next.js 15 App Router · Tailwind CSS · TypeScript estricto · Sin Supabase (página pública estática)

---

## 0. LEER ANTES DE TOCAR NADA

Antes de escribir una sola línea, leer en este orden:

1. `CLAUDE.md` — reglas del proyecto
2. `context.md` — estado actual
3. El layout raíz de la landing (`app/layout.tsx`) para entender fuentes y globals
4. El componente del navbar para confirmar que el dropdown "Soluciones" ya existe y linkea a `/ecommerce`

El objetivo es entender:
- Qué fuentes usa la landing de Kavok (para no importar duplicados)
- Si ya existe algún archivo en `app/ecommerce/` (no sobreescribir nada)
- El patrón de componentes usado en `/mystudio` para ser consistente en estructura

---

## 1. SISTEMA DE DISEÑO — IDENTIDAD VISUAL DE KAVOK ECOMMERCE

**Esta página usa la paleta Dark + Amber propia del producto.** No usa el sistema de Mystudio ni el dark mode genérico de Kavok.

### Tokens de color

| Token CSS | Valor | Uso |
|---|---|---|
| `--ke-bg` | `#0D0E14` | Fondo principal |
| `--ke-surface` | `#13141F` | Superficies elevadas (cards) |
| `--ke-surface-alt` | `#1A1410` | Superficies con toque cálido (secciones alternas) |
| `--ke-border` | `rgba(255,255,255,0.07)` | Bordes sutiles |
| `--ke-indigo` | `#5B6BF8` | Acento indigo — UI, links, badges tech |
| `--ke-indigo-soft` | `#3a3f7a` | Indigo oscuro para fondos de badges |
| `--ke-amber` | `#E8A030` | Acento amber — precios, destacados, CTAs principales |
| `--ke-amber-soft` | `#2a1f0a` | Amber oscuro para fondos de badges de precio |
| `--ke-amber-light` | `#F5C56A` | Amber claro para textos sobre fondo amber oscuro |
| `--ke-text` | `#FFFFFF` | Texto principal |
| `--ke-text-muted` | `#9096A8` | Texto secundario |
| `--ke-text-faint` | `#5a6070` | Texto muy suave, labels |

### Tipografía

- **Display / headings grandes:** `Plus Jakarta Sans` (700, 800) — importar desde `next/font/google`. Es la fuente que usa el ecosistema Kavok.
- **Body / UI:** `Plus Jakarta Sans` (400, 500) — misma familia, pesos distintos.
- Todos los `font-family` aplicados via CSS variables en el layout de `/ecommerce`.

### Estilo general

Dark, tech, moderno. Bordes muy sutiles (`rgba(255,255,255,0.07)`). Cards con fondo levemente elevado sobre el negro. El amber solo aparece en elementos de conversión (precio destacado, CTA principal, badges de oferta). El indigo para elementos técnicos/funcionales (badges de features, links). Espaciado generoso. Sin ruido visual.

**Elemento decorativo:** Las 3 barras escalonadas del logo de Kavok (rectángulos redondeados en gris/indigo) usadas como SVG inline de fondo en el hero y separadores — con opacidad 4-6%, muy sutil.

---

## 2. ESTRUCTURA DE ARCHIVOS A CREAR

```
CREAR:
  app/ecommerce/
    layout.tsx         ← layout con navbar mínimo + WhatsApp flotante + sin footer
    page.tsx           ← página completa con metadata SEO

  components/ecommerce/
    EcommerceNavbar.tsx      ← navbar mínimo (logo + botón volver)
    HeroSection.tsx          ← sección 1
    ProblemSection.tsx       ← sección 2 (preguntas problema)
    FeaturesSection.tsx      ← sección 3 (funcionalidades)
    AISection.tsx            ← sección 4 (IA integrada — diferenciador)
    PricingSection.tsx       ← sección 5 (planes y precios)
    DownloadSection.tsx      ← sección 6 (PDF descargable)
    CtaSection.tsx           ← sección 7 (CTA final)
    ContactModal.tsx         ← modal de email ('use client')
    WhatsAppButton.tsx       ← botón flotante fixed ('use client')
    EcommerceLogo.tsx        ← logo SVG inline reutilizable

NO TOCAR:
  components/[navbar-kavok]/  ← el dropdown ya está construido
  app/mystudio/               ← no modificar
```

---

## 3. LAYOUT (`app/ecommerce/layout.tsx`)

```tsx
// Navbar mínimo propio — NO usar el navbar de Kavok
// Izquierda: Logo Kavok Ecommerce (imagen) 
// Derecha: botón "← Volver a Kavok" → link a "/"
// Fondo: --ke-bg con backdrop-blur, sticky top-0, z-50
// Borde inferior: 1px solid rgba(255,255,255,0.06)
// Sin footer
// Incluye <WhatsAppButton /> que es fixed bottom-right
```

### Navbar mínimo (`EcommerceNavbar.tsx`)

- **Izquierda:** `<Image>` de next/image apuntando a `/ecommerce/logo-dark.png` (logo horizontal con texto blanco sobre fondo oscuro). Height 32px, width auto.
- **Derecha:** Botón ghost — borde `rgba(255,255,255,0.15)`, texto `#9096A8`, hover borde indigo + texto blanco. Texto: `← Volver`

### Botón WhatsApp flotante (`WhatsAppButton.tsx`)

```tsx
'use client'
// Posición: fixed, bottom-6, right-6, z-50
// Forma: círculo 56px × 56px
// Fondo: #25D366 (verde WhatsApp oficial)
// Ícono: SVG inline del logo de WhatsApp en blanco (NO usar emoji)
// Al hacer click: window.open('https://wa.me/59899313544?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Kavok%20Ecommerce', '_blank')
// Tooltip al hover: "Escribinos por WhatsApp" — aparece a la izquierda del botón
// Animación: pulse suave en el borde (box-shadow animado en verde claro, keyframe CSS)
// aria-label="Contactar por WhatsApp"
```

**SVG del ícono WhatsApp** (construirlo inline, no imagen):
```svg
<!-- Usar el path oficial del logo de WhatsApp en SVG -->
<!-- Ícono de teléfono con burbuja de chat -->
```

---

## 4. SECCIONES DE LA PÁGINA (en orden)

### SECCIÓN 1 — Hero

**Fondo:** `--ke-bg` con elemento decorativo SVG de las 3 barras de Kavok a la derecha, muy opaco (4%).

**Contenido:**

```
Badge superior (amber):
  "⚡ ECOMMERCE PROFESIONAL CON IA INTEGRADA"

H1 (Plus Jakarta Sans 800, blanco, muy grande):
  "Tu tienda online,
   lista para vender."

Subtítulo (texto muted):
  "Vendé por internet con cobros online, control de stock, 
   integración con Mercado Libre e inteligencia artificial. 
   Sin conocimientos técnicos."

Bloque destacado (card con borde amber sutil):
  Título amber: "Sin pago inicial"
  Texto blanco grande: "U$S 93 / mes durante 12 meses"
  Texto muted pequeño: "Puesta en marcha + mantenimiento todo incluido. 
                        Después del mes 12, solo U$S 49/mes."
  Sub-texto faint: "Plan Básico en cuotas (U$S 44/mes) + Mantenimiento Básico (U$S 49/mes)"

CTAs:
  [Botón amber grande]    "Quiero mi tienda →"   → abre ContactModal
  [Botón ghost indigo]    "Ver planes ↓"         → scroll a #planes
```

### SECCIÓN 2 — Preguntas que marcan la necesidad

**Fondo:** `--ke-surface-alt` (`#1A1410`)  
**Eyebrow (indigo):** "¿TE SUENA FAMILIAR?"  
**Título (blanco, Playfair Display no — usar Plus Jakarta Sans 700):** "El problema que frena tus ventas"

**Grid 3 columnas desktop / 1 mobile. Cada card:**
- Fondo `--ke-surface` con borde sutil
- Ícono Tabler outline en indigo (24px)
- Pregunta en blanco (el problema)
- Respuesta corta en texto muted (cómo lo resuelve el sistema)

**Cards de preguntas:**

| Ícono Tabler | Pregunta (problema) | Respuesta (solución) |
|---|---|---|
| `ti-device-mobile-off` | ¿Tus clientes no pueden comprarte desde el celular? | Tu tienda funciona perfecto en cualquier dispositivo, lista para recibir pedidos 24/7. |
| `ti-credit-card-off` | ¿Perdés ventas porque no tenés cobro online? | Mercado Pago ya viene configurado y probado. Cobrás desde el primer día. |
| `ti-package` | ¿Controlás el stock en una planilla de Excel? | El sistema descuenta el stock automáticamente con cada venta confirmada. |
| `ti-brand-mercado-pago` o `ti-refresh` | ¿Tenés productos en Mercado Libre y gestionás todo por separado? | Importá tu catálogo de ML y sincronizá el stock en tiempo real automáticamente. |
| `ti-chart-bar-off` | ¿No sabés qué productos te dejan más margen ni quiénes son tus mejores clientes? | Reportes inteligentes con IA: ventas, stock crítico y comportamiento de compradores. |
| `ti-photo-off` | ¿Las fotos de tus productos no convencen? | Generá imágenes profesionales de tus productos con inteligencia artificial, sin contratar fotógrafo. |

### SECCIÓN 3 — Funcionalidades principales

**Fondo:** `--ke-bg`  
**Eyebrow (indigo):** "TODO LO QUE INCLUYE"  
**Título:** "Una plataforma. Todo lo que necesitás para vender."

**Layout:** grid de 2 columnas en desktop (feature cards), 1 en mobile. Cards con fondo `--ke-surface`, borde sutil, ícono Tabler indigo.

**Features a mostrar:**

1. **`ti-shopping-cart` Tienda online completa**  
   Catálogo con variantes (talle, color, etc.), galería de fotos, ficha de producto, colecciones y categorías.

2. **`ti-credit-card` Cobros con Mercado Pago**  
   Checkout Pro ya configurado y probado. Cobrás con tarjeta, débito, efectivo y cuotas.

3. **`ti-package` Control de stock**  
   Stock por variante. Alertas de stock bajo. El sistema descuenta automáticamente con cada venta.

4. **`ti-truck-delivery` Envíos por departamento**  
   Configurá métodos de envío, tarifas por zona, envío gratis desde cierto monto, pickup en local.

5. **`ti-mail` Emails automáticos**  
   Confirmación de compra, aviso de preparación, notificación de envío. Tu cliente siempre informado.

6. **`ti-refresh` Sincronización con Mercado Libre**  
   Importá todo tu catálogo de ML. El stock se sincroniza en tiempo real: una venta en ML descuenta en tu tienda.

7. **`ti-discount` Cupones y descuentos**  
   Creá cupones por porcentaje o monto fijo, con límite de usos, vencimiento y aplicación por producto o categoría.

8. **`ti-paint` Diseño 100% personalizable**  
   Cambiá colores, tipografías, logo, banners y layout desde tu panel. Sin tocar código.

9. **`ti-users` Gestión de tu equipo**  
   Sumá operadores que gestionan stock y pedidos sin acceso al resto del panel. Control granular de permisos.

10. **`ti-star` Reseñas de clientes**  
    Tus compradores pueden dejar reseñas con fotos y estrellas. Vos aprobás qué se publica.

### SECCIÓN 4 — IA Integrada (diferenciador)

**Fondo:** sección especial con fondo `#0f1025` y borde superior/inferior `rgba(91,107,248,0.2)`  
**Eyebrow (indigo):** "INTELIGENCIA ARTIFICIAL INCLUIDA"  
**Título:** "Tecnología de punta. Sin complicaciones."  
**Subtítulo (muted):** "Dos módulos de IA integrados directamente en tu panel de administración."

**Layout:** 2 cards grandes lado a lado (desktop) / stack (mobile)

**Card 1 — Generador de imágenes IA**
- Badge: "NUEVO" (fondo indigo)
- Ícono: `ti-wand` (24px, indigo)
- Título: "Fotos de producto con IA"
- Descripción: "Describí el producto, elegí el estilo y la IA genera imágenes profesionales listas para subir a tu tienda. Sin fotógrafo, sin Photoshop."
- Lista de bullets (texto muted, check indigo):
  - Múltiples estilos: producto solo, lifestyle, fondo blanco
  - Compatible con Gemini, Hugging Face y OpenAI
  - Hasta 15 imágenes por día en el plan gratuito

**Card 2 — Análisis inteligente de tu negocio**
- Badge: "EXCLUSIVO" (fondo amber-soft, texto amber)
- Ícono: `ti-brain` (24px, amber)
- Título: "Reportes con análisis inteligente"
- Descripción: "La IA analiza tus ventas, stock y compradores y te entrega un resumen claro con lo más importante. Sin necesidad de interpretar tablas."
- Lista de bullets:
  - Resumen de ventas del período
  - Stock crítico con alertas automáticas
  - Comportamiento y segmentación de compradores

**CTA debajo de ambas cards:**  
`[Botón ghost indigo]` "Consultanos sobre estas funciones →" → abre ContactModal

### SECCIÓN 5 — Planes y Precios (`id="planes"`)

**Fondo:** `--ke-surface-alt`  
**Eyebrow (amber):** "PRECIOS TRANSPARENTES"  
**Título:** "Elegí cómo arrancar"  
**Subtítulo (muted):** "Un único pago por la puesta en marcha + mantenimiento mensual. O financiá la puesta en marcha en hasta 12 cuotas sin interés."

---

#### BLOQUE DESTACADO — "La forma más fácil de empezar"

Card especial con borde amber `2px solid #E8A030`, fondo `#1a150a`, centrada y más grande que las demás. Colocarla ANTES de las cards de planes normales.

```
Label pequeño (amber, uppercase): "LA FORMA MÁS FÁCIL DE EMPEZAR"

Título (blanco, grande): "Tu tienda funcionando
                          desde el primer mes"

Descripción (muted):
  "Financiá la puesta en marcha en 12 cuotas y pagá todo junto.
   Sin desembolso inicial, sin sorpresas."

Desglose visual (3 columnas):
  ┌─────────────────┬──────────────┬─────────────────────┐
  │  Puesta en      │              │  Mantenimiento      │
  │  marcha Básico  │      +       │  Básico             │
  │  en 12 cuotas   │              │  mensual            │
  │  U$S 44/mes     │              │  U$S 49/mes         │
  └─────────────────┴──────────────┴─────────────────────┘
                         ↓
              [Badge amber grande]
              "= U$S 93 / mes × 12 meses"
              
  Texto debajo (muted, pequeño):
  "Después del mes 12, solo pagás el mantenimiento activo: U$S 49/mes"

[Botón amber grande, ancho completo] "Quiero empezar por U$S 93/mes →" → abre ContactModal
```

---

#### CARDS DE PLANES — Puesta en marcha

**Subtítulo de sección:** "Pago inicial — Puesta en marcha"  
**Descripción:** "Un único pago para que armemos, configuremos y dejemos tu tienda online y lista para usar."

**3 cards lado a lado (desktop) / stack (mobile):**

**BÁSICO**
- Precio contado: `U$S 490`
- En cuotas: `U$S 530` (hasta 12 cuotas sin interés)
- Incluye:
  - Catálogo de productos con variantes y control de stock
  - Cobros online con Mercado Pago (configurado y probado)
  - Gestión de pedidos y seguimiento de estados
  - Emails automáticos para clientes
  - Diseño 100% personalizable desde el panel
  - Colecciones para agrupar productos

**ESTÁNDAR** — Badge "MÁS COMPLETO" (borde indigo 2px)
- Precio contado: `U$S 790`
- En cuotas: `U$S 860` (hasta 12 cuotas sin interés)
- Todo lo del Básico, más:
  - Conexión con Mercado Libre (sincronización en tiempo real)
  - Generador de imágenes de productos con IA
  - Reseñas con foto y estrellas (vos aprobás qué se publica)
  - 1 cuenta de operador para tu equipo
  - Análisis inteligente con IA (ventas, stock, compradores)
  - Seguimiento avanzado: Google Analytics + mapas de calor
  - Cupones de descuento y etiquetas de oferta
  - Envíos configurables por departamento de Uruguay

**COMPLETO**
- Precio contado: `U$S 1.190` (solo contado, no disponible en cuotas)
- Todo lo del Estándar, más:
  - Operadores ilimitados para tu equipo

---

#### CARDS DE PLANES — Mantenimiento mensual

**Subtítulo de sección:** "Mantenimiento mensual"  
**Descripción:** "Comienza después de la puesta en marcha. Tu tienda siempre online, segura y actualizada."

**3 cards:**

**BÁSICO — U$S 49/mes**
- Tu tienda siempre online (hosting y base de datos incluidos)
- Monitoreo de errores
- Actualizaciones de seguridad
- Soporte por email (respuesta en hasta 72h)
- Acceso a las nuevas funciones que vayamos lanzando

**ESTÁNDAR — U$S 69/mes**
- Todo lo del Básico, más:
  - Soporte por email más ágil (respuesta en hasta 48h)
  - Hasta 2 ajustes o mejoras a medida por mes

**PREMIUM — U$S 89/mes**
- Todo lo del Estándar, más:
  - Soporte prioritario (respuesta en hasta 24h)
  - Acceso anticipado a las novedades

---

**Nota al pie de los planes (texto muted, centrado):**
> "Los valores están expresados en dólares estadounidenses (U$S). Esta propuesta es orientativa y podemos adaptarla a las necesidades de tu negocio. Si preferís que carguemos los productos, armemos la página principal y capacitemos a tu equipo, ofrecemos un servicio adicional de acompañamiento — consultanos sin compromiso."

---

### SECCIÓN 6 — PDF Descargable

**Fondo:** `--ke-bg`  
**Layout:** 2 columnas — izquierda texto, derecha mock visual del PDF

**Texto izquierda:**
```
Eyebrow (amber): "LLEVÁTELO"

Título (blanco):
  "Planes y precios
   en un PDF."

Subtítulo (muted):
  "Guardalo, compartilo con tu socio,
   mostráselo a tu contador.
   Todo en un documento prolijo."

[Botón amber]  "Descargar PDF de planes →"
[Botón ghost]  "o escribinos directamente →"  → ContactModal
```

**Mock visual derecha:**  
Card oscura simulando un documento con el logo de Kavok Ecommerce, título "Planes y Precios", y líneas de texto simuladas (barras de diferentes anchos en gris) — construido con HTML/CSS puro, sin imagen real.

**Comportamiento del botón de descarga:**
- El PDF a descargar es el archivo `Kavok-Planes-y-Precios.pdf` que está en `public/ecommerce/`
- El botón debe hacer: `<a href="/ecommerce/Kavok-Planes-y-Precios.pdf" download="Kavok-Ecommerce-Planes-y-Precios.pdf">`
- No usar `window.print()` — el PDF ya existe como archivo estático

### SECCIÓN 7 — CTA Final

**Fondo:** degradado sutil de `--ke-bg` a `#0f1025`  
**Layout:** centrado

```
Título grande (blanco):
  "¿Listo para vender online?"

Subtítulo (muted):
  "Contanos sobre tu negocio y te armamos una propuesta
   adaptada a lo que necesitás."

[Botón amber grande] "Hablar con Kavok →" → ContactModal

Texto pequeño debajo:
  "o escribinos a kavokuy@gmail.com"
  (clickeable → mailto:kavokuy@gmail.com?subject=Consulta%20Kavok%20Ecommerce)

Separador

Texto muy pequeño (faint):
  "También podés escribirnos directo por WhatsApp"
  + ícono WhatsApp pequeño → link a wa.me
```

---

## 5. MODAL DE CONTACTO (`ContactModal.tsx`)

- Overlay `rgba(0,0,0,0.75)` con blur, cierra con click fuera o Escape
- Fondo card: `--ke-surface` con borde sutil
- Contenido:

```
Logo Kavok Ecommerce pequeño (image)
Título: "Hablemos de tu negocio"
Subtítulo (muted): "Respondemos en menos de 24h."

[Botón amber grande, ancho completo, ícono ti-mail]
  "Escribir a kavokuy@gmail.com"
  → onclick: window.location.href = "mailto:kavokuy@gmail.com?subject=Consulta%20Kavok%20Ecommerce&body=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Kavok%20Ecommerce."

[Botón verde WhatsApp, ancho completo, ícono WhatsApp SVG]
  "Escribir por WhatsApp"
  → onclick: window.open('https://wa.me/59899313544?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Kavok%20Ecommerce', '_blank')

Texto muted pequeño: "o copiá el email:"
[Input readonly "kavokuy@gmail.com" + botón "Copiar"]
  → onclick: navigator.clipboard.writeText("kavokuy@gmail.com") + feedback "¡Copiado!" por 2 segundos

[X para cerrar — esquina superior derecha]
```

---

## 6. SEO — CRÍTICO, NO OMITIR

```typescript
// app/ecommerce/page.tsx
export const metadata: Metadata = {
  title: "Kavok Ecommerce — Tu tienda online profesional con IA | Kavok",
  description: "Kavok Ecommerce: tienda online completa con cobros por Mercado Pago, integración Mercado Libre, IA para imágenes y reportes. Desde U$S 93/mes todo incluido, sin pago inicial.",
  keywords: [
    "tienda online uruguay",
    "ecommerce uruguay",
    "vender por internet uruguay",
    "mercado pago ecommerce",
    "tienda online profesional",
    "kavok ecommerce",
    "crear tienda online",
    "software ecommerce uruguay",
    "integración mercado libre",
    "ecommerce con inteligencia artificial"
  ],
  openGraph: {
    title: "Kavok Ecommerce — Tu tienda online con IA integrada",
    description: "Vendé por internet con cobros online, stock automático, sync con Mercado Libre e IA. Desde U$S 93/mes sin pago inicial.",
    url: "https://kavok.com.uy/ecommerce",
    siteName: "Kavok",
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavok Ecommerce — Tu tienda online con IA integrada",
    description: "Vendé por internet con cobros online, stock automático y IA. Desde U$S 93/mes.",
  },
  alternates: {
    canonical: "https://kavok.com.uy/ecommerce",
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

**Schema.org JSON-LD en el `<head>`:**

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Kavok Ecommerce",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Plataforma de ecommerce profesional con integración Mercado Pago, Mercado Libre, IA para imágenes de producto y análisis inteligente de negocio.",
      "offers": [
        {
          "@type": "Offer",
          "name": "Puesta en marcha Básico",
          "price": "490",
          "priceCurrency": "USD",
          "description": "Tienda online completa con Mercado Pago, stock y pedidos"
        },
        {
          "@type": "Offer",
          "name": "Puesta en marcha Estándar",
          "price": "790",
          "priceCurrency": "USD",
          "description": "Todo lo del Básico + ML sync, IA, reseñas, analytics"
        },
        {
          "@type": "Offer",
          "name": "Mantenimiento Básico",
          "price": "49",
          "priceCurrency": "USD",
          "billingPeriod": "P1M"
        },
        {
          "@type": "Offer",
          "name": "Mantenimiento Estándar",
          "price": "69",
          "priceCurrency": "USD",
          "billingPeriod": "P1M"
        },
        {
          "@type": "Offer",
          "name": "Mantenimiento Premium",
          "price": "89",
          "priceCurrency": "USD",
          "billingPeriod": "P1M"
        }
      ],
      "provider": {
        "@type": "Organization",
        "name": "Kavok",
        "url": "https://kavok.com.uy"
      }
    })
  }}
/>
```

---

## 7. ANIMACIONES Y MICRO-INTERACCIONES

- **Scroll reveal:** mismo hook `useInView` que en `/mystudio` — `opacity-0 translate-y-6` → `opacity-100 translate-y-0`, `duration-700`
- **Hover cards features:** `border-color` → indigo sutil + leve `scale-[1.005]`
- **Hover card Estándar (destacada):** borde indigo que brilla levemente
- **Hover card bloque U$S 93/mes:** borde amber más opaco
- **Botón WhatsApp:** keyframe `whatsapp-pulse` — `box-shadow: 0 0 0 0 rgba(37,211,102,0.4)` → `0 0 0 12px rgba(37,211,102,0)` cada 2s
- **Botón amber primario:** `hover:bg-[#d4911f]` + `active:scale-95`
- **Modal:** `scale-95 opacity-0` → `scale-100 opacity-100`, `duration-200`

---

## 8. REGLAS DE CALIDAD — NO NEGOCIABLES

1. **TypeScript estricto** — sin `any`, sin `@ts-ignore`
2. **Mobile-first** — perfecta en 375px
3. **`'use client'`** solo donde hay estado/eventos browser (modal, WhatsApp button, botón copiar)
4. **Sin dependencias nuevas** — preferir CSS/Tailwind puro
5. **Accesibilidad:** `aria-label` en botones icon-only, `role="dialog"` en modal, `aria-expanded` en dropdown
6. **El número de WhatsApp es `+598 99 313 544`** → en wa.me sin espacios ni guiones: `59899313544`
7. **El email es `kavokuy@gmail.com`** — no `kavok@gmail.com`
8. **El bloque de U$S 93/mes NO es una oferta ni un descuento** — es una forma de financiamiento. El copy debe dejarlo claro: "financiá la puesta en marcha en cuotas".
9. **Los precios exactos del PDF:**
   - Básico: U$S 490 contado / U$S 530 en cuotas
   - Estándar: U$S 790 contado / U$S 860 en cuotas
   - Completo: U$S 1.190 solo contado
   - Mantenimiento Básico: U$S 49/mes
   - Mantenimiento Estándar: U$S 69/mes
   - Mantenimiento Premium: U$S 89/mes
10. **El PDF ya existe** — no generarlo, solo linkearlo desde `public/ecommerce/Kavok-Planes-y-Precios.pdf`

---

## 9. RECURSOS DE IMAGEN — QUÉ PONER EN EL PROYECTO

### Archivos que Nicolás debe colocar antes de ejecutar este prompt:

```
public/
  ecommerce/
    logo-dark.png                    ← kavok-ecommerce-dark-bg.png (logo blanco sobre fondo oscuro)
    logo-color-light.png             ← kavok-ecommerce-color-light.png (para uso futuro)
    Kavok-Planes-y-Precios.pdf       ← Kavok-Planes-y-Precios.pdf (el PDF subido)
```

### Qué imagen usar en cada lugar:

| Lugar | Archivo | Notas |
|---|---|---|
| Navbar mínimo (fondo oscuro) | `logo-dark.png` | Logo con texto blanco sobre fondo oscuro. Usar con `<Image>` height=32 |
| Modal de contacto | `logo-dark.png` | Mismo logo, height=24 |
| Botón descarga PDF | — | El PDF se descarga directamente, no necesita imagen |
| OG image (`og:image`) | `logo-dark.png` | Fallback hasta tener imagen OG dedicada |

### El ícono de WhatsApp:
**NO usar imagen** — construir el SVG inline en `WhatsAppButton.tsx` con el path oficial del ícono de WhatsApp.

---

## 10. VERIFICACIÓN FINAL ANTES DE DAR POR TERMINADO

- [ ] `pnpm build` (o `npm run build`) sin errores TypeScript ni Tailwind
- [ ] La ruta `/ecommerce` responde con status 200
- [ ] El navbar de Kavok (home) sigue funcionando — no fue tocado
- [ ] El dropdown "Soluciones" en la home linkea correctamente a `/ecommerce`
- [ ] La ruta `/mystudio` sigue funcionando — no fue tocada
- [ ] El botón WhatsApp aparece fixed bottom-right en toda la página `/ecommerce`
- [ ] El botón WhatsApp abre `wa.me/59899313544` en nueva pestaña
- [ ] Todos los CTAs de la página abren el ContactModal
- [ ] El modal tiene el botón de email Y el botón de WhatsApp
- [ ] El botón "Copiar email" funciona con feedback visual
- [ ] El botón "Descargar PDF" descarga el archivo correctamente
- [ ] El bloque de U$S 93/mes muestra el desglose U$S 44 + U$S 49
- [ ] El texto aclara que después del mes 12 solo resta el mantenimiento (U$S 49/mes)
- [ ] Los precios de los 3 planes de puesta en marcha son exactos
- [ ] Los precios de los 3 planes de mantenimiento son exactos
- [ ] La metadata SEO aparece en el `<head>` (verificar con View Source)
- [ ] El JSON-LD de Schema.org está presente
- [ ] La página se ve correcta en 375px (mobile) y 1280px (desktop)
