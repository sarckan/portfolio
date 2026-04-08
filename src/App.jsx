import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TechCarousel from './components/TechCarousel'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AlertContainer from './components/AlertContainer'
import { AlertProvider } from './hooks/useAlerts'
import { useLenis } from './hooks/useLenis'
import { useSecurity } from './hooks/useSecurity'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useLenis()
  useSecurity()

  return (
    <AlertProvider>
      <a href="#main" className="skip-link">Skip to main content</a>

      {/* Background layers */}
      <div className="cyber-grid" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <div id="scroll-progress" aria-hidden="true" />

      <Preloader onComplete={() => setLoaded(true)} />
      <Cursor />
      <Navigation />

      <main id="main">
        <Hero loaded={loaded} />
        <TechCarousel />
        <About />
        <Services />
        <Experience />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <AlertContainer />
    </AlertProvider>
  )
}
