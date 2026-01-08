import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, MessageCircle, Book, Video, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function Help() {
  const faqs = [
    {
      question: "How do I create a study group?",
      answer: "Navigate to the Study Groups page and click the 'Create Group' button. Fill in the group details including name, description, category, and initial members. You can customize group settings and privacy options during creation."
    },
    {
      question: "How can I upload resources?",
      answer: "Go to the Resources page and click the 'Upload' button. Select your file (PDF, DOC, or presentation), add a title and description, choose a category, and click upload. Your resource will be available to your study groups."
    },
    {
      question: "How do I join a study group?",
      answer: "Browse available groups in the 'Discover' tab on the Study Groups page. Click on a group to view details, then click 'Join Group'. Some groups may require approval from the group admin."
    },
    {
      question: "How do I organize my study materials?",
      answer: "Use the Resources section to upload, organize, and share your study materials. You can categorize resources by major and type (PDF, Document, Slides) for easy access and collaboration."
    },
    {
      question: "How do notifications work?",
      answer: "You'll receive notifications for group messages, new resources, event reminders, and mentions. Customize your notification preferences in Settings > Notifications to control what alerts you receive."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes, we take privacy seriously. Your data is encrypted and securely stored. You control who can see your profile and activity. Review our privacy settings in Settings > Privacy for more control."
    },
    {
      question: "How do I leave a study group?",
      answer: "Go to the study group page and click the three-dot menu, then select 'Leave Group'. You can rejoin anytime if the group is still active and accepting members."
    },
    {
      question: "Can I download resources offline?",
      answer: "Yes, click the download button on any resource card to save it locally. You can access downloaded resources anytime, even without internet connection."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4">Help Center</h1>
          <p className="text-lg text-emerald-100 max-w-2xl">
            Get answers to your questions and learn how to make the most of EduCampus
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                type="search" 
                placeholder="Search for help articles..." 
                className="pl-12 h-12 text-base"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="mb-1">User Guide</h4>
              <p className="text-sm text-muted-foreground">Complete documentation</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <Video className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="mb-1">Video Tutorials</h4>
              <p className="text-sm text-muted-foreground">Watch and learn</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="mb-1">Community</h4>
              <p className="text-sm text-muted-foreground">Ask the community</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="mb-1">Contact Us</h4>
              <p className="text-sm text-muted-foreground">Get direct support</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>Our support team is here to assist you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Button className="flex-1">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Live Chat
              </Button>
              <Button variant="outline" className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}