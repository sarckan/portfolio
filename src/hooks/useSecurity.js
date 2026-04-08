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

    const onContext = e => { e.preventDefault(); showSecurityToast('Right-click is disabled on this site.') }
    const onKeydown = e => {
      const blocked = ((e.ctrlKey || e.metaKey) && ['u','s','p'].includes(e.key.toLowerCase())) || e.key === 'F12'
      if (blocked) { e.preventDefault(); showSecurityToast('This action is restricted.') }
    }
    const onDrag = e => e.preventDefault()
    const onVisibility = () => {
      if (document.hidden) {
        document.body.style.filter = 'blur(12px)'
        document.body.style.transition = 'filter 0.3s'
      } else {
        setTimeout(() => { document.body.style.filter = 'none' }, 800)
      }
    }

    document.addEventListener('contextmenu', onContext)
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('dragstart', onDrag)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('contextmenu', onContext)
      document.removeEventListener('keydown', onKeydown)
      document.removeEventListener('dragstart', onDrag)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])
}
