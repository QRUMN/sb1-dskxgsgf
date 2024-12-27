import { Suspense } from "react";
import { DashboardShell } from "@/components/dashboard/shell";
import { UserCommunityContent } from "@/components/dashboard/user/community/content";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function UserCommunityPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DashboardShell>
        <UserCommunityContent />
      </DashboardShell>
    </Suspense>
  );
}