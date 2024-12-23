import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const topics = [
  {
    title: "Import/Export Compliance",
    posts: 234,
    members: 1520,
  },
  {
    title: "Customs Documentation",
    posts: 189,
    members: 1280,
  },
  {
    title: "Trade Agreements",
    posts: 156,
    members: 980,
  },
  {
    title: "Regulatory Updates",
    posts: 142,
    members: 890,
  },
];

export function PopularTopics() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <Card key={topic.title} className="p-6">
              <h3 className="font-semibold mb-3">{topic.title}</h3>
              <div className="flex gap-2">
                <Badge variant="secondary">{topic.posts} posts</Badge>
                <Badge variant="outline">{topic.members} members</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}