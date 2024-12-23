"use client";

import Link from "next/link";
import { useAuth } from "@/lib/hooks/use-auth";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings,
  BookOpen,
  MessageSquare,
  Calendar
} from "lucide-react";

export function DashboardSidebar() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const links = [
    {
      href: isAdmin ? "/admin-dashboard" : "/user-dashboard",
      icon: LayoutDashboard,
      label: "Overview",
    },
    {
      href: "/courses",
      icon: BookOpen,
      label: "Courses",
    },
    {
      href: "/community",
      icon: MessageSquare,
      label: "Community",
    },
    {
      href: "/events",
      icon: Calendar,
      label: "Events",
    },
    ...(isAdmin
      ? [
          {
            href: "/admin-dashboard/users",
            icon: Users,
            label: "Users",
          },
          {
            href: "/admin-dashboard/reports",
            icon: FileText,
            label: "Reports",
          },
        ]
      : []),
    {
      href: "/settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  return (
    <aside className="w-64 border-r min-h-[calc(100vh-3.5rem)] p-4 bg-muted/50">
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium",
              "hover:bg-accent hover:text-accent-foreground",
              "transition-colors"
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}