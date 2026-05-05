import { ClientLogoMark } from "@/components/ClientLogoMark";
import type { ClientBrand } from "@/data/clients";
import { clientBrands } from "@/data/clients";

const stripIds = [
  "itesm",
  "scotiabank",
  "imss",
  "herradura",
  "opus",
  "promex",
  "jalisco",
] as const;

function ordered(): ClientBrand[] {
  const map = new Map(clientBrands.map((c) => [c.id, c]));
  return stripIds.map((id) => map.get(id)).filter(Boolean) as ClientBrand[];
}

export function PortfolioClientsStrip() {
  const brands = ordered();

  return (
    <section
      className="border-b border-gray-200 bg-[#F3F4F6] py-12 sm:py-14"
      aria-label="Organizaciones que confían en nosotros"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9CA3AF] sm:text-[11px]">
          Organizaciones que confían en nosotros
        </p>
        <ul className="mx-auto mt-8 flex max-w-6xl flex-wrap items-end justify-center gap-x-6 gap-y-9 sm:gap-x-10 lg:justify-between lg:gap-x-8">
          {brands.map((c) => (
            <li
              key={c.id}
              className="flex justify-center grayscale opacity-90"
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
