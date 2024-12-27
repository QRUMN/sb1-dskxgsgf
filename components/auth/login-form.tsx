"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { Label } from "@/components/ui/label";
import { loginSchema, type LoginFormData } from "@/lib/validations/auth";
import { useAuth } from "@/lib/hooks/use-auth";
import { useState } from "react";

interface LoginFormProps {
  onSuccess: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();
  
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (role: 'member' | 'admin') => {
    try {
      const values = form.getValues();
      await login(values.email, values.password, role);
      onSuccess();
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <FormInput
          id="email"
          type="email"
          {...form.register("email")}
          error={form.formState.errors.email?.message}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <FormInput
          id="password"
          type="password"
          {...form.register("password")}
          error={form.formState.errors.password?.message}
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <div className="space-y-2">
        <Button 
          className="w-full" 
          onClick={() => handleLogin('member')}
          disabled={isLoading}
        >
          Login as Member
        </Button>
        <Button 
          className="w-full" 
          variant="outline"
          onClick={() => handleLogin('admin')}
          disabled={isLoading}
        >
          Login as Admin
        </Button>
      </div>

      <div className="text-sm text-muted-foreground text-center">
        <p>Demo Credentials:</p>
        <p>Member: demo@member.com / password123</p>
        <p>Admin: demo@admin.com / adminpass123</p>
      </div>
    </form>
  );
}