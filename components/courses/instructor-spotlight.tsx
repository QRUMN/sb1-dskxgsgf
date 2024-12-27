import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const instructors = [
  {
    name: "Sarah Chen",
    title: "Senior Trade Compliance Expert",
    avatar: "SC",
    rating: 4.9,
    students: 3200,
    courses: 5,
  },
  {
    name: "Michael Rodriguez",
    title: "Customs Operations Specialist",
    avatar: "MR",
    rating: 4.8,
    students: 2800,
    courses: 4,
  },
  {
    name: "David Kim",
    title: "International Trade Consultant",
    avatar: "DK",
    rating: 4.9,
    students: 3100,
    courses: 6,
  },
];

export function InstructorSpotlight() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Learn from Industry Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <Card key={instructor.name} className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <div className="flex h-full w-full items-center justify-center bg-primary text-primary-foreground">
                    {instructor.avatar}
                  </div>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{instructor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{instructor.title}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      {instructor.rating}
                    </div>
                    <span>•</span>
                    <span>{instructor.students} students</span>
                    <span>•</span>
                    <span>{instructor.courses} courses</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}