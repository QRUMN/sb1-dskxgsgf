import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Initial Assessment",
    description: "We evaluate your current trade compliance practices and identify areas for improvement.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Our experts create a customized compliance strategy tailored to your business needs.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We help you implement recommended changes and best practices.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Continuous monitoring and support to ensure sustained compliance.",
  },
];

export function ConsultingProcess() {
  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-950">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}