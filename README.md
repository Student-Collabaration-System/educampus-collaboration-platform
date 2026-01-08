# EduCampus – Student Collaboration Platform

## Project Overview
EduCampus is a high-fidelity, web-based student collaboration platform designed to support
academic cooperation among university students in Potsdam, Germany. The platform enables
students to discover peers, form study groups, share academic resources, communicate in
real time, and manage collaborative academic activities.

This project was developed as part of the **Software Engineering II (SE2)** course and focuses
on **requirements engineering, system design, and user experience design**.

---

## Scope and Limitations

### In Scope
- Peer-to-peer academic resource sharing (notes, summaries, PDFs)
- Study group creation and collaboration
- Resource library with search and filter functionality
- Notification and reporting system
- Moderation workflow
- High-fidelity UI/UX prototype
- Frontend implementation using React and Vite

### Out of Scope
- Backend implementation (API, database, authentication)
- Real user data persistence
- Mobile native applications
- Payment or grading systems

---

## Prototype Demo
The interactive prototype is available via Figma:

**Live Figma Demo**  
https://kilt-cot-83401268.figma.site  

The same link is also stored in:  
[`figma/figma-demo-link.txt`](figma/figma-demo-link.txt)

### Design Archive
- [`figma/educampus-figma-design.zip`](figma/educampus-figma-design.zip) – exported Figma design files

---

## Project Structure
```
docs/
 ├─ SE2 SRS.pdf
 ├─ Architecture diagram.pdf
 ├─ Class Diagram Final.drawio.pdf
 ├─ Consolidated Use Case.drawio.pdf
 └─ Individual Use Cases.drawio.pdf

figma/
 ├─ educampus-figma-design.zip
 └─ figma-demo-link.txt

src/
 ├─ components/
 ├─ pages/
 ├─ styles/
 ├─ guidelines/
 ├─ App.tsx
 └─ main.tsx

public/
README.md
```

---

## Design & Documentation
All required project artifacts are included in the [`docs/`](docs/) folder:

- [Software Requirements Specification (SRS)](docs/SE2%20SRS.pdf)
- [System Architecture Diagram](docs/Architecture%20diagram.pdf)
- Use Case Diagrams  
  - [Consolidated](docs/Consolidated%20Use%20Case.drawio.pdf)  
  - [Individual](docs/Individual%20Use%20Cases.drawio.pdf)
- [Class Diagram](docs/Class%20Diagram%20Final.drawio.pdf)

These documents together represent the **complete and final system design**.

---

## Code Manual & System Usage

### Required Tools
To run the EduCampus frontend locally, the following tools are required:
- Node.js (LTS version recommended: v18 or higher)
- npm (included with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Git (to clone the repository)

---

### Running the System
1. Clone the repository:
```bash
git clone https://github.com/Student-Collabaration-System/educampus-collaboration-platform.git
```

2. Navigate to the project directory:
```bash
cd educampus-collaboration-platform
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open the application in a browser at:  
`http://localhost:3000`

---

### System Usage
1. The application opens on the Landing Page, presenting the platform overview.  
2. The user navigates to the Login Page, which simulates authentication.  
3. After login, the Dashboard Page is displayed with representative UI components.  
4. All interactions are frontend-based and represent simulated system behavior.

No backend, database, or real authentication is implemented in this phase.

---

## Submission Information
- **Course:** Software Engineering II (SE2)
- **Instructor:** Dr. Ali Mehmood Khan
- **Project Name:** EduCampus – Student Collaboration Platform
- **Repository:** https://github.com/Student-Collabaration-System/educampus-collaboration-platform
- **Submission Branch:** `final-submission`

---

## Group Members
- Mehlika Rana Akbay  
- Ipek Zobu  
- Ada Alkim Acikyol  
- Frenkli Zeqollari  

---

© 2026 EduCampus Team