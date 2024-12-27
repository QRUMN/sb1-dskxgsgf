import { AboutHero } from "@/components/about/hero";
import { AboutMission } from "@/components/about/mission";
import { TeamSection } from "@/components/about/team";
import { Testimonials } from "@/components/about/testimonials";
import { GlobalPresence } from "@/components/about/global-presence";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <TeamSection />
      <GlobalPresence />
      <Testimonials />
    </div>
  );
}