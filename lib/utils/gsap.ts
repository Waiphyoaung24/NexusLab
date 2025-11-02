import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}

export { gsap, ScrollTrigger, ScrollSmoother }

// Animation presets
export const animations = {
  fadeInUp: {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out',
  },
  fadeInScale: {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: 'power2.out',
  },
  slideInLeft: {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: 'power3.out',
  },
  slideInRight: {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power3.out',
  },
}

// Scroll trigger defaults
export const scrollTriggerDefaults = {
  start: 'top 85%',
  toggleActions: 'play none none reverse',
}
