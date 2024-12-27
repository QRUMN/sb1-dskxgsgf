import { ConsultingHero } from "@/components/consulting/hero";
import { ConsultingServices } from "@/components/consulting/services";
import { ConsultingProcess } from "@/components/consulting/process";
import { ConsultingCTA } from "@/components/consulting/cta";

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      <ConsultingHero />
      <ConsultingServices />
      <ConsultingProcess />
      <ConsultingCTA />
    </div>
  );
}