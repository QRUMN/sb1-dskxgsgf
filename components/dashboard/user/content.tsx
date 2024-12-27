"use client";

import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/hooks/use-auth";
import { BookOpen, MessageSquare, Calendar, Award } from "lucide-react";

export function UserDashboardContent() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}</h1>
        <p className="text-muted-foreground">
          Track your learning progress and engage with the community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-1">Enrolled Courses</h3>
          <p className="text-2xl font-bold">3</p>
        </Card>
        <Card className="p-6">
          <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-1">Community Posts</h3>
          <p className="text-2xl font-bold">12</p>
        </Card>
        <Card className="p-6">
          <Calendar className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-1">Upcoming Events</h3>
          <p className="text-2xl font-bold">2</p>
        </Card>
        <Card className="p-6">
          <Award className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-1">Certifications</h3>
          <p className="text-2xl font-bold">1</p>
        </Card>
      </div>
    </div>
  );
}