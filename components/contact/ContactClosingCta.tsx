export function ContactClosingCta() {
  return (
    <section
      className="bg-white pb-16 pt-6 sm:pb-20 lg:pb-24"
      aria-labelledby="contact-closing-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="contact-closing-heading"
          className="text-2xl font-bold uppercase leading-tight tracking-tight text-[#0A192F] sm:text-3xl md:text-4xl"
        >
          Su proyecto merece experiencia real
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#6B7280] sm:text-base">
          Garantizamos precisión técnica en cada etapa: desde la primera visita hasta
          la entrega final, con comunicación clara y compromiso administrativo.
        </p>
        <a
          href="#cotizacion"
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 bg-[#0A192F] px-8 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1e3a5f] sm:min-h-0 sm:text-sm"
        >
          Solicitar asesoría profesional
          <span aria-hidden className="inline-block translate-y-px">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
