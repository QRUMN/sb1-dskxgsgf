"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "@/lib/utils/cookies";

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string | null;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userRole: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authToken = getCookie("auth-token");
    const role = getCookie("user-role");
    
    setIsAuthenticated(!!authToken);
    setUserRole(role);

    // Handle protected routes
    if (!authToken && (pathname?.includes("/user-dashboard") || pathname?.includes("/admin-dashboard"))) {
      router.push("/");
    }

    // Handle admin routes
    if (authToken && pathname?.includes("/admin-dashboard") && role !== "admin") {
      router.push("/user-dashboard");
    }
  }, [pathname, router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);