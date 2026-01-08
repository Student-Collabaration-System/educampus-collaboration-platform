import { StudyGroupCard } from "../components/StudyGroupCard";
import { CreateGroupDialog } from "../components/CreateGroupDialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface StudyGroupsProps {
  onNavigate: (page: string) => void;
}

export function StudyGroups({ onNavigate }: StudyGroupsProps) {
  const allGroups = [
    {
      name: "Calculus II Study Group",
      description: "Working through advanced calculus problems together",
      members: 8,
      category: "Mathematics",
      image: "https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjA5MTk4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Linear Algebra Workshop",
      description: "Weekly problem-solving sessions for linear algebra",
      members: 7,
      category: "Mathematics",
      image: "https://images.unsplash.com/photo-1739858446889-b20d63614d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGFsZ2VicmF8ZW58MXx8fHwxNzY3Nzk2Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Web Development Team",
      description: "Building a full-stack e-commerce application",
      members: 6,
      category: "Computer Science",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njc3MjI5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Database Design Project",
      description: "Collaborative database project for CS students",
      members: 5,
      category: "Computer Science",
      image: "https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2Nzc5NjgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Physics 101 Help",
      description: "Preparing for midterm exams and problem sets",
      members: 12,
      category: "Physics",
      image: "https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNzJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3Njc3OTY2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Chemistry Lab Partners",
      description: "Discussion and prep for weekly lab experiments",
      members: 10,
      category: "Chemistry",
      image: "https://images.unsplash.com/photo-1694230155228-cdde50083573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBsYWJ8ZW58MXx8fHwxNzY3Nzk2Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const myGroups = allGroups.slice(0, 4);
  const discoverGroups = allGroups.slice(2);
  
  // Group all groups by category/major
  const groupsByMajor = allGroups.reduce((acc, group) => {
    const major = group.category;
    if (!acc[major]) {
      acc[major] = [];
    }
    acc[major].push(group);
    return acc;
  }, {} as Record<string, typeof allGroups>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="w-full max-w-[1280px] mx-auto px-10">
          <h1 className="mb-4">Study Groups</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Join or create study groups to collaborate with peers, share knowledge, and achieve your academic goals together.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-10 py-8">
        <Tabs defaultValue="my-groups" className="w-full">
          <div className="mb-6 space-y-4">
            <TabsList>
              <TabsTrigger value="my-groups">My Groups</TabsTrigger>
              <TabsTrigger value="discover">Discover</TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="relative sm:col-span-2 lg:col-span-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  type="search" 
                  placeholder="Search study groups..." 
                  className="pl-9 w-full"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                </SelectContent>
              </Select>
              <div className="sm:col-span-2 lg:col-span-2 flex justify-end">
                <CreateGroupDialog />
              </div>
            </div>
          </div>

          <TabsContent value="my-groups" className="mt-0">
            {/* Container with wrap enabled for 3-column grid */}
            <div className="flex flex-wrap gap-6">
              {myGroups.map((group, index) => (
                <StudyGroupCard 
                  key={index} 
                  {...group} 
                  onViewGroup={() => onNavigate('group-detail')}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discover" className="mt-0">
            <div className="space-y-8">
              {Object.entries(groupsByMajor).map(([major, groups]) => (
                <div key={major}>
                  <h3 className="mb-6 text-blue-900">{major}</h3>
                  {/* Container with wrap enabled for 3-column grid */}
                  <div className="flex flex-wrap gap-6">
                    {groups.map((group, index) => (
                      <StudyGroupCard 
                        key={index} 
                        {...group} 
                        onViewGroup={() => onNavigate('group-detail')}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}