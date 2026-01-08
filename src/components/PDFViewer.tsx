import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Download, Heart, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

interface PDFViewerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type: string;
  uploadedBy: string;
  uploadDate: string;
}

export function PDFViewer({
  open,
  onClose,
  title,
  description,
  type,
  uploadedBy,
  uploadDate,
}: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const totalPages = 5;

  const getPDFContent = (page: number) => {
    // Mock PDF content for different pages
    if (title.includes("Calculus")) {
      const pages = [
        {
          title: "Chapter 1: Limits and Continuity",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">1.1 Understanding Limits</h3>
              <p>A limit describes the value that a function approaches as the input approaches some value.</p>
              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <p className="text-center text-xl">lim(x→a) f(x) = L</p>
              </div>
              <p>This notation means: as x gets closer and closer to a, f(x) gets closer and closer to L.</p>
              <h3 className="text-lg mt-6">Example 1.1</h3>
              <p>Find: lim(x→2) (x² - 4)/(x - 2)</p>
              <div className="bg-slate-100 p-4 rounded-lg my-3">
                <p>= lim(x→2) (x + 2)(x - 2)/(x - 2)</p>
                <p>= lim(x→2) (x + 2) = 4</p>
              </div>
            </div>
          ),
        },
        {
          title: "Chapter 2: Derivatives",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">2.1 Definition of Derivative</h3>
              <p>The derivative represents the instantaneous rate of change of a function.</p>
              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <p className="text-center text-xl">f'(x) = lim(h→0) [f(x+h) - f(x)]/h</p>
              </div>
              <h3 className="text-lg mt-6">2.2 The Power Rule</h3>
              <p>For any function f(x) = xⁿ:</p>
              <div className="bg-slate-100 p-4 rounded-lg my-3">
                <p className="text-center">f'(x) = nxⁿ⁻¹</p>
              </div>
            </div>
          ),
        },
        {
          title: "Chapter 3: Integration",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">3.1 Antiderivatives</h3>
              <p>An antiderivative of f(x) is a function F(x) such that F'(x) = f(x).</p>
              <div className="bg-slate-100 p-6 rounded-lg my-4">
                <p className="text-center text-xl">∫ xⁿ dx = xⁿ⁺¹/(n+1) + C</p>
              </div>
              <h3 className="text-lg mt-6">3.2 Definite Integrals</h3>
              <p>The definite integral represents the area under a curve:</p>
              <div className="bg-slate-100 p-4 rounded-lg my-3">
                <p className="text-center">∫[a,b] f(x) dx = F(b) - F(a)</p>
              </div>
            </div>
          ),
        },
        {
          title: "Chapter 4: Applications",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">4.1 Optimization Problems</h3>
              <p>Using derivatives to find maximum and minimum values.</p>
              <div className="bg-slate-100 p-4 rounded-lg my-4">
                <p>Steps:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>Find the critical points: f'(x) = 0</li>
                  <li>Use the second derivative test</li>
                  <li>Check endpoints if applicable</li>
                </ol>
              </div>
            </div>
          ),
        },
        {
          title: "Chapter 5: Series and Sequences",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">5.1 Convergence Tests</h3>
              <p>Methods to determine if a series converges:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ratio Test</li>
                <li>Root Test</li>
                <li>Comparison Test</li>
                <li>Integral Test</li>
              </ul>
            </div>
          ),
        },
      ];
      return pages[page - 1];
    } else if (title.includes("React")) {
      const pages = [
        {
          title: "React Hooks - useState",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">useState Hook</h3>
              <p>Manage state in functional components.</p>
              <div className="bg-slate-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
                <code className="text-sm whitespace-pre">{`const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}

return <button onClick={increment}>
  Count: {count}
</button>;`}</code>
              </div>
            </div>
          ),
        },
        {
          title: "React Hooks - useEffect",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">useEffect Hook</h3>
              <p>Perform side effects in your components.</p>
              <div className="bg-slate-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
                <code className="text-sm whitespace-pre">{`useEffect(() => {
  // Effect runs after render
  document.title = \`Count: \${count}\`;
  
  return () => {
    // Cleanup function
  };
}, [count]); // Dependencies`}</code>
              </div>
            </div>
          ),
        },
        {
          title: "React Hooks - useContext",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">useContext Hook</h3>
              <p>Access context without prop drilling.</p>
              <div className="bg-slate-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
                <code className="text-sm whitespace-pre">{`const theme = useContext(ThemeContext);

return (
  <div className={theme.dark ? 'dark' : 'light'}>
    Content
  </div>
);`}</code>
              </div>
            </div>
          ),
        },
        {
          title: "React Hooks - useMemo",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">useMemo Hook</h3>
              <p>Memoize expensive computations.</p>
              <div className="bg-slate-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
                <code className="text-sm whitespace-pre">{`const expensiveValue = useMemo(() => {
  return computeExpensive(a, b);
}, [a, b]);`}</code>
              </div>
            </div>
          ),
        },
        {
          title: "React Hooks - useCallback",
          content: (
            <div className="space-y-4">
              <h3 className="text-lg">useCallback Hook</h3>
              <p>Memoize callback functions.</p>
              <div className="bg-slate-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
                <code className="text-sm whitespace-pre">{`const handleClick = useCallback(() => {
  console.log(value);
}, [value]);`}</code>
              </div>
            </div>
          ),
        },
      ];
      return pages[page - 1];
    } else {
      // Generic PDF content
      return {
        title: `${title} - Page ${page}`,
        content: (
          <div className="space-y-4">
            <p>This is page {page} of the PDF document.</p>
            <div className="bg-slate-100 p-8 rounded-lg my-4 text-center">
              <p className="text-muted-foreground">Document content would be displayed here</p>
            </div>
          </div>
        ),
      };
    }
  };

  const pageContent = getPDFContent(currentPage);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-5 h-5 text-red-500" />
                <DialogTitle>{title}</DialogTitle>
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">PDF</Badge>
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

        {/* PDF Toolbar */}
        <div className="flex items-center justify-between px-6 py-3 border-b bg-slate-50">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm px-3">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setZoom(Math.max(50, zoom - 25))}
              disabled={zoom <= 50}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-sm px-3 min-w-[60px] text-center">{zoom}%</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setZoom(Math.min(200, zoom + 25))}
              disabled={zoom >= 200}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* PDF Content */}
        <ScrollArea className="h-[50vh] px-6">
          <div className="py-6" style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}>
            <div className="max-w-3xl mx-auto bg-white shadow-lg p-12 rounded">
              <h2 className="text-2xl mb-6">{pageContent.title}</h2>
              {pageContent.content}
            </div>
          </div>
        </ScrollArea>

        <div className="flex items-center gap-3 p-6 pt-4 border-t bg-slate-50">
          <Button 
            className="flex-1" 
            onClick={() => toast.success(`Downloading ${title}...`)}
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
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
