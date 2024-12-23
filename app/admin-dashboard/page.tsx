"use client";

import { Suspense } from "react";
import { AdminDashboardContent } from "@/components/dashboard/admin/content";
import { DashboardShell } from "@/components/dashboard/shell";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DashboardShell>
        <AdminDashboardContent />
      </DashboardShell>
    </Suspense>
  );
}