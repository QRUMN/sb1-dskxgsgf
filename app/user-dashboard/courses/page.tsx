import { Suspense } from "react";
import { DashboardShell } from "@/components/dashboard/shell";
import { UserCoursesContent } from "@/components/dashboard/user/courses/content";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function UserCoursesPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DashboardShell>
        <UserCoursesContent />
      </DashboardShell>
    </Suspense>
  );
}