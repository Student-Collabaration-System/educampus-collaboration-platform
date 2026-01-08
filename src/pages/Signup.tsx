import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { GraduationCap } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface SignupProps {
  onNavigate: (page: string) => void;
  onSignup: (fullName: string, email: string, username: string, password: string) => void;
  onOAuthLogin: (provider: 'google' | 'microsoft', userData: { name: string; email: string; picture?: string }) => void;
}

export function Signup({ onNavigate, onSignup }: SignupProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

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

  const validateConfirmPassword = (confirmPassword: string) => {
    if (confirmPassword.length > 0 && confirmPassword !== formData.password) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setFormData({...formData, email: newEmail});
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData({...formData, password: newPassword});
    if (passwordTouched) {
      validatePassword(newPassword);
    }
    // Also revalidate confirm password if it's been touched
    if (confirmPasswordTouched && formData.confirmPassword) {
      if (formData.confirmPassword !== newPassword) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setFormData({...formData, confirmPassword: newConfirmPassword});
    if (confirmPasswordTouched) {
      if (newConfirmPassword !== formData.password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    validatePassword(formData.password);
  };

  const handleConfirmPasswordBlur = () => {
    setConfirmPasswordTouched(true);
    validateConfirmPassword(formData.confirmPassword);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (formData.email) {
      validateUniversityEmail(formData.email);
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (!validateUniversityEmail(formData.email)) {
      toast.error("Please use a valid university email");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    
    if (!agreedToTerms) {
      toast.error("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    toast.success("Account created successfully! Welcome to EduCampus!");
    // In a real app, this would create the account
    setTimeout(() => {
      onSignup(formData.fullName, formData.email, formData.username, formData.password);
    }, 1000);
  };

  const handleOAuthSignup = (provider: 'google' | 'microsoft') => {
    toast.success(`Signing up with ${provider === 'google' ? 'Google' : 'Microsoft'}...`);
    // Mock OAuth signup - in real app would redirect to OAuth provider
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
          <h1 className="mb-2">Join EduCampus</h1>
          <p className="text-muted-foreground">Create your account and start collaborating</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Fill in your information to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">University Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.name@uni-potsdam.de"
                  value={formData.email}
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
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="johndoe"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  className={passwordError ? "border-red-500" : ""}
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
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  onBlur={handleConfirmPasswordBlur}
                  className={confirmPasswordError ? "border-red-500" : ""}
                  required
                />
                {confirmPasswordError ? (
                  <p className="text-xs text-red-600">{confirmPasswordError}</p>
                ) : (
                  <p className="text-xs text-gray-500">
                    Passwords must match
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm leading-tight cursor-pointer">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate('terms')}
                    className="text-primary hover:underline"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate('privacy')}
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <button
                onClick={() => onNavigate('login')}
                className="text-primary hover:underline"
              >
                Sign in
              </button>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </>
  );
}