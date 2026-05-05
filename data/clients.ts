/** Marcas e instituciones (tooltip + pie de foto para reconocimiento). */

/**
 * Orden de intento para la marca Tequila Herradura (ClientLogoMark, carrusel, Nosotros, etc.).
 * Logo principal en `public/Herradura.png`; respaldos por si se renombra o falta el archivo.
 */
export const herraduraMarkImageCandidates = [
  "/Herradura.png",
  "/herradura.png",
  "/herradura.jpg",
  "/herradura.webp",
  "/logos/herradura.png",
  "/logos/herradura.jpg",
  "/logos/herradura.jpeg",
  "/logos/herradura.webp",
  "/logos/herradura.svg",
] as const;

export type ClientBrand = {
  id: string;
  label: string;
  fullName: string;
  monogram: string;
  /** Nombre corto visible bajo el logo para quien no identifique el símbolo */
  caption: string;
};

export const clientBrands: ClientBrand[] = [
  {
    id: "itesm",
    label: "ITESM",
    fullName: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
    monogram: "TEC",
    caption: "Tec de Monterrey",
  },
  {
    id: "scotiabank",
    label: "Scotiabank Inverlat",
    fullName: "Scotiabank Inverlat",
    monogram: "SB",
    caption: "Scotiabank",
  },
  {
    id: "herradura",
    label: "TEQUILA HERRADURA",
    fullName: "Tequila Herradura",
    monogram: "HERR",
    caption: "Tequila Herradura",
  },
  {
    id: "promex",
    label: "Banca Promex",
    fullName: "Banca Promex",
    monogram: "PMX",
    caption: "Banca Promex",
  },
  {
    id: "imss",
    label: "IMSS",
    fullName: "Instituto Mexicano del Seguro Social",
    monogram: "IMSS",
    caption: "Seguro Social (IMSS)",
  },
  {
    id: "jalisco",
    label: "Gobierno de Jalisco",
    fullName: "Gobierno del Estado de Jalisco",
    monogram: "JAL",
    caption: "Gobierno de Jalisco",
  },
  {
    id: "opus",
    label: "Opus Dei",
    fullName: "Opus Dei",
    monogram: "OPUS",
    caption: "Opus Dei",
  },
  {
    id: "jaltepec",
    label: "Campamentos Jaltepec",
    fullName: "Campamentos Jaltepec",
    monogram: "JALT",
    caption: "Campamentos Jaltepec",
  },
  {
    id: "fundacion-alemana",
    label: "Fundación Alemana",
    fullName: "Fundación Alemana de Cajas de Ahorro",
    monogram: "FAC",
    caption: "Fundación Alemana",
  },
  {
    id: "casa-herradura",
    label: "CASA Herradura",
    fullName: "CASA Herradura",
    monogram: "CASA",
    caption: "CASA Herradura",
  },
  {
    id: "dodge",
    label: "Dodge de México",
    fullName: "Dodge de México",
    monogram: "DODGE",
    caption: "Dodge México",
  },
  {
    id: "fertimex",
    label: "FERTIMEX",
    fullName: "FERTIMEX",
    monogram: "FTX",
    caption: "Fertimex",
  },
  {
    id: "bancen",
    label: "BanCEN",
    fullName: "BanCEN / Oficinas Bancarias",
    monogram: "BC",
    caption: "BanCEN",
  },
  {
    id: "pepsi",
    label: "Pepsi Cola",
    fullName: "Pepsi Cola",
    monogram: "PEPSI",
    caption: "Pepsi",
  },
  {
    id: "cic",
    label: "CIC Jalisco",
    fullName: "Colegio de Ingenieros Civiles de Jalisco",
    monogram: "CIC",
    caption: "Ing. civiles Jalisco (CMIC)",
  },
  {
    id: "udeg",
    label: "Universidad de Guadalajara",
    fullName: "Universidad de Guadalajara",
    monogram: "UdeG",
    caption: "Universidad de Guadalajara",
  },
  {
    id: "ic-mexico-norte",
    label: "IC México-Norte",
    fullName: "Instituto Cultural México Norteamericano",
    monogram: "ICMN",
    caption: "Inst. Cultural México-Norte",
  },
  {
    id: "orendain",
    label: "Constructora Orendain",
    fullName: "Constructora Orendain",
    monogram: "ORE",
    caption: "Constructora Orendain",
  },
  {
    id: "construcciones-alimentaciones",
    label: "Construcciones y Alimentaciones",
    fullName: "Construcciones y Alimentaciones S.A. de C.V.",
    monogram: "CyA",
    caption: "Construcciones y Alimentaciones",
  },
  {
    id: "grupo-io",
    label: "Grupo Constructor IO",
    fullName: "Grupo Constructor IO S.A. de C.V.",
    monogram: "GCIO",
    caption: "Grupo Constructor IO",
  },
];

/** Orden del carrusel en la página de inicio (solo estas marcas). */
export const homeMarqueeClientIds = [
  "itesm",
  "scotiabank",
  "imss",
  "herradura",
  "opus",
  "promex",
] as const;

const clientBrandById = new Map(clientBrands.map((c) => [c.id, c]));

export const homeMarqueeBrands: ClientBrand[] = homeMarqueeClientIds.map(
  (id) => {
    const brand = clientBrandById.get(id);
    if (!brand) {
      throw new Error(`homeMarqueeClientIds: marca no encontrada "${id}"`);
    }
    return brand;
  },
);
