import Image from "next/image";

export function PortfolioHero() {
  return (
    <section
      className="relative flex min-h-[min(52dvh,420px)] w-full overflow-hidden sm:min-h-[min(45dvh,380px)]"
      aria-label="Trayectoria y experiencia"
    >
      <Image
        src="/hero.jpeg"
        alt=""
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="object-cover object-center brightness-[0.55] blur-[2px]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative z-10 flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-12 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:mx-auto lg:px-8 lg:pb-16">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl md:text-4xl">
            Trayectoria y experiencia
          </h1>
          <p className="mt-3 text-lg font-medium text-white/95 sm:text-xl">
            Proyectos que respaldan nuestra trayectoria
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/88 sm:text-base">
            Más de 40 años desarrollando proyectos residenciales, corporativos e
            institucionales con calidad, precisión y atención personalizada.
          </p>
          <span
            className="mt-8 block h-1 w-16 bg-white"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
