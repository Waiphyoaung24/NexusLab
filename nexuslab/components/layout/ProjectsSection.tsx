'use client'

const projects = [
  {
    title: 'E-Commerce AI Assistant',
    description: 'Intelligent chatbot increasing conversion rates by 40%',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Predictive Maintenance System',
    description: 'ML solution reducing downtime by 60% for manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Document Processing AI',
    description: 'Automated document analysis saving 1000+ hours monthly',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export default function ProjectsSection() {
  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card fade-in" 
              data-speed="0.95"
            >
              <div 
                className="project-image"
                style={{ 
                  backgroundImage: `url(${project.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />
              <div className="project-overlay">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    <span className="tech-tag">AI/ML</span>
                    <span className="tech-tag">Automation</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
