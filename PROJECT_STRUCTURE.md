# Project Structure

This document outlines the complete project structure and explains the purpose of each directory and file.

## 📁 Directory Structure

```
my-web/
├── app/                          # Next.js App Router directory
│   ├── globals.css               # Global styles and Tailwind directives
│   ├── layout.tsx                # Root layout with fonts and metadata
│   ├── page.tsx                  # Home page (main landing page)
│   ├── metadata.ts               # SEO metadata configuration
│   ├── robots.ts                 # Robots.txt generation
│   └── sitemap.ts                # Sitemap.xml generation
│
├── components/                   # React components
│   ├── Navbar.tsx                # Navigation bar component
│   ├── Footer.tsx                # Footer component
│   └── sections/                 # Page sections
│       ├── Hero.tsx              # Hero/landing section
│       ├── About.tsx             # About me section
│       ├── Skills.tsx            # Skills and technologies section
│       ├── Projects.tsx           # Projects showcase section
│       ├── Experience.tsx         # Work experience section
│       └── Contact.tsx            # Contact form section
│
├── lib/                          # Utility libraries
│   ├── constants.ts              # Site configuration and constants
│   └── utils.ts                  # Utility functions (cn, formatDate, etc.)
│
├── types/                        # TypeScript type definitions
│   └── index.ts                  # Shared type definitions
│
├── public/                       # Static assets
│   └── .gitkeep                  # Keep folder in git
│
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── .env.example                 # Environment variables template
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── README.md                    # Project documentation
└── PROJECT_STRUCTURE.md         # This file
```

## 📝 File Descriptions

### App Directory (`app/`)

#### `globals.css`
- Global CSS styles
- Tailwind CSS directives
- Custom CSS utilities and animations
- Section padding and container utilities

#### `layout.tsx`
- Root layout component
- Font configuration (Inter & Poppins)
- Wraps all pages with Navbar and Footer
- Exports metadata from `metadata.ts`

#### `page.tsx`
- Main home page
- Imports and renders all sections
- Single-page application structure

#### `metadata.ts`
- Comprehensive SEO metadata
- Open Graph tags
- Twitter Card configuration
- Site-wide SEO settings

#### `robots.ts`
- Generates robots.txt
- Configures crawler access rules
- Links to sitemap

#### `sitemap.ts`
- Generates sitemap.xml
- Helps search engines index the site

### Components Directory (`components/`)

#### `Navbar.tsx`
- Fixed navigation bar
- Smooth scroll navigation
- Mobile responsive menu
- Scroll-based styling changes

#### `Footer.tsx`
- Site footer
- Social media links
- Copyright information
- Uses constants from `lib/constants.ts`

#### Sections (`components/sections/`)

All section components follow similar patterns:
- Scroll-triggered animations using Intersection Observer
- Responsive design
- Consistent styling

**Hero.tsx**: Landing section with introduction and CTAs
**About.tsx**: Personal information and skills overview
**Skills.tsx**: Technical skills with progress bars
**Projects.tsx**: Project showcase with cards
**Experience.tsx**: Work experience timeline
**Contact.tsx**: Contact form and information

### Library Directory (`lib/`)

#### `constants.ts`
- Centralized site configuration
- Navigation items
- Social links
- Reusable constants

#### `utils.ts`
- Utility functions
- `cn()` - Class name merger (clsx + tailwind-merge)
- `formatDate()` - Date formatting utility

### Types Directory (`types/`)

#### `index.ts`
- TypeScript type definitions
- Project, Experience, Skill interfaces
- Shared type exports

### Configuration Files

#### `next.config.js`
- Next.js framework configuration
- React strict mode
- Build optimizations

#### `tailwind.config.ts`
- Tailwind CSS configuration
- Custom color palette
- Font family configuration
- Animation keyframes
- Custom utilities

#### `tsconfig.json`
- TypeScript compiler configuration
- Path aliases (@/*)
- Type checking rules

#### `postcss.config.js`
- PostCSS configuration
- Tailwind CSS plugin
- Autoprefixer

#### `.eslintrc.json`
- ESLint rules
- Next.js recommended config
- Custom rule overrides

## 🎯 Key Features

### SEO Optimization
- Comprehensive meta tags
- Open Graph support
- Twitter Cards
- Sitemap generation
- Robots.txt
- Semantic HTML

### Performance
- Next.js App Router
- Font optimization
- Image optimization ready
- Code splitting
- Lazy loading

### Developer Experience
- TypeScript for type safety
- Centralized configuration
- Reusable components
- Clean code structure
- ESLint configuration

## 🔄 Data Flow

1. **Constants** (`lib/constants.ts`) → Used by components
2. **Types** (`types/index.ts`) → Used for type safety
3. **Components** → Import constants and types
4. **App Router** → Renders components with metadata

## 📦 Dependencies

### Core
- `next` - React framework
- `react` - UI library
- `react-dom` - DOM rendering

### Styling
- `tailwindcss` - Utility-first CSS
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processing

### Utilities
- `clsx` - Conditional class names
- `tailwind-merge` - Merge Tailwind classes
- `react-icons` - Icon library

### Development
- `typescript` - Type checking
- `eslint` - Code linting
- `@types/*` - TypeScript definitions

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Configure site: Edit `lib/constants.ts`
3. Update metadata: Edit `app/metadata.ts`
4. Run dev server: `npm run dev`
5. Build for production: `npm run build`

## 📝 Notes

- All site configuration is in `lib/constants.ts`
- SEO settings are in `app/metadata.ts`
- Components are organized by feature
- Types are centralized in `types/index.ts`
- Utilities are in `lib/utils.ts`







