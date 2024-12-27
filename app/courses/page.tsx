import { CoursesHero } from "@/components/courses/hero";
import { CourseFilters } from "@/components/courses/filters";
import { CourseGrid } from "@/components/courses/course-grid";
import { InstructorSpotlight } from "@/components/courses/instructor-spotlight";

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <CoursesHero />
      <CourseFilters />
      <CourseGrid />
      <InstructorSpotlight />
    </div>
  );
}