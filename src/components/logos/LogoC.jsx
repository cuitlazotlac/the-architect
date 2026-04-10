// Logo C — Hand-drawn circle (wholeness / zen motif)
export default function LogoC({ className = '' }) {
  return (
    <svg viewBox="0 0 220 44" fill="currentColor" className={className} aria-label="The Architect">
      {/* Enso-inspired imperfect circle */}
      <path
        d="M32 10C38 14 40 20 38 28C36 34 28 40 20 38C12 36 6 30 6 22C6 14 12 8 20 6C26 4.5 30 6 32 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Text */}
      <text x="50" y="16" fontFamily="'Raleway', sans-serif" fontSize="8" fontWeight="300" letterSpacing="4" fill="currentColor">THE</text>
      <text x="50" y="34" fontFamily="'DM Serif Display', serif" fontSize="15" fontWeight="400" letterSpacing="1.5" fill="currentColor">ARCHITECT</text>
    </svg>
  )
}
