import React from "react";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { StudyGroups } from "./pages/StudyGroups";
import { Resources } from "./pages/Resources";
import { Settings } from "./pages/Settings";
import { Profile } from "./pages/Profile";
import { Help } from "./pages/Help";
import { GroupDetail } from "./pages/GroupDetail";
import { Guidelines } from "./pages/Guidelines";
import { ContactUs } from "./pages/ContactUs";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { SearchResults } from "./pages/SearchResults";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Notifications } from "./pages/Notifications";
import { Landing } from "./pages/Landing";
import Calendar from "./pages/Calendar";
import AdminDashboard from "./pages/AdminDashboard";
import { Toaster } from "./components/ui/sonner";

export interface UserData {
  fullName: string;
  email: string;
  username: string;
  bio: string;
  profileImage: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "John Doe",
    email: "john.doe@university.edu",
    username: "johndoe",
    bio: "Computer Science student",
    profileImage: "https://github.com/shadcn.png",
  } as UserData);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleLogin = (email: string, password: string) => {
    // In a real app, this would authenticate with a backend
    // For now, we'll extract name from email and update user data
    const emailUsername = email.split('@')[0];
    const nameParts = emailUsername.split('.');
    const fullName = nameParts.map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join(' ');
    
    setUserData({
      fullName: fullName,
      email: email,
      username: emailUsername,
      bio: "EduCampus member",
      profileImage: "https://github.com/shadcn.png",
    });
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleSignup = (fullName: string, email: string, username: string, password: string) => {
    // In a real app, this would create an account on the backend
    setUserData({
      fullName,
      email,
      username,
      bio: "New EduCampus member",
      profileImage: "https://github.com/shadcn.png",
    });
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleOAuthLogin = (provider: 'google' | 'microsoft', userData: { name: string; email: string; picture?: string }) => {
    // In a real app, this would authenticate with OAuth provider
    const username = userData.email.split('@')[0];
    
    setUserData({
      fullName: userData.name,
      email: userData.email,
      username: username,
      bio: `EduCampus member via ${provider === 'google' ? 'Google' : 'Microsoft'}`,
      profileImage: userData.picture || "https://github.com/shadcn.png",
    });
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const updateUserData = (newData: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...newData }));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onNavigate={handleNavigation} />;
      case 'login':
        return <Login onNavigate={handleNavigation} onLogin={handleLogin} onOAuthLogin={handleOAuthLogin} />;
      case 'signup':
        return <Signup onNavigate={handleNavigation} onSignup={handleSignup} onOAuthLogin={handleOAuthLogin} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigation} userData={userData} />;
      case 'study-groups':
        return <StudyGroups onNavigate={handleNavigation} />;
      case 'resources':
        return <Resources />;
      case 'settings':
        return <Settings userData={userData} onUpdateUser={updateUserData} />;
      case 'profile':
        return <Profile onNavigate={handleNavigation} userData={userData} onUpdateUser={updateUserData} />;
      case 'help':
        return <Help />;
      case 'group-detail':
        return <GroupDetail onNavigate={handleNavigation} />;
      case 'guidelines':
        return <Guidelines />;
      case 'contact':
        return <ContactUs />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'search':
        return <SearchResults query={searchQuery} onNavigate={handleNavigation} />;
      case 'notifications':
        return <Notifications />;
      case 'calendar':
        return <Calendar />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      default:
        return <Landing onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Toaster />
      {isLoggedIn && (
        <Header 
          currentPage={currentPage} 
          onNavigate={handleNavigation}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onLogout={handleLogout}
          userData={userData}
        />
      )}
      {renderPage()}

      
      {/* Footer - Only show if logged in */}
      {isLoggedIn && (
        <footer className="border-t bg-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="mb-4">EduCampus</h3>
                <p className="text-sm text-muted-foreground">
                  Empowering students through collaborative learning.
                </p>
              </div>
              <div>
                <h4 className="mb-3">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><button onClick={() => handleNavigation('study-groups')} className="hover:text-primary">Study Groups</button></li>
                  <li><button onClick={() => handleNavigation('resources')} className="hover:text-primary">Resources</button></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><button onClick={() => handleNavigation('help')} className="hover:text-primary">Help Center</button></li>
                  <li><button onClick={() => handleNavigation('guidelines')} className="hover:text-primary">Community Guidelines</button></li>
                  <li><button onClick={() => handleNavigation('contact')} className="hover:text-primary">Contact Us</button></li>
                  <li><button onClick={() => handleNavigation('contact')} className="hover:text-primary">Report an Issue</button></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><button onClick={() => handleNavigation('privacy')} className="hover:text-primary">Privacy Policy</button></li>
                  <li><button onClick={() => handleNavigation('terms')} className="hover:text-primary">Terms of Service</button></li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 EduCampus. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}