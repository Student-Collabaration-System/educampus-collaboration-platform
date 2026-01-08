import { Bell, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserData } from "../App";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onLogout: () => void;
  userData: UserData;
}

export function Header({ currentPage, onNavigate, searchQuery, onSearchChange, onLogout, userData }: HeaderProps) {
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('search');
    }
  };

  const getInitials = () => {
    const names = userData.fullName.split(' ');
    return names.map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <button onClick={() => onNavigate('dashboard')} className="text-primary hover:opacity-80 transition-opacity">
            <h1>EduCampus</h1>
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('dashboard')} 
              className={`hover:text-primary transition-colors ${currentPage === 'dashboard' ? 'text-primary' : ''}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => onNavigate('study-groups')} 
              className={`hover:text-primary transition-colors ${currentPage === 'study-groups' ? 'text-primary' : ''}`}
            >
              Study Groups
            </button>
            <button 
              onClick={() => onNavigate('resources')} 
              className={`hover:text-primary transition-colors ${currentPage === 'resources' ? 'text-primary' : ''}`}
            >
              Resources
            </button>
            <button 
              onClick={() => onNavigate('calendar')} 
              className={`hover:text-primary transition-colors ${currentPage === 'calendar' ? 'text-primary' : ''}`}
            >
              Calendar
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <form onSubmit={handleSearchSubmit} className="hidden lg:flex items-center gap-2 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                type="search" 
                placeholder="Search groups, resources..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </form>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => onNavigate('notifications')}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative h-10 w-10 rounded-full hover:opacity-80 transition-opacity">
                <Avatar onClick={() => onNavigate('profile')}>
                  <AvatarImage src={userData.profileImage} alt={userData.fullName} />
                  <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userData.fullName}</p>
                  <p className="text-xs leading-none text-muted-foreground">{userData.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onNavigate('profile')}>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('settings')}>Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('help')}>Help</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onNavigate('admin-dashboard')} className="text-orange-600">
                Admin Panel
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}