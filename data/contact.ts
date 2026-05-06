/** Datos de contacto y contenido estático de la página Contacto. */

export const contactEmail = "ing.ezequielh@gmail.com";

/** WhatsApp Business — Jalisco (33). Formato internacional para wa.me */
export const whatsappDisplay = "33 3167 8670";
export const whatsappE164 = "523331678670";

/** Mensaje que se abre prellenado al usar el enlace web de WhatsApp */
export const whatsappPrefillMessage =
  "Hola, buen día. Les escribo desde la página de Edificación Especializada.\n\n" +
  "Me interesa solicitar información y una cotización para un proyecto de obra / adecuación. " +
  "¿Podrían orientarme sobre alcance, tiempos y siguiente paso?\n\n" +
  "¡Gracias!";

export const whatsappHref = `https://wa.me/${whatsappE164}?text=${encodeURIComponent(whatsappPrefillMessage)}`;

export const contactAddressLines = [
  "Artemio del Valle Arizpe 4933, Col. Patria Universidad",
  "C.P. 45119, Zapopan, Jalisco",
] as const;

export const contactHoursLines = [
  "Lun — Vie: 09:00 — 14:00",
  "Sáb: 09:00 — 13:00",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Primer contacto",
    description:
      "Reunión inicial para comprender su visión, objetivos y restricciones del proyecto.",
  },
  {
    step: "02",
    title: "Evaluación",
    description:
      "Análisis técnico de viabilidad, ingeniería de valor y estudios preliminares pertinentes.",
  },
  {
    step: "03",
    title: "Propuesta",
    description:
      "Entrega de plan maestro, cronograma y presupuesto transparente alineado a sus metas.",
  },
  {
    step: "04",
    title: "Inicio",
    description:
      "Movilización de recursos y arranque de obra bajo estándares de calidad y seguridad.",
  },
] as const;

export const projectTypeOptions = [
  { value: "", label: "Seleccione una opción" },
  { value: "residencial", label: "Residencial" },
  { value: "corporativo", label: "Corporativo / Oficinas" },
  { value: "industrial", label: "Industrial / Planta" },
  { value: "institucional", label: "Institucional / Salud / Educativo" },
  { value: "remodelacion", label: "Remodelación / Adecuación" },
  { value: "otro", label: "Otro" },
] as const;
