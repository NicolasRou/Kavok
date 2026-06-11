# PROMPT PARA CLAUDE CODE — Página `/mystudio` + Dropdown Navbar Kavok

> **Proyecto:** Landing de Kavok (`C:\Users\nikco\Documents\Antigravity\Kavok`)  
> **Tarea:** Crear la página `/mystudio` completa + modificar el navbar de Kavok para agregar dropdown "Soluciones"  
> **Stack:** Next.js 15 App Router · Tailwind CSS · TypeScript estricto · Sin Supabase (es una página pública estática)

---

## 0. LEER ANTES DE TOCAR NADA

Antes de escribir una sola línea, leer en este orden:

1. `CLAUDE.md` — reglas del proyecto
2. `context.md` — estado actual
3. El navbar actual de Kavok (buscar en `/components` o en `/app` el componente `Navbar` o `Header`)
4. El archivo `app/layout.tsx` o el layout raíz de la landing

El objetivo es entender:
- Cómo está construido el navbar actual (estructura, clases Tailwind, fuentes)
- Dónde está el botón "Contacto"
- Qué fuentes usa la landing (Google Fonts, next/font, etc.)
- El sistema de colores actual de Kavok (indigo, zinc-950, etc.)

---

## 1. TAREA 1 — Modificar el Navbar de Kavok

### Qué agregar

Agregar un link tipo **dropdown "Soluciones"** en el navbar, entre el logo y el botón "Contacto". El dropdown debe:

- Mostrarse al hacer **hover** (desktop) y al hacer **click** (mobile)
- Tener dos opciones:
  - **Kavok Ecommerce** → enlaza a `/ecommerce` (esta página NO se construye en esta tarea, solo el link)
  - **Mystudio** → enlaza a `/mystudio`
- Diseño del dropdown: fondo con `backdrop-blur` + borde sutil, mismo estilo oscuro que el navbar de Kavok
- El trigger debe tener una pequeña flecha/chevron que rota al abrir
- En mobile: el dropdown debe desplegarse inline dentro del menú hamburguesa si existe, o como un acordeón si el navbar es simple

### Constraints del navbar

- **No romper** el diseño actual del navbar bajo ningún concepto
- El componente del dropdown debe ser un `'use client'` component separado (ej: `SolucionesDropdown.tsx`) e importado en el navbar
- Usar `useState` + `onMouseEnter/Leave` para el hover en desktop
- Cerrar el dropdown al hacer click fuera (`useEffect` + `addEventListener('click', ...)`)
- Animación de apertura: `transition-all duration-200 ease-out` con `opacity` + `translateY`

---

## 2. TAREA 2 — Página `/mystudio` completa

### Ruta

```
app/mystudio/page.tsx          ← página principal
app/mystudio/layout.tsx        ← layout propio (sin footer, con navbar mínimo)
components/mystudio/           ← todos los componentes de esta página
```

### Sistema de diseño — IDENTIDAD VISUAL DE MYSTUDIO

**Esta página NO usa el dark mode de Kavok.** Usa el sistema propio de Mystudio:

| Token | Valor | Uso |
|---|---|---|
| `--ms-bosque` | `#3A4733` | Fondo oscuro, botones primarios |
| `--ms-salvia` | `#88A47C` | Acento secundario, highlights |
| `--ms-crema` | `#F9F7F2` | Fondo principal de la página |
| `--ms-crema-dark` | `#EDEAE3` | Fondo de cards, secciones alternadas |
| `--ms-texto` | `#2C3328` | Texto principal |
| `--ms-texto-suave` | `#6B7A65` | Texto secundario, subtítulos |

**Tipografía:**
- Display / headings grandes: **Playfair Display** (serif elegante, el mismo que usa Mystudio — importar desde Google Fonts vía `next/font/google`)
- Body / UI: **DM Sans** (importar desde `next/font/google`)
- Todos los `font-family` aplicados via CSS variables en el layout de Mystudio

**Estilo general:** orgánico, refinado, light. Mucho espacio en blanco. Bordes redondeados grandes (`rounded-2xl`, `rounded-3xl`). Sombras suaves. Sin colores brillantes. La identidad visual referencia un aro de Pilates (círculo elíptico fino) — usarlo como elemento decorativo SVG inline en algunos backgrounds o separadores.

---

### Estructura del Layout (`app/mystudio/layout.tsx`)

```tsx
// Navbar mínimo propio — NO usar el navbar de Kavok
// Solo: logo Mystudio (SVG inline del aro + texto "Mystudio") | botón "← Volver a Kavok" (link a "/")
// Fondo crema, sticky top-0, z-50
// Sin footer
```

El navbar mínimo debe tener:
- **Izquierda:** Logo SVG de Mystudio (aro elíptico fino en color `#3A4733` con dos puntos `#88A47C` en los extremos, seguido del texto "Mystudio" en Playfair Display)
- **Derecha:** Botón "← Volver" que linkea a `/` — estilo ghost (borde `#3A4733`, texto `#3A4733`, hover fondo `#3A4733` texto crema)

---

### SECCIONES DE LA PÁGINA (en orden)

#### SECCIÓN 1 — Hero

**Fondo:** crema `#F9F7F2`  
**Elemento decorativo:** SVG del aro de Pilates muy grande (300-400px), posicionado a la derecha del hero, con baja opacidad (10-15%), en color `#3A4733`. Usar como elemento decorativo de fondo, no como logo.

**Contenido:**
```
Eyebrow (pequeño, uppercase, tracking-widest, color salvia):
  "GESTIÓN PARA ESTUDIOS DE PILATES"

H1 (Playfair Display, muy grande, bosque):
  "Gestioná tu estudio
   de Pilates en un solo lugar."

Subtítulo (DM Sans, texto suave):
  "Clases, alumnos, créditos y asistencias — sin planillas, sin enredos."

Badge destacado (pill verde, llamativo):
  "✓ 15 días de prueba GRATIS · Sin tarjeta de crédito"

CTAs:
  [Botón primario bosque]  "Solicitar demo"  → abre modal de email
  [Botón ghost]            "Ver planes ↓"    → hace scroll a sección de planes (#planes)
```

---

#### SECCIÓN 2 — Preguntas que marcan la necesidad

**Fondo:** `#EDEAE3` (crema oscuro)  
**Eyebrow:** "¿TE SUENA FAMILIAR?"  
**Título (Playfair Display):** "El caos que frena a tu estudio"

**Layout:** grid de 3 columnas en desktop, 1 en mobile. Cada card tiene:
- Ícono simple SVG (línea, no fill) en color salvia
- Pregunta en negrita (la problemática)
- Respuesta corta en texto suave (cómo Mystudio lo resuelve)

**Cards de preguntas/respuestas:**

| Pregunta (problema) | Respuesta (solución Mystudio) |
|---|---|
| ¿Llevás la asistencia en una planilla de Excel o papel? | Mystudio registra cada clase en segundos, desde el celular. |
| ¿Perdés tiempo buscando quién debe créditos? | Ves el saldo de cada alumno en tiempo real, sin buscar nada. |
| ¿Tus profesores no saben qué alumnos vienen hoy? | El calendario de clases es visible para todo tu equipo. |
| ¿Tenés alumnos en varias sedes y no podés cruzar datos? | Multi-sede incluido desde el plan Studio+. Todo centralizado. |
| ¿Cada mes es un caos para cobrar y renovar créditos? | Mystudio te avisa quién vence, quién debe y quién se fue. |
| ¿No sabés cuántos alumnos activos tenés realmente? | Reportes exportables con todo: asistencia, alumnos, clases. |

---

#### SECCIÓN 3 — Funcionalidades (Features)

**Fondo:** crema `#F9F7F2`  
**Eyebrow:** "TODO LO QUE NECESITÁS"  
**Título:** "Una app. Todo tu estudio."

**Layout alternado** (feature a la izquierda, visual a la derecha — y al revés en el siguiente). El "visual" puede ser un bloque de fondo `#3A4733` con texto e ícono en crema simulando una pantalla de app (no imagen real, sino un mock minimalista con SVG/HTML).

**Features a mostrar (en orden):**

1. **Calendario de clases**
   - Organizá clases por día, horario y profesor. Tus alumnos saben cuándo y dónde.
   - Mock visual: una grilla de calendario semanal simple con colores bosque/salvia

2. **Gestión de alumnos y créditos**
   - Registrá alumnos, asignales clases y controlá su saldo de créditos en un clic.
   - Mock visual: tarjeta de alumno con avatar, nombre, créditos restantes como barra de progreso

3. **Control de asistencia**
   - Marcá presentes desde el celular al inicio de cada clase. Sin papel, sin olvidos.
   - Mock visual: lista de alumnos con toggles de check

4. **Reportes exportables**
   - Descargá informes de asistencia, alumnos activos y clases del período en segundos.
   - Mock visual: gráfica de barras simple en verde/bosque

5. **Multi-sede**
   - Administrá todas tus sedes desde un solo panel. Profesores y alumnos separados por ubicación.
   - Mock visual: dos cards de "Sede" con indicadores

6. **Branding de tu estudio**
   - Logo, nombre y colores de tu estudio en toda la plataforma. Es tuya, no genérica.
   - Mock visual: panel de configuración visual con logo y paleta de color

---

#### SECCIÓN 4 — Planes y Precios (id="planes")

**Fondo:** `#EDEAE3`  
**Eyebrow:** "PRECIOS TRANSPARENTES"  
**Título:** "Elegí el plan para tu estudio"  
**Subtítulo:** "Todos los planes incluyen 15 días de prueba gratis. Sin tarjeta de crédito."

**Badge prominente centrado antes de las cards:**
```
🎁 "15 días GRATIS · Sin tarjeta · Sin compromisos"
```
(Pill grande, fondo bosque, texto crema, con ícono de regalo)

**Cards de planes — 3 columnas desktop, stack en mobile:**

**PLAN STARTER — U$S 35/mes**
- Descriptor: "Para estudios pequeños que están digitalizando su gestión por primera vez."
- Incluye:
  - 1 sede
  - Hasta 50 alumnos
  - Calendario de clases + gestión de asistencia
  - 1 administrador + profesores ilimitados
  - Branding básico (logo y nombre del estudio en la plataforma)
  - Guías de uso incluidas (admin, profesor y alumno)
  - Trial de 15 días gratis
- CTA: "Empezar gratis" → abre modal email

**PLAN PRO — U$S 55/mes** ⭐ (DESTACADO — card más grande o con borde salvia)
- Descriptor: "Para estudios en crecimiento que necesitan herramientas más completas."
- Incluye todo lo de Starter, más:
  - Hasta 100 alumnos
  - Importación masiva de alumnos vía CSV
  - Reportes avanzados descargables (clases, asistencia, alumnos)
  - Trial de 15 días gratis
- CTA: "Empezar gratis" → abre modal email
- Badge "Más popular" en la card

**PLAN STUDIO+ — U$S 79/mes**
- Descriptor: "Para estudios con múltiples sedes o que requieren soporte directo."
- Incluye todo lo de Pro, más:
  - Multi-sede (sedes ilimitadas)
  - Alumnos ilimitados
  - Backup semanal automático
  - Soporte prioritario con respuesta en 48h
  - Trial de 15 días gratis
- CTA: "Empezar gratis" → abre modal email

**Nota al pie de los planes:**
> "El onboarding inicial se cotiza por separado según la complejidad de tu estudio. Consultanos."

---

#### SECCIÓN 5 — PDF Descargable

**Fondo:** bosque `#3A4733`  
**Texto en crema**

**Contenido:**
```
Eyebrow (salvia): "LLEVÁTELO"

Título (Playfair Display, crema grande):
  "Planes y precios
   en un PDF."

Subtítulo (crema suave):
  "Guardalo, compartilo con tu socia, mostráselo a tu contador.
   Todo en un documento prolijo."

[Botón grande crema con texto bosque] "Descargar PDF de planes →"
```

**Comportamiento del botón de descarga:**
- Genera y descarga un PDF con los planes y precios de Mystudio
- El PDF se genera con `@react-pdf/renderer` o, si no está instalado en el proyecto, con `window.print()` y una hoja de estilos de impresión dedicada en `app/mystudio/print.css`
- **Preferir la opción `window.print()`** si `@react-pdf/renderer` no está ya instalado (menos dependencias)
- El PDF imprimible debe tener: logo Mystudio, título "Planes y Precios", las 3 cards de planes con todo el contenido, nota del onboarding, y el CTA `kavokuy@gmail.com`
- La página de impresión debe ocultar el navbar y todos los elementos de la landing — solo mostrar el contenido de los planes

---

#### SECCIÓN 6 — CTA Final

**Fondo:** crema `#F9F7F2`  
**Centro de página**

```
Título grande (Playfair Display, bosque):
  "¿Listo para ordenar tu estudio?"

Subtítulo:
  "Empezá gratis hoy. Sin tarjeta. Sin ataduras."

Badge:
  "✓ 15 días gratis incluidos en todos los planes"

[Botón grande primario bosque] "Quiero empezar" → abre modal email

Texto pequeño debajo:
  "o escribinos directamente a kavokuy@gmail.com"
  (el email es clickeable → mailto:kavokuy@gmail.com?subject=Consulta%20Mystudio)
```

---

### MODAL DE EMAIL (componente `ContactModal.tsx`)

- Se abre al hacer click en cualquier CTA de la página
- Overlay con fondo semitransparente, cierra al hacer click fuera o presionar Escape
- Contenido del modal:
  ```
  Logo Mystudio pequeño
  Título: "Hablemos de tu estudio"
  Subtítulo: "Respondemos en menos de 24h."
  
  [Botón grande bosque con ícono de email]
    "Escribir a kavokuy@gmail.com"
    → onclick: window.location.href = "mailto:kavokuy@gmail.com?subject=Consulta%20Mystudio&body=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Mystudio."
  
  Texto debajo: "También podés copiar el email:"
  
  [Input readonly con el email + botón "Copiar"]
    → onclick: navigator.clipboard.writeText("kavokuy@gmail.com") + feedback "¡Copiado!"
  
  [X para cerrar]
  ```

---

### SEO — CRÍTICO, NO OMITIR

La página `/mystudio` debe tener metadata completa optimizada para Google. Crear en `app/mystudio/page.tsx` con la API de metadata de Next.js 15:

```typescript
export const metadata: Metadata = {
  title: "Mystudio — Gestión para estudios de Pilates | Kavok",
  description: "Mystudio es la app de gestión integral para estudios de Pilates. Controlá clases, alumnos, créditos y asistencia desde un solo lugar. 15 días gratis, sin tarjeta.",
  keywords: [
    "gestión estudio pilates",
    "software pilates uruguay",
    "app pilates administración",
    "control alumnos pilates",
    "sistema gestión pilates",
    "mystudio kavok",
    "agenda clases pilates",
    "créditos pilates app"
  ],
  openGraph: {
    title: "Mystudio — Tu app de gestión de Pilates",
    description: "Clases, alumnos, créditos y asistencia en un solo lugar. Probalo gratis 15 días.",
    url: "https://kavok.com.uy/mystudio",
    siteName: "Kavok",
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mystudio — Gestión para estudios de Pilates",
    description: "Clases, alumnos, créditos y asistencia en un solo lugar. Probalo gratis 15 días.",
  },
  alternates: {
    canonical: "https://kavok.com.uy/mystudio",
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

**Schema.org (JSON-LD) — agregar en el `<head>` de la página:**

```typescript
// En page.tsx, dentro del JSX, antes del primer section:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Mystudio",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "description": "Sistema de gestión integral para estudios de Pilates. Control de clases, alumnos, créditos y asistencia.",
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter",
          "price": "35",
          "priceCurrency": "USD",
          "billingPeriod": "P1M"
        },
        {
          "@type": "Offer",
          "name": "Pro",
          "price": "55",
          "priceCurrency": "USD",
          "billingPeriod": "P1M"
        },
        {
          "@type": "Offer",
          "name": "Studio+",
          "price": "79",
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

### ESTRUCTURA DE ARCHIVOS A CREAR/MODIFICAR

```
MODIFICAR:
  components/[navbar-actual]/Navbar.tsx (o como se llame)
    → Agregar <SolucionesDropdown /> entre logo y botón Contacto

CREAR:
  components/[navbar-actual]/SolucionesDropdown.tsx  ← dropdown 'use client'

  app/mystudio/
    layout.tsx         ← layout con navbar mínimo Mystudio + sin footer
    page.tsx           ← página completa con metadata SEO

  components/mystudio/
    MystudioNavbar.tsx       ← navbar mínimo (logo + botón volver)
    HeroSection.tsx          ← sección 1
    ProblemSection.tsx       ← sección 2 (preguntas)
    FeaturesSection.tsx      ← sección 3 (funcionalidades)
    PricingSection.tsx       ← sección 4 (planes)
    DownloadSection.tsx      ← sección 5 (PDF)
    CtaSection.tsx           ← sección 6 (CTA final)
    ContactModal.tsx         ← modal de email ('use client')
    MystudioLogo.tsx         ← logo SVG inline reutilizable
```

---

### LOGO SVG DE MYSTUDIO (para `MystudioLogo.tsx`)

El logo es un **aro elíptico** (como un aro de Pilates visto en perspectiva), con dos puntos circulares en los extremos diagonales. Construirlo como SVG inline:

```tsx
// MystudioLogo.tsx
interface MystudioLogoProps {
  size?: number
  colorAro?: string      // default "#3A4733"
  colorPuntos?: string   // default "#88A47C"
  colorTexto?: string    // default "#3A4733"
  showText?: boolean     // default true
}

// El SVG del aro: elipse con stroke, sin fill, con dos circle en los extremos
// El texto "Mystudio" al lado en Playfair Display
// El aro tiene aprox 32x22px en tamaño normal de navbar
```

---

### ANIMACIONES Y MICRO-INTERACCIONES

- **Scroll reveal:** usar `IntersectionObserver` en un hook `useInView` para animar secciones al entrar en viewport. Clases: `opacity-0 translate-y-6` → `opacity-100 translate-y-0` con `transition-all duration-700`
- **Hover en cards de features:** sombra más profunda + leve `scale-[1.01]`
- **Hover en plan Pro (destacado):** borde salvia que pulsa levemente (keyframe CSS)
- **Botón primario:** `hover:bg-[#2C3328]` (bosque más oscuro) + `active:scale-95`
- **Modal:** animación de entrada `scale-95 → scale-100` + `opacity-0 → opacity-100`

---

### REGLAS DE CALIDAD — NO NEGOCIABLES

1. **TypeScript estricto** — sin `any`, sin `@ts-ignore`
2. **Mobile-first** — la página debe verse perfecta en 375px
3. **`'use client'`** solo donde hay estado o eventos del browser (modal, dropdown, botón copiar)
4. **Sin dependencias nuevas** salvo que sean imprescindibles — preferir soluciones CSS/Tailwind puras
5. **Accesibilidad básica:** `aria-label` en botones icon-only, `role="dialog"` en modal, `aria-expanded` en dropdown
6. **No usar `<img>` con rutas externas** — el logo SVG es inline, no hay imágenes externas en esta página
7. **El email de contacto `kavokuy@gmail.com` debe aparecer exactamente así** — no `kavok@gmail.com`
8. **Los precios deben ser exactos:** Starter U$S 35, Pro U$S 55, Studio+ U$S 79

---

## 3. RECURSOS DE IMAGEN QUE DEBES RECIBIR DE NICOLÁS

Para implementar esta página, Claude Code necesita los siguientes archivos de imagen. Nicolás debe pasarlos junto con este prompt:

### Obligatorios:
| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `horizontal-primary.png` | Logo Mystudio horizontal (aro + texto bosque sobre crema) | Navbar mínimo — `<Image>` de next/image |
| `horizontal-on-dark.png` | Logo Mystudio horizontal (aro + texto crema sobre oscuro) | Sección de descarga (fondo bosque) |
| `app-icon-crema-1024.png` | Ícono cuadrado de la app (aro sobre crema) | OG image, og:image meta tag |

### Opcionales pero recomendados:
| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `horizontal-primary-on-crema.png` | Logo sobre crema con colores primarios | Alternativa para el navbar si el fondo es exactamente crema |
| `android-chrome-512.png` | Ícono de la app 512px | Fallback og:image si el anterior no está |

### Dónde colocarlos en el proyecto:
```
public/
  mystudio/
    logo-horizontal-light.png    ← renombrar horizontal-primary.png
    logo-horizontal-dark.png     ← renombrar horizontal-on-dark.png
    og-image.png                 ← renombrar app-icon-crema-1024.png (o crear una imagen OG 1200x630 específica si la tenés)
```

### Nota importante:
El aro de Pilates como **elemento decorativo SVG de fondo** (hero, separadores) se construye como SVG inline en código — no necesita imagen. Solo los logos en los navbars usan `<Image>`.

---

## 4. VERIFICACIÓN FINAL ANTES DE DAR POR TERMINADO

Antes de marcar la tarea como completa, verificar:

- [ ] `pnpm build` (o `npm run build`) no tira errores de TypeScript ni de Tailwind
- [ ] La ruta `/mystudio` responde con status 200
- [ ] El navbar de Kavok no se rompió — la home sigue funcionando
- [ ] El dropdown "Soluciones" abre y cierra correctamente en desktop
- [ ] Los 3 CTAs de la página abren el modal correctamente
- [ ] El botón "Copiar email" funciona y muestra feedback
- [ ] La página se ve correcta en viewport 375px (mobile) y 1280px (desktop)
- [ ] La metadata SEO aparece en el `<head>` (verificar con View Source)
- [ ] El JSON-LD de Schema.org está presente en el `<head>`
- [ ] El botón "Descargar PDF" activa la impresión o descarga correctamente
- [ ] El botón "← Volver" lleva de vuelta a la home de Kavok
