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
            <div className="edu-dates">Sep 2024 &mdash; Jun 2026</div>
            <div className="edu-gpa">GPA: 4.9 &mdash; Top 3/80</div>
            <div className="edu-activities">IT Student Council, Cybersecurity Club, AI/ML Research Group, Hackathon Participant</div>
          </div>
          <div className="edu-card reveal reveal-d3">
            <div className="edu-degree">Bachelor of Science</div>
            <div className="edu-school">Computer Science &mdash; WSB University</div>
            <div className="edu-dates">Oct 2020 &mdash; Mar 2024</div>
            <div className="edu-gpa">GPA: 4.4</div>
            <div className="edu-activities">Foundation in CS fundamentals, algorithms, databases, and software engineering principles.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
