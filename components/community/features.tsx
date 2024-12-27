import { Card } from "@/components/ui/card";
import { Users, MessageSquare, BookOpen, Award } from "lucide-react";

export function CommunityFeatures() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Expert Network"
            description="Connect with experienced trade professionals"
          />
          <FeatureCard
            icon={<MessageSquare className="h-6 w-6" />}
            title="Discussion Forums"
            description="Engage in topic-specific conversations"
          />
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Knowledge Sharing"
            description="Access case studies and best practices"
          />
          <FeatureCard
            icon={<Award className="h-6 w-6" />}
            title="Recognition"
            description="Earn badges for your contributions"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}