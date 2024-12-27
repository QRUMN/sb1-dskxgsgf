import { Card } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

export function EventCalendar() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Event Calendar</h2>
            <p className="text-muted-foreground mb-8">
              Browse our upcoming events and plan your learning journey.
            </p>
            <Card className="p-4">
              <CalendarComponent
                mode="single"
                className="rounded-md border"
              />
            </Card>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Highlighted Dates</h3>
            <div className="space-y-4">
              {[15, 20, 25].map((day) => (
                <Card key={day} className="p-4">
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">April {day}, 2024</p>
                      <p className="text-sm text-muted-foreground">
                        Multiple events scheduled
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}