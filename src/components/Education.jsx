import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" style={{ paddingTop: 0 }} ref={ref}>
      <div className="section-container">
        <div className="eyebrow reveal">Credentials</div>
        <h2 className="section-title reveal reveal-d1">Education</h2>
        <div className="edu-grid">
          <div className="edu-card reveal reveal-d2">
            <div className="edu-degree">Master of Technology</div>
            <div className="edu-school">IT in Business &mdash; Uniwersytet WSB Merito Bydgoszcz</div>
            <div className="edu-dates">Sep 2024 &mdash; Expected Jun 2026</div>
            <div className="edu-gpa">GPA: 4.9/5.0 &mdash; Top 3/80</div>
            <div className="edu-activities" style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14, height: 14, color: 'var(--accent-3)' }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span style={{ color: 'var(--accent-3)', fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>Rector's Scholarship (Top academic performers)</span>
              </div>
              IT Student Council, Cybersecurity Club, AI/ML Research Group, Hackathon Participant
            </div>
          </div>
          <div className="edu-card reveal reveal-d3">
            <div className="edu-degree">Bachelor of Computer Science</div>
            <div className="edu-school">WSB University</div>
            <div className="edu-dates">Oct 2020 &mdash; Mar 2024</div>
            <div className="edu-gpa">GPA: 4.4/5.0</div>
            <div className="edu-activities" style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14, height: 14, color: 'var(--accent-3)' }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span style={{ color: 'var(--accent-3)', fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>Academic Achievement Scholarship</span>
              </div>
              Foundation in CS fundamentals, algorithms, databases, and software engineering principles.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
