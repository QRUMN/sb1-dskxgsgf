import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "World Trade Compliance has been instrumental in helping us navigate complex international regulations.",
    author: "John Smith",
    role: "Import/Export Manager",
    company: "Global Logistics Co.",
  },
  {
    quote: "The training programs are comprehensive and directly applicable to our daily operations.",
    author: "Maria Garcia",
    role: "Compliance Director",
    company: "International Trade Corp",
  },
  {
    quote: "Their expertise and support have been invaluable to our business growth.",
    author: "James Wilson",
    role: "CEO",
    company: "Export Solutions Ltd",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-950">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}