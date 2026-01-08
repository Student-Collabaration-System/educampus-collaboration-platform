import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Download, Heart, ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

interface SlidesViewerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type: string;
  uploadedBy: string;
  uploadDate: string;
}

export function SlidesViewer({
  open,
  onClose,
  title,
  description,
  type,
  uploadedBy,
  uploadDate,
}: SlidesViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getSlideContent = () => {
    if (title.includes("Machine Learning")) {
      return [
        {
          title: "Introduction to Machine Learning",
          content: (
            <div className="text-center space-y-8">
              <h1 className="text-5xl">Machine Learning Fundamentals</h1>
              <p className="text-2xl text-muted-foreground mt-8">A Comprehensive Overview</p>
              <div className="mt-12">
                <p className="text-xl">{uploadedBy}</p>
                <p className="text-muted-foreground">{uploadDate}</p>
              </div>
            </div>
          ),
        },
        {
          title: "What is Machine Learning?",
          content: (
            <div className="space-y-6">
              <h2 className="text-4xl mb-8">What is Machine Learning?</h2>
              <div className="space-y-4 text-xl">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-2xl">Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p>📊 Data</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p>🧠 Algorithms</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <p>🎯 Predictions</p>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Types of Machine Learning",
          content: (
            <div className="space-y-6">
              <h2 className="text-4xl mb-8">Types of Machine Learning</h2>
              <div className="space-y-6">
                <div className="bg-blue-900 text-white p-6 rounded-lg">
                  <h3 className="text-2xl mb-2">1. Supervised Learning</h3>
                  <p className="text-lg">Learning from labeled data to make predictions</p>
                </div>
                <div className="bg-green-900 text-white p-6 rounded-lg">
                  <h3 className="text-2xl mb-2">2. Unsupervised Learning</h3>
                  <p className="text-lg">Finding patterns in unlabeled data</p>
                </div>
                <div className="bg-purple-900 text-white p-6 rounded-lg">
                  <h3 className="text-2xl mb-2">3. Reinforcement Learning</h3>
                  <p className="text-lg">Learning through trial and error with rewards</p>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Common Algorithms",
          content: (
            <div className="space-y-6">
              <h2 className="text-4xl mb-8">Common ML Algorithms</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-xl mb-3">Classification</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Decision Trees</li>
                    <li>• Random Forest</li>
                    <li>• SVM</li>
                    <li>• Neural Networks</li>
                  </ul>
                </div>
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-xl mb-3">Regression</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Linear Regression</li>
                    <li>• Polynomial Regression</li>
                    <li>• Ridge & Lasso</li>
                  </ul>
                </div>
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-xl mb-3">Clustering</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• K-Means</li>
                    <li>• DBSCAN</li>
                    <li>• Hierarchical</li>
                  </ul>
                </div>
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-xl mb-3">Dimensionality</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• PCA</li>
                    <li>• t-SNE</li>
                    <li>• LDA</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Applications",
          content: (
            <div className="space-y-6">
              <h2 className="text-4xl mb-8">Real-World Applications</h2>
              <div className="grid grid-cols-2 gap-6 text-lg">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-lg">
                  <h3 className="text-2xl mb-2">🏥 Healthcare</h3>
                  <p>Disease diagnosis, drug discovery, patient monitoring</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-8 rounded-lg">
                  <h3 className="text-2xl mb-2">💰 Finance</h3>
                  <p>Fraud detection, algorithmic trading, risk assessment</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-lg">
                  <h3 className="text-2xl mb-2">🚗 Automotive</h3>
                  <p>Self-driving cars, predictive maintenance</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-lg">
                  <h3 className="text-2xl mb-2">🛒 E-commerce</h3>
                  <p>Recommendation systems, customer segmentation</p>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Thank You",
          content: (
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl">Thank You!</h1>
              <p className="text-2xl text-muted-foreground">Questions?</p>
              <div className="mt-12 text-xl">
                <p>{uploadedBy}</p>
                <p className="text-muted-foreground mt-2">EduCampus Platform</p>
              </div>
            </div>
          ),
        },
      ];
    } else if (title.includes("Web Development")) {
      return [
        {
          title: "Modern Web Development",
          content: (
            <div className="text-center space-y-8">
              <h1 className="text-5xl">Modern Web Development</h1>
              <p className="text-2xl text-muted-foreground mt-8">Building for the Modern Web</p>
            </div>
          ),
        },
        {
          title: "The Web Stack",
          content: (
            <div className="space-y-6">
              <h2 className="text-4xl mb-8">The Modern Web Stack</h2>
              <div className="space-y-4">
                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-2xl">Frontend: HTML, CSS, JavaScript</h3>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <h3 className="text-2xl">Backend: Node.js, Python, Java</h3>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h3 className="text-2xl">Database: PostgreSQL, MongoDB</h3>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Key Concepts",
          content: (
            <div className="space-y-6">
              <h2 className="text-4xl mb-8">Key Concepts</h2>
              <ul className="space-y-4 text-xl">
                <li className="bg-slate-100 p-4 rounded">✓ Responsive Design</li>
                <li className="bg-slate-100 p-4 rounded">✓ Component Architecture</li>
                <li className="bg-slate-100 p-4 rounded">✓ State Management</li>
                <li className="bg-slate-100 p-4 rounded">✓ API Integration</li>
              </ul>
            </div>
          ),
        },
      ];
    } else {
      // Generic slides
      return [
        {
          title: title,
          content: (
            <div className="text-center space-y-8">
              <h1 className="text-5xl">{title}</h1>
              <p className="text-2xl text-muted-foreground mt-8">{description}</p>
            </div>
          ),
        },
        {
          title: "Overview",
          content: (
            <div className="space-y-6">
              <h2 className="text-4xl mb-8">Overview</h2>
              <p className="text-xl">This presentation covers key concepts and important topics related to the subject matter.</p>
            </div>
          ),
        },
        {
          title: "Key Points",
          content: (
            <div className="space-y-6">
              <h2 className="text-4xl mb-8">Key Points</h2>
              <ul className="space-y-4 text-xl">
                <li className="bg-slate-100 p-4 rounded">• Important concept 1</li>
                <li className="bg-slate-100 p-4 rounded">• Important concept 2</li>
                <li className="bg-slate-100 p-4 rounded">• Important concept 3</li>
              </ul>
            </div>
          ),
        },
      ];
    }
  };

  const slides = getSlideContent();
  const totalSlides = slides.length;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Presentation className="w-5 h-5 text-orange-500" />
                <DialogTitle>{title}</DialogTitle>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Slides</Badge>
              </div>
              <DialogDescription>{description}</DialogDescription>
              
              <div className="flex items-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{uploadedBy[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-muted-foreground">
                    {uploadedBy} • {uploadDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Slide Content */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 aspect-video flex items-center justify-center p-12">
          <div className="w-full h-full bg-white rounded-lg shadow-2xl p-12 overflow-auto">
            {slides[currentSlide].content}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Slide Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>

        {/* Slide Thumbnails */}
        <div className="flex items-center gap-2 px-6 py-4 overflow-x-auto border-t bg-slate-50">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`flex-shrink-0 w-24 h-16 rounded border-2 transition-all ${
                currentSlide === index
                  ? 'border-blue-600 shadow-md'
                  : 'border-slate-300 opacity-60 hover:opacity-100'
              } bg-white p-2 text-xs overflow-hidden`}
            >
              <div className="text-left truncate">{slide.title}</div>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 p-6 pt-4 border-t bg-slate-50">
          <Button 
            className="flex-1" 
            onClick={() => toast.success(`Downloading ${title}...`)}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Slides
          </Button>
          <Button 
            variant="outline"
            onClick={() => toast.success("Added to favorites!")}
          >
            <Heart className="w-4 h-4 mr-2" />
            Favorite
          </Button>
          <Button 
            variant="outline"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
