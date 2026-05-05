import Link from "next/link";

export function AboutCtaBanner() {
  return (
    <section
      className="bg-[#0A192F] py-14 text-white sm:py-16 lg:py-20"
      aria-labelledby="about-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 lg:pb-2">
        <h2
          id="about-cta-heading"
          className="text-xl font-bold uppercase leading-snug tracking-tight sm:text-2xl lg:text-3xl"
        >
          Consulte la viabilidad técnica de su inversión
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
          Ponga su proyecto en manos de décadas de experiencia comprobable y
          seriedad administrativa.
        </p>
        <Link
          href="/contacto"
          className="mt-8 inline-flex items-center justify-center bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#0A192F] transition-colors hover:bg-gray-100 sm:px-8 sm:text-sm"
        >
          Solicitar consulta directa
        </Link>
      </div>
    </section>
  );
}
