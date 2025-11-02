'use client'

export default function AboutSection() {
  return (
    <section className="about section">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title fade-in">Who We Are</h2>
          <p className="about-description fade-in">
            Nexus Lab is a cutting-edge technology company specializing in artificial intelligence 
            and digital transformation. We bridge the gap between complex AI technologies and 
            practical business solutions.
          </p>
        </div>
        
        <div className="about-values">
          <div className="value-card fade-in">
            <div className="value-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6"/>
                <path d="m21 12-6-3-6 3-6-3"/>
              </svg>
            </div>
            <h3 className="value-title">Innovation First</h3>
            <p className="value-description">
              Pioneering AI solutions that push the boundaries of what's possible, 
              delivering breakthrough technologies for tomorrow's challenges.
            </p>
          </div>
          
          <div className="value-card fade-in">
            <div className="value-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12l2 2 4-4"/>
              </svg>
            </div>
            <h3 className="value-title">Results Driven</h3>
            <p className="value-description">
              Focused on delivering measurable business outcomes and ROI through 
              data-driven strategies and proven methodologies.
            </p>
          </div>
          
          <div className="value-card fade-in">
            <div className="value-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="value-title">Client Centric</h3>
            <p className="value-description">
              Your success is our mission, with personalized support and 
              collaborative partnerships every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
