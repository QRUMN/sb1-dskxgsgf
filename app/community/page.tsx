import { CommunityHero } from "@/components/community/hero";
import { CommunityFeatures } from "@/components/community/features";
import { PopularTopics } from "@/components/community/popular-topics";
import { LatestDiscussions } from "@/components/community/latest-discussions";

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <CommunityHero />
      <CommunityFeatures />
      <PopularTopics />
      <LatestDiscussions />
    </div>
  );
}