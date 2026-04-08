import { useEffect } from 'react'

export function useSecurity() {
  useEffect(() => {
    let toastTimeout = null

    function showSecurityToast(msg) {
      const existing = document.querySelector('.security-toast')
      if (existing) existing.remove()
      if (toastTimeout) clearTimeout(toastTimeout)

      const toast = document.createElement('div')
      toast.className = 'security-toast'
      toast.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg><span>${msg}</span>`
      document.body.appendChild(toast)

      toastTimeout = setTimeout(() => {
        toast.classList.add('out')
        setTimeout(() => toast.remove(), 300)
      }, 3000)
    }

    // Right-click protection
    const onContext = e => {
      e.preventDefault()
      showSecurityToast('Right-click is disabled on this site.')
    }

    // Keyboard shortcuts protection (copy, view-source, save, print, select-all, devtools)
    const onKeydown = e => {
      const key = e.key.toLowerCase()
      const ctrl = e.ctrlKey || e.metaKey

      const blocked =
        (ctrl && ['u', 's', 'p', 'c', 'a'].includes(key)) ||
        e.key === 'F12' ||
        (ctrl && e.shiftKey && ['i', 'j', 'c'].includes(key))

      if (blocked) {
        e.preventDefault()
        e.stopPropagation()
        showSecurityToast('This action is restricted.')
        return false
      }
    }

    // Drag protection
    const onDrag = e => e.preventDefault()

    // Copy/cut protection
    const onCopy = e => {
      e.preventDefault()
      showSecurityToast('Content copying is disabled.')
    }

    // Visibility blur defense
    const onVisibility = () => {
      if (document.hidden) {
        document.body.style.filter = 'blur(12px)'
        document.body.style.transition = 'filter 0.3s'
      } else {
        setTimeout(() => { document.body.style.filter = 'none' }, 1500)
      }
    }

    // Focus blur defense
    const onBlur = () => {
      document.body.classList.add('site-blurred')
    }
    const onFocus = () => {
      setTimeout(() => document.body.classList.remove('site-blurred'), 800)
    }

    // DevTools detection via size difference
    let devtoolsWarned = false
    const devtoolsCheck = setInterval(() => {
      const widthDiff = window.outerWidth - window.innerWidth > 160
      const heightDiff = window.outerHeight - window.innerHeight > 160

      if ((widthDiff || heightDiff) && !devtoolsWarned) {
        devtoolsWarned = true
        const overlay = document.createElement('div')
        overlay.id = 'devtools-block'
        overlay.style.cssText = `
          position:fixed;inset:0;z-index:99999;background:var(--bg, #03040A);
          display:flex;align-items:center;justify-content:center;flex-direction:column;gap:24px;
          font-family:'JetBrains Mono',monospace;color:#FF3C3C;text-align:center;
        `
        overlay.innerHTML = `
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M12 8v4"/><path d="M12 16h.01"/>
          </svg>
          <div style="font-size:1.5rem;letter-spacing:.2em">ACCESS RESTRICTED</div>
          <div style="font-size:.85rem;color:rgba(255,60,60,.6);letter-spacing:.1em">Developer tools detected. Please close them to continue.</div>
        `
        document.body.appendChild(overlay)
      } else if (!widthDiff && !heightDiff && devtoolsWarned) {
        devtoolsWarned = false
        const overlay = document.getElementById('devtools-block')
        if (overlay) overlay.remove()
      }
    }, 1000)

    // Print defense
    const onBeforePrint = () => {
      document.body.style.display = 'none'
    }
    const onAfterPrint = () => {
      document.body.style.display = ''
    }

    // Screenshot CSS defense — add transparent overlay
    const screenshotShield = document.createElement('div')
    screenshotShield.style.cssText = `
      position:fixed;inset:0;z-index:99998;pointer-events:none;
      mix-blend-mode:difference;
      -webkit-user-select:none;user-select:none;
    `
    screenshotShield.id = 'screenshot-shield'
    document.body.appendChild(screenshotShield)

    document.addEventListener('contextmenu', onContext)
    document.addEventListener('keydown', onKeydown, true)
    document.addEventListener('dragstart', onDrag)
    document.addEventListener('copy', onCopy)
    document.addEventListener('cut', onCopy)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('blur', onBlur)
    window.addEventListener('focus', onFocus)
    window.addEventListener('beforeprint', onBeforePrint)
    window.addEventListener('afterprint', onAfterPrint)

    return () => {
      document.removeEventListener('contextmenu', onContext)
      document.removeEventListener('keydown', onKeydown, true)
      document.removeEventListener('dragstart', onDrag)
      document.removeEventListener('copy', onCopy)
      document.removeEventListener('cut', onCopy)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('blur', onBlur)
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('beforeprint', onBeforePrint)
      window.removeEventListener('afterprint', onAfterPrint)
      clearInterval(devtoolsCheck)
      const shield = document.getElementById('screenshot-shield')
      if (shield) shield.remove()
      const overlay = document.getElementById('devtools-block')
      if (overlay) overlay.remove()
    }
  }, [])
}
