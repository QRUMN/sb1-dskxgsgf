import { Card } from "@/components/ui/card";
import { Shield, FileText, Scale, Globe2 } from "lucide-react";

const services = [
  {
    title: "Compliance Audits",
    description: "Comprehensive review of your trade compliance processes and documentation",
    icon: Shield,
  },
  {
    title: "Documentation Review",
    description: "Expert analysis of import/export documentation and procedures",
    icon: FileText,
  },
  {
    title: "Regulatory Guidance",
    description: "Up-to-date advice on trade regulations and compliance requirements",
    icon: Scale,
  },
  {
    title: "Global Trade Strategy",
    description: "Strategic planning for international trade operations",
    icon: Globe2,
  },
];

export function ConsultingServices() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="p-6">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}