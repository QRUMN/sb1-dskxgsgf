"use client"

import { Suspense } from "react";
import { AdminDashboardContent } from "@/components/dashboard/admin/content";
import { DashboardShell } from "@/components/dashboard/shell";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function AdminDashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <DashboardShell>
          <AdminDashboardContent />
        </DashboardShell>
      </Suspense>
    </div>
  );
}
