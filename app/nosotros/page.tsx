import type { Metadata } from "next";
import { AboutCtaBanner } from "@/components/about/AboutCtaBanner";
import { AboutFeaturedProjects } from "@/components/about/AboutFeaturedProjects";
import { AboutFounderSection } from "@/components/about/AboutFounderSection";
import { AboutInstitutionsStrip } from "@/components/about/AboutInstitutionsStrip";
import { siteName } from "@/lib/site-config";

const title = "Nosotros — experiencia en remodelaciones y obra especializada";
const description =
  "Trayectoria del despacho, enfoque en remodelaciones, adecuaciones y proyectos " +
  "institucionales y corporativos con estándares de calidad. " +
  siteName +
  ", Zapopan, Jalisco.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title,
    description,
    url: "/nosotros",
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

export default function NosotrosPage() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutFounderSection />
      <AboutFeaturedProjects />
      <AboutInstitutionsStrip />
      <AboutCtaBanner />
    </main>
  );
}
