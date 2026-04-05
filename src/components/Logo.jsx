export default function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 240 40"
      fill="currentColor"
      className={className}
      aria-label="The Architect"
    >
      {/* Triangle / A-frame icon */}
      <path
        d="M20 4L36 36H4L20 4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <line x1="12" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="1.2" />

      {/* "THE ARCHITECT" text */}
      <text
        x="48"
        y="17"
        fontFamily="'Raleway', sans-serif"
        fontSize="9"
        fontWeight="400"
        letterSpacing="3.5"
        fill="currentColor"
      >
        THE
      </text>
      <text
        x="48"
        y="33"
        fontFamily="'DM Serif Display', serif"
        fontSize="16"
        fontWeight="400"
        letterSpacing="2"
        fill="currentColor"
      >
        ARCHITECT
      </text>
    </svg>
  )
}
