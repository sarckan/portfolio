import { getLenis } from '../hooks/useLenis'

export default function Footer() {
  const scrollTop = e => {
    e.preventDefault()
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0)
  }

  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-copy">&copy; 2024&ndash;2026 Sarkhan Rustamov. All rights reserved.</div>
        <div className="footer-socials">
          <a href="https://github.com/sarckan" target="_blank" rel="noopener noreferrer" className="footer-social" data-cursor="GITHUB" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/sarkhan-rustamov-64bb16168/" target="_blank" rel="noopener noreferrer" className="footer-social" data-cursor="LINKEDIN" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:sarckanr@gmail.com" className="footer-social" data-cursor="EMAIL" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
          </a>
        </div>
        <a href="#hero" className="footer-back-top" data-cursor="TOP" onClick={scrollTop}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg>
          Back to Top
        </a>
      </div>
    </footer>
  )
}
