import { PortfolioBottomCta } from "@/components/portfolio/PortfolioBottomCta";
import { PortfolioClientsStrip } from "@/components/portfolio/PortfolioClientsStrip";
import { PortfolioFeaturedCase } from "@/components/portfolio/PortfolioFeaturedCase";
import { PortfolioGallerySection } from "@/components/portfolio/PortfolioGallerySection";
import { PortfolioListSection } from "@/components/portfolio/PortfolioListSection";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";

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
