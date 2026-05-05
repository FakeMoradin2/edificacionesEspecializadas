"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const IMAGE_CANDIDATES = [
  "/herradura.jpeg",
  "/herradura.jpg",
  "/herradura.png",
  "/herradura.webp",
];

const scopeItems = [
  "Demolición y desmantelamiento selectivo",
  "Instalaciones eléctricas y de datos",
  "Sistemas HVAC y especialidades",
  "Acabados arquitectónicos de alto nivel",
];

export function FeaturedCaseStudy() {
  const [imgIdx, setImgIdx] = useState(0);
  const imgSrc = IMAGE_CANDIDATES[imgIdx];

  return (
    <section
      className="border-b border-[#E5E5E5] bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="caso-destacado-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] sm:text-xs md:text-left">
          Proyectos que respaldan nuestra experiencia
        </p>
        <h2
          id="caso-destacado-heading"
          className="mt-3 text-center text-2xl font-bold uppercase tracking-tight text-black sm:text-3xl md:text-left"
        >
          Estudio de caso destacado
        </h2>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
            {imgIdx < IMAGE_CANDIDATES.length ? (
              <Image
                src={imgSrc}
                alt="Obra corporativa Tequila Herradura"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
                onError={() => setImgIdx((i) => i + 1)}
                unoptimized
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-neutral-200 px-4 text-center text-sm text-neutral-500">
                Coloca tu imagen en{" "}
                <span className="font-mono text-neutral-700">
                  public/herradura.jpeg
                </span>{" "}
                (o .jpg / .png)
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-bold leading-snug text-black sm:text-2xl">
              Obras para Tequila Herradura S.A. de C.V.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#374151] sm:text-base">
              Cartera de adecuación corporativa, industrial y comercial ejecutada
              entre 2001 y 2005 con alta exigencia técnica y cumplimiento de
              estándares operativos en planta y oficinas.
            </p>

            <hr className="my-8 border-[#E5E5E5]" />

            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                  Cliente
                </dt>
                <dd className="mt-1 text-sm font-semibold text-black sm:text-base">
                  Tequila Herradura S.A. de C.V.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                  Ubicación
                </dt>
                <dd className="mt-1 text-sm font-semibold text-black sm:text-base">
                  Amatitán y zona metro, Jalisco
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                  Periodo
                </dt>
                <dd className="mt-1 text-sm font-semibold text-black sm:text-base">
                  2001 – 2005
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                  Tipo
                </dt>
                <dd className="mt-1 text-sm font-semibold text-black sm:text-base">
                  Corporativo, industrial y comercial
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                Alcance del proyecto
              </p>
              <ul className="mt-4 space-y-3">
                {scopeItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#374151]">
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/portafolio"
              className="mt-10 inline-flex w-full items-center justify-center border border-black px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-black hover:text-white sm:w-auto sm:self-start"
            >
              Ver detalles del proyecto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
