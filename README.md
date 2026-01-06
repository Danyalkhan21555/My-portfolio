# Developer Portfolio Website

A modern, responsive developer portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 Modern, clean UI design with smooth animations
- 📱 Fully responsive (mobile and desktop)
- 🎯 Smooth scrolling navigation
- 🚀 SEO optimized with meta tags, sitemap, and robots.txt
- ⚡ Fast performance with Next.js App Router
- 🎭 Beautiful scroll-triggered animations
- 📧 Contact form
- 🔗 Social media links
- 📊 TypeScript for type safety
- 🎯 Clean, maintainable code structure

## 📋 Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal information and what you do
- **Skills**: Technical skills with progress indicators
- **Projects**: Featured projects showcase
- **Experience**: Work experience timeline
- **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository or use this template

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Quick Configuration

All site configuration is centralized in `lib/constants.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  url: 'https://your-portfolio.vercel.app',
  // ... more config
}
```

### Update Personal Information

1. **Site Configuration** (`lib/constants.ts`):
   - Update name, title, description, and links
   - Modify navigation items

2. **Hero Section** (`components/sections/Hero.tsx`):
   - Change name, title, and description

3. **About Section** (`components/sections/About.tsx`):
   - Update your bio and what you do

4. **Skills Section** (`components/sections/Skills.tsx`):
   - Modify the skills array with your technologies

5. **Projects Section** (`components/sections/Projects.tsx`):
   - Update projects array with your actual projects

6. **Experience Section** (`components/sections/Experience.tsx`):
   - Add your work experience

7. **SEO** (`app/metadata.ts`):
   - Update metadata for better SEO
   - Add your social media handles
   - Configure Open Graph images

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   ├── metadata.ts          # SEO metadata configuration
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Sitemap generation
├── components/
│   ├── Navbar.tsx           # Navigation bar component
│   ├── Footer.tsx           # Footer component
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Skills.tsx       # Skills section
│       ├── Projects.tsx    # Projects section
│       ├── Experience.tsx  # Experience section
│       └── Contact.tsx     # Contact section
├── lib/
│   ├── constants.ts         # Site configuration and constants
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
├── public/                  # Static assets (images, icons, etc.)
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🔍 SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Optimized font loading

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue on GitHub.

