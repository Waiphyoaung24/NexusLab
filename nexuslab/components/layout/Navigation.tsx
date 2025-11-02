'use client'

interface NavigationProps {
  scrollToSection: (selector: string) => void
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Nexus Lab</div>
        <ul className="nav-menu">
          <li onClick={() => scrollToSection('.hero')}>Home</li>
          <li onClick={() => scrollToSection('.about')}>About</li>
          <li onClick={() => scrollToSection('.services')}>Services</li>
          <li onClick={() => scrollToSection('.projects')}>Projects</li>
          <li onClick={() => scrollToSection('.contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  )
}
