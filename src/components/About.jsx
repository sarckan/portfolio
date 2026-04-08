import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const languages = [
  { name: 'English', level: 10 },
  { name: 'Azerbaijani', level: 10 },
  { name: 'Russian', level: 10 },
  { name: 'Polish', level: 6 },
  { name: 'German', level: 5 },
]

export default function About() {
  const ref = useScrollReveal()
  const [imgError, setImgError] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  return (
    <section id="about" ref={ref}>
      <div className="section-container">
        <div className="eyebrow reveal">About Me</div>
        <h2 className="section-title reveal reveal-d1">Who I Am</h2>
        <div className="about-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="about-photo-wrap reveal reveal-d2">
              {!imgError ? (
                <img src="/profile.png" alt="Sarkhan Rustamov" draggable="false" onError={() => setImgError(true)} />
              ) : (
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--surface), var(--surface-2))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 64, height: 64, color: 'var(--text-dim)' }}>
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--text-dim)', letterSpacing: '0.1em' }}>Photo Coming Soon</span>
                </div>
              )}
            </div>

            {/* CV Download */}
            <a href="/cv.pdf" download className="cv-download reveal reveal-d3" data-cursor="DOWNLOAD">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>

            {/* Languages */}
            <div className="reveal reveal-d4">
              <button className={`lang-toggle ${langOpen ? 'open' : ''}`} onClick={() => setLangOpen(!langOpen)} data-cursor="EXPAND">
                <span>Languages ({languages.length})</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className={`lang-list ${langOpen ? 'open' : ''}`}>
                {languages.map(l => (
                  <div className="lang-item" key={l.name}>
                    <span className="lang-name">{l.name}</span>
                    <div className="lang-bar-wrap">
                      <div className="lang-bar" style={{ '--level': (l.level * 10) + '%' }} />
                    </div>
                    <span className="lang-level">{l.level}/10</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-text reveal reveal-d3">
            <p><strong>Sarkhan Rustamov</strong> &mdash; AI &amp; Full-Stack Engineer with 3+ years of experience building scalable web systems and AI-driven automation. Specialized in LLM integrations, distributed workflows, and high-performance frontend architecture.</p>
            <p>Delivered production-grade solutions improving operational efficiency by 60%+ and reducing costs through automation. Academic top 3% performer (GPA 4.9/5.0) with a strong focus on scalable, real-world AI applications.</p>
            <p>I design and build AI assistants using Claude API, OpenAI, LangChain, and Model Context Protocol (MCP), architect business automation pipelines with n8n, and develop full-stack applications with React, Next.js, Node.js, and Express. I also explore cybersecurity: web application security, vulnerability assessment, and network fundamentals.</p>

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
                <div className="info-label">Expertise</div>
                <div className="info-value">AI, Frontend, Security</div>
              </div>
            </div>

            {/* Core Skills */}
            <div style={{ marginTop: 16 }}>
              <div className="info-label" style={{ marginBottom: 12 }}>Core Skills</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Express', 'Python', 'OpenAI', 'Claude API', 'LangChain', 'MCP', 'n8n', 'AWS', 'Docker', 'Firebase', 'PostgreSQL', 'MySQL', 'Git', 'Web Security'].map(s => (
                  <span key={s} className="service-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
