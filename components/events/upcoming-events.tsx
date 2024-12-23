import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "2024 Trade Compliance Summit",
    type: "conference",
    date: "May 15-16, 2024",
    time: "9:00 AM - 5:00 PM EST",
    location: "Virtual Event",
    spots: 200,
    remaining: 45,
  },
  {
    title: "USMCA Documentation Workshop",
    type: "workshop",
    date: "April 20, 2024",
    time: "2:00 PM - 4:00 PM EST",
    location: "Virtual Event",
    spots: 50,
    remaining: 12,
  },
  {
    title: "EU Trade Regulations Update",
    type: "webinar",
    date: "April 5, 2024",
    time: "11:00 AM - 12:30 PM EST",
    location: "Virtual Event",
    spots: 100,
    remaining: 68,
  },
];

export function UpcomingEvents() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.title} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{event.type}</Badge>
                    <Badge variant="outline">
                      {event.remaining} spots remaining
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
                <Button className="md:self-end">Register Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}