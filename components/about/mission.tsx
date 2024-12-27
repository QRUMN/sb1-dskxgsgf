import { Card } from "@/components/ui/card";
import { Target, Heart, Users } from "lucide-react";

const values = [
  {
    title: "Our Mission",
    description: "To empower businesses with the knowledge and tools needed to navigate global trade compliance confidently.",
    icon: Target,
  },
  {
    title: "Our Values",
    description: "Integrity, excellence, and continuous learning drive everything we do.",
    icon: Heart,
  },
  {
    title: "Our Community",
    description: "Building a global network of trade compliance professionals and experts.",
    icon: Users,
  },
];

export function AboutMission() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="p-6">
              <value.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{value.title}</h2>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}