"use client";

import { useAuth } from "@/lib/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

interface AuthStatusProps {
  onLogin: () => void;
  onRegister: () => void;
}

export function AuthStatus({ onLogin, onRegister }: AuthStatusProps) {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <UserCircle className="h-5 w-5" />
          <span className="text-sm font-medium">{user.name}</span>
        </div>
        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" onClick={onLogin}>
        Login
      </Button>
      <Button onClick={onRegister}>
        Sign Up
      </Button>
    </div>
  );
}