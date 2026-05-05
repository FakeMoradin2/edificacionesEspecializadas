import { ClientLogoMark } from "@/components/ClientLogoMark";
import type { ClientBrand } from "@/data/clients";
import { clientBrands } from "@/data/clients";
import { aboutInstitutionIds } from "@/data/about";

function orderedBrands(): ClientBrand[] {
  const map = new Map(clientBrands.map((c) => [c.id, c]));
  return aboutInstitutionIds
    .map((id) => map.get(id))
    .filter((c): c is ClientBrand => c != null);
}

export function ContactTrustStrip() {
  const brands = orderedBrands();

  return (
    <section
      className="border-b border-gray-200 bg-white"
      aria-labelledby="contact-trust-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9CA3AF] sm:text-xs">
          Trayectoria comprobada
        </p>
        <h2
          id="contact-trust-heading"
          className="mx-auto mt-3 max-w-4xl text-center text-xl font-bold uppercase leading-snug tracking-tight text-[#0A192F] sm:text-2xl md:text-3xl"
        >
          Más de 40 años construyendo relaciones de confianza
        </h2>

        <ul className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-2 justify-items-stretch gap-x-5 gap-y-10 px-0 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-6 lg:gap-x-6">
          {brands.map((c) => (
            <li
              key={c.id}
              className="flex min-w-0 items-stretch justify-center grayscale"
            >
              <ClientLogoMark
                layout="grid"
                id={c.id}
                label={c.label}
                fullName={c.fullName}
                caption={c.caption}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
