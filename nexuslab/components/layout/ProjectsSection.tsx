'use client'

const projects = [
  {
    title: 'E-Commerce AI Assistant',
    description: 'Intelligent chatbot increasing conversion rates by 40%',
    image: 'https://images.pexels.com/photos/3862363/pexels-photo-3862363.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Predictive Maintenance System',
    description: 'ML solution reducing downtime by 60% for manufacturing',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Document Processing AI',
    description: 'Automated document analysis saving 1000+ hours monthly',
    image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=800'
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
              style={{ 
                backgroundImage: `url(${project.image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
