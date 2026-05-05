export const founderQuote =
  "La ingeniería es la base, pero la confianza es el material que sostiene cada estructura a lo largo del tiempo.";

/** Texto de apoyo; sustituir o afinar con biografía oficial cuando exista. */
export const founderParagraphs: string[] = [
  "Con más de cuatro décadas de trayectoria en obra civil y administración de proyectos complejos, el Ing. Ezequiel Hernández Espinosa ha consolidado un modelo de ejecución basado en rigor técnico, cumplimiento normativo y relaciones de confianza duraderas con clientes institucionales y privados.",
  "Su liderazgo orienta a Edificación Especializada hacia soluciones constructivas seguras, eficientes y alineadas con los estándares que exigen sectores bancario, educativo, de salud y corporativo.",
];

export const founderStats = [
  { value: "+40", label: "Años de experiencia" },
  { value: "+2000", label: "Obras entregadas" },
  { value: "100%", label: "Cumplimiento" },
  { value: "Top", label: "Institucional" },
] as const;

export type FeaturedProjectItem = {
  category: string;
  title: string;
  description: string;
};

export const featuredProjects: FeaturedProjectItem[] = [
  {
    category: "Residencial",
    title: "Residencia La Gavia",
    description:
      "Proyecto residencial de alto nivel con acabados finos y coordinación integral de especialidades en tiempo y forma.",
  },
  {
    category: "Bancario / Corporativo",
    title: "Adecuación Corporativa Scotiabank",
    description:
      "Obra de alta complejidad técnica con estándares internacionales de seguridad y continuidad operativa.",
  },
  {
    category: "Industrial / Oficinas",
    title: "Oficinas Generales Tequila Herradura",
    description:
      "Adecuación y nuevos espacios corporativos para operaciones y dirección en plantas y oficinas generales.",
  },
  {
    category: "Educativo",
    title: "Proyectos ITESM Campus Guadalajara",
    description:
      "Infraestructura y remodelaciones en campus para aulas, laboratorios y áreas de convivencia estudiantil.",
  },
  {
    category: "Salud / Institucional",
    title: "Hospitales IMSS",
    description:
      "Intervenciones en instalaciones de salud con énfasis en normativa, flujos clínicos y disponibilidad de servicios.",
  },
  {
    category: "Residencial",
    title: "Residencia Providencia",
    description:
      "Residencia ejecutiva con énfasis en confort, iluminación natural y detalle arquitectónico.",
  },
];

/** Orden para la franja “Instituciones que han avalado…” */
export const aboutInstitutionIds = [
  "itesm",
  "scotiabank",
  "imss",
  "herradura",
  "opus",
  "promex",
] as const;
