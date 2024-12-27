import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MessageSquare, ThumbsUp } from "lucide-react";

const discussions = [
  {
    title: "New EU Import Requirements 2024",
    author: "Sarah Chen",
    avatar: "SC",
    replies: 24,
    likes: 45,
    time: "2h ago",
  },
  {
    title: "USMCA Certificate of Origin Template",
    author: "Michael Rodriguez",
    avatar: "MR",
    replies: 18,
    likes: 32,
    time: "4h ago",
  },
  {
    title: "Harmonized System Code Updates",
    author: "David Kim",
    avatar: "DK",
    replies: 15,
    likes: 28,
    time: "6h ago",
  },
];

export function LatestDiscussions() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Latest Discussions</h2>
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <Card key={discussion.title} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <Avatar>
                    <div className="flex h-full w-full items-center justify-center bg-muted">
                      {discussion.avatar}
                    </div>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold mb-1">{discussion.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {discussion.author} • {discussion.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {discussion.replies}
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    {discussion.likes}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}