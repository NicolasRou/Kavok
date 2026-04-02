import LogoKavok from "./components/LogoKavok";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          NAVBAR — sticky, frosted glass
      ═══════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <LogoKavok />

          <a
            href="#contacto"
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-indigo-500/50 hover:text-zinc-50 hover:shadow-[0_0_12px_-3px_rgba(99,102,241,0.3)]"
          >
            Contacto
          </a>
        </div>
      </nav>

      <main>
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Background glow orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px] animate-glow-pulse" />
        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[300px] w-[400px] rounded-full bg-cyan-500/8 blur-[100px] animate-glow-pulse animation-delay-500" />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Venture Studio &amp; Software Factory — Uruguay
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-zinc-50">Orquestamos tecnología</span>
            <br />
            <span className="text-gradient-indigo">para escalar tu negocio.</span>
          </h1>

          {/* Sub-heading */}
          <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Automatización, software a medida y productos SaaS diseñados para
            escalar. Desde Montevideo para toda la región.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary */}
            <a
              href="#soluciones"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/30"
            >
              Ver Soluciones
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Ghost / Secondary */}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:text-zinc-50"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>

        {/* Decorative bottom fade line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          ECOSISTEMA SAAS — Nuestros Productos
      ═══════════════════════════════════════════ */}
      <section id="soluciones" className="relative py-28 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-400">
              Ecosistema SaaS
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              App de Agendas y Productos SaaS
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400 leading-relaxed">
              Plataformas especializadas que resuelven problemas reales en
              industrias específicas, con tecnología de punta y soporte local.
            </p>
          </div>

          {/* Product Grid — 3 cols */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* ── CoreStudio ── */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.15)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-600/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/15 border border-indigo-500/20">
                  <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>

                <span className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-indigo-600/15 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  Producto Estrella
                </span>

                <h3 className="mt-3 text-xl font-bold text-zinc-50">CoreStudio — App de Agendas para Pilates y Yoga</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  Software integral de gestión para estudios de Pilates y Yoga.
                  Agendamiento inteligente, control de alumnos, pagos y
                  métricas de negocio — todo en una sola plataforma.
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
                >
                  Conocer más
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── Escáner Inteligente con IA ── */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-cyan-500/30">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/20">
                  <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>

                <span className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                  Próximamente
                </span>

                <h3 className="mt-3 text-xl font-bold text-zinc-50">
                  Escáner Inteligente con IA
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  Herramienta de visión artificial para digitalización y
                  análisis automatizado de documentos e imágenes.
                  Procesamiento en tiempo real potenciado por modelos de IA
                  de última generación.
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  En desarrollo
                </span>
              </div>
            </div>

            {/* ── Agenda Pro ── */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-amber-500/30">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/20">
                  <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <span className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-500/20">
                  Próximamente
                </span>

                <h3 className="mt-3 text-xl font-bold text-zinc-50">Agenda Pro</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  Sistema de reservas ultra-rápido y sin fricción diseñado
                  para negocios de alta rotación: barberías, centros de
                  estética, estudios de tatuajes y servicios profesionales.
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  En desarrollo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOFTWARE FACTORY — Ingeniería a Medida
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[100px]" />

        <div className="mx-auto max-w-6xl">
          {/* Full-width feature card with gradient border */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-950 p-1">
            {/* Gradient border glow */}
            <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-600/20 via-transparent to-cyan-500/20 opacity-60" />

            <div className="relative rounded-[calc(1.5rem-4px)] bg-zinc-950/90 px-8 py-14 sm:px-14 sm:py-20">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Left — Copy */}
                <div>
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    Software Factory
                  </span>

                  <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
                    Software a Medida: Transformamos tu visión en{" "}
                    <span className="text-gradient-indigo">realidad digital.</span>
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-zinc-400">
                    No solo creamos productos propios; diseñamos y desarrollamos
                    soluciones complejas que otros no pueden. Llevamos tu idea
                    desde el concepto hasta la producción con ingeniería de
                    primer nivel.
                  </p>

                  <a
                    href="#contacto"
                    className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/30"
                  >
                    ¿Tienes una idea compleja? Nosotros el código.
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Right — Capabilities */}
                <div className="space-y-5">
                  {/* Capability 1 */}
                  <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-200 hover:border-indigo-500/30 hover:bg-zinc-900/70">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600/15 border border-indigo-500/20">
                        <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-50">E-commerce Interactivos</h4>
                        <p className="mt-1 text-sm text-zinc-400">
                          Tiendas con personalizadores de productos en tiempo
                          real — ideales para artículos de papelería, diseño y
                          manufactura a medida.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Capability 2 */}
                  <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-200 hover:border-indigo-500/30 hover:bg-zinc-900/70">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600/15 border border-indigo-500/20">
                        <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25V3.375c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v10.875m0 0h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25m0-4.5V8.25m0 5.625V8.25m0 0h5.25" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-50">Sistemas de Gestión Logística</h4>
                        <p className="mt-1 text-sm text-zinc-400">
                          Plataformas a medida para control de inventarios,
                          rutas de distribución y automatización de cadenas de
                          suministro.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Capability 3 */}
                  <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-200 hover:border-indigo-500/30 hover:bg-zinc-900/70">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600/15 border border-indigo-500/20">
                        <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-50">Automatización con IA</h4>
                        <p className="mt-1 text-sm text-zinc-400">
                          Integración de modelos de inteligencia artificial para
                          automatizar procesos de negocio, análisis de datos y
                          toma de decisiones.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FILOSOFÍA — Por Qué Kavok
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-6">
        {/* Subtle separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-400">
              Nuestra Filosofía
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              Por Qué Kavok
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400 leading-relaxed">
              Tres pilares que definen nuestra forma de construir tecnología.
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Pilar 1 — Hiperespecialización */}
            <div className="group text-center rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-8 py-12 transition-all duration-300 hover:border-indigo-500/30 hover:bg-zinc-900/60">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/15 border border-indigo-500/20 transition-colors duration-300 group-hover:bg-indigo-600/25">
                <svg className="h-7 w-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-zinc-50">Hiperespecialización</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                No intentamos abarcar todo. Nos enfocamos en nichos
                específicos donde podemos ser los mejores y construir
                productos que realmente marquen la diferencia.
              </p>
            </div>

            {/* Pilar 2 — Arquitectura Cloud */}
            <div className="group text-center rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-8 py-12 transition-all duration-300 hover:border-indigo-500/30 hover:bg-zinc-900/60">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/15 border border-indigo-500/20 transition-colors duration-300 group-hover:bg-indigo-600/25">
                <svg className="h-7 w-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-zinc-50">Arquitectura Cloud</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Infraestructura moderna, escalable y segura desde el día
                uno. Serverless, edge computing y bases de datos
                distribuidas para máximo rendimiento.
              </p>
            </div>

            {/* Pilar 3 — Soporte Local */}
            <div className="group text-center rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-8 py-12 transition-all duration-300 hover:border-indigo-500/30 hover:bg-zinc-900/60">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/15 border border-indigo-500/20 transition-colors duration-300 group-hover:bg-indigo-600/25">
                <svg className="h-7 w-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-zinc-50">Soporte Local en Uruguay</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Equipo radicado en Montevideo. Atención directa, sin
                intermediarios, en tu zona horaria y con reuniones
                presenciales cuando las necesites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACTO — Formulario
      ═══════════════════════════════════════════ */}
      <section id="contacto" className="relative py-32 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <div className="pointer-events-none absolute left-1/3 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-400">
              Contacto
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              Hablemos de tu próximo gran paso.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-zinc-400 leading-relaxed">
              Cuéntanos tu idea y nos pondremos en contacto contigo desde Montevideo.
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
      </main>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="relative border-t border-zinc-800/60 bg-zinc-950 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-start">
            {/* Left — Logo + tagline */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <LogoKavok />
              <p className="max-w-xs text-center md:text-left text-sm text-zinc-500 leading-relaxed">
                Venture Studio &amp; Software Factory.
                Construimos tecnología que escala, desde Montevideo
                para toda la región.
              </p>
            </div>

            {/* Center — Location */}
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-center gap-2 text-zinc-400">
                <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm">Montevideo, Uruguay</span>
              </div>
            </div>

            {/* Right — Links */}
            <div className="flex gap-8 text-sm">
              <a href="#soluciones" className="text-zinc-500 transition-colors duration-200 hover:text-zinc-300">
                Soluciones
              </a>
              <a href="#contacto" className="text-zinc-500 transition-colors duration-200 hover:text-zinc-300">
                Contacto
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center gap-3 border-t border-zinc-800/40 pt-8 sm:flex-row sm:justify-between">
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} Kavok. Todos los derechos reservados.
            </p>
            <p className="text-xs text-zinc-700">
              Diseñado y desarrollado en 🇺🇦 Uruguay
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
