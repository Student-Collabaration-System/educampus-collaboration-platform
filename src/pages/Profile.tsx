import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Calendar, MapPin, Mail, Users, FileText, Award, Edit, Camera } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { UserData } from "../App";

interface ProfileProps {
  onNavigate: (page: string) => void;
  userData: UserData;
  onUpdateUser: (data: Partial<UserData>) => void;
}

export function Profile({ onNavigate, userData, onUpdateUser }: ProfileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = reader.result as string;
        onUpdateUser({ profileImage: newImage });
        toast.success("Profile photo updated successfully");
      };
      reader.readAsDataURL(file);
    }
  };

  const getInitials = () => {
    const names = userData.fullName.split(' ');
    return names.map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-6">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-white">
                <AvatarImage src={userData.profileImage} />
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border-2 border-indigo-600 flex items-center justify-center hover:bg-indigo-50 transition-colors"
              >
                <Camera className="w-4 h-4 text-indigo-600" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="mb-2">{userData.fullName}</h1>
                  <p className="text-lg text-blue-100 mb-3">{userData.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React Developer</Badge>
                    <Badge variant="secondary">Math Tutor</Badge>
                    <Badge variant="secondary">Study Group Leader</Badge>
                  </div>
                </div>
                <Button variant="secondary" onClick={() => onNavigate('settings')}>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Joined October 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>Boston, MA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{userData.email}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Study Groups</span>
                  </div>
                  <span>12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm">Resources Shared</span>
                  </div>
                  <span>24</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">Contributions</span>
                  </div>
                  <span>156</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-1">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <p className="text-xs text-muted-foreground">Top Contributor</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-1">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-xs text-muted-foreground">Group Leader</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-1">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-xs text-muted-foreground">Resource Sharer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="groups">Groups</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="activity" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex gap-3 pb-4 border-b">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={userData.profileImage} />
                          <AvatarFallback>{getInitials()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span>Shared a new resource</span>{" "}
                            <span className="text-primary">Calculus II Study Guide</span>
                          </p>
                          <p className="text-xs text-muted-foreground">2 days ago</p>
                        </div>
                      </div>
                      <div className="flex gap-3 pb-4 border-b">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={userData.profileImage} />
                          <AvatarFallback>{getInitials()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span>Joined</span>{" "}
                            <span className="text-primary">Web Development Team</span>
                          </p>
                          <p className="text-xs text-muted-foreground">5 days ago</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={userData.profileImage} />
                          <AvatarFallback>{getInitials()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span>Created study group</span>{" "}
                            <span className="text-primary">Database Design Project</span>
                          </p>
                          <p className="text-xs text-muted-foreground">1 week ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="groups" className="space-y-4">
                <div className="grid gap-4">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="mb-1">Calculus II Study Group</h4>
                          <p className="text-sm text-muted-foreground">8 members • Mathematics</p>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="mb-1">Web Development Team</h4>
                          <p className="text-sm text-muted-foreground">6 members • Computer Science</p>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                <div className="grid gap-4">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="w-8 h-8 text-red-500" />
                          <div>
                            <h4 className="mb-1">Calculus II Study Guide</h4>
                            <p className="text-sm text-muted-foreground">45 downloads • 2 days ago</p>
                          </div>
                        </div>
                        <Badge variant="outline">PDF</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="w-8 h-8 text-blue-500" />
                          <div>
                            <h4 className="mb-1">React Hooks Cheat Sheet</h4>
                            <p className="text-sm text-muted-foreground">89 downloads • 1 week ago</p>
                          </div>
                        </div>
                        <Badge variant="outline">PDF</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
