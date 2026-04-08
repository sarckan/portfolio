import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projectData = [
  {
    name: 'Pig Game',
    desc: 'A classic dice game where two players compete to reach 100 points first. Roll the dice, hold your score, or risk it all.',
    live: 'https://pig-gamesp1.netlify.app',
    github: 'https://github.com/sarckan',
    tech: ['JavaScript', 'HTML', 'CSS'],
    lang: 'JavaScript',
    langColor: '#f1e05a',
  },
  {
    name: 'Guess My Number',
    desc: 'An interactive number guessing game with scoring system. Try to guess the secret number between 1 and 20.',
    live: 'https://gess-my-number.netlify.app',
    github: 'https://github.com/sarckan',
    tech: ['JavaScript', 'DOM', 'CSS'],
    lang: 'JavaScript',
    langColor: '#f1e05a',
  },
  {
    name: 'Insect Catch',
    desc: 'A fun and interactive web-based game where players catch insects. Test your reflexes and compete for high scores.',
    live: 'https://catch-insects.netlify.app',
    github: 'https://github.com/sarckan/Insect-Catch',
    tech: ['JavaScript', 'Canvas', 'CSS'],
    lang: 'JavaScript',
    langColor: '#f1e05a',
  },
  {
    name: 'GitHub Profiles',
    desc: 'Search and explore GitHub user profiles with a sleek interface. Fetches real-time data from the GitHub API.',
    live: 'https://github-profil-es.netlify.app',
    github: 'https://github.com/sarckan',
    tech: ['JavaScript', 'GitHub API', 'CSS'],
    lang: 'JavaScript',
    langColor: '#f1e05a',
  },
  {
    name: 'Todo List App',
    desc: 'A simple and elegant todo list application with a modern glass effect design. Create, complete, and manage your tasks.',
    live: 'https://to-do-list-app-lica-tion.netlify.app',
    github: 'https://github.com/sarckan/Todo-List-Application',
    tech: ['JavaScript', 'LocalStorage', 'CSS'],
    lang: 'JavaScript',
    langColor: '#f1e05a',
  },
  {
    name: 'German Vocabulary',
    desc: 'An interactive German language vocabulary trainer. Practice and expand your German word knowledge from A1 to B2 level.',
    live: 'https://german-pro-vocabulary.netlify.app',
    github: 'https://github.com/sarckan',
    tech: ['HTML', 'JavaScript', 'CSS'],
    lang: 'HTML',
    langColor: '#e34c26',
  },
]

export default function Projects() {
  const ref = useScrollReveal()

  // 3D tilt for project cards
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')
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
    cards.forEach(c => {
      c.addEventListener('mousemove', onMove)
      c.addEventListener('mouseleave', onLeave)
    })
    return () => cards.forEach(c => {
      c.removeEventListener('mousemove', onMove)
      c.removeEventListener('mouseleave', onLeave)
    })
  }, [])

  return (
    <section id="projects" ref={ref}>
      <div className="section-container">
        <div className="eyebrow reveal">Featured Work</div>
        <h2 className="section-title reveal reveal-d1">Projects</h2>
        <p className="section-lead reveal reveal-d2">Live projects you can try right now. Click to explore.</p>
        <div className="projects-grid">
          {projectData.map((p, i) => (
            <div className={`project-card reveal reveal-d${(i % 6) + 1}`} key={i} data-cursor="VIEW">
              <div className="project-header">
                <div className="project-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                  </svg>
                </div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link" data-cursor="CODE" aria-label="Source code">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                  </a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link" data-cursor="LIVE" aria-label="Live demo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-meta">
                <div className="project-lang">
                  <span className="project-lang-dot" style={{ background: p.langColor }} />
                  {p.lang}
                </div>
                <div className="project-tech-tags">
                  {p.tech.map(t => <span className="project-tech-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
