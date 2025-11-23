# Portfolio Website - Replit Configuration

## Overview

This is a modern, interactive developer portfolio website built for Abhishek Kumar. The application showcases projects, skills, professional experience, and contact information through a visually engaging single-page design. The portfolio emphasizes bold typography, purposeful animations, and asymmetric layouts inspired by premium developer portfolios like Bruno Simon and Jacek Jeznach.

The application is built as a full-stack TypeScript project using React for the frontend and Express for the backend, with support for database integration via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server, configured for fast hot module replacement (HMR)
- **Wouter** for lightweight client-side routing (single-page application with fallback to 404)

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- Follows the "New York" style variant with custom theming
- Component aliases configured for clean imports (`@/components`, `@/lib`, `@/hooks`)
- Comprehensive set of pre-built accessible components (buttons, cards, dialogs, forms, etc.)

**Styling Approach**
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CSS variables** for theming with light/dark mode support via `ThemeProvider` context
- Custom color system using HSL values for flexible theme switching
- Typography system using Google Fonts: Inter (primary), Space Grotesk (display), and monospace fonts
- Responsive design with mobile-first breakpoints

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Local React Context for theme management (`ThemeProvider`)
- React hooks for component-level state

**Key Design Patterns**
- Component composition with reusable UI primitives
- Scroll-based navigation using smooth scrolling to section IDs
- Animated role text cycling in hero section
- Responsive mobile menu with toggle state
- Asset management through Vite aliases (`@assets` for images)

**Portfolio Sections**
1. **Hero Section**: Full-viewport split-screen with gradient mesh background and floating card
2. **Projects Section**: Staggered masonry grid showcasing 4 featured projects
3. **Skills Section**: Icon-based grid displaying 19+ technologies with visual branding
4. **About Section**: Timeline-based professional experience and education
5. **Contact Section**: Contact information and social media links

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for HTTP server and API routes
- Custom request logging middleware tracking response times and JSON payloads
- Separate development and production entry points (`index-dev.ts`, `index-prod.ts`)

**Development vs Production**
- **Development Mode**: Integrates Vite middleware for HMR and live reloading, dynamically injects client template with cache-busting query parameters
- **Production Mode**: Serves pre-built static assets from `dist/public` directory with fallback to `index.html` for client-side routing

**API Structure**
- Routes registered via `registerRoutes()` function (currently minimal, designed for expansion)
- All API routes prefixed with `/api` convention
- Storage interface pattern for data operations with in-memory implementation (`MemStorage`)

**Storage Layer**
- Abstract `IStorage` interface defining CRUD operations for users
- In-memory storage implementation using JavaScript `Map` for development
- Designed to be swapped with database-backed storage (Drizzle ORM ready)

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL with `@neondatabase/serverless` driver
- Schema definition in `shared/schema.ts` using Drizzle's type-safe schema builder
- Database migrations configured to output to `./migrations` directory
- Zod integration for runtime validation of insert operations

**Current Schema**
- `users` table with UUID primary key, unique username, and password fields
- Type-safe insert and select types generated from schema

**Note**: While Drizzle is configured for PostgreSQL, the application currently uses in-memory storage. Database integration requires setting `DATABASE_URL` environment variable and running migrations.

### Authentication and Authorization

**Current State**: No authentication implemented. The codebase includes a basic user schema and storage interface as scaffolding for future implementation.

**Planned Approach** (based on existing patterns):
- User creation via `insertUserSchema` with Zod validation
- Session management scaffolded (presence of `connect-pg-simple` for PostgreSQL session store)
- Storage interface ready for authentication queries (`getUserByUsername`)

### External Dependencies

**UI & Styling**
- **Radix UI**: Accessible component primitives (20+ packages for dialogs, dropdowns, tooltips, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **class-variance-authority**: Type-safe variant styling
- **clsx** and **tailwind-merge**: Conditional class name utilities
- **React Icons** (`react-icons/si`): Simple Icons library for brand logos

**Forms & Validation**
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolver integrations
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Zod schema generation from Drizzle schemas

**Data Fetching**
- **@tanstack/react-query**: Async state management with caching and background updates

**Database**
- **Drizzle ORM**: Type-safe SQL query builder
- **@neondatabase/serverless**: PostgreSQL driver for Neon serverless databases
- **connect-pg-simple**: PostgreSQL session store for Express sessions

**Utilities**
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation for cache-busting
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider component

**Development Tools**
- **@replit/vite-plugin-runtime-error-modal**: Runtime error overlay for Replit
- **@replit/vite-plugin-cartographer**: Replit IDE integration
- **@replit/vite-plugin-dev-banner**: Development environment banner

**Build Tools**
- **esbuild**: Fast JavaScript bundler for server-side code
- **tsx**: TypeScript execution for development server

**Fonts**
- Google Fonts CDN: Inter, Space Grotesk, DM Sans, Fira Code, Geist Mono, Architects Daughter, JetBrains Mono