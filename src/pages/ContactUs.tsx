import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactUs() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-lg text-cyan-100 max-w-2xl">
            Have questions or need assistance? We're here to help!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="mb-2">Email Us</h4>
              <p className="text-sm text-muted-foreground mb-2">support@educampus.edu</p>
              <p className="text-xs text-muted-foreground">We'll respond within 24 hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="mb-2">Live Chat</h4>
              <p className="text-sm text-muted-foreground mb-2">Available Mon-Fri</p>
              <p className="text-xs text-muted-foreground">9:00 AM - 5:00 PM EST</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="mb-2">Call Us</h4>
              <p className="text-sm text-muted-foreground mb-2">1-800-STUDY-HUB</p>
              <p className="text-xs text-muted-foreground">Mon-Fri, 9 AM - 5 PM EST</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@university.edu" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help..." 
                    rows={6}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Office Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm">EduCampus Headquarters</p>
                    <p className="text-sm text-muted-foreground">123 Education Avenue</p>
                    <p className="text-sm text-muted-foreground">Boston, MA 02115</p>
                    <p className="text-sm text-muted-foreground">United States</p>
                  </div>
                </div>
                <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Map View</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Before reaching out, check our Help Center for quick answers to common questions.
                </p>
                <Button variant="outline" className="w-full">Visit Help Center</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
