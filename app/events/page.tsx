import { EventsHero } from "@/components/events/hero";
import { EventCalendar } from "@/components/events/calendar";
import { UpcomingEvents } from "@/components/events/upcoming-events";
import { EventCategories } from "@/components/events/categories";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <EventsHero />
      <EventCategories />
      <UpcomingEvents />
      <EventCalendar />
    </div>
  );
}