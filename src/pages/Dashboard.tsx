import { StatsCard } from "../components/StatsCard";
import { StudyGroupCard } from "../components/StudyGroupCard";
import { ResourceCard } from "../components/ResourceCard";
import { ActivityFeed } from "../components/ActivityFeed";
import { CreateGroupDialog } from "../components/CreateGroupDialog";
import { Button } from "../components/ui/button";
import { Users, FileText, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { UserData } from "../App";

interface DashboardProps {
  onNavigate: (page: string) => void;
  userData?: UserData;
}

export function Dashboard({ onNavigate, userData }: DashboardProps) {
  const firstName = userData?.fullName.split(' ')[0] || "Student";
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-4">Welcome back, {firstName}!</h2>
              <p className="text-lg mb-6 text-blue-100">
                Connect with peers, share resources, and collaborate on projects in your virtual study hub.
              </p>
              <div className="flex gap-3">
                <CreateGroupDialog variant="secondary" size="lg" />
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => onNavigate('resources')}
                >
                  Browse Resources
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760351065294-b069f6bcadc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYwOTMxODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students collaborating"
                className="rounded-lg shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <StatsCard
            title="Active Groups"
            value={12}
            icon={Users}
            trend="+2 this week"
            trendUp={true}
          />
          <StatsCard
            title="Shared Resources"
            value={48}
            icon={FileText}
            trend="+8 new"
            trendUp={true}
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Study Groups */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>My Study Groups</CardTitle>
                  <Button variant="ghost" onClick={() => onNavigate('study-groups')}>
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <StudyGroupCard
                    name="Calculus II Study Group"
                    description="Working through advanced calculus problems together"
                    members={8}
                    category="Mathematics"
                    image="https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjA5MTk4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    onViewGroup={() => onNavigate('group-detail')}
                  />
                  <StudyGroupCard
                    name="Web Development Team"
                    description="Building a full-stack e-commerce application"
                    members={6}
                    category="Computer Science"
                    image="https://images.unsplash.com/photo-1568992688243-52608227497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDkyMjk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    onViewGroup={() => onNavigate('group-detail')}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Recent Resources */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Resources</CardTitle>
                  <Button variant="ghost" onClick={() => onNavigate('resources')}>
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="Calculus II Study Guide"
                    description="Comprehensive notes covering chapters 1-5"
                    type="PDF"
                    uploadedBy="Sarah Chen"
                    uploadDate="2 days ago"
                    downloads={45}
                    views={128}
                  />
                  <ResourceCard
                    title="React Hooks Cheat Sheet"
                    description="Quick reference for useState, useEffect, and more"
                    type="PDF"
                    uploadedBy="Alex Rodriguez"
                    uploadDate="1 week ago"
                    downloads={89}
                    views={234}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
