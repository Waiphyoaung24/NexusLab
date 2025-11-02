'use client'

import Image from 'next/image'

interface HeroSectionProps {
  scrollToSection: (selector: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="hero">
      {/* Enhanced Background */}
      <div className="hero-background">
        <Image 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80" 
          alt="AI Neural Network Background" 
          className="hero-bg-image"
          fill
          priority
        />
        <div className="hero-overlay"></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="floating-elements">
        <div className="float-element float-1"></div>
        <div className="float-element float-2"></div>
        <div className="float-element float-3"></div>
        <div className="float-element float-4"></div>
      </div>
      
      <div className="animated-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      
      <svg className="hero-svg" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00d9ff', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#00ff88', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        <path 
          className="pulse-line" 
          d="M 100 300 Q 300 200, 500 300 T 900 300" 
          stroke="#00d9ff" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="1000" 
          strokeDashoffset="1000" 
        />
        <circle cx="100" cy="300" r="5" fill="#00d9ff" opacity="0.6" />
        <circle cx="900" cy="300" r="5" fill="#00ff88" opacity="0.6" />
      </svg>
      
      <div className="hero-content" data-speed="0.8">
        <h1 className="hero-title">Nexus Lab</h1>
        <p className="hero-subtitle">Transforming Business Through AI-Powered Digital Solutions</p>
        <p className="hero-description">
          We harness the power of artificial intelligence to deliver innovative digital solutions that drive growth and efficiency
        </p>
        <button className="cta-button" onClick={() => scrollToSection('.contact')}>
          Get Started
        </button>
      </div>
      <div className="hero-bg" data-speed="1.2"></div>
    </section>
  )
}
