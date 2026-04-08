const techItems = [
  { name: 'React', color: '#61DAFB', icon: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" strokeWidth="1.2"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 16 16)"/></svg> },
  { name: 'Next.js', color: '#fff', icon: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="none" stroke="#fff" strokeWidth="1.2"/><path d="M12 10v12l10-12" stroke="#fff" strokeWidth="1.5" fill="none"/><line x1="21" y1="10" x2="21" y2="22" stroke="#fff" strokeWidth="1.5"/></svg> },
  { name: 'TypeScript', color: '#3178C6', icon: <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" rx="3" fill="none" stroke="#3178C6" strokeWidth="1.2"/><text x="16" y="22" textAnchor="middle" fill="#3178C6" fontSize="14" fontWeight="bold" fontFamily="sans-serif">TS</text></svg> },
  { name: 'JavaScript', color: '#F7DF1E', icon: <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" rx="3" fill="none" stroke="#F7DF1E" strokeWidth="1.2"/><text x="16" y="22" textAnchor="middle" fill="#F7DF1E" fontSize="14" fontWeight="bold" fontFamily="sans-serif">JS</text></svg> },
  { name: 'Node.js', color: '#68A063', icon: <svg viewBox="0 0 32 32"><polygon points="16,2 30,9 30,23 16,30 2,23 2,9" fill="none" stroke="#68A063" strokeWidth="1.2"/><text x="16" y="20" textAnchor="middle" fill="#68A063" fontSize="10" fontWeight="bold" fontFamily="sans-serif">N</text></svg> },
  { name: 'Python', color: '#3776AB', icon: <svg viewBox="0 0 32 32"><path d="M16 2C10 2 10 5 10 5v4h6v1H8s-6 0-6 6 4 6 4 6h3v-4s0-4 4-4h6s4 0 4-4V5s0-3-7-3zm-3 2a1 1 0 110 2 1 1 0 010-2z" fill="none" stroke="#3776AB" strokeWidth="1.2"/><path d="M16 30c6 0 6-3 6-3v-4h-6v-1h8s6 0 6-6-4-6-4-6h-3v4s0 4-4 4h-6s-4 0-4 4v5s0 3 7 3zm3-2a1 1 0 110-2 1 1 0 010 2z" fill="none" stroke="#FFDC52" strokeWidth="1.2"/></svg> },
  { name: 'Claude API', color: '#D97706', icon: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="#D97706" strokeWidth="1.2"/><path d="M11 16l3 3 7-7" fill="none" stroke="#D97706" strokeWidth="2"/></svg> },
  { name: 'OpenAI', color: '#10A37F', icon: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="#10A37F" strokeWidth="1.2"/><path d="M16 8v8l6 3" fill="none" stroke="#10A37F" strokeWidth="1.5"/></svg> },
  { name: 'n8n', color: '#EA4B71', icon: <svg viewBox="0 0 32 32"><circle cx="10" cy="16" r="4" fill="none" stroke="#EA4B71" strokeWidth="1.2"/><circle cx="22" cy="10" r="4" fill="none" stroke="#EA4B71" strokeWidth="1.2"/><circle cx="22" cy="22" r="4" fill="none" stroke="#EA4B71" strokeWidth="1.2"/><line x1="14" y1="14" x2="18" y2="12" stroke="#EA4B71" strokeWidth="1"/><line x1="14" y1="18" x2="18" y2="20" stroke="#EA4B71" strokeWidth="1"/></svg> },
  { name: 'Express', color: '#fff', icon: <svg viewBox="0 0 32 32"><text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="monospace">Ex</text><rect x="4" y="6" width="24" height="20" rx="3" fill="none" stroke="#fff" strokeWidth="1"/></svg> },
  { name: 'PostgreSQL', color: '#336791', icon: <svg viewBox="0 0 32 32"><ellipse cx="16" cy="12" rx="10" ry="5" fill="none" stroke="#336791" strokeWidth="1.2"/><path d="M6 12v8c0 3 4.5 5 10 5s10-2 10-5v-8" fill="none" stroke="#336791" strokeWidth="1.2"/><path d="M6 17c0 3 4.5 5 10 5s10-2 10-5" fill="none" stroke="#336791" strokeWidth="1"/></svg> },
  { name: 'CSS3', color: '#264DE4', icon: <svg viewBox="0 0 32 32"><path d="M6 2l2 24 8 4 8-4 2-24z" fill="none" stroke="#264DE4" strokeWidth="1.2"/><text x="16" y="20" textAnchor="middle" fill="#264DE4" fontSize="9" fontWeight="bold" fontFamily="sans-serif">CSS</text></svg> },
  { name: 'HTML5', color: '#E34F26', icon: <svg viewBox="0 0 32 32"><path d="M6 2l2 24 8 4 8-4 2-24z" fill="none" stroke="#E34F26" strokeWidth="1.2"/><text x="16" y="20" textAnchor="middle" fill="#E34F26" fontSize="8" fontWeight="bold" fontFamily="sans-serif">HTML</text></svg> },
  { name: 'MCP', color: '#8B5CF6', icon: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="#8B5CF6" strokeWidth="1.2"/><circle cx="16" cy="16" r="4" fill="none" stroke="#8B5CF6" strokeWidth="1"/><line x1="16" y1="4" x2="16" y2="12" stroke="#8B5CF6" strokeWidth="1"/><line x1="16" y1="20" x2="16" y2="28" stroke="#8B5CF6" strokeWidth="1"/><line x1="4" y1="16" x2="12" y2="16" stroke="#8B5CF6" strokeWidth="1"/><line x1="20" y1="16" x2="28" y2="16" stroke="#8B5CF6" strokeWidth="1"/></svg> },
  { name: 'Git', color: '#F05032', icon: <svg viewBox="0 0 32 32"><circle cx="10" cy="10" r="3" fill="none" stroke="#F05032" strokeWidth="1.2"/><circle cx="22" cy="10" r="3" fill="none" stroke="#F05032" strokeWidth="1.2"/><circle cx="10" cy="22" r="3" fill="none" stroke="#F05032" strokeWidth="1.2"/><line x1="10" y1="13" x2="10" y2="19" stroke="#F05032" strokeWidth="1.2"/><line x1="13" y1="10" x2="19" y2="10" stroke="#F05032" strokeWidth="1.2"/></svg> },
  { name: 'Cybersecurity', color: '#EF4444', icon: <svg viewBox="0 0 32 32"><path d="M16 3L4 8v7c0 7.5 5.1 14.5 12 17 6.9-2.5 12-9.5 12-17V8L16 3z" fill="none" stroke="#EF4444" strokeWidth="1.2"/><path d="M12 16l3 3 5-5" fill="none" stroke="#EF4444" strokeWidth="1.5"/></svg> },
]

export default function TechCarousel() {
  const items = [...techItems, ...techItems]

  return (
    <div className="carousel-section" aria-label="Technologies">
      <div className="carousel-track">
        {items.map((item, i) => (
          <div key={i}>
            <div className="carousel-item" data-cursor={item.name.toUpperCase()}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
