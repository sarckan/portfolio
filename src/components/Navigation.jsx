import { useEffect, useState } from 'react'
import { getLenis } from '../hooks/useLenis'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id)
      })
    }, { threshold: 0.3 })
    sections.forEach(s => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    const lenis = getLenis()
    if (target && lenis) lenis.scrollTo(target, { offset: -72 })
    setMenuOpen(false)
  }

  // Scramble text on logo hover
  const scramble = e => {
    const el = e.currentTarget
    const original = el.textContent
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'
    let iteration = 0
    const interval = setInterval(() => {
      el.textContent = original.split('').map((c, i) => {
        if (i < iteration) return original[i]
        return chars[Math.floor(Math.random() * chars.length)]
      }).join('')
      if (iteration >= original.length) clearInterval(interval)
      iteration += 1/3
    }, 40)
  }

  const links = [
    ['#about', 'About'],
    ['#services', 'Services'],
    ['#experience', 'Experience'],
    ['#projects', 'Projects'],
    ['#contact', 'Contact'],
  ]

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" data-cursor="SARKHAN" onClick={e => scrollTo(e, '#hero')} onMouseEnter={scramble}>SR.</a>
        <ul className="nav-links">
          {links.map(([href, text]) => (
            <li key={href}>
              <a href={href} className={active === href.slice(1) ? 'active' : ''} data-cursor={text.toUpperCase()} onClick={e => scrollTo(e, href)}>{text}</a>
            </li>
          ))}
        </ul>
        <div className="nav-status">
          <span className="nav-status-dot" />
          <span>Available for work</span>
        </div>
        <button className={`nav-hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-overlay ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {links.map(([href, text]) => (
          <a key={href} href={href} onClick={e => scrollTo(e, href)}>{text}</a>
        ))}
      </div>
    </>
  )
}
