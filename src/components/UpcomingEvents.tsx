import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface Event {
  id: number;
  title: string;
  group: string;
  date: string;
  time: string;
  location: string;
  type: "online" | "in-person";
}

const events: Event[] = [
  {
    id: 1,
    title: "Calculus Study Session",
    group: "Math Study Group",
    date: "Oct 21",
    time: "2:00 PM",
    location: "Library Room 3A",
    type: "in-person",
  },
  {
    id: 2,
    title: "React Project Review",
    group: "Web Dev Team",
    date: "Oct 22",
    time: "4:00 PM",
    location: "Zoom Meeting",
    type: "online",
  },
  {
    id: 3,
    title: "Database Design Workshop",
    group: "CS Database Course",
    date: "Oct 23",
    time: "10:00 AM",
    location: "Computer Lab B",
    type: "in-person",
  },
];

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="mb-1">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.group}</p>
                </div>
                <Badge variant={event.type === "online" ? "secondary" : "outline"}>
                  {event.type}
                </Badge>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3">
                Join Event
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
