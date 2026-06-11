"use client";

import LogoKavok from "@/app/components/LogoKavok";

export default function BrandPage() {
  const downloadSVG = () => {
    const link = document.createElement("a");
    link.href = "/logo-kavok.svg";
    link.download = "logo-kavok.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPNG = () => {
    const img = new Image();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    
    // Escala para ultra alta resolución (8x)
    const scale = 8; 
    const width = 240;
    const height = 60;
    canvas.width = width * scale;
    canvas.height = height * scale;

    img.onload = () => {
      if (!ctx) return;
      // Fondo transparente
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, width, height);
      
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "logo-kavok-transparent.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    img.src = "/logo-kavok.svg";
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Brand Assets
          </h1>
          <p className="text-zinc-400 text-lg">
            Descarga el logo oficial de Kavok en alta resolución.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 flex items-center justify-center" id="logo-to-export">
           <LogoKavok className="scale-150 transform" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={downloadPNG}
            className="flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 px-8 rounded-xl transition-all active:scale-95 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            Descargar PNG (Alta Res)
          </button>
          
          <button
            onClick={downloadSVG}
            className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-8 rounded-xl transition-all active:scale-95 group border border-zinc-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            Descargar SVG (Vector)
          </button>
        </div>

        <p className="text-zinc-500 text-sm">
          El formato SVG es ideal para impresiones y escalado sin pérdida de calidad.
        </p>
      </div>
    </div>
  );
}

