# AcadeMe

**Tagline:** A comprehensive Progressive Web Application (PWA) for student academic management, solving critical challenges by providing an all-in-one platform for CGPA tracking, attendance management, faculty discovery, and resource access.

## Educational Productivity & Academic Tracking Platform

**AcadeMe** is a student-focused academic management platform designed to bring everyday college activities into one unified dashboard. It combines academic performance tracking, attendance management, course information, faculty discovery and reviews, learning resources, gamification, and an AI-powered study assistant in a responsive web application with Progressive Web App support.

### Project Type

Educational Web Application / Student Productivity Platform

### Role

Full-Stack Developer

### Status

Deployed & Actively Developed

### Live Project

https://acade-me.vercel.app

### Source Code

https://github.com/dharanigovardhan2008/AcadeMe

---

## The Problem

College students often have to use multiple disconnected sources to manage academics—attendance records, grades, course details, faculty information, learning resources, and other student activities.

AcadeMe was developed to centralize these workflows into a single student-oriented platform with a dashboard that makes academic information easier to access, track, and understand.

---

## Solution

AcadeMe provides a unified academic workspace where students can:

* Monitor academic performance
* Track attendance and calculate required attendance
* Calculate CGPA interactively
* View mandatory and common courses
* Explore faculty information
* Submit and interact with faculty reviews
* Access academic learning resources
* Earn points through student participation
* View leaderboard rankings
* Manage their student profile
* Get assistance from an AI-powered study assistant
* Install and use the application as a Progressive Web App

---

## Key Features

### Academic Dashboard

A centralized dashboard presents important academic information including CGPA, attendance insights, course-related data, quick actions, and productivity tools.

### CGPA Calculator

Interactive grade-based CGPA calculation using configurable counts for grades **S, A, B, C, D, E, and F**.

The calculator provides:

* Real-time CGPA calculation
* Total subjects
* Total grade points
* Visual donut-chart representation
* Animated result updates
* Performance feedback

### Attendance Tracker

Students can maintain subject-wise attendance records and instantly calculate attendance percentages.

The system also provides actionable calculations such as:

* Current attendance percentage
* Number of classes that can be missed safely
* Number of consecutive classes required to reach the attendance target
* Subject-wise attendance monitoring

The application uses an **80% target threshold** in its attendance calculations.

### Course Management

Students can access:

* Mandatory courses
* Common courses
* Branch-specific course information

The Common Courses module allows users to compare two departments and identify shared subjects.

### Faculty Directory

A searchable faculty directory provides information such as:

* Faculty name
* Department
* Designation
* Courses taught
* Contact information
* Ratings

### Faculty Review System

Students can submit and interact with faculty reviews.

The review system supports:

* Star ratings
* Written feedback
* Faculty/course details
* Search
* Course filtering
* Sorting
* Likes
* Dislikes
* Comments
* Review editing
* Review deletion

### Gamification & Leaderboard

AcadeMe includes a points-based participation system that rewards students for useful platform activity.

Examples include:

* Reporting bugs
* Submitting faculty reviews
* Suggesting features
* Suggesting faculty
* Providing feedback
* Commenting on reviews
* Editing reviews
* Calling faculty
* Liking reviews

A leaderboard visualizes student participation and points.

### Resources Hub

The Resources Hub organizes academic material into categories including:

* Concept Maps
* Research Papers
* Syllabus
* Lab Manuals
* Important Questions
* MCQs
* Lecture Videos

It also includes search and category-based navigation.

### AI Study Assistant

AcadeMe includes an integrated AI chat assistant designed for students.

It can help with:

* Study planning
* Explanations
* Summaries
* Academic questions

The assistant communicates with an external AI API and renders responses using Markdown formatting.

### Authentication

The application includes Firebase Authentication with:

* Email/password login
* Student registration
* Google sign-in
* Protected routes
* Persistent authentication state

### Admin Panel

An administrative interface is included for managing academic data and platform-related content.

### Notifications & PWA

The application contains Progressive Web App infrastructure including:

* Web app manifest
* Service worker
* Installable application support
* Notification permission flow
* Foreground notification handling
* Notification click routing
* Android app linking configuration

### Performance & UX

The application includes several frontend optimizations and UX improvements such as:

* Session-based data caching
* Optimistic updates
* Delayed persistence for attendance updates
* Loading states
* Animated counters
* Smooth page transitions
* Skeleton/loading UI
* Responsive layouts
* Error boundary handling

---

## Technology Stack

### Frontend

* React 19
* Vite
* React Router
* JavaScript (JSX)
* Lucide React
* Recharts
* React Markdown

### Backend / Cloud Services

* Firebase Authentication
* Firebase Firestore
* Firebase Cloud Messaging / Web Push infrastructure

### AI

* Groq API
* `openai/gpt-oss-120b`

### Additional Technologies

* jsPDF
* Progressive Web App technologies
* Service Workers
* Web App Manifest
* Vercel
* Render configuration for supporting backend services

### Backend Utility

A Python notification service is also included in the repository for notification-related functionality.

---

## Architecture

The project is organized around reusable React components, context-based state management, page-level modules, Firebase integration, utilities, and PWA assets.

### Main Structure

```text
src/
├── components/
│   ├── AIAssistant.jsx
│   ├── DashboardLayout.jsx
│   ├── Sidebar.jsx
│   ├── TopBar.jsx
│   ├── NotificationPrompt.jsx
│   └── ...
│
├── context/
│   ├── AuthContext.jsx
│   └── DataContext.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── CGPACalculator.jsx
│   ├── AttendanceTracker.jsx
│   ├── MandatoryCourses.jsx
│   ├── CommonCourses.jsx
│   ├── FacultyDirectory.jsx
│   ├── FacultyReviews.jsx
│   ├── ResourcesHub.jsx
│   ├── Leaderboard.jsx
│   ├── AdminPanel.jsx
│   └── ...
│
├── utils/
├── hooks/
└── firebase.js

public/
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
└── ...
```

---

## Engineering Highlights

### Context-Based State Management

Application-wide authentication and academic data are handled using React Context providers.

### Firebase Firestore Integration

Academic information, faculty data, reviews, users, courses, and other dynamic content are stored and retrieved through Firestore.

### Client-Side Caching

Frequently accessed data is cached in browser storage with a time-to-live mechanism to reduce unnecessary database requests and improve perceived performance.

### Optimistic UI Updates

Attendance and interactive review actions can update the interface immediately while persistence happens asynchronously.

### Responsive Design

The interface is designed to adapt across desktop and mobile screen sizes, supporting students using both browsers and installed PWA experiences.

### Error Handling

The application uses protected routes and a React error boundary to improve reliability and prevent a single component failure from breaking the entire interface.

---

## My Contribution

I designed and developed the AcadeMe platform as an end-to-end student productivity system, including:

* Application architecture
* React frontend development
* Firebase integration
* Authentication
* Firestore data management
* Academic dashboard
* Attendance logic
* CGPA calculation system
* Faculty directory and review system
* Gamification system
* Learning resources hub
* AI assistant integration
* PWA support
* Notification handling
* Responsive UI/UX implementation
* Deployment configuration

---

## What I Learned

Building AcadeMe involved solving real-world engineering problems involving:

* State synchronization between UI and cloud data
* Authentication flows
* Firestore data modeling
* Optimistic updates
* Client-side caching
* Responsive component design
* PWA architecture
* Browser notifications
* Third-party AI API integration
* User engagement through gamification
* Designing scalable React component structures

---

## Project Impact

AcadeMe demonstrates the design and development of a complete student-focused platform rather than a single-purpose academic tool. The project combines academic tracking, collaboration, information discovery, AI assistance, and productivity features into one cohesive application.

### Portfolio Tags

`React` `JavaScript` `Vite` `Firebase` `Firestore` `Authentication` `PWA` `AI` `Groq` `React Router` `Recharts` `Responsive UI` `Gamification` `Web Notifications`

### One-Line Portfolio Summary

**A full-stack student academic productivity platform that combines attendance tracking, CGPA analysis, courses, faculty reviews, learning resources, gamification, AI assistance, and PWA capabilities in one unified application.**