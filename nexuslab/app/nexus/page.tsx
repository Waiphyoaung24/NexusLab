'use client'

import { useGSAPAnimations } from '@/hooks'
import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/layout/HeroSection'
import AboutSection from '@/components/layout/AboutSection'
import ServicesSection from '@/components/layout/ServicesSection'
import ProjectsSection from '@/components/layout/ProjectsSection'
import ContactSection from '@/components/layout/ContactSection'
import Footer from '@/components/layout/Footer'

export default function NexusLanding() {
  const { main, scrollToSection } = useGSAPAnimations()

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        <Navigation scrollToSection={scrollToSection} />
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
