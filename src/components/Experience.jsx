import { useScrollReveal } from '../hooks/useScrollReveal'

const jobs = [
  {
    date: 'Aug 2025 — Present',
    role: 'AI Developer',
    company: 'PROPEGA · Freelance · Remote',
    desc: 'Building AI-powered assistants, automation workflows, and full-stack applications with a focus on scalability, system integration, and real-world business automation.',
    skills: ['Claude API', 'OpenAI', 'n8n', 'MCP', 'React'],
  },
  {
    date: 'Jun 2023 — Present',
    role: 'Frontend Web Developer',
    company: 'IBM · Full-time · Remote',
    desc: 'Developing enterprise-grade frontend solutions with React.js. Building responsive, accessible, and high-performance web interfaces at scale.',
    skills: ['React.js', 'CSS', 'TypeScript', 'REST APIs'],
  },
  {
    date: 'Dec 2022 — Present',
    role: 'Frontend Web Developer',
    company: 'Self-employed · Wroclaw, Poland',
    desc: 'Freelance web development for clients. Full project lifecycle from requirements to deployment, specializing in modern JavaScript frameworks and databases.',
    skills: ['JavaScript', 'SQL', 'Next.js'],
  },
  {
    date: 'Jun 2022 — Dec 2022',
    role: 'Recruiter',
    company: 'Agencja Pracy Tymczasowej T&M · Full-time',
    desc: 'Technical recruitment experience providing deep understanding of the hiring process, candidate evaluation, and business communication skills.',
    skills: [],
  },
  {
    date: 'Dec 2021 — Mar 2022',
    role: 'Software Engineer',
    company: 'Kristo Technologies · Internship',
    desc: 'First professional engineering experience. Foundations in software development practices, version control, and team collaboration.',
    skills: [],
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
              <div className="timeline-desc">{j.desc}</div>
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
