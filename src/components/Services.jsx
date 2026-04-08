import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    num: '01',
    title: 'AI & Automation',
    desc: 'Custom AI assistants, chatbots, and automation workflows using Claude API, OpenAI, MCP, and n8n. Turn repetitive tasks into intelligent pipelines.',
    tags: ['Claude API', 'OpenAI', 'n8n', 'MCP'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Full-stack web applications with React, Next.js, Node.js, and Express. Modern, responsive, performant, and scalable.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>,
  },
  {
    num: '03',
    title: 'Information Security',
    desc: 'Web application security audits, vulnerability assessments, and secure development practices. Building security into the foundation.',
    tags: ['Web Security', 'Vulnerability Assessment', 'OWASP'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    num: '04',
    title: 'System Integration',
    desc: 'Connect APIs, CRMs, webhooks, and databases into cohesive workflows. Seamless data flow between your business tools.',
    tags: ['REST APIs', 'Webhooks', 'CRM', 'Databases'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 14.899A7 7 0 1115.71 8h1.79a4.5 4.5 0 012.5 8.242"/><path d="M12 12v9"/><path d="M8 17l4 4 4-4"/></svg>,
  },
  {
    num: '05',
    title: 'UX & Web Design',
    desc: 'User experience design and modern web interfaces. Clean, intuitive designs that convert visitors into customers.',
    tags: ['UI/UX', 'Responsive', 'Figma', 'CSS'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  },
  {
    num: '06',
    title: 'IT Consulting',
    desc: 'Strategic technology guidance for businesses. Architecture decisions, tool selection, and digital transformation planning.',
    tags: ['Strategy', 'Architecture', 'B2B'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  },
]

export default function Services() {
  const ref = useScrollReveal()

  // 3D tilt
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card')
    const onMove = function(e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotX = (y - rect.height / 2) / (rect.height / 2) * -8
      const rotY = (x - rect.width / 2) / (rect.width / 2) * 8
      this.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`
      this.style.setProperty('--mx', x + 'px')
      this.style.setProperty('--my', y + 'px')
    }
    const onLeave = function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    }
    cards.forEach(c => { c.addEventListener('mousemove', onMove); c.addEventListener('mouseleave', onLeave) })
    return () => cards.forEach(c => { c.removeEventListener('mousemove', onMove); c.removeEventListener('mouseleave', onLeave) })
  }, [])

  return (
    <section id="services" ref={ref}>
      <div className="section-container">
        <div className="eyebrow reveal">What I Do</div>
        <h2 className="section-title reveal reveal-d1">Services</h2>
        <p className="section-lead reveal reveal-d2">End-to-end solutions from concept to deployment. Contact for quotes on custom projects.</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card reveal reveal-d${i + 1}`} key={s.num} data-cursor="VIEW">
              <span className="service-number">{s.num}</span>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => <span className="service-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
