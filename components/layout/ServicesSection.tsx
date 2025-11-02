'use client'

const services = [
  {
    icon: 'AI',
    title: 'AI Automation',
    description: 'Streamline operations with intelligent automation solutions that reduce costs and increase efficiency',
    bgClass: 'automation-bg'
  },
  {
    icon: 'ML',
    title: 'Machine Learning',
    description: 'Custom ML models that learn from your data to provide predictive insights and smart recommendations',
    bgClass: 'ml-bg'
  },
  {
    icon: 'NLP',
    title: 'NLP Solutions',
    description: 'Natural language processing tools for chatbots, sentiment analysis, and content generation',
    bgClass: 'nlp-bg'
  },
  {
    icon: 'DA',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with AI-powered analytics and visualization',
    bgClass: 'analytics-bg'
  },
  {
    icon: 'CV',
    title: 'Computer Vision',
    description: 'Advanced image and video analysis for quality control, security, and content moderation',
    bgClass: 'vision-bg'
  },
  {
    icon: 'AC',
    title: 'AI Consulting',
    description: 'Strategic guidance on AI adoption and implementation tailored to your business needs',
    bgClass: 'consulting-bg'
  }
]

export default function ServicesSection() {
  return (
    <section className="services section">
      <div className="container">
        <h2 className="section-title fade-in">Our AI Solutions</h2>
        <p className="section-subtitle fade-in">Empowering businesses with intelligent technology</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.bgClass}`} data-speed="0.95">
              <div className="service-bg-image"></div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
