import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Award } from "lucide-react";

const courses = [
  {
    title: "Import/Export Fundamentals",
    description: "Master the basics of international trade operations",
    instructor: "Sarah Chen",
    level: "intro",
    duration: "6 weeks",
    students: 1240,
    price: 299,
  },
  {
    title: "Advanced Customs Compliance",
    description: "Deep dive into customs regulations and compliance",
    instructor: "Michael Rodriguez",
    level: "expert",
    duration: "8 weeks",
    students: 856,
    price: 499,
  },
  {
    title: "Trade Agreements & Documentation",
    description: "Understanding international trade agreements",
    instructor: "David Kim",
    level: "intermediate",
    duration: "6 weeks",
    students: 1120,
    price: 399,
  },
];

export function CourseGrid() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.title} className="flex flex-col">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={course.level === "intro" ? "secondary" : 
                              course.level === "intermediate" ? "default" : 
                              "destructive"}>
                    {course.level}
                  </Badge>
                  <span className="text-lg font-bold">${course.price}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    {course.instructor}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {course.students} students
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