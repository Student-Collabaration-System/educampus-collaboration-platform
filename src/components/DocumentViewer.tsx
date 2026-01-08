import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Download, Heart, X, FileText } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { toast } from "sonner@2.0.3";

interface DocumentViewerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type: string;
  uploadedBy: string;
  uploadDate: string;
}

export function DocumentViewer({
  open,
  onClose,
  title,
  description,
  type,
  uploadedBy,
  uploadDate,
}: DocumentViewerProps) {
  // Mock document content based on the title
  const getDocumentContent = () => {
    if (title.includes("Calculus")) {
      return (
        <div className="space-y-6">
          <h2 className="text-xl">Chapter 1: Limits and Continuity</h2>
          <p>In this chapter, we explore the fundamental concepts of limits and continuity in calculus. These concepts form the foundation for understanding derivatives and integrals.</p>
          
          <h3 className="text-lg mt-6">1.1 Understanding Limits</h3>
          <p>A limit describes the value that a function approaches as the input approaches some value. Formally, we write:</p>
          <div className="bg-slate-100 p-4 rounded-lg my-4">
            <p className="text-center">lim(x→a) f(x) = L</p>
          </div>
          
          <h3 className="text-lg mt-6">1.2 Continuity</h3>
          <p>A function f(x) is continuous at a point x = a if:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>f(a) is defined</li>
            <li>lim(x→a) f(x) exists</li>
            <li>lim(x→a) f(x) = f(a)</li>
          </ul>

          <h2 className="text-xl mt-8">Chapter 2: Derivatives</h2>
          <p>The derivative represents the rate of change of a function. It's one of the most important concepts in calculus.</p>
          
          <h3 className="text-lg mt-6">2.1 The Power Rule</h3>
          <p>For any function f(x) = x^n, the derivative is:</p>
          <div className="bg-slate-100 p-4 rounded-lg my-4">
            <p className="text-center">f'(x) = nx^(n-1)</p>
          </div>

          <h3 className="text-lg mt-6">2.2 Chain Rule</h3>
          <p>When functions are composed, we use the chain rule to find derivatives:</p>
          <div className="bg-slate-100 p-4 rounded-lg my-4">
            <p className="text-center">d/dx[f(g(x))] = f'(g(x)) · g'(x)</p>
          </div>
        </div>
      );
    } else if (title.includes("React")) {
      return (
        <div className="space-y-6">
          <h2 className="text-xl">React Hooks Reference Guide</h2>
          <p>A comprehensive guide to the most commonly used React Hooks.</p>
          
          <h3 className="text-lg mt-6">useState</h3>
          <p>Manage state in functional components:</p>
          <div className="bg-slate-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
            <code className="text-sm">
              {`const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);`}
            </code>
          </div>
          
          <h3 className="text-lg mt-6">useEffect</h3>
          <p>Perform side effects in your components:</p>
          <div className="bg-slate-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
            <code className="text-sm">
              {`useEffect(() => {
  // Effect code here
  return () => {
    // Cleanup code
  };
}, [dependencies]);`}
            </code>
          </div>

          <h3 className="text-lg mt-6">useContext</h3>
          <p>Access context values without prop drilling:</p>
          <div className="bg-slate-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
            <code className="text-sm">
              {`const value = useContext(MyContext);`}
            </code>
          </div>

          <h3 className="text-lg mt-6">useMemo</h3>
          <p>Memoize expensive computations:</p>
          <div className="bg-slate-900 text-white p-4 rounded-lg my-4 overflow-x-auto">
            <code className="text-sm">
              {`const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b]
);`}
            </code>
          </div>
        </div>
      );
    } else if (title.includes("Database")) {
      return (
        <div className="space-y-6">
          <h2 className="text-xl">Database Schema Design Patterns</h2>
          <p>Learn common patterns for designing efficient and scalable database schemas.</p>
          
          <h3 className="text-lg mt-6">1. One-to-Many Relationship</h3>
          <p>Example: Users and Posts</p>
          <div className="bg-slate-100 p-4 rounded-lg my-4">
            <p className="mb-2">Users Table:</p>
            <code className="text-sm">id, username, email, created_at</code>
            <p className="mb-2 mt-4">Posts Table:</p>
            <code className="text-sm">id, user_id (FK), title, content, created_at</code>
          </div>
          
          <h3 className="text-lg mt-6">2. Many-to-Many Relationship</h3>
          <p>Example: Students and Courses</p>
          <div className="bg-slate-100 p-4 rounded-lg my-4">
            <p className="mb-2">Students Table:</p>
            <code className="text-sm">id, name, email</code>
            <p className="mb-2 mt-4">Courses Table:</p>
            <code className="text-sm">id, course_name, credits</code>
            <p className="mb-2 mt-4">Enrollments Table (Junction):</p>
            <code className="text-sm">student_id (FK), course_id (FK), enrollment_date</code>
          </div>

          <h3 className="text-lg mt-6">3. Normalization</h3>
          <p>Key principles for organizing data:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>1NF: Atomic values, no repeating groups</li>
            <li>2NF: No partial dependencies on composite keys</li>
            <li>3NF: No transitive dependencies</li>
          </ul>
        </div>
      );
    } else if (title.includes("Physics")) {
      return (
        <div className="space-y-6">
          <h2 className="text-xl">Physics Problem Solutions</h2>
          <p>Detailed step-by-step solutions for common physics problems.</p>
          
          <h3 className="text-lg mt-6">Problem 1: Projectile Motion</h3>
          <p className="italic">A ball is thrown at 20 m/s at an angle of 30° above the horizontal. Find the maximum height and range.</p>
          
          <div className="bg-slate-100 p-4 rounded-lg my-4">
            <p className="mb-2">Given:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Initial velocity: v₀ = 20 m/s</li>
              <li>Angle: θ = 30°</li>
              <li>g = 9.8 m/s²</li>
            </ul>
            
            <p className="mt-4 mb-2">Solution:</p>
            <p>Maximum height: H = (v₀²sin²θ) / (2g)</p>
            <p>H = (20² × sin²30°) / (2 × 9.8) = 5.10 m</p>
            
            <p className="mt-4">Range: R = (v₀²sin2θ) / g</p>
            <p>R = (20² × sin60°) / 9.8 = 35.35 m</p>
          </div>

          <h3 className="text-lg mt-6">Problem 2: Newton's Second Law</h3>
          <p className="italic">A 5 kg object experiences a net force of 15 N. What is its acceleration?</p>
          
          <div className="bg-slate-100 p-4 rounded-lg my-4">
            <p className="mb-2">Using F = ma:</p>
            <p>a = F/m = 15 N / 5 kg = 3 m/s²</p>
          </div>
        </div>
      );
    } else if (title.includes("Linear Algebra")) {
      return (
        <div className="space-y-6">
          <h2 className="text-xl">Linear Algebra Course Notes</h2>
          
          <h3 className="text-lg mt-6">Vectors and Matrices</h3>
          <p>Understanding the fundamental building blocks of linear algebra.</p>
          <div className="bg-slate-100 p-4 rounded-lg my-4">
            <p>A vector is an ordered list of numbers. A matrix is a rectangular array of numbers.</p>
          </div>

          <h3 className="text-lg mt-6">Matrix Operations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Addition: Add corresponding elements</li>
            <li>Scalar multiplication: Multiply each element by scalar</li>
            <li>Matrix multiplication: Row by column multiplication</li>
          </ul>
        </div>
      );
    } else if (title.includes("JavaScript")) {
      return (
        <div className="space-y-6">
          <h2 className="text-xl">Modern JavaScript ES6+ Features</h2>
          
          <h3 className="text-lg mt-6">Arrow Functions</h3>
          <div className="bg-slate-900 text-white p-4 rounded-lg my-4">
            <code className="text-sm">
              {`const add = (a, b) => a + b;
const square = x => x * x;`}
            </code>
          </div>

          <h3 className="text-lg mt-6">Destructuring</h3>
          <div className="bg-slate-900 text-white p-4 rounded-lg my-4">
            <code className="text-sm">
              {`const { name, age } = person;
const [first, second] = array;`}
            </code>
          </div>

          <h3 className="text-lg mt-6">Spread Operator</h3>
          <div className="bg-slate-900 text-white p-4 rounded-lg my-4">
            <code className="text-sm">
              {`const newArray = [...oldArray, newItem];
const merged = { ...obj1, ...obj2 };`}
            </code>
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
          
          <h3 className="text-lg mt-6">Document Overview</h3>
          <p>This is a comprehensive resource document covering important topics and concepts.</p>
          
          <div className="bg-slate-100 p-4 rounded-lg my-4">
            <p>Key learning objectives:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Understand fundamental concepts</li>
              <li>Apply knowledge to practical scenarios</li>
              <li>Master advanced techniques</li>
              <li>Develop problem-solving skills</li>
            </ul>
          </div>

          <h3 className="text-lg mt-6">Additional Resources</h3>
          <p>For more information, refer to the recommended textbooks and online materials listed in the course syllabus.</p>
        </div>
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <FileText className={type === "PDF" ? "w-5 h-5 text-red-500" : "w-5 h-5 text-blue-500"} />
                <DialogTitle>{title}</DialogTitle>
                <Badge variant="outline">{type}</Badge>
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

        <ScrollArea className="h-[60vh] px-6">
          <div className="py-6 prose max-w-none">
            {getDocumentContent()}
          </div>
        </ScrollArea>

        <div className="flex items-center gap-3 p-6 pt-4 border-t bg-slate-50">
          <Button 
            className="flex-1" 
            onClick={() => toast.success(`Downloading ${title}...`)}
          >
            <Download className="w-4 h-4 mr-2" />
            Download
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
