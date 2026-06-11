'use client'

interface DownloadSectionProps {
  onOpenModal: () => void
}

export default function DownloadSection({ onOpenModal }: DownloadSectionProps) {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: '#0D0E14' }}>
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Texto */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: '#E8A030' }}>
              Llevátelo
            </p>
            <h2
              className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
            >
              Planes y precios<br />en un PDF.
            </h2>
            <p className="mb-8 text-base leading-relaxed" style={{ color: '#9096A8' }}>
              Guardalo, compartilo con tu socio,<br />
              mostráselo a tu contador.<br />
              Todo en un documento prolijo.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/assets/Kavok-Planes-y-Precios.pdf"
                download="Kavok-Ecommerce-Planes-y-Precios.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 active:scale-95"
                style={{ backgroundColor: '#E8A030' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d4911f')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8A030')}
              >
                <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar PDF de planes →
              </a>
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-95"
                style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: '#9096A8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.color = '#9096A8'
                }}
              >
                o escribinos →
              </button>
            </div>
          </div>

          {/* Mock visual del PDF */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-xs rounded-2xl p-6 shadow-2xl"
              style={{ backgroundColor: '#13141F', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Header del mock */}
              <div className="mb-5 flex items-center justify-between border-b pb-4" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div>
                  <div className="h-2.5 w-28 rounded" style={{ backgroundColor: '#E8A030' }} />
                  <div className="mt-1.5 h-2 w-16 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
                </div>
                <div className="h-8 w-8 rounded-lg" style={{ backgroundColor: 'rgba(91,107,248,0.2)' }} />
              </div>
              {/* Título mock */}
              <div className="mb-4 h-3 w-3/4 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
              <div className="mb-6 h-2 w-1/2 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
              {/* Líneas de precio */}
              {[
                { w: 'w-full', color: 'rgba(232,160,48,0.3)' },
                { w: 'w-5/6', color: 'rgba(255,255,255,0.1)' },
                { w: 'w-4/5', color: 'rgba(255,255,255,0.07)' },
                { w: 'w-3/4', color: 'rgba(255,255,255,0.07)' },
                { w: 'w-full', color: 'rgba(91,107,248,0.25)' },
                { w: 'w-5/6', color: 'rgba(255,255,255,0.1)' },
                { w: 'w-4/5', color: 'rgba(255,255,255,0.07)' },
              ].map((line, i) => (
                <div key={i} className={`mb-2 h-2 rounded ${line.w}`} style={{ backgroundColor: line.color }} />
              ))}
              <div className="mt-4 h-8 w-full rounded-lg" style={{ backgroundColor: 'rgba(232,160,48,0.2)', border: '1px solid rgba(232,160,48,0.3)' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
