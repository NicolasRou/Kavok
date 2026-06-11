'use client'

interface DownloadSectionProps {
  fontFamily?: string
}

const PRINT_PLANS = [
  {
    name: 'Starter',
    price: 'U$S 35/mes',
    features: [
      '1 sede',
      'Hasta 50 alumnos',
      'Calendario de clases + gestión de asistencia',
      '1 administrador + profesores ilimitados',
      'Branding básico (logo y nombre)',
      'Guías de uso incluidas',
      'Trial 15 días gratis',
    ],
  },
  {
    name: 'Pro ⭐',
    price: 'U$S 55/mes',
    features: [
      'Todo lo de Starter, más:',
      'Hasta 100 alumnos',
      'Importación masiva de alumnos vía CSV',
      'Reportes avanzados descargables',
      'Soporte 48hs',
      'Trial 15 días gratis',
    ],
  },
  {
    name: 'Studio+',
    price: 'U$S 79/mes',
    features: [
      'Todo lo de Pro, más:',
      'Multi-sede (sedes ilimitadas)',
      'Alumnos ilimitados',
      'Backup semanal automático',
      'Soporte prioritario (24hs)',
      'Trial 15 días gratis',
    ],
  },
]

function buildPrintHtml() {
  const plansHtml = PRINT_PLANS.map(
    (plan) => `
    <div style="border:1.5px solid #3A4733;border-radius:12px;padding:18px;background:#F9F7F2;">
      <h2 style="font-size:15px;font-weight:700;color:#3A4733;margin:0 0 4px 0;">${plan.name}</h2>
      <p style="font-size:18px;font-weight:800;color:#2C3328;margin:0 0 14px 0;">${plan.price}</p>
      <ul style="margin:0;padding:0;list-style:none;">
        ${plan.features
          .map(
            (f) => `
          <li style="font-size:11.5px;color:#2C3328;margin-bottom:6px;padding-left:15px;position:relative;line-height:1.45;">
            <span style="position:absolute;left:0;color:#88A47C;font-weight:700;">✓</span>${f}
          </li>`
          )
          .join('')}
      </ul>
    </div>`
  ).join('')

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mystudio — Planes y Precios</title>
  <style>
    *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;box-sizing:border-box;}
    body{margin:0;padding:36px;font-family:Georgia,serif;background:#fff;color:#2C3328;}
    @media print{@page{margin:12mm;size:A4;}}
  </style>
</head>
<body>
  <div style="max-width:760px;margin:0 auto;">

    <!-- Header -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;padding-bottom:16px;border-bottom:2px solid #3A4733;">
      <div>
        <span style="font-size:23px;font-weight:800;color:#3A4733;letter-spacing:-0.5px;">Mystudio</span>
        <p style="font-size:11px;color:#6B7A65;margin:2px 0 0 0;">by Kavok</p>
      </div>
      <div style="text-align:right;">
        <p style="font-size:11px;color:#6B7A65;margin:0;">kavokuy@gmail.com</p>
        <p style="font-size:11px;color:#6B7A65;margin:2px 0 0 0;">kavokuy.com/mystudio</p>
      </div>
    </div>

    <!-- Título -->
    <h1 style="font-size:26px;font-weight:800;color:#2C3328;margin:0 0 6px 0;">Planes y Precios — Mystudio</h1>
    <p style="font-size:13px;color:#6B7A65;margin:0 0 28px 0;">Todos los planes incluyen 15 días de prueba gratis. Sin tarjeta de crédito.</p>

    <!-- Cards -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:22px;">
      ${plansHtml}
    </div>

    <!-- Nota -->
    <p style="font-size:11px;color:#6B7A65;font-style:italic;border-top:1px solid #EDEAE3;padding-top:12px;margin:0 0 8px 0;">
      El onboarding inicial con los datos de tu estudio es opcional y se cotiza por separado.
      El soporte incluido es soporte asistencial; las urgencias de funcionamiento se resuelven lo antes posible.
    </p>

    <!-- CTA -->
    <p style="font-size:13px;font-weight:600;color:#3A4733;margin:0;">
      Contacto: kavokuy@gmail.com · kavokuy.com/mystudio
    </p>

  </div>
</body>
</html>`
}

export default function DownloadSection({ fontFamily = 'serif' }: DownloadSectionProps) {
  function handlePrint() {
    const win = window.open('', '_blank', 'width=900,height=700')
    if (!win) return
    win.document.write(buildPrintHtml())
    win.document.close()
    win.focus()
    // Esperar a que el navegador termine de renderizar antes de imprimir
    setTimeout(() => {
      win.print()
      win.close()
    }, 400)
  }

  return (
    <section
      className="px-6 py-24 text-center"
      style={{ backgroundColor: '#3A4733' }}
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: '#88A47C' }}>
          Llevátelo
        </p>
        <h2
          className="mb-4 text-3xl font-bold leading-tight sm:text-4xl"
          style={{ fontFamily, color: '#F9F7F2' }}
        >
          Planes y precios<br />en un PDF.
        </h2>
        <p className="mb-8 text-base leading-relaxed" style={{ color: 'rgba(249,247,242,0.7)' }}>
          Guardalo, compartilo con tu socia, mostráselo a tu contador.
          Todo en un documento prolijo.
        </p>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-200 active:scale-95"
          style={{ backgroundColor: '#F9F7F2', color: '#3A4733' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#EDEAE3')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F9F7F2')}
        >
          <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar PDF de planes →
        </button>
      </div>
    </section>
  )
}
