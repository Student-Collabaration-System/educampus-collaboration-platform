import { Users, MoreVertical, Flag } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ReportModal } from "./ReportModal";
import { useState } from "react";

interface StudyGroupCardProps {
  name: string;
  description: string;
  members: number;
  category: string;
  image?: string;
  onViewGroup?: () => void;
}

export function StudyGroupCard({ 
  name, 
  description, 
  members, 
  category, 
  image,
  onViewGroup
}: StudyGroupCardProps) {
  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <>
      {/* Fixed width card: 376px */}
      <div 
        className="w-[376px] bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
        style={{ 
          minWidth: '376px', 
          maxWidth: '376px',
          boxShadow: '0px 2px 8px rgba(0,0,0,0.08)'
        }}
      >
        {/* Cover image: 376px × 200px, corner radius top: 16px */}
        {image ? (
          <div className="w-full h-[200px] overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-[200px] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <Users className="w-16 h-16 text-blue-400" />
          </div>
        )}

        {/* Content area: padding 24px, auto layout vertical, gap 12px */}
        <div className="p-6 flex flex-col gap-3">
          {/* Title + Category badge (horizontal, space between) */}
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold text-base text-gray-900 leading-tight break-words flex-1">
              {name}
            </h4>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Badge variant="secondary" className="text-xs px-2 py-1">
                {category}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setShowReportModal(true)}>
                    <Flag className="h-4 w-4 mr-2" />
                    Report this group
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Description text (break-words, max 3 lines) */}
          <p className="text-sm text-gray-600 leading-relaxed break-words line-clamp-3">
            {description}
          </p>

          {/* Member count (8 members) */}
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{members} members</span>
          </div>

          {/* Member avatars (horizontal, -8px overlap) */}
          <div className="flex -space-x-2">
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-xs">M1</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback className="text-xs">M2</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarFallback className="text-xs">M3</AvatarFallback>
            </Avatar>
          </div>

          {/* "View Group" button (width: 100%, height: 48px, blue background) */}
          <Button 
            className="w-full h-12 mt-1" 
            onClick={onViewGroup}
          >
            View Group
          </Button>
        </div>
      </div>

      {/* Report Modal */}
      <ReportModal
        contentType="group"
        contentId={name}
        open={showReportModal}
        onOpenChange={setShowReportModal}
      />
    </>
  );
}
