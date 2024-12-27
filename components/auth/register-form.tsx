"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { registerSchema, type RegisterFormData } from "@/lib/validations/auth";
import { useAuth } from "@/lib/hooks/use-auth";
import { languages } from "@/lib/constants/languages";
import { countries } from "@/lib/constants/countries";
import { useState } from "react";

interface RegisterFormProps {
  onSuccess: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const [error, setError] = useState("");
  const { register: registerUser, isLoading } = useAuth();
  
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      language: "",
      country: "",
      terms: false,
    },
  });

  const handleSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);
      onSuccess();
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            {...form.register("firstName")}
            error={form.formState.errors.firstName?.message}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            {...form.register("lastName")}
            error={form.formState.errors.lastName?.message}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          error={form.formState.errors.email?.message}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...form.register("password")}
          error={form.formState.errors.password?.message}
        />
        <Progress value={form.watch("password").length * 10} className="h-1" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="language">Preferred Language</Label>
        <Select onValueChange={(value) => form.setValue("language", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {form.formState.errors.language && (
          <p className="text-sm text-red-500">{form.formState.errors.language.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select onValueChange={(value) => form.setValue("country", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {form.formState.errors.country && (
          <p className="text-sm text-red-500">{form.formState.errors.country.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={form.watch("terms")}
          onCheckedChange={(checked) => form.setValue("terms", checked as boolean)}
        />
        <Label htmlFor="terms" className="text-sm">
          I agree to the Terms of Service and Privacy Policy
        </Label>
      </div>
      {form.formState.errors.terms && (
        <p className="text-sm text-red-500">{form.formState.errors.terms.message}</p>
      )}

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <Button className="w-full" type="submit" disabled={isLoading}>
        Create Account
      </Button>
    </form>
  );
}