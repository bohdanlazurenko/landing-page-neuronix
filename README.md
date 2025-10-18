# Landing Page Neuronix

A modern, responsive landing page for Neuronix - an autonomous IT solutions company.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Features

- Responsive design that works on all devices
- Hero section with call-to-action buttons
- Features section highlighting key benefits
- Contact form with validation
- Smooth navigation and scrolling
- Modern UI with Tailwind CSS
- TypeScript for type safety

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod for validation
- Lucide React for icons

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── contact/route.ts  # Contact form API endpoint
│   │   └── ping/route.ts     # Health check endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── ContactForm.tsx       # Contact form component
│   ├── FeaturesSection.tsx   # Features section component
│   ├── Header.tsx            # Header navigation component
│   └── HeroSection.tsx       # Hero section component
├── lib/
│   └── actions.ts            # Server actions (if needed)
├── public/                   # Static assets
└── ...config files
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
