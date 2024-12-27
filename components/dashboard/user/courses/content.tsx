"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Award } from "lucide-react";

const enrolledCourses = [
  {
    id: 1,
    title: "Import/Export Fundamentals",
    progress: 65,
    nextLesson: "International Documentation",
    timeLeft: "2h 30m",
    totalModules: 8,
    completedModules: 5,
  },
  {
    id: 2,
    title: "Trade Agreements & Documentation",
    progress: 30,
    nextLesson: "USMCA Requirements",
    timeLeft: "4h 15m",
    totalModules: 6,
    completedModules: 2,
  },
];

export function UserCoursesContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Courses</h1>
        <p className="text-muted-foreground">Track your learning progress</p>
      </div>

      <div className="grid gap-6">
        {enrolledCourses.map((course) => (
          <Card key={course.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {course.completedModules}/{course.totalModules} Modules
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.timeLeft} left
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Next: {course.nextLesson}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}