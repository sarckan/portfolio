import { useScrollReveal } from '../hooks/useScrollReveal'

const jobs = [
  {
    date: 'Aug 2025 — Present',
    role: 'AI Engineer (Freelance)',
    company: 'PROPEGA · Remote',
    bullets: [
      'Architected AI-powered assistants leveraging LLM APIs (OpenAI, Claude), reducing manual response time by 60%+ across client workflows',
      'Designed and deployed event-driven automation pipelines (n8n, webhooks, CRM integrations), eliminating 15+ hours/week of manual operations',
      'Implemented secure agent-data interaction layer (MCP), improving domain-specific response accuracy by 40%',
      'Delivered end-to-end AI solutions from architecture to deployment, supporting multiple business use cases in production',
    ],
    skills: ['Claude API', 'OpenAI', 'LangChain', 'n8n', 'MCP', 'React'],
  },
  {
    date: 'Jun 2023 — Present',
    role: 'Frontend Engineer',
    company: 'IBM · Full-time · Remote',
    bullets: [
      'Developed and scaled enterprise-grade React/TypeScript applications used by global cross-functional teams',
      'Migrated legacy architecture to React Server Components (RSC), improving First Contentful Paint by 30%',
      'Contributed to a company-wide design system, reducing feature development time by 25% across teams',
      'Collaborated with designers and backend teams to deliver performant, maintainable UI at scale',
    ],
    skills: ['React.js', 'TypeScript', 'RSC', 'Design Systems', 'REST APIs'],
  },
  {
    date: 'Dec 2022 — Jun 2023',
    role: 'Frontend Developer (Freelance)',
    company: 'Self-employed · Wroclaw, Poland',
    bullets: [
      'Built and delivered 10+ production web applications for SMBs, focusing on performance, SEO, and responsiveness',
      'Designed and optimized SQL-backed systems supporting e-commerce platforms with 500+ monthly transactions',
      'Improved client conversion rates through performance tuning and UX improvements',
    ],
    skills: ['JavaScript', 'SQL', 'Next.js', 'SEO', 'E-commerce'],
  },
  {
    date: 'Dec 2021 — May 2022',
    role: 'Software Engineer Intern',
    company: 'Kristo Technologies',
    bullets: [
      'Developed and tested UI components for high-traffic platforms',
      'Identified and resolved 50+ critical frontend issues, improving release stability and user experience',
    ],
    skills: ['HTML/CSS', 'JavaScript', 'Testing'],
  },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" ref={ref}>
      <div className="section-container">
        <div className="eyebrow reveal">Career Path</div>
        <h2 className="section-title reveal reveal-d1">Experience</h2>
        <div className="timeline">
          {jobs.map((j, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-date">{j.date}</div>
              <div className="timeline-role">{j.role}</div>
              <div className="timeline-company">{j.company}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0 0' }}>
                {j.bullets.map((b, bi) => (
                  <li key={bi} style={{
                    fontSize: 'var(--text-sm)', color: 'var(--text-dim)', lineHeight: 1.6,
                    paddingLeft: 16, position: 'relative', marginBottom: 6, maxWidth: '60ch',
                  }}>
                    <span style={{
                      position: 'absolute', left: 0, top: 8,
                      width: 4, height: 4, borderRadius: '50%',
                      background: 'var(--accent)', opacity: 0.5,
                    }} />
                    {b}
                  </li>
                ))}
              </ul>
              {j.skills.length > 0 && (
                <div className="timeline-skills">
                  {j.skills.map(s => <span className="timeline-skill" key={s}>{s}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
