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
          
          <div className="contact-form-container">
            <form className="quote-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const email = formData.get('email');
              const phone = formData.get('phone');
              
              // Create mailto link with form data
              const subject = encodeURIComponent('AI Solution Quotation Request');
              const body = encodeURIComponent(`Hello Nexus Lab,

I would like to request a quotation for AI solutions.

Contact Details:
Email: ${email}
Phone: ${phone}

Please contact me to discuss how AI can transform my business.

Best regards`);
              
              window.location.href = `mailto:sales@nexuslab.ai?subject=${subject}&body=${body}`;
            }}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your email address"
                    className="quote-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Your phone number"
                    className="quote-input"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="cta-button-large">
                <span>Start Your AI Journey</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
