"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Users,
  Calendar,
  Award,
  Globe2,
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "Trade Compliance Training",
    description: "Expert-led programs covering global trade regulations and best practices",
  },
  {
    title: "Consulting Services",
    description: "Strategic guidance for complex international trade challenges",
  },
  {
    title: "Documentation Support",
    description: "Comprehensive assistance with trade documentation and procedures",
  },
  {
    title: "Corporate Solutions",
    description: "Tailored compliance programs for enterprise organizations",
  },
];

const features = [
  {
    text: "Certified Trade Compliance Experts",
    icon: Shield,
  },
  {
    text: "24/7 Support & Consultation",
    icon: Users,
  },
  {
    text: "Live Online Training Sessions",
    icon: Calendar,
  },
  {
    text: "Industry-Recognized Certifications",
    icon: Award,
  },
  {
    text: "Custom Corporate Programs",
    icon: Building2,
  },
  {
    text: "Global Trade Resources",
    icon: Globe2,
  },
];

const stats = [
  {
    value: "15+",
    label: "Years Experience",
    icon: Award,
  },
  {
    value: "10k+",
    label: "Professionals Trained",
    icon: Users,
  },
  {
    value: "500+",
    label: "Corporate Clients",
    icon: Building2,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: TrendingUp,
  },
];

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-blue-50/50 dark:bg-blue-900/20 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                Trusted by 500+ Companies Worldwide
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Your Partner in Global Trade Compliance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert training, consulting, and resources to navigate international trade regulations with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
                <Link href="/courses">Explore Training Programs</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 dark:border-blue-800" asChild>
                <Link href="/consulting">Request Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose World Trade Compliance?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3 p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/50">
                    <feature.icon className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-blue-100">Years of Excellence</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                <h3 className="text-4xl font-bold mb-2">10k+</h3>
                <p className="text-indigo-100">Certified Professionals</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="text-purple-100">Enterprise Clients</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-pink-500 to-red-500 text-white">
                <h3 className="text-4xl font-bold mb-2">98%</h3>
                <p className="text-pink-100">Success Rate</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Trade Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end support for your international trade compliance needs, delivered by industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Excel in Trade Compliance?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of professionals who trust World Trade Compliance for their training and consulting needs.
            </p>
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Schedule a Free Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}