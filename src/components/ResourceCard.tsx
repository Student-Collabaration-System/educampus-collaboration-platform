import { FileText, Download, Presentation, MoreVertical, Flag } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ReportModal } from "./ReportModal";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  uploadedBy: string;
  uploadDate: string;
  onClick?: () => void;
}

export function ResourceCard({ 
  title, 
  description, 
  type, 
  uploadedBy, 
  uploadDate,
  onClick
}: ResourceCardProps) {
  const [showReportModal, setShowReportModal] = useState(false);
  
  const getIcon = () => {
    switch (type) {
      case "PDF":
        return <FileText className="w-5 h-5 text-red-500" />;
      case "Document":
        return <FileText className="w-5 h-5 text-blue-500" />;
      case "Slides":
        return <Presentation className="w-5 h-5 text-orange-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <>
      {/* Fixed width card: 376px */}
      <div 
        className="w-[376px] bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-4"
        style={{ minWidth: '376px', maxWidth: '376px' }}
        onClick={onClick}
      >
        {/* Icon + Title + Badge + Menu - Horizontal layout */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              {getIcon()}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-base text-gray-900 leading-tight break-words">
                {title}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge variant="outline" className="text-xs px-2 py-1">
              {type}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                <DropdownMenuItem onClick={() => setShowReportModal(true)}>
                  <Flag className="h-4 w-4 mr-2" />
                  Report this resource
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Description text - Width: 328px (376 - 24*2 = 328) */}
        <div className="w-full">
          <p className="text-sm text-gray-600 leading-relaxed break-words">
            {description}
          </p>
        </div>

        {/* Avatar + Name + Date - Horizontal layout */}
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6 flex-shrink-0">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-xs">{uploadedBy[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-gray-600">
            {uploadedBy} • {uploadDate}
          </span>
        </div>

        {/* Download button - Full width */}
        <Button 
          className="w-full" 
          size="default"
          onClick={(e) => {
            e.stopPropagation();
            toast.success(`Downloading ${title}...`);
          }}
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      {/* Report Modal */}
      <ReportModal
        contentType="resource"
        contentId={title}
        open={showReportModal}
        onOpenChange={setShowReportModal}
      />
    </>
  );
}
