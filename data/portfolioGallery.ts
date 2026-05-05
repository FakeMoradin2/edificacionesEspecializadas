/**
 * Galería del portafolio (fotos de obra) tomada de archivos locales en `public/`.
 * Se usan las 10 capturas que agregaste para alimentar el carrusel.
 */
export type PortfolioGalleryItem = {
  src: string;
  alt: string;
};

const localImage = (fileName: string) => `/${encodeURI(fileName)}`;

export const portfolioGalleryImages: PortfolioGalleryItem[] = [
  {
    src: localImage("Captura de pantalla 2026-05-04 a la(s) 11.59.28 p.m..png"),
    alt: "Proyecto de obra - captura 01",
  },
  {
    src: localImage("Captura de pantalla 2026-05-04 a la(s) 11.59.37 p.m..png"),
    alt: "Proyecto de obra - captura 02",
  },
  {
    src: localImage("Captura de pantalla 2026-05-04 a la(s) 11.59.58 p.m..png"),
    alt: "Proyecto de obra - captura 03",
  },
  {
    src: localImage("Captura de pantalla 2026-05-05 a la(s) 12.00.20 a.m..png"),
    alt: "Proyecto de obra - captura 04",
  },
  {
    src: localImage("Captura de pantalla 2026-05-05 a la(s) 12.00.44 a.m..png"),
    alt: "Proyecto de obra - captura 05",
  },
  {
    src: localImage("Captura de pantalla 2026-05-05 a la(s) 12.01.03 a.m..png"),
    alt: "Proyecto de obra - captura 06",
  },
  {
    src: localImage("Captura de pantalla 2026-05-05 a la(s) 12.01.12 a.m..png"),
    alt: "Proyecto de obra - captura 07",
  },
  {
    src: localImage("Captura de pantalla 2026-05-05 a la(s) 12.01.27 a.m..png"),
    alt: "Proyecto de obra - captura 08",
  },
  {
    src: localImage("Captura de pantalla 2026-05-05 a la(s) 12.01.41 a.m..png"),
    alt: "Proyecto de obra - captura 09",
  },
  {
    src: localImage("Captura de pantalla 2026-05-05 a la(s) 12.01.59 a.m..png"),
    alt: "Proyecto de obra - captura 10",
  },
];
