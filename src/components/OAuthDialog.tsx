import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface OAuthDialogProps {
  provider: 'google' | 'microsoft';
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (userData: { name: string; email: string; picture: string }) => void;
}

export function OAuthDialog({ provider, isOpen, onClose, onConfirm }: OAuthDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture] = useState(`https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`);

  const handleConfirm = () => {
    if (name && email) {
      onConfirm({ name, email, picture });
      onClose();
    }
  };

  const providerName = provider === 'google' ? 'Google' : 'Microsoft';
  const emailDomain = provider === 'google' ? 'gmail.com' : 'outlook.com';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign in with {providerName}</DialogTitle>
          <DialogDescription>
            Enter your {providerName} account details to continue
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex justify-center">
            <Avatar className="w-20 h-20">
              <AvatarImage src={picture} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-2">
            <Label htmlFor="oauth-name">Full Name</Label>
            <Input
              id="oauth-name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="oauth-email">Email</Label>
            <Input
              id="oauth-email"
              type="email"
              placeholder={`your.email@${emailDomain}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-800">
              <strong>Note:</strong> In a real application, this would connect to {providerName}'s OAuth service 
              and automatically retrieve your account information.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleConfirm} className="flex-1" disabled={!name || !email}>
            Continue with {providerName}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
