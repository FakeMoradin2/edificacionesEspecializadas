import { processSteps } from "@/data/contact";

export function ContactProcess() {
  return (
    <section
      className="border-b border-gray-200 bg-[#F8FAFC]"
      aria-labelledby="contact-process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2
          id="contact-process-heading"
          className="text-center text-sm font-bold uppercase tracking-[0.18em] text-[#0A192F]"
        >
          Nuestro proceso
        </h2>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((s) => (
            <li key={s.step}>
              <article className="relative h-full border border-gray-200 bg-white p-6 pt-10 shadow-sm">
                <span
                  className="pointer-events-none absolute left-4 top-3 select-none text-5xl font-bold leading-none text-gray-100 sm:text-6xl"
                  aria-hidden
                >
                  {s.step}
                </span>
                <h3 className="relative text-base font-bold text-[#0A192F]">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-[#6B7280]">
                  {s.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
