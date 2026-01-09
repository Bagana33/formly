# Formly Website

A modern Next.js website for Formly with an admin dashboard for content management.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-friendly interface
- 🎛️ Admin dashboard for content management
- 📸 Local image upload functionality
- 💾 LocalStorage-based content persistence
- 🌙 Dark/Light theme support

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Admin Dashboard

Access the admin dashboard at `/admin` to manage:
- Hero section content
- Services
- Work projects (with local image upload)
- Pricing plans
- Process timeline
- FAQ

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

## Project Structure

```
├── app/              # Next.js app router pages
│   ├── admin/       # Admin dashboard
│   ├── work/        # Work showcase pages
│   └── ...
├── components/       # React components
│   └── ui/          # UI component library
├── lib/             # Utilities and data
└── public/          # Static assets
```

## License

Private project

