import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gsap, ScrollTrigger, ScrollSmoother } from '@/lib/utils'

export function useGSAPAnimations() {
  const main = useRef<HTMLDivElement>(null)
  const smoother = useRef<ScrollSmoother | null>(null)

  useGSAP(
    () => {
      // Initialize ScrollSmoother
      smoother.current = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
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
        gsap.from((section as Element).querySelectorAll('.fade-in'), {
          scrollTrigger: {
            trigger: section as Element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 60,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        })
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
    },
    {
      scope: main,
    }
  )

  const scrollToSection = (selector: string) => {
    smoother.current?.scrollTo(selector, true, 'top 100px')
  }

  return { main, scrollToSection }
}
