import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" ref={ref}>
      <div className="section-container">
        <div className="eyebrow reveal">About Me</div>
        <h2 className="section-title reveal reveal-d1">Who I Am</h2>
        <div className="about-grid">
          <div className="about-photo-wrap reveal reveal-d2">
            {!imgError ? (
              <img src="/profile.jpg" alt="Sarkhan Rustamov" draggable="false" onError={() => setImgError(true)} />
            ) : (
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--surface), var(--surface-2))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 64, height: 64, color: 'var(--text-dim)' }}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--text-dim)', letterSpacing: '0.1em' }}>Photo Coming Soon</span>
              </div>
            )}
          </div>
          <div className="about-text reveal reveal-d3">
            <p><strong>Sarkhan Rustamov</strong> &mdash; AI &amp; Automation Developer and Master's student in IT in Business at WSB Merito Bydgoszcz (GPA: 4.9, Top 3/80).</p>
            <p>From building websites to building intelligent systems &mdash; I've evolved from frontend development into AI-powered automation, workflow orchestration, and full-stack engineering. I design and build AI assistants using Claude API, OpenAI, and Model Context Protocol (MCP), architect business automation pipelines with n8n, and develop full-stack applications with React, Next.js, Node.js, and Express.</p>
            <p>With 3+ years of hands-on experience and a business mindset, I understand how technology drives real business value. Currently seeking opportunities in AI/Automation, Frontend Development, Cybersecurity, or IT Business roles &mdash; in Poland (hybrid/on-site) or Remote worldwide.</p>

            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Location</div>
                <div className="info-value">Poznan, Poland</div>
              </div>
              <div className="info-item">
                <div className="info-label">Status</div>
                <div className="info-value" style={{ color: 'var(--accent-3)' }}>Available</div>
              </div>
              <div className="info-item">
                <div className="info-label">Email</div>
                <div className="info-value">sarckanr@gmail.com</div>
              </div>
              <div className="info-item">
                <div className="info-label">Languages</div>
                <div className="info-value">EN, AZ, TR, DE, RU</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
