import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { path: '/the-method', label: 'The Method' },
  { path: '/the-architect', label: 'The Architect' },
  { path: '/the-audit', label: 'The Audit' },
  { path: '/blog', label: 'Blog' },
  { path: '/book-online', label: 'Book Online' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/97 backdrop-blur-md shadow-[0_2px_20px_rgba(61,26,10,0.06)]'
          : 'bg-cream/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link to="/" className="text-dark-brown transition-transform duration-300 hover:scale-[1.02]">
            <Logo className={`transition-all duration-500 ${scrolled ? 'h-8 w-auto' : 'h-9 w-auto'}`} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-[11px] tracking-[0.15em] uppercase font-raleway font-normal transition-colors duration-300 hover:text-bronze relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-bronze after:transition-all after:duration-300 ${
                  location.pathname === path
                    ? 'text-bronze after:w-full'
                    : 'text-dark-brown after:w-0 hover:after:w-full'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-px bg-dark-brown transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`w-6 h-px bg-dark-brown transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
            <span className={`w-6 h-px bg-dark-brown transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-cream ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ path, label }, i) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`text-[11px] tracking-[0.15em] uppercase font-raleway transition-all duration-300 hover:text-bronze hover:translate-x-2 ${
                location.pathname === path ? 'text-bronze' : 'text-dark-brown'
              }`}
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
