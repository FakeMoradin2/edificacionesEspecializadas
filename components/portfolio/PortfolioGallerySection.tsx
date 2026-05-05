"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolioGalleryImages } from "@/data/portfolioGallery";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function GalleryCard({
  item,
}: {
  item: (typeof portfolioGalleryImages)[number];
}) {
  return (
    <li className="relative aspect-[4/3] w-[min(78vw,280px)] shrink-0 overflow-hidden bg-[#E5E7EB] sm:w-[300px]">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 78vw, 300px"
        className="object-cover object-center grayscale transition duration-500 hover:scale-[1.04] hover:grayscale-0"
      />
    </li>
  );
}

export function PortfolioGallerySection() {
  const reducedMotion = usePrefersReducedMotion();

  if (portfolioGalleryImages.length === 0) {
    return null;
  }

  if (reducedMotion) {
    return (
      <section
        className="border-b border-gray-200 bg-[#F9FAFB]"
        aria-labelledby="portfolio-gallery-heading"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280] md:text-left">
            Portafolio visual
          </p>
          <h2
            id="portfolio-gallery-heading"
            className="mt-2 text-center text-2xl font-bold uppercase tracking-tight text-[#0A192F] sm:text-3xl md:text-left"
          >
            Obra en imágenes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[#6B7280] md:mx-0 md:text-left">
            Vista estática (movimiento reducido). Galería completa abajo en el
            listado de proyectos.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {portfolioGalleryImages.map((item, i) => (
              <GalleryCard key={`${item.src}-static-${i}`} item={item} />
            ))}
          </ul>
        </div>
      </section>
    );
  }

  const loopItems = [...portfolioGalleryImages, ...portfolioGalleryImages];

  return (
    <section
      className="border-b border-gray-200 bg-[#F9FAFB]"
      aria-labelledby="portfolio-gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280] md:text-left">
          Portafolio visual
        </p>
        <h2
          id="portfolio-gallery-heading"
          className="mt-2 text-center text-2xl font-bold uppercase tracking-tight text-[#0A192F] sm:text-3xl md:text-left"
        >
          Obra en imágenes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[#6B7280] md:mx-0 md:text-left">
          Carrusel continuo: pasa el cursor sobre la franja para detenerlo y ver
          cada foto con más calma; el listado detallado sigue debajo.
        </p>

        <div
          className="portfolio-gallery-marquee-wrap mt-8 -mx-1 overflow-hidden py-1 sm:-mx-2"
          role="region"
          aria-label="Carrusel de fotografías de obra"
        >
          <ul className="portfolio-gallery-marquee-track">
            {loopItems.map((item, i) => (
              <GalleryCard key={`${item.src}-loop-${i}`} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
