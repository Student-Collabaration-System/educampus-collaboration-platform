import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import { FileText, MessageSquare, Users } from "lucide-react";

interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
  type: "message" | "file" | "member";
}

const activities: Activity[] = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "shared a new resource",
    target: "Calculus II Study Guide",
    time: "5 min ago",
    type: "file",
  },
  {
    id: 2,
    user: "Mike Johnson",
    action: "posted in",
    target: "Physics 101 Group",
    time: "12 min ago",
    type: "message",
  },
  {
    id: 3,
    user: "Emma Wilson",
    action: "joined",
    target: "Web Development Team",
    time: "1 hour ago",
    type: "member",
  },
  {
    id: 4,
    user: "Lisa Park",
    action: "shared a new resource",
    target: "React Hooks Cheat Sheet",
    time: "2 hours ago",
    type: "file",
  },
];

export function ActivityFeed() {
  const getIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="w-4 h-4 text-blue-500" />;
      case "file":
        return <FileText className="w-4 h-4 text-green-500" />;
      case "member":
        return <Users className="w-4 h-4 text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>{activity.user[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-start gap-2">
                    {getIcon(activity.type)}
                    <p className="text-sm">
                      <span>{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>{" "}
                      <span>{activity.target}</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
