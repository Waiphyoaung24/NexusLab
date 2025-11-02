# Nexus Lab - AI-Powered Landing Page

This project has been successfully migrated from Bolt AI to Next.js 16 with App Router, featuring beautiful GSAP animations and a modern design.

## 🚀 Features

- **Next.js 16** with App Router
- **GSAP Animations** with ScrollTrigger and ScrollSmoother
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** optimized for all devices
- **Modern UI Components** with smooth animations

## 📁 Project Structure

```
nexuslab/
├── app/                    # Next.js App Router
│   ├── nexus/             # Main landing page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Redirects to /nexus
├── components/            # React components
│   └── layout/           # Layout components (Hero, Services, etc.)
├── hooks/                # Custom React hooks
│   └── use-gsap-animations.ts
├── lib/                  # Utilities and configurations
│   └── utils/           # GSAP utilities and helpers
├── styles/              # CSS files
│   └── globals/        # Global styles including Nexus theme
├── types/               # TypeScript definitions
└── config/             # Application configuration
```

## 🎨 Design Features

### Hero Section
- Animated background with floating elements
- GSAP-powered entrance animations
- Gradient text effects
- Interactive call-to-action buttons

### Services Section
- 6 AI service cards with hover effects
- Scroll-triggered animations
- Modern glassmorphism design

### Projects Section
- Featured project showcases
- Background image overlays
- Smooth hover transitions

### Contact Section
- Clean contact information layout
- Animated elements on scroll

## 🛠 Technologies Used

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest React version
- **GSAP 3.13.0** - Professional animation library
- **@gsap/react** - React integration for GSAP
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## 🎯 Key Components

### GSAP Animations
- `useGSAPAnimations` hook manages all animations
- ScrollSmoother for smooth scrolling
- ScrollTrigger for scroll-based animations
- Floating elements with continuous motion

### Navigation
- Smooth scroll to sections
- Fixed header with backdrop blur
- Responsive design

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## 🎨 Styling

The project uses a custom CSS theme with:
- Dark color scheme
- Cyan accent colors (#00d9ff)
- Gradient text effects
- Glassmorphism elements
- Smooth transitions

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🔧 Configuration

- **Images**: External images from Unsplash and Pexels are configured in `next.config.ts`
- **Paths**: TypeScript path aliases configured for clean imports
- **GSAP**: Plugins registered and optimized for SSR

## 🎭 Animation Details

- Hero content fades in from bottom
- Floating elements have continuous motion
- Service cards animate on scroll
- Smooth page transitions
- Interactive hover effects

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting with App Router
- GSAP animations are GPU-accelerated
- Minimal bundle size

---

**Built with ❤️ using Next.js and GSAP**
