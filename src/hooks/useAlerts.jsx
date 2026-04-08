import { createContext, useContext, useState, useCallback, useRef } from 'react'

const AlertContext = createContext()

export function useAlerts() {
  return useContext(AlertContext)
}

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([])
  const idRef = useRef(0)

  const showAlert = useCallback((type, title, message, duration = 4000) => {
    const id = ++idRef.current
    setAlerts(prev => {
      const next = [{ id, type, title, message, duration }, ...prev]
      return next.slice(0, 3)
    })
    setTimeout(() => {
      setAlerts(prev => prev.filter(a => a.id !== id))
    }, duration)
  }, [])

  const dismissAlert = useCallback((id) => {
    setAlerts(prev => prev.filter(a => a.id !== id))
  }, [])

  return (
    <AlertContext.Provider value={{ alerts, showAlert, dismissAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
