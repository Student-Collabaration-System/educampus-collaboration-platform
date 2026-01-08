# EduCampus Pages Overview

This document provides a short explanation of each page in the EduCampus platform.

## Public Pages (No Login Required)

### Landing.tsx
The main commercial/marketing page that visitors see when they first arrive at EduCampus. Features hero section, platform statistics, feature highlights, student testimonials, pricing plans, and a professional footer. Serves as the entry point for new users with CTAs to sign up or log in.

### Login.tsx
User authentication page where existing users can log in using email/password or OAuth (Google/Microsoft). Includes password visibility toggle, "Remember me" option, "Forgot password" link, and navigation to signup page for new users.

### Signup.tsx
New user registration page where students can create an EduCampus account. Collects full name, email, username, and password. Also supports OAuth signup via Google or Microsoft. Includes password strength indicator and terms acceptance.

## Main Application Pages (Login Required)

### Dashboard.tsx
The main hub after login showing an overview of the student's activity. Displays welcome message with user's name, 4 statistics cards (study groups, resources, events, study hours), recent activity feed, upcoming events list, and quick navigation to key features.

### StudyGroups.tsx
Browse, search, and join study groups. Shows groups you're in ("My Groups" tab) and all available groups ("All Groups" tab). Includes filters by subject/category, search functionality, and ability to create new study groups. Each group card displays member count, subject, and activity level.

### Resources.tsx
Library of shared educational materials including PDFs, documents, and presentation slides. Features tabbed interface for "My Resources" and "All Resources", search and filter by document type, upload functionality, and clickable documents that open in specialized viewers (PDFViewer, DocumentViewer, SlidesViewer).

### CalendarPage.tsx
Monthly calendar view showing all upcoming events, deadlines, study sessions, and exams. Interactive calendar with color-coded events, event details sidebar, filter options by event type, and ability to add new events. Helps students track all important dates.

### GroupDetail.tsx
Detailed view of a specific study group. Shows group information, member list with avatars, shared resources, upcoming group events, activity feed, and group discussion area. Accessed when clicking on a group from the Study Groups page.

### Profile.tsx
User's public profile page displaying their information, bio, joined study groups, uploaded resources, and activity statistics. Shows profile picture, full name, username, email, bio, and achievement badges. Other users can view this to learn about fellow students.

### Settings.tsx
User account settings and preferences. Allows users to update personal information (name, email, username, bio), upload profile picture, change password, configure notification preferences, privacy settings, and account management options (export data, delete account).

### Notifications.tsx
Central hub for all user notifications including new messages, group invitations, resource uploads, event reminders, and system announcements. Features tabs for "All", "Unread", and "Mentions", with mark as read/unread functionality and notification filtering.

### SearchResults.tsx
Displays search results when users search from the header. Shows results across multiple categories: study groups, resources, users, and events. Results are organized in tabbed sections with filtering options and relevance scoring.

## Support & Legal Pages

### Help.tsx
Comprehensive help center with FAQs organized by category (Getting Started, Study Groups, Resources, Account). Includes search functionality to find answers, contact support button, and helpful articles for common questions. Live chat integration for immediate assistance.

### ContactUs.tsx
Contact form for users to reach out to EduCampus support team. Includes fields for name, email, subject, message category dropdown (Technical Support, Billing, Feature Request, etc.), and message text area. Also displays alternative contact methods.

### Guidelines.tsx
Community guidelines and code of conduct for EduCampus users. Outlines expected behavior, rules for study group participation, resource sharing policies, consequences for violations, and how to report issues. Ensures a safe, respectful learning environment.

### PrivacyPolicy.tsx
Legal document explaining how EduCampus collects, uses, stores, and protects user data. Covers data collection practices, cookie usage, third-party services, user rights (access, deletion, export), and compliance with privacy regulations (GDPR, CCPA).

### TermsOfService.tsx
Legal agreement between EduCampus and users outlining terms of use, user responsibilities, intellectual property rights, acceptable use policy, disclaimer of warranties, limitation of liability, and dispute resolution procedures.

## Page Navigation Flow

```
Landing → Login/Signup → Dashboard
                          ├── Study Groups → Group Detail
                          ├── Resources
                          ├── Calendar
                          ├── Notifications
                          ├── Profile
                          └── Settings

Footer Links (Available from any page):
├── Help
├── Contact Us
├── Guidelines
├── Privacy Policy
└── Terms of Service
```

## Key Features by Page

| Page | Key Features |
|------|-------------|
| **Landing** | Hero CTA, Features showcase, Testimonials, Pricing |
| **Dashboard** | Stats overview, Activity feed, Quick actions |
| **Study Groups** | Search/filter, Create groups, Join groups |
| **Resources** | Upload/download, Multiple file types, Preview viewers |
| **Calendar** | Monthly view, Event creation, Reminders |
| **Profile** | Edit bio, Upload photo, View activity |
| **Settings** | Account preferences, Privacy controls, Notifications |
| **Search** | Multi-category results, Filtering, Quick navigation |

## Component Support

Each page utilizes various reusable components:
- **Header.tsx**: Navigation bar with search, notifications, profile menu
- **ActivityFeed.tsx**: Shows recent platform activity
- **UpcomingEvents.tsx**: Displays next scheduled events
- **StatsCard.tsx**: Visual statistics display
- **StudyGroupCard.tsx**: Group preview cards
- **ResourceCard.tsx**: Document preview cards
- **DocumentViewer/PDFViewer/SlidesViewer**: File preview modals
- **CreateGroupDialog.tsx**: Modal for creating new groups
- **UploadResourceDialog.tsx**: Modal for uploading files
- **OAuthDialog.tsx**: OAuth authentication flow

---

*Last Updated: October 25, 2025*
