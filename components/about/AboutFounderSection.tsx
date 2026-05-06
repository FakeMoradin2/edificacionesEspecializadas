import Image from "next/image";
import {
  founderParagraphs,
  founderQuote,
  founderStats,
} from "@/data/about";

export function AboutFounderSection() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10 lg:gap-14 lg:items-start">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[17.5rem] min-h-[220px] overflow-hidden bg-neutral-200 sm:min-h-0 md:col-span-4 md:mx-0">
            <Image
              src="/ingeniero.jpeg"
              alt="Ing. Ezequiel Hernández Espinosa, fundador y director"
              fill
              className="object-cover object-top"
              sizes="(max-width: 767px) 72vw, (max-width: 1024px) 30vw, 22vw"
              priority
            />
          </div>

          <div className="min-w-0 md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
              Fundador y director
            </p>
            <h1 className="mt-3 break-words text-2xl font-bold uppercase tracking-tight text-black sm:text-3xl lg:text-4xl">
              Ing. Ezequiel Hernández Espinosa
            </h1>

            <blockquote className="mt-8 border-l-4 border-[#0A192F] pl-5">
              <p className="text-base italic leading-relaxed text-[#374151] sm:text-lg">
                “{founderQuote}”
              </p>
            </blockquote>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-[#374151] sm:text-base">
              {founderParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4">
              {founderStats.map((s) => (
                <div key={s.label} className="min-w-0 text-center sm:text-left">
                  <p className="text-xl font-bold tabular-nums text-[#0A192F] sm:text-2xl md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-[#6B7280] sm:text-xs sm:tracking-[0.18em]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
