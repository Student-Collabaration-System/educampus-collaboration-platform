import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Users, MessageSquare, FileText, Send, MoreVertical, Flag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ReportModal } from "../components/ReportModal";
import { useState } from "react";

interface GroupDetailProps {
  onNavigate: (page: string) => void;
}

export function GroupDetail({ onNavigate }: GroupDetailProps) {
  const [showReportModal, setShowReportModal] = useState(false);

  const messages = [
    {
      id: 1,
      user: "Sarah Chen",
      message: "Hey everyone! I uploaded the study guide for chapter 5. Check it out in the resources section.",
      time: "10:30 AM",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 2,
      user: "Mike Johnson",
      message: "Thanks Sarah! This is really helpful. Are we still meeting tomorrow at 2pm?",
      time: "10:35 AM",
      avatar: "https://github.com/vercel.png",
    },
    {
      id: 3,
      user: "Emma Wilson",
      message: "Yes! Library Room 3A. Don't forget to bring your calculators.",
      time: "10:42 AM",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: 4,
      user: "Alex Rodriguez",
      message: "Can someone help me with problem 15? I'm stuck on the integration part.",
      time: "11:15 AM",
      avatar: "https://github.com/vercel.png",
    },
  ];

  const members = [
    { name: "Sarah Chen", role: "Admin", status: "online" },
    { name: "Mike Johnson", role: "Member", status: "online" },
    { name: "Emma Wilson", role: "Member", status: "offline" },
    { name: "Alex Rodriguez", role: "Member", status: "online" },
    { name: "Lisa Park", role: "Member", status: "offline" },
    { name: "David Lee", role: "Member", status: "online" },
    { name: "Rachel Kim", role: "Member", status: "offline" },
    { name: "Tom Anderson", role: "Member", status: "online" },
  ];

  const resources = [
    { title: "Chapter 5 Study Guide", type: "PDF", uploadedBy: "Sarah Chen", date: "Today" },
    { title: "Practice Problems", type: "Document", uploadedBy: "Mike Johnson", date: "Yesterday" },
    { title: "Integration Formulas", type: "PDF", uploadedBy: "Emma Wilson", date: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => onNavigate('study-groups')}>
              ← Back
            </Button>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="mb-1">Calculus II Study Group</h2>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>8 members</span>
                    </div>
                    <Badge variant="secondary">Mathematics</Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setShowReportModal(true)}>
                      <Flag className="w-4 h-4 mr-2" />
                      Report Group
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full h-48 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjA5MTk4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Group banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="chat" className="w-full">
              <TabsList>
                <TabsTrigger value="chat">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat
                </TabsTrigger>
                <TabsTrigger value="resources">
                  <FileText className="w-4 h-4 mr-2" />
                  Resources
                </TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>

              <TabsContent value="chat">
                <Card>
                  <CardContent className="p-0">
                    <ScrollArea className="h-[500px] p-4">
                      <div className="space-y-4">
                        {messages.map((msg) => (
                          <div key={msg.id} className="flex gap-3 group">
                            <Avatar>
                              <AvatarImage src={msg.avatar} />
                              <AvatarFallback>{msg.user[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm">{msg.user}</span>
                                <span className="text-xs text-muted-foreground">{msg.time}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <p className="text-sm bg-accent p-3 rounded-lg flex-1">{msg.message}</p>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                      <MoreVertical className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <ReportModal
                                      contentType="message"
                                      contentId={msg.id.toString()}
                                      trigger={
                                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                          <Flag className="h-4 w-4 mr-2" />
                                          Report message
                                        </DropdownMenuItem>
                                      }
                                    />
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <Input placeholder="Type a message..." />
                        <Button>
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Shared Resources</CardTitle>
                      <Button size="sm">Upload</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {resources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                          <div className="flex items-center gap-3">
                            <FileText className="w-8 h-8 text-primary" />
                            <div>
                              <h4 className="text-sm">{resource.title}</h4>
                              <p className="text-xs text-muted-foreground">
                                {resource.uploadedBy} • {resource.date}
                              </p>
                            </div>
                          </div>
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="about">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Group</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="mb-2">Description</h4>
                      <p className="text-sm text-muted-foreground">
                        A collaborative study group for Calculus II students. We meet weekly to work through problem sets, 
                        discuss challenging concepts, and prepare for exams together. All skill levels welcome!
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2">Group Guidelines</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Be respectful and supportive</li>
                        <li>Come prepared to meetings</li>
                        <li>Share resources when possible</li>
                        <li>Help others when you can</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Members ({members.length})</CardTitle>
                  <Button variant="ghost" size="sm">Invite</Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-3">
                    {members.map((member, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>{member.name[0]}</AvatarFallback>
                            </Avatar>
                            {member.status === "online" && (
                              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                            )}
                          </div>
                          <div>
                            <p className="text-sm">{member.name}</p>
                            <p className="text-xs text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="text-sm mb-1">Study Session</h4>
                  <p className="text-xs text-muted-foreground">Oct 21 at 2:00 PM</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="text-sm mb-1">Midterm Review</h4>
                  <p className="text-xs text-muted-foreground">Oct 25 at 4:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Report Modal */}
      <ReportModal
        contentType="group"
        contentId="calculus-ii-study-group"
        open={showReportModal}
        onOpenChange={setShowReportModal}
      />
    </div>
  );
}