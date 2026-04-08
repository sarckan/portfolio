import { useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useAlerts } from '../hooks/useAlerts'

export default function Contact() {
  const ref = useScrollReveal()
  const { showAlert } = useAlerts()
  const [btnState, setBtnState] = useState('idle') // idle | loading | success | error
  const formRef = useRef(null)
  const loadedTime = useRef(Date.now())

  const handleSubmit = e => {
    e.preventDefault()
    const form = formRef.current
    const data = new FormData(form)

    // Honeypot
    if (data.get('website')) {
      showAlert('success', 'Message Sent', "I'll reply within 24h.")
      form.reset()
      return
    }

    // Bot speed check
    if (Date.now() - loadedTime.current < 3000) {
      showAlert('error', 'Too Fast', 'Please wait a moment before submitting.')
      return
    }

    // Rate limiting
    const last = localStorage.getItem('last_form_submit')
    if (last && Date.now() - parseInt(last) < 60000) {
      showAlert('warning', 'Please Wait', 'You can submit again in a minute.')
      return
    }

    const name = data.get('name')?.trim()
    const email = data.get('email')?.trim()
    const message = data.get('message')?.trim()

    if (!name || name.length < 2 || name.length > 80) {
      showAlert('error', 'Invalid Name', 'Name must be 2-80 characters.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showAlert('error', 'Invalid Email', 'Please enter a valid email address.')
      return
    }
    if (!message || message.length < 10 || message.length > 2000) {
      showAlert('error', 'Invalid Message', 'Message must be 10-2000 characters.')
      return
    }

    setBtnState('loading')
    setTimeout(() => {
      setBtnState('success')
      localStorage.setItem('last_form_submit', Date.now())
      showAlert('success', 'Message Sent', "Thank you! I'll reply within 24 hours.")
      setTimeout(() => { setBtnState('idle'); form.reset() }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" ref={ref}>
      <div className="section-container">
        <div className="eyebrow reveal">Let's Work Together</div>
        <h2 className="section-title reveal reveal-d1">Get In Touch</h2>
        <p className="section-lead reveal reveal-d2">Have a project idea, need a quote, or want to discuss B2B collaboration? I'm all ears.</p>

        <div className="contact-grid">
          <div className="contact-info reveal reveal-d3">
            <a href="mailto:sarckanr@gmail.com" className="contact-method" data-cursor="EMAIL">
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
              </div>
              <div>
                <div className="contact-method-label">Email</div>
                <div className="contact-method-value">sarckanr@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sarkhan-rustamov-64bb16168/" target="_blank" rel="noopener noreferrer" className="contact-method" data-cursor="LINKEDIN">
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <div className="contact-method-label">LinkedIn</div>
                <div className="contact-method-value">Sarkhan Rustamov</div>
              </div>
            </a>
            <a href="https://github.com/sarckan" target="_blank" rel="noopener noreferrer" className="contact-method" data-cursor="GITHUB">
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              </div>
              <div>
                <div className="contact-method-label">GitHub</div>
                <div className="contact-method-value">github.com/sarckan</div>
              </div>
            </a>
            <div className="contact-method">
              <div className="contact-method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="contact-method-label">Location</div>
                <div className="contact-method-value">Poznan, Poland</div>
              </div>
            </div>

            <div style={{ marginTop: 8 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.15em', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: 12 }}>Portfolio Sites</div>
              <div className="portfolio-links" style={{ marginTop: 0 }}>
                <a href="https://portfolio-sarkhan.netlify.app" target="_blank" rel="noopener noreferrer" className="portfolio-link-card" data-cursor="VISIT">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                  <div>
                    <div className="portfolio-link-name">Main Portfolio</div>
                    <div className="portfolio-link-url">portfolio-sarkhan.netlify.app</div>
                  </div>
                </a>
                <a href="#" className="portfolio-link-card" data-cursor="SOON" style={{ opacity: 0.5 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                  <div>
                    <div className="portfolio-link-name">Coming Soon</div>
                    <div className="portfolio-link-url">More sites to be added</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form reveal reveal-d4" ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-input" type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input className="form-input" type="text" id="subject" name="subject" placeholder="Project inquiry / B2B collaboration / Job offer" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-textarea" id="message" name="message" placeholder="Tell me about your project, timeline, and budget..." required />
            </div>
            <input type="text" name="website" className="honeypot" tabIndex="-1" autoComplete="off" />
            <button type="submit" className={`btn-submit ${btnState}`} data-cursor="SEND">
              {btnState === 'success' ? 'Message Sent!' : btnState === 'error' ? 'Error — Try Again' : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
