import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Bell, Lock, User, Palette, Upload } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { UserData } from "../App";

interface SettingsProps {
  userData: UserData;
  onUpdateUser: (data: Partial<UserData>) => void;
}

export function Settings({ userData, onUpdateUser }: SettingsProps) {
  const [profileImage, setProfileImage] = useState(userData.profileImage);
  const [name, setName] = useState(userData.fullName);
  const [email, setEmail] = useState(userData.email);
  const [username, setUsername] = useState(userData.username);
  const [bio, setBio] = useState(userData.bio);

  useEffect(() => {
    setProfileImage(userData.profileImage);
    setName(userData.fullName);
    setEmail(userData.email);
    setUsername(userData.username);
    setBio(userData.bio);
  }, [userData]);

  const getInitials = () => {
    const names = name.split(' ');
    return names.map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };
  
  const [notifications, setNotifications] = useState({
    groupMessages: true,
    newResources: true,
    eventReminders: true,
    emailNotifications: false,
    weeklySummary: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    showOnlineStatus: true,
    allowInvites: true,
  });

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
        setProfileImage(newImage);
        onUpdateUser({ profileImage: newImage });
        toast.success("Photo uploaded successfully");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    onUpdateUser({
      fullName: name,
      email: email,
      username: username,
      bio: bio,
    });
    toast.success("Changes saved successfully!");
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4">Settings</h1>
          <p className="text-lg text-slate-100 max-w-2xl">
            Manage your account settings and preferences
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="account">
              <User className="w-4 h-4 mr-2" />
              Account
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy">
              <Lock className="w-4 h-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="appearance">
              <Palette className="w-4 h-4 mr-2" />
              Appearance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={profileImage} />
                    <AvatarFallback>{getInitials()}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload from Device
                    </Button>
                    <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB</p>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input 
                      id="username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input 
                      id="bio" 
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4>Change Password</h4>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setName(userData.fullName);
                      setEmail(userData.email);
                      setUsername(userData.username);
                      setBio(userData.bio);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleSaveChanges}>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Study Group Messages</Label>
                    <p className="text-sm text-muted-foreground">Get notified when someone posts in your groups</p>
                  </div>
                  <Switch 
                    checked={notifications.groupMessages}
                    onCheckedChange={(checked) => setNotifications({...notifications, groupMessages: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Resources</Label>
                    <p className="text-sm text-muted-foreground">Alerts for new shared resources</p>
                  </div>
                  <Switch 
                    checked={notifications.newResources}
                    onCheckedChange={(checked) => setNotifications({...notifications, newResources: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Event Reminders</Label>
                    <p className="text-sm text-muted-foreground">Reminders for upcoming events</p>
                  </div>
                  <Switch 
                    checked={notifications.eventReminders}
                    onCheckedChange={(checked) => setNotifications({...notifications, eventReminders: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch 
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailNotifications: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Summary</Label>
                    <p className="text-sm text-muted-foreground">Get a weekly summary of your activity</p>
                  </div>
                  <Switch 
                    checked={notifications.weeklySummary}
                    onCheckedChange={(checked) => setNotifications({...notifications, weeklySummary: checked})}
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button onClick={handleSaveChanges}>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Profile Visibility</Label>
                    <p className="text-sm text-muted-foreground">Make your profile visible to other students</p>
                  </div>
                  <Switch 
                    checked={privacy.profileVisibility}
                    onCheckedChange={(checked) => setPrivacy({...privacy, profileVisibility: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Online Status</Label>
                    <p className="text-sm text-muted-foreground">Let others see when you're online</p>
                  </div>
                  <Switch 
                    checked={privacy.showOnlineStatus}
                    onCheckedChange={(checked) => setPrivacy({...privacy, showOnlineStatus: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Allow Study Group Invites</Label>
                    <p className="text-sm text-muted-foreground">Others can invite you to study groups</p>
                  </div>
                  <Switch 
                    checked={privacy.allowInvites}
                    onCheckedChange={(checked) => setPrivacy({...privacy, allowInvites: checked})}
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button onClick={handleSaveChanges}>Save Changes</Button>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h4 className="text-sm">Data & Privacy</h4>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => toast.success("Your data download will begin shortly")}
                  >
                    Download Your Data
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-red-600 hover:text-red-700"
                    onClick={() => toast.error("Please contact support to delete your account")}
                  >
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how EduCampus looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="border-2 border-primary rounded-lg p-4 text-center hover:bg-accent transition-colors">
                      <div className="w-full h-20 bg-white rounded mb-2 border"></div>
                      <span className="text-sm">Light</span>
                    </button>
                    <button className="border rounded-lg p-4 text-center hover:bg-accent transition-colors">
                      <div className="w-full h-20 bg-slate-900 rounded mb-2"></div>
                      <span className="text-sm">Dark</span>
                    </button>
                    <button className="border rounded-lg p-4 text-center hover:bg-accent transition-colors">
                      <div className="w-full h-20 bg-gradient-to-br from-white to-slate-900 rounded mb-2"></div>
                      <span className="text-sm">System</span>
                    </button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Reduce spacing for a denser layout</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
