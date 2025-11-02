import { gsap, ScrollSmoother, ScrollTrigger } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export function useGSAPAnimations() {
  const main = useRef<HTMLDivElement>(null)
  const smoother = useRef<ScrollSmoother | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const navContainerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  useGSAP(
    () => {
      // Initialize ScrollSmoother
      smoother.current = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        ignoreMobileResize: true,
        normalizeScroll: true,
      })

      // Hero animations
      gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power3.out',
      })

      gsap.from('.animated-orbs', {
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
      })

      // Hero background animation
      gsap.from('.hero-bg-image', {
        scale: 1.1,
        duration: 3,
        ease: 'power2.out',
      })

      // Floating elements animations
      gsap.utils.toArray('.float-element').forEach((element, index) => {
        gsap.from(element as Element, {
          opacity: 0,
          y: 100,
          rotation: 180,
          duration: 1.5,
          delay: index * 0.2,
          ease: 'back.out(1.7)',
        })

        // Continuous floating animation
        gsap.to(element as Element, {
          y: -20,
          x: index % 2 === 0 ? 10 : -10,
          rotation: index % 2 === 0 ? 5 : -5,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      // Orb animations
      gsap.to('.orb-1', {
        x: 30,
        y: -30,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.orb-2', {
        x: -20,
        y: 50,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Section animations
      gsap.utils.toArray('.section').forEach((section) => {
        const fadeElements = (section as Element).querySelectorAll('.fade-in')
        
        // Set initial state
        gsap.set(fadeElements, {
          opacity: 1,
          y: 0
        })
        
        // Create animation
        gsap.fromTo(fadeElements, 
          {
            opacity: 0,
            y: 60
          },
          {
            scrollTrigger: {
              trigger: section as Element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
          }
        )
      })

      // Service cards animation
      gsap.utils.toArray('.service-card').forEach((card) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'power2.out',
        })
      })

      // Pulse line animations
      gsap.utils.toArray('.pulse-line').forEach((line) => {
        gsap.to(line as Element, {
          strokeDashoffset: 0,
          duration: 2,
          repeat: -1,
          ease: 'power1.inOut',
          delay: Math.random() * 0.5,
        })
      })

      // Static Navigation Setup - No scroll-based animations
      if (navRef.current) {
        const nav = navRef.current

        // Ensure navigation is always visible in glassmorphism state
        gsap.set(nav, {
          position: 'fixed',
          top: '20px',
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999,
          opacity: 1,
          visibility: 'visible',
          display: 'block'
        })

        // Add independent floating animation using GSAP
        gsap.to(nav, {
          y: -2,
          duration: 3,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1
        })

        // Add subtle glow pulse animation
        gsap.to(nav, {
          boxShadow: '0 20px 60px rgba(0, 217, 255, 0.25)',
          duration: 4,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: 1
        })
      }
    },
    {
      scope: main,
    }
  )

  const scrollToSection = (selector: string) => {
    smoother.current?.scrollTo(selector, true, 'top 100px')
  }

  return { 
    main, 
    scrollToSection,
    navRef,
    navContainerRef,
    logoRef,
    menuRef
  }
}
