// Logo D — Two hands cupping / holding (care / building motif)
export default function LogoD({ className = '' }) {
  return (
    <svg viewBox="0 0 220 44" fill="currentColor" className={className} aria-label="The Architect">
      {/* Left hand curve */}
      <path
        d="M4 14C4 14 2 24 8 32C12 37 18 38 18 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Right hand curve */}
      <path
        d="M32 14C32 14 34 24 28 32C24 37 18 38 18 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Small spark / seed at top center */}
      <circle cx="18" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="18" cy="10" r="0.8" fill="currentColor" />
      {/* Text */}
      <text x="46" y="16" fontFamily="'Raleway', sans-serif" fontSize="8" fontWeight="300" letterSpacing="4" fill="currentColor">THE</text>
      <text x="46" y="34" fontFamily="'DM Serif Display', serif" fontSize="15" fontWeight="400" letterSpacing="1.5" fill="currentColor">ARCHITECT</text>
    </svg>
  )
}
