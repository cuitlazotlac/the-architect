// Logo B — Elegant monogram "A" in a circle with text to the right
export default function LogoB({ className = '' }) {
  return (
    <svg viewBox="0 0 220 44" fill="currentColor" className={className} aria-label="The Architect">
      {/* Circle monogram */}
      <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {/* Stylized A inside circle */}
      <path d="M22 8L32 34H12L22 8Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="15.5" y1="26" x2="28.5" y2="26" stroke="currentColor" strokeWidth="0.8" />
      {/* Text */}
      <text x="52" y="16" fontFamily="'Raleway', sans-serif" fontSize="8" fontWeight="300" letterSpacing="4" fill="currentColor">THE</text>
      <text x="52" y="34" fontFamily="'DM Serif Display', serif" fontSize="15" fontWeight="400" letterSpacing="1.5" fill="currentColor">ARCHITECT</text>
    </svg>
  )
}
