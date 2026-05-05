import { AboutCtaBanner } from "@/components/about/AboutCtaBanner";
import { AboutFeaturedProjects } from "@/components/about/AboutFeaturedProjects";
import { AboutFounderSection } from "@/components/about/AboutFounderSection";
import { AboutInstitutionsStrip } from "@/components/about/AboutInstitutionsStrip";

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
