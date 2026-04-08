import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const counter = el.querySelector('.preloader-counter')
    const bar = el.querySelector('.preloader-bar')
    const logo = el.querySelector('.preloader-logo')
    const brackets = el.querySelectorAll('.preloader-brackets span')
    const barWrap = el.querySelector('.preloader-bar-wrap')

    gsap.to(brackets, { opacity: 1, duration: 0.3, stagger: 0.05, delay: 0.1 })
    gsap.to(logo, { opacity: 1, duration: 0.5, delay: 0.3 })
    gsap.to(barWrap, { opacity: 1, duration: 0.3, delay: 0.4 })
    gsap.to(counter, { opacity: 1, duration: 0.3, delay: 0.4 })

    let count = 0
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 8) + 3
      if (count >= 100) { count = 100; clearInterval(interval) }
      counter.textContent = String(count).padStart(3, '0')
      bar.style.width = count + '%'

      if (count === 100) {
        setTimeout(() => {
          el.classList.add('done')
          setTimeout(() => onComplete?.(), 300)
        }, 400)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div id="preloader" ref={ref} aria-label="Loading">
      <div className="preloader-brackets">
        <span /><span /><span /><span />
      </div>
      <div className="preloader-logo">SR</div>
      <div className="preloader-counter">000</div>
      <div className="preloader-bar-wrap">
        <div className="preloader-bar" />
      </div>
    </div>
  )
}
