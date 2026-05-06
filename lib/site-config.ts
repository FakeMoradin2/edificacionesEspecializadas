import { contactAddressLines, contactEmail } from "@/data/contact";

export const siteName = "Edificación Especializada";

/** Título orientado a búsquedas de remodelación y obra especializada */
export const siteTitleDefault =
  "Remodelaciones, adecuaciones y construcción especializada | Jalisco y México";

export const siteDescription =
  "Constructora con amplia trayectoria en remodelaciones y adecuaciones corporativas, " +
  "institucionales y residenciales; obra nueva, proyectos de salud y educación, y peritajes. " +
  "Base en Zapopan, Jalisco, con experiencia a nivel nacional.";

export const seoKeywords: string[] = [
  "remodelaciones",
  "remodelación de oficinas",
  "remodelación corporativa",
  "remodelación institucional",
  "adecuaciones",
  "adecuación de espacios",
  "construcción",
  "obra civil",
  "edificación",
  "constructora Zapopan",
  "constructora Guadalajara",
  "constructora Jalisco",
  "proyectos corporativos",
  "proyectos institucionales",
  "obra hospitalaria",
  "IMSS",
  "ITESM",
  "peritajes",
  "peritaje estructural",
  "sismo",
  "banca",
  "sucursales bancarias",
  "edificación especializada",
];

/**
 * URL canónica del sitio. En producción define `NEXT_PUBLIC_SITE_URL`
 * (p. ej. https://tudominio.com) para sitemap, Open Graph y datos estructurados.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel)
    return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export const structuredAddress = {
  streetAddress: "Artemio del Valle Arizpe 4933, Col. Patria Universidad",
  addressLocality: "Zapopan",
  addressRegion: "Jalisco",
  postalCode: "45119",
  addressCountry: "MX",
} as const;

export const organizationContact = {
  email: contactEmail,
  address: structuredAddress,
  /** Líneas tal como en contacto (texto legible) */
  addressText: contactAddressLines.join(", "),
} as const;
