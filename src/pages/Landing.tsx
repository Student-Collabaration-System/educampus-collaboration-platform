import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  MessageCircle, 
  Trophy,
  CheckCircle2,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe
} from "lucide-react";

interface LandingProps {
  onNavigate?: (page: string) => void;
}

export function Landing({ onNavigate }: LandingProps) {
  const navigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const features = [
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Study Groups",
      description: "Create or join study groups with classmates. Collaborate in real-time and achieve more together."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Shared Resources",
      description: "Access a vast library of study materials, notes, and documents shared by your peers."
    },

    {
      icon: <MessageCircle className="w-10 h-10 text-blue-600" />,
      title: "Real-time Chat",
      description: "Stay connected with your study groups through instant messaging and live discussions."
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: "Fast & Reliable",
      description: "Lightning-fast platform built for seamless collaboration without any lag."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "10K+", label: "Study Groups" },
    { number: "100K+", label: "Resources Shared" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Major",
      content: "EduCampus transformed how I study. The collaborative features helped me ace my exams!",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      role: "Engineering Student",
      content: "Best platform for group projects. The resource sharing feature is a game-changer.",
      avatar: "AR",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Medical Student",
      content: "I love how organized everything is. The platform keeps me on track with all my study groups and resources.",
      avatar: "EW",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-900" />
              <span className="text-2xl text-blue-900">EduCampus</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-blue-900 transition-colors">Features</a>
              <a href="#testimonials" className="text-slate-600 hover:text-blue-900 transition-colors">Testimonials</a>
              <a href="#about" className="text-slate-600 hover:text-blue-900 transition-colors">About</a>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate('login')}>
                Log In
              </Button>
              <Button onClick={() => navigate('signup')}>
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-700 hover:bg-blue-600 border-blue-600">
              <Star className="w-3 h-3 mr-1" />
              Trusted by 50,000+ Students
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Collaborate. Learn. Excel.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              The ultimate platform for students to collaborate, share resources, and achieve academic success together.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-blue-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-4xl md:text-5xl mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed to enhance your learning experience and help you achieve your academic goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-900 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl mb-4">Loved by Students Worldwide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what students are saying about EduCampus.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-slate-700">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Secure & Private</h3>
                <p className="text-muted-foreground">Your data is encrypted and protected with industry-standard security.</p>
              </div>
              <div>
                <Globe className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Global Community</h3>
                <p className="text-muted-foreground">Connect with students from over 500 universities worldwide.</p>
              </div>
              <div>
                <Zap className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Always Available</h3>
                <p className="text-muted-foreground">99.9% uptime guarantee. Study anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Transform Your Studies?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of students who are already achieving more with EduCampus.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50"
            onClick={() => navigate('signup')}
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}