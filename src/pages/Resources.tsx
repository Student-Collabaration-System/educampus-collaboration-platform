import { useState } from "react";
import { ResourceCard } from "../components/ResourceCard";
import { UploadResourceDialog } from "../components/UploadResourceDialog";
import { DocumentViewer } from "../components/DocumentViewer";
import { PDFViewer } from "../components/PDFViewer";
import { SlidesViewer } from "../components/SlidesViewer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function Resources() {
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const allResources = [
    {
      title: "Calculus II Study Guide",
      description: "Comprehensive notes covering chapters 1-5",
      type: "PDF",
      uploadedBy: "Sarah Chen",
      uploadDate: "2 days ago",
      major: "Mathematics",
    },
    {
      title: "Linear Algebra Notes",
      description: "Complete course notes with examples",
      type: "PDF",
      uploadedBy: "David Lee",
      uploadDate: "1 week ago",
      major: "Mathematics",
    },
    {
      title: "React Hooks Cheat Sheet",
      description: "Quick reference for useState, useEffect, and more",
      type: "PDF",
      uploadedBy: "Alex Rodriguez",
      uploadDate: "1 week ago",
      major: "Computer Science",
    },
    {
      title: "Database Schema Examples",
      description: "Real-world database design patterns",
      type: "Document",
      uploadedBy: "Mike Johnson",
      uploadDate: "3 days ago",
      major: "Computer Science",
    },
    {
      title: "Data Structures Visualization",
      description: "Visual guide to common data structures",
      type: "PDF",
      uploadedBy: "Rachel Kim",
      uploadDate: "2 weeks ago",
      major: "Computer Science",
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML concepts and algorithms",
      type: "Slides",
      uploadedBy: "Dr. Sarah Martinez",
      uploadDate: "3 days ago",
      major: "Computer Science",
    },
    {
      title: "Web Development Best Practices",
      description: "Modern web development techniques",
      type: "Slides",
      uploadedBy: "Chris Taylor",
      uploadDate: "1 week ago",
      major: "Computer Science",
    },
    {
      title: "JavaScript ES6+ Features",
      description: "Modern JavaScript features and syntax",
      type: "Document",
      uploadedBy: "Lisa Park",
      uploadDate: "4 days ago",
      major: "Computer Science",
    },
    {
      title: "Physics Problem Solutions",
      description: "Detailed solutions for practice problems",
      type: "PDF",
      uploadedBy: "Emma Wilson",
      uploadDate: "5 days ago",
      major: "Physics",
    },
    {
      title: "Chemistry Lab Report Template",
      description: "Professional template for lab reports",
      type: "Document",
      uploadedBy: "Tom Anderson",
      uploadDate: "1 week ago",
      major: "Chemistry",
    },
  ];

  const myResources = allResources.slice(0, 4);
  
  // Group resources by major
  const resourcesByMajor = allResources.reduce((acc, resource) => {
    const major = resource.major || "Other";
    if (!acc[major]) {
      acc[major] = [];
    }
    acc[major].push(resource);
    return acc;
  }, {} as Record<string, typeof allResources>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="w-full max-w-[1280px] mx-auto px-10">
          <h1 className="mb-4">Resources Library</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            Access a comprehensive collection of study materials, notes, and documents shared by your peers.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-10 py-8">
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-6 space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="my-uploads">My Uploads</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="relative sm:col-span-2 lg:col-span-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  type="search" 
                  placeholder="Search resources..." 
                  className="pl-9 w-full"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="doc">Document</SelectItem>
                  <SelectItem value="slides">Slides</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="recent">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="downloads">Most Downloads</SelectItem>
                </SelectContent>
              </Select>
              <UploadResourceDialog />
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="space-y-8">
              {Object.entries(resourcesByMajor).map(([major, resources]) => (
                <div key={major}>
                  <h3 className="mb-6 text-blue-900">{major}</h3>
                  {/* Container with wrap enabled for 3-column grid */}
                  <div className="flex flex-wrap gap-6">
                    {resources.map((resource, index) => (
                      <ResourceCard 
                        key={index} 
                        {...resource} 
                        onClick={() => setSelectedDocument(resource)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-uploads" className="mt-0">
            {/* Container with wrap enabled for 3-column grid */}
            <div className="flex flex-wrap gap-6">
              {myResources.map((resource, index) => (
                <ResourceCard 
                  key={index} 
                  {...resource} 
                  onClick={() => setSelectedDocument(resource)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="mt-0">
            <div className="text-center py-12">
              <p className="text-muted-foreground">No favorite resources yet. Start exploring and save your favorites!</p>
              <Button className="mt-4">Browse Resources</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedDocument && selectedDocument.type === "PDF" && (
        <PDFViewer
          open={!!selectedDocument}
          onClose={() => setSelectedDocument(null)}
          title={selectedDocument.title}
          description={selectedDocument.description}
          type={selectedDocument.type}
          uploadedBy={selectedDocument.uploadedBy}
          uploadDate={selectedDocument.uploadDate}
        />
      )}

      {selectedDocument && selectedDocument.type === "Document" && (
        <DocumentViewer
          open={!!selectedDocument}
          onClose={() => setSelectedDocument(null)}
          title={selectedDocument.title}
          description={selectedDocument.description}
          type={selectedDocument.type}
          uploadedBy={selectedDocument.uploadedBy}
          uploadDate={selectedDocument.uploadDate}
        />
      )}

      {selectedDocument && selectedDocument.type === "Slides" && (
        <SlidesViewer
          open={!!selectedDocument}
          onClose={() => setSelectedDocument(null)}
          title={selectedDocument.title}
          description={selectedDocument.description}
          type={selectedDocument.type}
          uploadedBy={selectedDocument.uploadedBy}
          uploadDate={selectedDocument.uploadDate}
        />
      )}
    </div>
  );
}