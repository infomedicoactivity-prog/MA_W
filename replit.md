# MedicoActivity Platform

## Overview

MedicoActivity is a professional healthcare collaboration platform that connects pharmaceutical companies, medical device manufacturers, Clinical Research Organizations (CROs), healthcare marketing professionals, and doctors. The platform serves as a bridge between healthcare industry and medical professionals for marketing, research, and collaboration opportunities. Built as a full-stack web application with a React frontend and Express backend, it features separate registration flows for companies/professionals and doctors, with file upload capabilities for medical professionals to submit their profiles.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom medical-themed color scheme (medical-blue and health-green variants)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Component Structure**: Modular component architecture with separate layout components (Header/Footer) and page-specific components

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API endpoints for form submissions and data handling
- **File Handling**: Multer middleware for file uploads with validation for PDF, DOC, and DOCX files
- **Request Logging**: Custom middleware for API request logging and performance monitoring
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development Setup**: Vite integration for hot module replacement in development

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Cloud Database**: Configured for Neon Database (serverless PostgreSQL)
- **Data Models**: Three main entities - company inquiries, doctor signups, and contact inquiries
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios
- **File Storage**: Local file system storage for uploaded resumes and documents

### Authentication and Authorization
- **Session Management**: Basic session handling through Express middleware
- **Data Validation**: Zod schemas for runtime type checking and validation
- **File Security**: File type validation and size limits for uploads
- **CORS**: Configured for cross-origin requests in development environment

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for frontend functionality
- **Build Tools**: Vite for development and build processes, TypeScript for type safety
- **Backend Framework**: Express.js with various middleware packages

### UI and Styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Inter, DM Sans, Architects Daughter, etc.)

### Database and ORM
- **Database**: PostgreSQL via Neon Database serverless platform
- **ORM**: Drizzle ORM with Drizzle Kit for migrations and schema management
- **Connection**: @neondatabase/serverless for optimized database connections

### Development and Build Tools
- **Package Manager**: npm with package-lock.json for dependency management
- **TypeScript**: Full TypeScript support across frontend and backend
- **ESBuild**: For efficient server-side bundling and compilation
- **Replit Integration**: Specialized plugins for Replit development environment

### File Handling and Validation
- **File Uploads**: Multer for multipart form data processing
- **Validation**: Zod for schema validation with Drizzle integration
- **File Types**: Support for PDF, DOC, and DOCX resume uploads

### State Management and API
- **Data Fetching**: TanStack Query for efficient server state management
- **API Client**: Custom fetch-based API client with error handling
- **Form Validation**: React Hook Form with Zod resolvers for type-safe forms