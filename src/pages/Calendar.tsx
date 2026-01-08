import { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { AddEventModal } from "../components/AddEventModal";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "study" | "meeting" | "deadline" | "exam";
  description?: string;
  studyGroup?: string;
}

const eventTypeColors = {
  study: "bg-blue-500",
  meeting: "bg-green-500",
  deadline: "bg-purple-500",
  exam: "bg-orange-500",
};

const eventTypeLabels = {
  study: "Study Session",
  meeting: "Group Meeting",
  deadline: "Deadline",
  exam: "Exam",
};

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: "1",
      title: "Calculus Study Session",
      date: "2026-01-10",
      time: "14:00",
      type: "study",
      description: "Review chapters 3-4",
      studyGroup: "Calculus I Study Group",
    },
    {
      id: "2",
      title: "Physics Lab Report Due",
      date: "2026-01-12",
      time: "23:59",
      type: "deadline",
      description: "Submit on Canvas",
    },
    {
      id: "3",
      title: "CS Group Meeting",
      date: "2026-01-15",
      time: "16:00",
      type: "meeting",
      studyGroup: "Computer Science Study Circle",
    },
    {
      id: "4",
      title: "Biology Midterm",
      date: "2026-01-20",
      time: "10:00",
      type: "exam",
      description: "Chapters 1-8, Room 301",
    },
    {
      id: "5",
      title: "Math Homework Review",
      date: "2026-01-08",
      time: "15:00",
      type: "study",
      studyGroup: "Calculus I Study Group",
    },
  ]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter((event) => event.date === dateStr);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events
      .filter((event) => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5);
  };

  const handleEventAdded = (newEvent: any) => {
    setEvents([...events, newEvent]);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Calendar & Events</h1>
              <p className="text-gray-600">Manage your study schedule and deadlines</p>
            </div>
          </div>
          <AddEventModal onEventAdded={handleEventAdded} />
        </div>

        {/* Legend */}
        <Card className="p-4">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="text-sm font-medium text-gray-700">Event Types:</span>
            {Object.entries(eventTypeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded ${color}`} />
                <span className="text-sm text-gray-600">
                  {eventTypeLabels[type as keyof typeof eventTypeLabels]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="lg:col-span-2 p-6">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={previousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Day Headers */}
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-gray-700 py-2"
                >
                  {day}
                </div>
              ))}

              {/* Empty cells before first day */}
              {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square" />
              ))}

              {/* Calendar days */}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const dayEvents = getEventsForDate(day);
                const dateObj = new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  day
                );
                const isToday = dateObj.getTime() === today.getTime();

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(dateObj)}
                    className={`aspect-square border rounded-lg p-2 hover:bg-gray-50 transition-colors ${
                      isToday ? "border-blue-600 bg-blue-50" : "border-gray-200"
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>
                    <div className="space-y-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <div
                          key={event.id}
                          className={`${eventTypeColors[event.type]} h-1.5 rounded`}
                        />
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-gray-500">+{dayEvents.length - 2}</div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Date Events */}
            {selectedDate && (
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Events on {selectedDate.toLocaleDateString("en-US", { 
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </h3>
                {getEventsForDate(selectedDate.getDate()).length === 0 ? (
                  <p className="text-gray-500 text-sm">No events scheduled for this day</p>
                ) : (
                  <div className="space-y-2">
                    {getEventsForDate(selectedDate.getDate()).map((event) => (
                      <div
                        key={event.id}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className={`${eventTypeColors[event.type]} w-1 h-full rounded`} />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{event.title}</div>
                          <div className="text-sm text-gray-600">{event.time}</div>
                          {event.description && (
                            <div className="text-sm text-gray-500 mt-1">{event.description}</div>
                          )}
                          {event.studyGroup && (
                            <div className="text-sm text-blue-600 mt-1">{event.studyGroup}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Card>

          {/* Upcoming Events */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="space-y-3">
              {getUpcomingEvents().map((event) => (
                <div
                  key={event.id}
                  className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className={`${eventTypeColors[event.type]} w-1 h-full rounded`} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">{event.title}</div>
                      <div className="text-sm text-gray-600">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        at {event.time}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {eventTypeLabels[event.type]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
