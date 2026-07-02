import type { MetadataRoute } from "next";

const BASE = "https://www.kavokuy.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // NO bloquear /_next/ — Google y los LLMs necesitan esos archivos
        // para renderizar el JavaScript y leer el contenido de la página
        disallow: ["/api/"],
      },
      // AI crawlers — permiso explícito para GEO
      { userAgent: "GPTBot",        allow: "/" },
      { userAgent: "ChatGPT-User",  allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "CCBot",         allow: "/" },
      { userAgent: "anthropic-ai",  allow: "/" },
      { userAgent: "Claude-Web",    allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "cohere-ai",     allow: "/" },
      { userAgent: "Googlebot",     allow: "/" },
      { userAgent: "Applebot",      allow: "/" },
      { userAgent: "Bingbot",       allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
