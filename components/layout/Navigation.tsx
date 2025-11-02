'use client'

interface NavigationProps {
  scrollToSection: (selector: string) => void
  navRef: React.RefObject<HTMLElement | null>
  navContainerRef: React.RefObject<HTMLDivElement | null>
  logoRef: React.RefObject<HTMLDivElement | null>
  menuRef: React.RefObject<HTMLUListElement | null>
}

export default function Navigation({ 
  scrollToSection, 
  navRef, 
  navContainerRef, 
  logoRef, 
  menuRef 
}: NavigationProps) {
  return (
    <nav ref={navRef} className="navbar-sticky">
      <div ref={navContainerRef} className="nav-container-sticky">
        <div ref={logoRef} className="logo-sticky">
          Nexus Lab
        </div>
        <ul ref={menuRef} className="nav-menu-sticky">
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
