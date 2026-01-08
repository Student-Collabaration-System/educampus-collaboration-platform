import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Bell, Users, FileText, CheckCheck } from "lucide-react";

export function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "group",
      title: "New message in Calculus II Study Group",
      description: "Sarah posted: 'Can someone explain the concept of series convergence?'",
      time: "5 minutes ago",
      read: false,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 2,
      type: "resource",
      title: "New resource shared",
      description: "Mike Johnson uploaded 'React Hooks Cheat Sheet' to Web Development Team",
      time: "1 hour ago",
      read: false,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    {
      id: 3,
      type: "group",
      title: "You were added to a study group",
      description: "Emily Chen added you to 'Organic Chemistry Finals Prep'",
      time: "2 hours ago",
      read: false,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    {
      id: 4,
      type: "resource",
      title: "Resource downloaded",
      description: "15 people downloaded your 'Calculus II Study Guide'",
      time: "1 day ago",
      read: true,
      avatar: null,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "group":
        return <Users className="w-5 h-5 text-blue-600" />;
      case "resource":
        return <FileText className="w-5 h-5 text-green-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-8 h-8" />
            <h1>Notifications</h1>
          </div>
          <p className="text-lg text-blue-100">
            You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                <CheckCheck className="w-4 h-4 mr-2" />
                Mark all as read
              </Button>
            </div>

            <TabsContent value="all" className="space-y-3">
              {notifications.map((notification) => (
                <Card key={notification.id} className={notification.read ? "opacity-70" : ""}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        {notification.avatar ? (
                          <Avatar>
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                            {getIcon(notification.type)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-sm">{notification.title}</h4>
                          {!notification.read && (
                            <Badge variant="default" className="flex-shrink-0">New</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="unread" className="space-y-3">
              {notifications.filter(n => !n.read).map((notification) => (
                <Card key={notification.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        {notification.avatar ? (
                          <Avatar>
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                            {getIcon(notification.type)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-sm">{notification.title}</h4>
                          <Badge variant="default" className="flex-shrink-0">New</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
