import { Card } from "@/components/ui/card";
import { Globe2, Building2, Users, Award } from "lucide-react";

const stats = [
  {
    title: "Global Reach",
    value: "50+",
    description: "Countries Served",
    icon: Globe2,
  },
  {
    title: "Corporate Partners",
    value: "500+",
    description: "Leading Companies",
    icon: Building2,
  },
  {
    title: "Professional Network",
    value: "10,000+",
    description: "Trade Professionals",
    icon: Users,
  },
  {
    title: "Industry Recognition",
    value: "25+",
    description: "Industry Awards",
    icon: Award,
  },
];

export function GlobalPresence() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Global Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6 text-center">
              <stat.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
              <p className="font-semibold mb-1">{stat.title}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}