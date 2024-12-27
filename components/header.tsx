"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe2, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { LoginModal } from "@/components/auth/login-modal";
import { RegisterModal } from "@/components/auth/register-modal";
import { AuthStatus } from "@/components/auth/auth-status";
import { useAuthContext } from "@/components/providers/auth-provider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { isAuthenticated, userRole } = useAuthContext();

  const publicNavItems = [
    { href: "/courses", label: "Courses" },
    { href: "/community", label: "Community" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
  ];

  const memberNavItems = [
    { href: "/user-dashboard", label: "Dashboard" },
    { href: "/user-dashboard/courses", label: "My Courses" },
    { href: "/user-dashboard/community", label: "Community" },
    { href: "/user-dashboard/events", label: "Events" },
  ];

  const adminNavItems = [
    { href: "/admin-dashboard", label: "Dashboard" },
    { href: "/admin-dashboard/users", label: "Users" },
    { href: "/admin-dashboard/courses", label: "Courses" },
    { href: "/admin-dashboard/reports", label: "Reports" },
  ];

  const navItems = isAuthenticated
    ? userRole === "admin"
      ? adminNavItems
      : memberNavItems
    : publicNavItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-blue-950/95 dark:supports-[backdrop-filter]:bg-blue-950/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Globe2 className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl hidden sm:inline-block">WTCT Global</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-blue-900 hover:text-blue-700 dark:text-blue-100 dark:hover:text-blue-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden md:block">
            <AuthStatus 
              onLogin={() => setIsLoginOpen(true)}
              onRegister={() => setIsRegisterOpen(true)}
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-blue-950">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-blue-900 hover:text-blue-700 dark:text-blue-100 dark:hover:text-blue-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <AuthStatus 
                onLogin={() => {
                  setIsMenuOpen(false);
                  setIsLoginOpen(true);
                }}
                onRegister={() => {
                  setIsMenuOpen(false);
                  setIsRegisterOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      )}

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </header>
  );
}