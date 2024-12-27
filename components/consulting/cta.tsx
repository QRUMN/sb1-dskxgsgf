import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ConsultingCTA() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a consultation with our trade compliance experts today.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}