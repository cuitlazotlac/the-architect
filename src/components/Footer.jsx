import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <Reveal variant="fadeUp">
            <div>
              <Link to="/" className="inline-block mb-4 text-cream-light">
                <Logo className="h-9 w-auto" />
              </Link>
              <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
                Whole-person coaching that integrates nutrition, training, and mindset work to help you build a body and life that actually feel like yours.
              </p>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal variant="fadeUp" delay={120}>
            <div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-bronze">Navigate</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'The Method', path: '/the-method' },
                  { label: 'The Architect', path: '/the-architect' },
                  { label: 'The Audit', path: '/the-audit' },
                  { label: 'Blog', path: '/blog' },
                  { label: 'Book A Call', path: '/book-online' },
                ].map(({ label, path }) => (
                  <Link
                    key={label}
                    to={path}
                    className="text-cream/60 text-sm hover:text-cream hover:translate-x-1 transition-all duration-300"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal variant="fadeUp" delay={240}>
            <div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-bronze">Connect</h4>
              <div className="flex flex-col gap-3 text-cream/60 text-sm">
                <a href="mailto:hello@thearchitect.com" className="hover:text-cream hover:translate-x-1 transition-all duration-300">hello@thearchitect.com</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-cream hover:translate-x-1 transition-all duration-300">Instagram</a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fadeIn" delay={300}>
          <div className="border-t border-cream/10 mt-12 pt-8 text-center">
            <p className="text-cream/40 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} The Architect. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
