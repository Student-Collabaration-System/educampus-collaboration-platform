import { Card, CardContent } from "../components/ui/card";
import { StudyGroupCard } from "../components/StudyGroupCard";
import { ResourceCard } from "../components/ResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search } from "lucide-react";

interface SearchResultsProps {
  query: string;
  onNavigate: (page: string) => void;
}

export function SearchResults({ query, onNavigate }: SearchResultsProps) {
  // Mock search results - in a real app, this would filter based on the query
  const groupResults = [
    {
      name: "Calculus II Study Group",
      description: "Working through advanced calculus problems together",
      members: 8,
      category: "Mathematics",
      nextMeeting: "Oct 21, 2:00 PM",
      image: "https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjA5MTk4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Web Development Team",
      description: "Building a full-stack e-commerce application",
      members: 6,
      category: "Computer Science",
      nextMeeting: "Oct 22, 4:00 PM",
      image: "https://images.unsplash.com/photo-1568992688243-52608227497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDkyMjk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const resourceResults = [
    {
      title: "Calculus II Study Guide",
      description: "Comprehensive guide covering integration techniques and series",
      type: "PDF",
      uploadedBy: "Sarah Chen",
      uploadDate: "2 days ago",
      downloads: 245,
      views: 892,
    },
    {
      title: "React Hooks Cheat Sheet",
      description: "Quick reference for useState, useEffect, and custom hooks",
      type: "PDF",
      uploadedBy: "Mike Johnson",
      uploadDate: "1 week ago",
      downloads: 567,
      views: 1243,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-8 h-8" />
            <h1>Search Results</h1>
          </div>
          <p className="text-lg text-purple-100">
            Found results for "{query}"
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {query ? (
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Results</TabsTrigger>
              <TabsTrigger value="groups">Study Groups</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8 mt-6">
              <div>
                <h3 className="mb-4">Study Groups</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupResults.map((group, index) => (
                    <StudyGroupCard 
                      key={index} 
                      {...group}
                      onViewGroup={() => onNavigate('group-detail')}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4">Resources</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resourceResults.map((resource, index) => (
                    <ResourceCard key={index} {...resource} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="groups" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupResults.map((group, index) => (
                  <StudyGroupCard 
                    key={index} 
                    {...group}
                    onViewGroup={() => onNavigate('group-detail')}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resourceResults.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="mb-2">No search query</h3>
              <p className="text-muted-foreground">
                Enter a search term to find study groups and resources
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
