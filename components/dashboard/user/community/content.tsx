"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, Share2 } from "lucide-react";

const discussions = [
  {
    id: 1,
    title: "Best practices for HS code classification",
    author: "Sarah Chen",
    avatar: "SC",
    content: "I'm working on a complex product classification...",
    replies: 12,
    likes: 45,
    time: "2h ago",
  },
  {
    id: 2,
    title: "New EU Import Requirements Discussion",
    author: "Michael Rodriguez",
    avatar: "MR",
    content: "Has anyone implemented the new EU import...",
    replies: 8,
    likes: 23,
    time: "4h ago",
  },
];

export function UserCommunityContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Community</h1>
        <p className="text-muted-foreground">Join discussions and share knowledge</p>
      </div>

      <div className="space-y-6">
        {discussions.map((discussion) => (
          <Card key={discussion.id} className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <div className="flex h-full w-full items-center justify-center bg-primary text-primary-foreground">
                    {discussion.avatar}
                  </div>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{discussion.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {discussion.author} • {discussion.time}
                  </p>
                  <p className="text-sm">{discussion.content}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {discussion.replies}
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  {discussion.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}