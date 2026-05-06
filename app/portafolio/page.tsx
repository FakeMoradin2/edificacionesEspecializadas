import type { Metadata } from "next";
import { PortfolioBottomCta } from "@/components/portfolio/PortfolioBottomCta";
import { PortfolioClientsStrip } from "@/components/portfolio/PortfolioClientsStrip";
import { PortfolioFeaturedCase } from "@/components/portfolio/PortfolioFeaturedCase";
import { PortfolioGallerySection } from "@/components/portfolio/PortfolioGallerySection";
import { PortfolioListSection } from "@/components/portfolio/PortfolioListSection";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { siteName } from "@/lib/site-config";

const title =
  "Portafolio de remodelaciones, obra institucional y proyectos corporativos";
const description =
  "Proyectos de remodelación, adecuaciones, obra nueva e institucional: " +
  "salud, educación, banca y vivienda. Referencias y alcance de " +
  siteName +
  ".";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portafolio" },
  openGraph: {
    title,
    description,
    url: "/portafolio",
    siteName,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function PortafolioPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PortfolioHero />
      <PortfolioGallerySection />
      <PortfolioListSection />
      <PortfolioFeaturedCase />
      <PortfolioClientsStrip />
      <PortfolioBottomCta />
    </main>
  );
}
