import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certificates = [
  {
    title: 'Certificate Title Here',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    image: '/certificates/cert-1.jpg',
    link: '#',
    description: 'Brief description of what this certificate covers.',
  },
  {
    title: 'Certificate Title Here',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    image: '/certificates/cert-2.jpg',
    link: '#',
    description: 'Brief description of what this certificate covers.',
  },
  {
    title: 'Certificate Title Here',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    image: '/certificates/cert-3.jpg',
    link: '#',
    description: 'Brief description of what this certificate covers.',
  },
  // Add more certificates here following the same format:
  // {
  //   title: 'AWS Cloud Practitioner',
  //   issuer: 'Amazon Web Services',
  //   date: 'Mar 2025',
  //   image: '/certificates/aws.jpg',
  //   link: 'https://verify.link/...',
  //   description: 'Foundational understanding of AWS Cloud concepts.',
  // },
]

export default function Certificates() {
  const ref = useScrollReveal()
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="certificates" ref={ref}>
      <div className="section-container">
        <div className="eyebrow reveal">Credentials</div>
        <h2 className="section-title reveal reveal-d1">Certificates</h2>
        <p className="section-lead reveal reveal-d2">Professional certifications and completed courses. Click to view full certificate.</p>

        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <div className={`cert-card reveal reveal-d${(i % 6) + 1}`} key={i} data-cursor="VIEW">
              <div className="cert-image-wrap" onClick={() => setLightbox(cert)}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  draggable="false"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="cert-image-placeholder" style={{ display: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 40, height: 40, color: 'var(--text-dim)' }}>
                    <rect x="2" y="3" width="20" height="18" rx="2"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                  <span>Certificate Image</span>
                </div>
                <div className="cert-image-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 24, height: 24 }}>
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-desc">{cert.description}</div>
                <div className="cert-footer">
                  <span className="cert-date">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 12, height: 12 }}>
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {cert.date}
                  </span>
                  {cert.link && cert.link !== '#' && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-verify" data-cursor="VERIFY">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 12, height: 12 }}>
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <div className="cert-lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="cert-lightbox-close" onClick={() => setLightbox(null)} data-cursor="CLOSE" aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 24, height: 24 }}>
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={lightbox.image} alt={lightbox.title} draggable="false" />
            <div className="cert-lightbox-info">
              <h3>{lightbox.title}</h3>
              <p>{lightbox.issuer} &middot; {lightbox.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
