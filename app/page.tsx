import type { Metadata } from "next";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { siteDescription, siteName, siteTitleDefault } from "@/lib/site-config";

export const metadata: Metadata = {
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitleDefault,
    description: siteDescription,
    url: "/",
    siteName: siteName,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Remodelaciones y construcción — Edificación Especializada",
      },
    ],
  },
};

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
