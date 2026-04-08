import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisInstance = lenis

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(time => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    // Scroll progress bar
    const onScroll = () => {
      const el = document.getElementById('scroll-progress')
      if (!el) return
      const h = document.documentElement.scrollHeight - window.innerHeight
      el.style.width = (window.scrollY / h * 100) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      lenis.destroy()
      lenisInstance = null
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
