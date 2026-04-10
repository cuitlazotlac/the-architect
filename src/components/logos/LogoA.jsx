// Logo A — Shield / crest with serif A
export default function LogoA({ className = '' }) {
  return (
    <svg viewBox="0 0 220 44" fill="currentColor" className={className} aria-label="The Architect">
      {/* Shield shape */}
      <path
        d="M18 2L34 8V24C34 32 26 38 18 42C10 38 2 32 2 24V8L18 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* A inside */}
      <text x="18" y="27" fontFamily="'DM Serif Display', serif" fontSize="16" fontWeight="400" fill="currentColor" textAnchor="middle">A</text>
      {/* Text */}
      <text x="46" y="16" fontFamily="'Raleway', sans-serif" fontSize="8" fontWeight="300" letterSpacing="4" fill="currentColor">THE</text>
      <text x="46" y="34" fontFamily="'DM Serif Display', serif" fontSize="15" fontWeight="400" letterSpacing="1.5" fill="currentColor">ARCHITECT</text>
    </svg>
  )
}
