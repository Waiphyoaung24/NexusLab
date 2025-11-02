'use client'

import AboutSection from '@/components/layout/AboutSection'
import ContactSection from '@/components/layout/ContactSection'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/layout/HeroSection'
import Navigation from '@/components/layout/Navigation'
import ProjectsSection from '@/components/layout/ProjectsSection'
import ServicesSection from '@/components/layout/ServicesSection'
import { useGSAPAnimations } from '@/hooks'

export default function NexusLanding() {
  const { main, scrollToSection, navRef, navContainerRef, logoRef, menuRef } = useGSAPAnimations()

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        <Navigation 
          scrollToSection={scrollToSection}
          navRef={navRef}
          navContainerRef={navContainerRef}
          logoRef={logoRef}
          menuRef={menuRef}
        />
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
