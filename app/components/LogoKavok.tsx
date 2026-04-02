export default function LogoKavok({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon — "El Horizonte" */}
      <svg
        className="w-9 h-9"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="24" width="22" height="5" rx="2.5" className="fill-zinc-600" />
        <rect x="0" y="34" width="28" height="5" rx="2.5" className="fill-zinc-600" />
        <rect x="12" y="14" width="28" height="5" rx="2.5" className="fill-indigo-500" />
      </svg>

      {/* Wordmark */}
      <span className="font-bold text-2xl tracking-tight text-zinc-50">
        Kavok
      </span>
    </div>
  );
}
