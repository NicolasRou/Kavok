"use server";

export async function submitContactForm(prevState: unknown, formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const telefono = formData.get("telefono") as string;
  const email = formData.get("email") as string;
  const interes = formData.get("interes") as string;
  const mensaje = formData.get("mensaje") as string;

  // ── Validations ──
  if (!nombre || nombre.trim().length < 2) {
    return { success: false, message: "Por favor ingresa tu nombre." };
  }

  if (!telefono || !/^\d{6,15}$/.test(telefono.replace(/\s/g, ""))) {
    return { success: false, message: "El teléfono debe contener solo números (mínimo 6 dígitos)." };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, message: "Por favor ingresa un email válido." };
  }

  if (!interes) {
    return { success: false, message: "Por favor selecciona un área de interés." };
  }

  // ── Build subject with prefix ──
  const subjectPrefix = interes === "CoreStudio" ? "[LEAD-CORE] " : "";
  const subject = `${subjectPrefix}${interes} — Contacto de ${nombre}`;

  // ── Build mailto URL (fallback — works without backend) ──
  const body = [
    `Nombre: ${nombre}`,
    `Teléfono: ${telefono}`,
    `Email: ${email}`,
    `Interés: ${interes}`,
    ``,
    `Mensaje:`,
    mensaje || "(sin mensaje)",
  ].join("\n");

  const mailtoUrl =
    `mailto:nicolasheredia02@gmail.com` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  return {
    success: true,
    message: "¡Gracias! Redirigiendo a tu cliente de correo...",
    mailtoUrl,
  };
}
