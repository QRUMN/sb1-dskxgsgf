import { Suspense } from "react";
import { DashboardShell } from "@/components/dashboard/shell";
import { UserEventsContent } from "@/components/dashboard/user/events/content";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function UserEventsPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DashboardShell>
        <UserEventsContent />
      </DashboardShell>
    </Suspense>
  );
}