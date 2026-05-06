/**
 * Proyectos para el portafolio. `filter` coincide con la barra de categorías (excepto "todos").
 */
export type PortfolioFilterId =
  | "todos"
  | "residencial"
  | "corporativo"
  | "institucional"
  | "remodelaciones"
  | "especiales"
  | "peritajes";

export type PortfolioFilterKey = Exclude<PortfolioFilterId, "todos">;

export type PortfolioProject = {
  id: string;
  filter: PortfolioFilterKey;
  title: string;
  location: string;
  client: string;
  description: string;
  /**
   * Foto de la obra (opcional). Ruta bajo `public/`, p. ej. `/portafolio/la-gavia.jpg`.
   * Si no se define, el listado muestra solo texto; al agregarla, aparece la miniatura.
   */
  imageSrc?: string;
};

/** Etiqueta corta para la tarjeta (mayúsculas en UI) */
export const portfolioCategoryLabels: Record<PortfolioFilterKey, string> = {
  residencial: "Residencial",
  corporativo: "Corporativo",
  institucional: "Institucional",
  remodelaciones: "Remodelaciones",
  especiales: "Proyectos especiales",
  peritajes: "Peritajes",
};

export const portfolioFilterTabs: {
  id: PortfolioFilterId;
  label: string;
}[] = [
  { id: "todos", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "corporativo", label: "Corporativo" },
  { id: "institucional", label: "Institucional" },
  { id: "remodelaciones", label: "Remodelaciones" },
  { id: "especiales", label: "Proyectos especiales" },
  { id: "peritajes", label: "Peritajes" },
];

export const portfolioProjects: PortfolioProject[] = [
  // ITESM — institucional
  {
    id: "itesm-bodega-fisica",
    filter: "institucional",
    title: "Bodega Planta Física",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Proyecto institucional en campus: obra y coordinación de especialidades.",
  },
  {
    id: "itesm-auditorio-vi",
    filter: "institucional",
    title: "Auditorio VI",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Intervención en infraestructura de auditorio para operación académica.",
  },
  {
    id: "itesm-pluvial-estacionamiento",
    filter: "remodelaciones",
    title: "Adecuación pluvial estacionamiento principal",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Mejoras pluviales y ordenamiento del estacionamiento principal del campus.",
  },
  {
    id: "itesm-site-pc",
    filter: "institucional",
    title: "Site PC",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Adecuación de espacio tecnológico y soporte a operación campus.",
  },
  {
    id: "itesm-centro-emprendimiento",
    filter: "institucional",
    title: "Centro de emprendimiento",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Implementación de espacio para emprendimiento y vinculación.",
  },
  {
    id: "itesm-elevador-aulas-v",
    filter: "institucional",
    title: "Elevador Aulas V",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Obra de elevación y accesibilidad en conjunto de aulas.",
  },
  {
    id: "itesm-lab-audiovisual",
    filter: "institucional",
    title: "Laboratorio audiovisual",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Adecuación de laboratorio con equipamiento y acabados especializados.",
  },
  {
    id: "itesm-campus-colima",
    filter: "institucional",
    title: "Campus Colima",
    location: "Colima, México",
    client: "ITESM",
    description:
      "Participación en proyecto campus con enfoque institucional.",
  },
  {
    id: "itesm-centro-medios",
    filter: "institucional",
    title: "Centro de Medios",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Espacio para producción y medios con requerimientos técnicos específicos.",
  },
  {
    id: "itesm-labs-santa-anita",
    filter: "institucional",
    title: "Laboratorios preparatoria Santa Anita",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Laboratorios para preparatoria con instalaciones actualizadas.",
  },
  {
    id: "itesm-taller-arquitectura",
    filter: "institucional",
    title: "Construcción de taller de arquitectura",
    location: "Zapopan, Jalisco",
    client: "ITESM",
    description:
      "Taller práctico para formación en arquitectura en campus.",
  },

  // Scotiabank — corporativo
  {
    id: "scotiabank-plaza-sol",
    filter: "corporativo",
    title: "Sucursal Plaza del Sol",
    location: "Guadalajara, Jalisco",
    client: "Scotiabank Inverlat",
    description:
      "Cambio de imagen y adecuación de sucursal bajo estándares corporativos.",
  },
  {
    id: "scotiabank-zapopan",
    filter: "corporativo",
    title: "Sucursal Zapopan",
    location: "Zapopan, Jalisco",
    client: "Scotiabank Inverlat",
    description:
      "Remodelación y adecuación de espacio bancario.",
  },
  {
    id: "scotiabank-colon",
    filter: "corporativo",
    title: "Sucursal Colón",
    location: "Guadalajara, Jalisco",
    client: "Scotiabank Inverlat",
    description:
      "Actualización de imagen institucional y especialidades.",
  },
  {
    id: "scotiabank-tonala",
    filter: "corporativo",
    title: "Sucursal Tonalá",
    location: "Tonalá, Jalisco",
    client: "Scotiabank Inverlat",
    description:
      "Adecuación integral de sucursal.",
  },
  {
    id: "scotiabank-torres",
    filter: "corporativo",
    title: "Sucursal Plaza Las Torres",
    location: "Zapopan, Jalisco",
    client: "Scotiabank Inverlat",
    description:
      "Obra en centro comercial con coordinación de plaza.",
  },
  {
    id: "scotiabank-providencia",
    filter: "corporativo",
    title: "Sucursal Providencia",
    location: "Guadalajara, Jalisco",
    client: "Scotiabank Inverlat",
    description:
      "Cambio de imagen y cumplimiento normativo bancario.",
  },
  {
    id: "scotiabank-tlaquepaque",
    filter: "corporativo",
    title: "Sucursal Tlaquepaque",
    location: "Tlaquepaque, Jalisco",
    client: "Scotiabank Inverlat",
    description:
      "Remodelación y puesta en marcha operativa.",
  },

  // Tequila Herradura — corporativo / comercial
  {
    id: "herradura-oficinas-generales",
    filter: "corporativo",
    title: "Oficinas generales",
    location: "Amatitán, Jalisco",
    client: "Tequila Herradura S.A. de C.V.",
    description:
      "Construcción y adecuación de espacios administrativos centrales.",
  },
  {
    id: "herradura-casa-corporativo",
    filter: "corporativo",
    title: "Corporativo CASA Herradura",
    location: "Amatitán, Jalisco",
    client: "Tequila Herradura S.A. de C.V.",
    description:
      "Complejo corporativo integrado con operación industrial.",
  },
  {
    id: "herradura-locales",
    filter: "corporativo",
    title: "Locales comerciales",
    location: "Jalisco, México",
    client: "Tequila Herradura S.A. de C.V.",
    description:
      "Desarrollo de locales para marca y ventas.",
  },
  {
    id: "herradura-bodega-amatitan",
    filter: "corporativo",
    title: "Bodega Amatitán",
    location: "Amatitán, Jalisco",
    client: "Tequila Herradura S.A. de C.V.",
    description:
      "Infraestructura de almacenamiento y logística.",
  },
  {
    id: "herradura-plaza-pabellon",
    filter: "corporativo",
    title: "Plaza Pabellón",
    location: "Jalisco, México",
    client: "Tequila Herradura S.A. de C.V.",
    description:
      "Espacio comercial y experiencia de marca.",
  },
  {
    id: "herradura-oficinas-ejecutivas",
    filter: "corporativo",
    title: "Oficinas ejecutivas",
    location: "Guadalajara, Jalisco",
    client: "Tequila Herradura S.A. de C.V.",
    description:
      "Adecuación de oficinas ejecutivas en zona corporativa.",
  },
  {
    id: "herradura-aeropuerto",
    filter: "corporativo",
    title: "Local aeropuerto",
    location: "Guadalajara, Jalisco",
    client: "Tequila Herradura S.A. de C.V.",
    description:
      "Local comercial en entorno aeroportuario.",
  },

  // Banca Promex
  {
    id: "promex-red-sucursales",
    filter: "corporativo",
    title: "Red de sucursales Banca Promex",
    location: "Jalisco, Michoacán, Zacatecas, Sinaloa",
    client: "Banca Promex",
    description:
      "Adecuaciones y remodelaciones en más de 60 sucursales en varios estados.",
  },

  // Opus Dei
  {
    id: "opus-jaltepec",
    filter: "institucional",
    title: "Campamentos Jaltepec",
    location: "Estado de México",
    client: "Opus Dei",
    description:
      "Infraestructura para actividades formativas y alojamiento.",
  },
  {
    id: "opus-templo-josemaria",
    filter: "institucional",
    title: "Templo San Josemaría Escrivá",
    location: "Jalisco, México",
    client: "Opus Dei",
    description:
      "Obra religiosa con acabados y detalle arquitectónico.",
  },
  {
    id: "opus-libreria",
    filter: "corporativo",
    title: "Librería",
    location: "Guadalajara, Jalisco",
    client: "Opus Dei",
    description:
      "Adecuación de espacio cultural y comercial.",
  },
  {
    id: "opus-oratorio-cuadra",
    filter: "institucional",
    title: "Oratorio Cuadra",
    location: "Jalisco, México",
    client: "Opus Dei",
    description:
      "Espacio de culto y convivencia.",
  },
  {
    id: "opus-res-americas",
    filter: "residencial",
    title: "Residencia Américas",
    location: "Guadalajara, Jalisco",
    client: "Opus Dei",
    description:
      "Residencia de alto nivel con estándares constructivos rigurosos.",
  },
  {
    id: "opus-auditorio-alto-valle",
    filter: "institucional",
    title: "Auditorio Alto Valle",
    location: "Jalisco, México",
    client: "Opus Dei",
    description:
      "Auditorio para eventos y formación.",
  },
  {
    id: "opus-res-bosque",
    filter: "residencial",
    title: "Residencia Bosque",
    location: "Zapopan, Jalisco",
    client: "Opus Dei",
    description:
      "Vivienda unifamiliar con integración paisajística.",
  },
  {
    id: "opus-remodelaciones",
    filter: "remodelaciones",
    title: "Remodelaciones varias",
    location: "Zona metropolitana GDL",
    client: "Opus Dei",
    description:
      "Conjunto de intervenciones y mejoras en distintos inmuebles.",
  },

  // Obras destacadas — residencial
  {
    id: "res-la-gavia",
    filter: "residencial",
    title: "Residencia La Gavia",
    location: "Zapopan, Jalisco",
    client: "Privado",
    description:
      "Residencia de lujo con acabados de alta gama y sistemas avanzados.",
  },
  {
    id: "res-oxford",
    filter: "residencial",
    title: "Residencia Oxford",
    location: "Zapopan, Jalisco",
    client: "Privado",
    description:
      "Proyecto residencial integral con atención al detalle.",
  },
  {
    id: "res-parque-castellana",
    filter: "residencial",
    title: "Residencia Parque de la Castellana",
    location: "Zapopan, Jalisco",
    client: "Privado",
    description:
      "Vivienda unifamiliar en zona residencial premium.",
  },
  {
    id: "res-paseos-sol",
    filter: "residencial",
    title: "Residencia Paseos del Sol",
    location: "Zapopan, Jalisco",
    client: "Privado",
    description:
      "Obra residencial con espacios familiares amplios.",
  },
  {
    id: "res-providencia",
    filter: "residencial",
    title: "Residencia Providencia",
    location: "Guadalajara, Jalisco",
    client: "Privado",
    description:
      "Residencia ejecutiva con iluminación y confort destacados.",
  },
  {
    id: "res-villas-vallarta",
    filter: "residencial",
    title: "Residencia Villas Vallarta",
    location: "Puerto Vallarta, Jalisco",
    client: "Privado",
    description:
      "Proyecto en zona costera con requerimientos climáticos.",
  },
  {
    id: "res-casa-vitrey",
    filter: "residencial",
    title: "Casa Vitrey",
    location: "Zapopan, Jalisco",
    client: "Privado",
    description:
      "Vivienda con planta arquitectónica personalizada.",
  },
  {
    id: "res-novellis",
    filter: "residencial",
    title: "Residencia Novellis",
    location: "Zapopan, Jalisco",
    client: "Privado",
    description:
      "Residencial con acabados contemporáneos.",
  },
  {
    id: "res-regency",
    filter: "residencial",
    title: "Residencia Regency",
    location: "Zapopan, Jalisco",
    client: "Privado",
    description:
      "Integración de espacios sociales y privados.",
  },
  {
    id: "res-deptos-patria",
    filter: "residencial",
    title: "Departamentos Patria",
    location: "Zapopan, Jalisco",
    client: "Privado",
    description:
      "Conjunto habitacional vertical con amenidades.",
  },
  {
    id: "res-deptos-barcelona",
    filter: "residencial",
    title: "Departamentos Barcelona",
    location: "Guadalajara, Jalisco",
    client: "Privado",
    description:
      "Torre departamental con eficiencia en plantas.",
  },
  {
    id: "res-deptos-santa-rita",
    filter: "residencial",
    title: "Departamentos Santa Rita",
    location: "Zapopan, Jalisco",
    client: "Privado",
    description:
      "Desarrollo habitacional en zona consolidada.",
  },
  {
    id: "res-casa-guerrero-tlajomulco",
    filter: "residencial",
    title: "Casa Guerrero Tlajomulco",
    location: "Tlajomulco, Jalisco",
    client: "Privado",
    description:
      "Vivienda unifamiliar en creciente zona metropolitana.",
  },

  // Comercial y corporativo (destacadas)
  {
    id: "corp-oficinas-almacen-gdl",
    filter: "corporativo",
    title: "Oficinas y almacén Guadalajara",
    location: "Guadalajara, Jalisco",
    client: "Corporativo",
    description:
      "Naves y oficinas para operación logística y administrativa.",
  },
  {
    id: "corp-oficinas-bancarias",
    filter: "corporativo",
    title: "Oficinas bancarias",
    location: "Zona metropolitana GDL",
    client: "Sector financiero",
    description:
      "Adecuación de espacios para operación bancaria.",
  },
  {
    id: "corp-locales-matatlan",
    filter: "corporativo",
    title: "Locales comerciales Matatlán",
    location: "Tonalá, Jalisco",
    client: "Privado",
    description:
      "Desarrollo comercial en corredor de crecimiento.",
  },
  {
    id: "corp-centro-jocotan",
    filter: "corporativo",
    title: "Centro comunitario Jocotán",
    location: "Guadalajara, Jalisco",
    client: "Institucional / Comunitario",
    description:
      "Espacio para servicios y convivencia vecinal.",
  },
  {
    id: "corp-infobox-museo",
    filter: "especiales",
    title: "Proyecto InfoBox Museo de la Ciudad",
    location: "Guadalajara, Jalisco",
    client: "Gobierno municipal",
    description:
      "Intervención especial en espacio museístico y urbano.",
  },

  // Institucional — salud e IMSS
  {
    id: "imss-hgz-45",
    filter: "institucional",
    title: "Hospital General de Zona No. 45 IMSS",
    location: "Jalisco, México",
    client: "IMSS",
    description:
      "Infraestructura hospitalaria bajo normativa de salud.",
  },
  {
    id: "imss-hgz-tala",
    filter: "institucional",
    title: "Hospital General de Zona Tala",
    location: "Tala, Jalisco",
    client: "IMSS",
    description:
      "Ampliación y adecuación de servicios médicos.",
  },
  {
    id: "imss-hgz-colima",
    filter: "institucional",
    title: "Hospital General de Zona Colima",
    location: "Colima, México",
    client: "IMSS",
    description:
      "Obra institucional en complejidad hospitalaria.",
  },
  {
    id: "imss-hgz-nacozari",
    filter: "institucional",
    title: "Hospital General de Zona Nacozari",
    location: "Sonora, México",
    client: "IMSS",
    description:
      "Ejecución de espacios clínicos y soporte.",
  },
  {
    id: "imss-uib",
    filter: "institucional",
    title: "Unidad de Investigación Biomédica",
    location: "Jalisco, México",
    client: "IMSS",
    description:
      "Laboratorios y áreas de investigación con requerimientos técnicos.",
  },
  {
    id: "imss-umf-gdl",
    filter: "institucional",
    title: "Unidad Médico Familiar Guadalajara",
    location: "Guadalajara, Jalisco",
    client: "IMSS",
    description:
      "Atención primaria con instalaciones actualizadas.",
  },
  {
    id: "imss-umf-culiacan",
    filter: "institucional",
    title: "Unidad Médico Familiar Culiacán",
    location: "Culiacán, Sinaloa",
    client: "IMSS",
    description:
      "Clínica familiar con estándar institucional.",
  },
  {
    id: "imss-umf-ags",
    filter: "institucional",
    title: "Unidad Médico Familiar Aguascalientes",
    location: "Aguascalientes, México",
    client: "IMSS",
    description:
      "Obra de salud en esquema IMSS.",
  },
  {
    id: "imss-hosp-tepatitlan",
    filter: "institucional",
    title: "Hospital Tepatitlán",
    location: "Tepatitlán, Jalisco",
    client: "IMSS",
    description:
      "Hospital regional con múltiples especialidades.",
  },
  {
    id: "imss-hosp-zapopan",
    filter: "institucional",
    title: "Hospital Zapopan",
    location: "Zapopan, Jalisco",
    client: "IMSS",
    description:
      "Complejo hospitalario en zona metropolitana.",
  },

  // Industrial y proyectos especiales
  {
    id: "ind-lazaro-cardenas",
    filter: "especiales",
    title: "Planta industrial Lázaro Cárdenas",
    location: "Michoacán, México",
    client: "Industrial",
    description:
      "Obra industrial con procesos y logística coordinados.",
  },
  {
    id: "ind-oficinas-culiacan",
    filter: "especiales",
    title: "Oficinas y almacén Culiacán",
    location: "Culiacán, Sinaloa",
    client: "Industrial",
    description:
      "Nave y oficinas para operación regional.",
  },
  {
    id: "ind-depositos-df",
    filter: "especiales",
    title: "Depósitos de basura DF",
    location: "Ciudad de México",
    client: "Sector público / servicios",
    description:
      "Infraestructura para manejo y acopio.",
  },
  {
    id: "ind-colector-tamazula",
    filter: "especiales",
    title: "Colector Tamazula",
    location: "Jalisco, México",
    client: "Obra civil",
    description:
      "Obra hidráulica y coordinación en campo.",
  },
  {
    id: "ind-dodge-mexico",
    filter: "especiales",
    title: "Dodge de México",
    location: "Jalisco, México",
    client: "Dodge de México",
    description:
      "Espacios industriales y comerciales para marca automotriz.",
  },
  {
    id: "ind-bodegas",
    filter: "especiales",
    title: "Bodegas industriales",
    location: "Varios, México",
    client: "Industrial",
    description:
      "Conjunto de naves y logística.",
  },
  {
    id: "peritaje-sismos-sept-85-imss",
    filter: "peritajes",
    title: "Peritaje por sismos de septiembre de 1985",
    location: "Ciudad de México",
    client: "IMSS",
    description:
      "Peritaje estructural derivado de sismos de septiembre de 1985 en inmuebles institucionales.",
  },
  {
    id: "peritaje-sismos-oct-95-promex",
    filter: "peritajes",
    title: "Peritaje por sismos de octubre de 1995",
    location: "Ciudad de México",
    client: "Banca Promex",
    description:
      "Evaluación y dictamen técnico de afectaciones por sismos de octubre de 1995 en infraestructura bancaria.",
  },
  {
    id: "peritaje-hundimientos-colonia-monumental-2005",
    filter: "peritajes",
    title: "Peritaje por hundimientos en Colonia Monumental",
    location: "Jalisco, México",
    client: "Gobierno del Estado",
    description:
      "Peritaje técnico por hundimientos en la Colonia Monumental, realizado en mayo de 2005 para la autoridad estatal.",
  },
];
