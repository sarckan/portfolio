import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'
import { useAlerts } from '../hooks/useAlerts'

export default function Hero({ loaded }) {
  const canvasRef = useRef(null)
  const animatedRef = useRef(false)
  const { showAlert } = useAlerts()

  // Three.js particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const count = 400
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 20
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      color: 0x6366f1, size: 0.03, transparent: true, opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(geo, mat)
    scene.add(particles)
    camera.position.z = 5

    let visible = true
    const observer = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0 })
    const heroEl = document.getElementById('hero')
    if (heroEl) observer.observe(heroEl)

    let id
    const animate = () => {
      if (visible) {
        particles.rotation.x += 0.0003
        particles.rotation.y += 0.0005
        renderer.render(scene, camera)
      }
      id = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(id)
      observer.disconnect()
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  // Hero animations
  useEffect(() => {
    if (!loaded || animatedRef.current) return
    animatedRef.current = true

    const tl = gsap.timeline()
    tl.to('.hero-headline .line span', { y: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out' })
    tl.to('.hero-sub', { opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    tl.to('.hero-cta-row', { opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    tl.to('.hero-stats', { opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
    tl.to('.hero-scroll-indicator', { opacity: 1, duration: 0.5 }, '-=0.1')

    tl.add(() => {
      document.querySelectorAll('.hero-stat-value[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count)
        gsap.to({ val: 0 }, {
          val: target, duration: 2, ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(this.targets()[0].val) + '+' }
        })
      })
    }, '-=0.5')

    tl.add(() => {
      showAlert('info', 'Available for Work', 'Currently open to new projects and B2B collaborations.', 5000)
    }, '+=0.5')

    // Parallax
    gsap.to('.hero-content', {
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
      y: -80, opacity: 0.3,
    })
  }, [loaded, showAlert])

  return (
    <section id="hero">
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open to Remote &amp; B2B Opportunities
        </div>
        <h1 className="hero-headline">
          <span className="line"><span>Building</span></span>
          <span className="line"><span className="gradient-text">Intelligent</span></span>
          <span className="line"><span>Systems.</span></span>
        </h1>
        <p className="hero-sub">AI-powered automation, modern web applications, and full-stack engineering. From frontend to AI pipelines &mdash; I turn complex ideas into production-ready solutions.</p>
        <div className="hero-cta-row">
          <a href="#contact" className="btn btn-primary" data-cursor="LET'S TALK">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            Get in Touch
          </a>
          <a href="#projects" className="btn btn-outline" data-cursor="EXPLORE">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            View Projects
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-value" data-count="3">0</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div>
            <div className="hero-stat-value" data-count="20">0</div>
            <div className="hero-stat-label">Projects Delivered</div>
          </div>
          <div>
            <div className="hero-stat-value" data-count="5">0</div>
            <div className="hero-stat-label">Tech Domains</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
