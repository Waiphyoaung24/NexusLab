'use client'

export default function ContactSection() {
  return (
    <section className="contact section">
      <div className="container">
        <h2 className="section-title fade-in">Let&apos;s Build the Future Together</h2>
        <p className="section-subtitle fade-in">Ready to transform your business with AI?</p>
        <div className="contact-content fade-in">
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email</strong>
              <p>sales@nexuslab.ai</p>
            </div>
            <div className="contact-item">
              <strong>Phone</strong>
              <p>+(66) 99-1541778</p>
            </div>
            <div className="contact-item">
              <strong>Location</strong>
              <p>Bangkok, Thailand</p>
            </div>
          </div>
          <button className="cta-button-large">Start Your AI Journey</button>
        </div>
      </div>
    </section>
  )
}
