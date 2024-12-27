"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "./use-auth-store";
import { type RegisterFormData } from "@/lib/validations/auth";
import { setCookie, deleteCookie } from "@/lib/utils/cookies";

export function useAuth() {
  const router = useRouter();
  const { user, isLoading, setUser, setLoading } = useAuthStore();

  const login = async (email: string, password: string, role: "member" | "admin") => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Demo credentials check
      if (
        (role === "member" && email === "demo@member.com" && password === "password123") ||
        (role === "admin" && email === "demo@admin.com" && password === "adminpass123")
      ) {
        const user = {
          id: "1",
          email,
          role,
          name: role === "member" ? "Demo Member" : "Demo Admin",
        };
        
        setUser(user);
        setCookie("auth-token", "demo-token", 7);
        setCookie("user-role", role, 7);
        
        // Immediate redirect based on role
        if (role === "admin") {
          router.push("/admin-dashboard");
        } else {
          router.push("/user-dashboard");
        }
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterFormData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const user = {
        id: "1",
        email: data.email,
        role: "member" as const,
        name: `${data.firstName} ${data.lastName}`,
      };
      
      setUser(user);
      setCookie("auth-token", "demo-token", 7);
      setCookie("user-role", "member", 7);
      
      // Immediate redirect to user dashboard
      router.push("/user-dashboard");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    deleteCookie("auth-token");
    deleteCookie("user-role");
    router.push("/");
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout,
  };
}