import Image from "next/image";

export function ContactHero() {
  return (
    <section
      className="relative flex min-h-[min(70dvh,520px)] w-full overflow-hidden sm:min-h-[min(55dvh,480px)]"
      aria-label="Introducción a contacto"
    >
      <Image
        src="/hero.jpeg"
        alt="Espacio corporativo para reuniones de proyecto"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-[0.72] contrast-[1.05] saturate-[0.85]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"
        aria-hidden
      />

      <div className="relative z-10 flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:mx-auto lg:px-8 lg:pb-16 lg:pt-32">
        <div className="max-w-2xl text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-xs">
            Excelencia estructural
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.65rem] md:leading-[1.12]">
            Hablemos de su próximo proyecto
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/92 sm:text-base">
            Nuestro equipo está listo para acompañarlo en la planeación y ejecución,
            con atención personalizada y respuesta ágil en cada etapa del proceso.
          </p>
        </div>
      </div>
    </section>
  );
}
