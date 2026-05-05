import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ClientsMarquee />
      <CapabilitiesSection />
      <FeaturedCaseStudy />
      <StatsStrip />
    </main>
  );
}
