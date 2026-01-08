import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { GraduationCap, Mail } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface LoginProps {
  onNavigate: (page: string) => void;
  onLogin: (email: string, password: string) => void;
  onOAuthLogin: (provider: 'google' | 'microsoft', userData: { name: string; email: string; picture?: string }) => void;
}

export function Login({ onNavigate, onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateUniversityEmail = (email: string) => {
    // Reject common public email providers, accept everything else
    const publicEmailProviders = [
      /@gmail\./i,
      /@yahoo\./i,
      /@hotmail\./i,
      /@outlook\./i,
      /@live\./i,
      /@icloud\./i,
      /@aol\./i,
      /@protonmail\./i,
      /@mail\./i,
    ];
    
    // Only validate if email appears complete (has a domain extension)
    if (email && email.includes('@') && email.includes('.')) {
      const isPublicProvider = publicEmailProviders.some(pattern => pattern.test(email));
      if (isPublicProvider) {
        setEmailError("Please use a university or educational institution email");
        return false;
      }
    }
    
    setEmailError("");
    return true;
  };

  const validatePassword = (password: string) => {
    if (password.length > 0 && password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (passwordTouched) {
      validatePassword(newPassword);
    }
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    validatePassword(password);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (email) {
      validateUniversityEmail(email);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (!validateUniversityEmail(email)) {
      toast.error("Please use a valid university email");
      return;
    }
    
    if (!validatePassword(password)) {
      toast.error("Please use a valid password");
      return;
    }
    
    toast.success("Login successful! Welcome back!");
    // In a real app, this would authenticate the user
    setTimeout(() => {
      onLogin(email, password);
    }, 1000);
  };

  const handleOAuthLogin = (provider: 'google' | 'microsoft') => {
    toast.success(`Signing in with ${provider === 'google' ? 'Google' : 'Microsoft'}...`);
    // Mock OAuth login - in real app would redirect to OAuth provider
    setTimeout(() => {
      onNavigate('dashboard');
    }, 1000);
  };

  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-2">Welcome to EduCampus</h1>
          <p className="text-muted-foreground">Sign in to continue your learning journey</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">University Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.name@uni-potsdam.de"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  className={emailError ? "border-red-500" : ""}
                  required
                />
                {emailError ? (
                  <p className="text-xs text-red-600">{emailError}</p>
                ) : (
                  <p className="text-xs text-gray-500">
                    Use your university or educational institution email
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                    onClick={() => toast.info("Password reset link sent to your email")}
                  >
                    Forgot password?
                  </button>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  required
                />
                {passwordError ? (
                  <p className="text-xs text-red-600">{passwordError}</p>
                ) : (
                  <p className="text-xs text-gray-500">
                    Password must be at least 8 characters
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <button
                onClick={() => onNavigate('signup')}
                className="text-primary hover:underline"
              >
                Sign up
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing in, you agree to our{" "}
          <button onClick={() => onNavigate('terms')} className="text-primary hover:underline">
            Terms of Service
          </button>{" "}
          and{" "}
          <button onClick={() => onNavigate('privacy')} className="text-primary hover:underline">
            Privacy Policy
          </button>
        </p>
        </div>
      </div>
    </>
  );
}