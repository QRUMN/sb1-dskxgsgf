import { Card } from "@/components/ui/card";
import { Video, Users, BookOpen, Globe2 } from "lucide-react";

const categories = [
  {
    title: "Live Webinars",
    description: "Interactive online sessions with Q&A",
    icon: Video,
    count: 12,
  },
  {
    title: "Networking Events",
    description: "Connect with industry professionals",
    icon: Users,
    count: 8,
  },
  {
    title: "Training Workshops",
    description: "Hands-on learning experiences",
    icon: BookOpen,
    count: 6,
  },
  {
    title: "Global Conferences",
    description: "International trade summits",
    icon: Globe2,
    count: 4,
  },
];

export function EventCategories() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="p-6">
              <category.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
              <span className="text-sm font-medium">{category.count} upcoming</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}