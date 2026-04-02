"use client";

import { useActionState, useEffect } from "react";
import { submitContactForm } from "../actions/contact";

const initialState = { success: false, message: "", mailtoUrl: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state?.success && state?.mailtoUrl) {
      window.location.href = state.mailtoUrl;
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-6">
      {/* Row: Nombre + Teléfono */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-zinc-300">
            Nombre <span className="text-indigo-400">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-50 placeholder-zinc-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-zinc-300">
            Teléfono <span className="text-indigo-400">*</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            placeholder="099 123 456"
            pattern="[\d\s]{6,15}"
            onKeyDown={(e) => {
              if (
                !/[\d\s]/.test(e.key) &&
                !["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(e.key)
              ) {
                e.preventDefault();
              }
            }}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-50 placeholder-zinc-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30"
          />
        </div>
      </div>

      {/* Row: Email + Interés */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
            Email <span className="text-indigo-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="tu@email.com"
            pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-50 placeholder-zinc-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30"
          />
        </div>
        <div>
          <label htmlFor="interes" className="mb-2 block text-sm font-medium text-zinc-300">
            Interés <span className="text-indigo-400">*</span>
          </label>
          <select
            id="interes"
            name="interes"
            required
            defaultValue=""
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-50 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 appearance-none"
          >
            <option value="" disabled className="text-zinc-500">
              Selecciona una opción
            </option>
            <option value="Desarrollo a Medida">Desarrollo a Medida</option>
            <option value="CoreStudio">CoreStudio</option>
            <option value="Consulta General">Consulta General</option>
          </select>
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-zinc-300">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto..."
          className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-50 placeholder-zinc-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30"
        />
      </div>

      {/* Feedback message */}
      {state?.message && (
        <p
          className={`rounded-lg px-4 py-3 text-sm font-medium ${
            state.success
              ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
              : "border border-red-500/20 bg-red-500/10 text-red-300"
          }`}
        >
          {state.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="group w-full rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensaje
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
