// Logo E — Diamond / compass rose with clean text
export default function LogoE({ className = '' }) {
  return (
    <svg viewBox="0 0 220 44" fill="currentColor" className={className} aria-label="The Architect">
      {/* Diamond / rotated square */}
      <rect x="6" y="6" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(45 18 18)" />
      {/* Inner cross */}
      <line x1="18" y1="6" x2="18" y2="30" stroke="currentColor" strokeWidth="0.6" />
      <line x1="6" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="0.6" />
      {/* Center dot */}
      <circle cx="18" cy="18" r="2" fill="currentColor" />
      {/* Text */}
      <text x="46" y="16" fontFamily="'Raleway', sans-serif" fontSize="8" fontWeight="300" letterSpacing="4" fill="currentColor">THE</text>
      <text x="46" y="34" fontFamily="'DM Serif Display', serif" fontSize="15" fontWeight="400" letterSpacing="1.5" fill="currentColor">ARCHITECT</text>
    </svg>
  )
}
