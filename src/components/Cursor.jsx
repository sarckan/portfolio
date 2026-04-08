import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
      label.style.left = mx + 'px'
      label.style.top = my + 'px'
    }

    const lerp = (a, b, t) => a + (b - a) * t
    const animate = () => {
      rx = lerp(rx, mx, 0.12)
      ry = lerp(ry, my, 0.12)
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = e => {
      document.body.classList.add('cursor-hover')
      const cursorLabel = e.currentTarget.getAttribute('data-cursor')
      if (cursorLabel) label.textContent = cursorLabel
    }
    const onLeave = () => {
      document.body.classList.remove('cursor-hover')
      label.textContent = ''
    }

    const setupHovers = () => {
      const els = document.querySelectorAll('a, button, .service-card, .project-card, .edu-card, .contact-method, .portfolio-link-card, .form-input, .form-textarea')
      els.forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    // Setup hovers initially and on DOM changes
    setupHovers()
    const mo = new MutationObserver(() => setupHovers())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
      <div id="cursor-label" ref={labelRef} />
    </>
  )
}
