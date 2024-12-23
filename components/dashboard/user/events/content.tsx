"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "2024 Trade Compliance Summit",
    type: "conference",
    date: "May 15-16, 2024",
    time: "9:00 AM - 5:00 PM EST",
    location: "Virtual Event",
    status: "registered",
  },
  {
    id: 2,
    title: "USMCA Documentation Workshop",
    type: "workshop",
    date: "April 20, 2024",
    time: "2:00 PM - 4:00 PM EST",
    location: "Virtual Event",
    status: "upcoming",
  },
];

export function UserEventsContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Events</h1>
        <p className="text-muted-foreground">Manage your event registrations</p>
      </div>

      <div className="space-y-6">
        {events.map((event) => (
          <Card key={event.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{event.type}</Badge>
                  <Badge variant={event.status === "registered" ? "secondary" : "outline"}>
                    {event.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
              </div>
              <Button variant={event.status === "registered" ? "outline" : "default"}>
                {event.status === "registered" ? "View Details" : "Register Now"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}