import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-3.5rem)] w-full overflow-hidden sm:min-h-[calc(100dvh-4rem)]"
      aria-label="Presentación"
    >
      <Image
        src="/hero.jpeg"
        alt="Edificio moderno con fachada acristalada"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-[0.88] contrast-[1.08] saturate-[1.05]"
      />

      {/* Base: refuerza el lado del texto; luego viñeta y mezcla para un look más premium */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/[0.9] via-[#0A192F]/[0.58] to-[#0b1829]/[0.38]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/15" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.35)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.55),0_0_1px_rgba(0,0,0,0.8)] sm:text-sm">
            Excelencia en construcción desde 1984
          </p>

          <h1 className="mt-4 text-2xl font-bold leading-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.5),0_4px_48px_rgba(0,0,0,0.4)] sm:mt-5 sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
            Construcción y remodelación respaldada por más de 40 años de
            experiencia.
          </h1>

          <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-white/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] sm:mt-5 sm:text-base">
            Especialistas en soluciones integrales para proyectos residenciales
            premium, entornos corporativos de alto nivel y complejos
            institucionales de gran escala.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/portafolio"
              className="inline-flex min-h-12 items-center justify-center rounded-none bg-white px-6 py-3 text-center text-xs font-bold uppercase tracking-wide text-[#0A192F] shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition hover:bg-white/95 active:bg-white/90 sm:min-h-0 sm:px-7 sm:text-sm"
            >
              Ver portafolio
            </Link>
            <Link
              href="/nosotros"
              className="inline-flex min-h-12 items-center justify-center rounded-none border border-white/95 bg-white/[0.07] px-6 py-3 text-center text-xs font-bold uppercase tracking-wide text-white shadow-[0_2px_20px_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition hover:bg-white/15 active:bg-white/20 sm:min-h-0 sm:px-7 sm:text-sm"
            >
              Nuestra trayectoria
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
