# Graphic Designer Portfolio

A minimalist portfolio website with a bright pink color theme, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Clean, minimalist design with bright pink accents
- Responsive layout for all devices
- Dark mode support with adjusted pink tones
- TypeScript for type safety
- Tailwind CSS for styling
- SEO optimized with Next.js metadata
- Easy image management for project showcase

## Pages

- **Home** - Hero section with introduction and services overview
- **Projects** - Showcase of selected design work
- **About** - Background, experience, and skills
- **Contact** - Contact information and social links

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Update Content

- Edit personal information in `app/about/page.tsx`
- Update project showcase in `app/projects/page.tsx`
- Modify contact details in `app/contact/page.tsx`
- Change hero text and services in `app/page.tsx`

### Add Project Images

1. Place your project images in the `public/projects/` directory
2. Open `app/projects/page.tsx`
3. Update the `image` property in the projects array:

```javascript
{
  id: 1,
  title: "Your Project Name",
  category: "Brand Identity",
  year: "2024",
  description: "Project description",
  image: "/projects/your-image-name.jpg", // Add your image path here
}
```

**Image Recommendations:**
- Aspect ratio: 4:3 (e.g., 1200x900px)
- Format: JPG or PNG
- Size: Under 500KB for optimal performance
- Quality: High resolution for retina displays

If no image is provided, a placeholder will be shown automatically.

### Styling

- Global styles and pink color variables: `app/globals.css`
- Tailwind configuration with pink theme: `tailwind.config.ts`
- Component-specific styling uses Tailwind utility classes
- Pink color palette:
  - Primary: `#ff69b4` (Hot Pink)
  - Light: `#ffb6d9` / `#ff99cc` (Light Pink)
  - Dark: `#d94e8c` / `#ff3399` (Dark Pink)
  - Background: `#fff5f8` (Very Light Pink)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
