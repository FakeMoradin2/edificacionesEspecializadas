export type Capability = {
  code: string;
  category: string;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    code: "01",
    category: "ESTRUCTURAS",
    title: "Construcción General",
    description:
      "Ejecución integral de obra civil para naves industriales y edificios.",
  },
  {
    code: "02",
    category: "CORPORATIVO",
    title: "Remodelación Corporativa",
    description:
      "Adecuación de interiores de alto tráfico para firmas institucionales.",
  },
  {
    code: "03",
    category: "RESIDENCIAL",
    title: "Edificación Residencial Premium",
    description:
      "Desarrollos exclusivos con los más altos estándares de lujo y detalle.",
  },
  {
    code: "04",
    category: "MANAGEMENT",
    title: "Supervisión y Dirección de Obra",
    description:
      "Garantía de calidad y cumplimiento normativo en cada etapa.",
  },
  {
    code: "05",
    category: "TÉCNICO",
    title: "Peritajes y Dictámenes Técnicos",
    description: "Análisis estructural y legal de inmuebles existentes.",
  },
  {
    code: "06",
    category: "CONTROL",
    title: "Presupuestos y Control de Costos",
    description:
      "Ingeniería financiera para la optimización de recursos.",
  },
  {
    code: "07",
    category: "DISEÑO",
    title: "Diseño Arquitectónico",
    description:
      "Conceptualización de espacios funcionales y estéticos.",
  },
];
