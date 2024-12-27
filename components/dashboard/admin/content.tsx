"use client";

import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/hooks/use-auth";
import { Users, BookOpen, DollarSign, TrendingUp } from "lucide-react";

export function AdminDashboardContent() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor platform activity and manage users.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <Users className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-1">Total Users</h3>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-6">
          <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-1">Active Courses</h3>
          <p className="text-2xl font-bold">45</p>
        </Card>
        <Card className="p-6">
          <DollarSign className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-1">Revenue</h3>
          <p className="text-2xl font-bold">$52,489</p>
        </Card>
        <Card className="p-6">
          <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-1">Growth</h3>
          <p className="text-2xl font-bold">+24%</p>
        </Card>
      </div>
    </div>
  );
}