"use client";

import { Suspense } from "react";
import { UserDashboardContent } from "@/components/dashboard/user/content";
import { DashboardShell } from "@/components/dashboard/shell";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function UserDashboardPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DashboardShell>
        <UserDashboardContent />
      </DashboardShell>
    </Suspense>
  );
}