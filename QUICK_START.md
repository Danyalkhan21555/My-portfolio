# Quick Start Guide

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### 1. Update Site Information

Edit `lib/constants.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  url: 'https://your-portfolio.vercel.app',
  // ... update all fields
}
```

### 2. Update SEO Metadata

Edit `app/metadata.ts`:

```typescript
// Update metadata for SEO
// Add your social media handles
// Configure Open Graph images
```

### 3. Update Personal Content

- **Hero**: `components/sections/Hero.tsx`
- **About**: `components/sections/About.tsx`
- **Skills**: `components/sections/Skills.tsx`
- **Projects**: `components/sections/Projects.tsx`
- **Experience**: `components/sections/Experience.tsx`
- **Contact**: `components/sections/Contact.tsx`

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel

1. Push code to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy automatically

## 📁 Key Files

- `lib/constants.ts` - All site configuration
- `app/metadata.ts` - SEO settings
- `components/` - All React components
- `types/index.ts` - TypeScript types

## 🎨 Customization

All personal information is centralized in `lib/constants.ts`. Update once, used everywhere!





