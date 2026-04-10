import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import Reveal from '../components/Reveal'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, CONTACT_EMAIL, RECAPTCHA_SITE_KEY } from '../config'

const programmes = [
  {
    name: 'Foundation Package',
    description: 'Begin your journey with essential nutrition and mindset strategies to kickstart your transformation.',
    duration: '4 weeks',
    tag: 'Start Here',
  },
  {
    name: 'Foundation Coaching',
    description: 'Whole-person coaching focusing on nutrition and mindset work. Perfect for building a strong base.',
    duration: '8 weeks',
    tag: 'Popular',
  },
  {
    name: 'Architect Programme',
    description: 'Customized plan integrating nutrition, training, and mindset coaching for complete transformation.',
    duration: '12 weeks',
    tag: 'Signature',
  },
  {
    name: 'Full Access Program',
    description: 'Personalized coaching including advanced nutrition and mindset strategy with ongoing support.',
    duration: '16 weeks',
    tag: 'Comprehensive',
  },
  {
    name: 'Architect Full Access',
    description: 'Premium coaching with unlimited contact, earth-based nutrition, custom training, and deep mindset work.',
    duration: 'Ongoing',
    tag: 'Premium',
  },
]

const additionalServices = [
  {
    name: 'Nutrition Consult',
    description: 'A focused session to assess and restructure your relationship with food.',
  },
  {
    name: 'Mindset Coaching',
    description: 'One-on-one sessions addressing the beliefs and patterns keeping you stuck.',
  },
  {
    name: 'Strength Training',
    description: 'Custom programming designed to build confidence and capability through movement.',
  },
]

export default function BookOnline() {
  const formRef = useRef(null)
  const captchaRef = useRef(null)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    programme: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!captchaToken) {
      setStatus('captcha')
      return
    }

    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          programme: formData.programme,
          message: formData.message,
          to_email: CONTACT_EMAIL,
        },
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('sent')
      setFormData({ name: '', email: '', programme: '', message: '' })
      setCaptchaToken(null)
      captchaRef.current?.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cream pt-20">
        <div className="text-center px-6 max-w-3xl hero-animate">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-6 text-bronze-dark font-raleway">Work With Me</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown leading-[1.1] mb-8">
            Book Online
          </h1>
          <p className="text-text-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Find the right programme for where you are. Every journey starts with a conversation.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">Programmes</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown">
              Coaching Packages
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((prog, i) => (
              <Reveal key={prog.name} variant="fadeUp" delay={i * 100}>
                <div className="bg-cream-light p-8 lg:p-10 flex flex-col border border-border/50 hover-lift h-full transition-all duration-500 hover:border-bronze-dark/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-bronze-dark font-raleway bg-bronze/10 px-3 py-1">
                      {prog.tag}
                    </span>
                    <span className="text-text-light text-xs">{prog.duration}</span>
                  </div>
                  <h3 className="font-serif text-xl text-dark-brown mb-3">{prog.name}</h3>
                  <p className="text-text-light text-sm leading-[1.8] mb-6 flex-1">{prog.description}</p>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, programme: prog.name })
                      document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="self-start border border-dark-brown text-dark-brown text-[11px] tracking-[0.15em] uppercase px-6 py-3 hover:bg-dark-brown hover:text-cream transition-all duration-500 font-raleway btn-shine"
                  >
                    Enquire
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream-light">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">Also Available</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-brown">
              Individual Services
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, i) => (
              <Reveal key={service.name} variant="fadeUp" delay={i * 120}>
                <div className="bg-cream p-8 border border-border/30 hover-lift h-full transition-all duration-500 hover:border-bronze-dark/30">
                  <h3 className="font-serif text-xl text-dark-brown mb-3">{service.name}</h3>
                  <p className="text-text-light text-sm leading-[1.8]">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="py-24 lg:py-32 px-6 lg:px-12 bg-sage/30">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">Get In Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-brown">
              Send an enquiry
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={150}>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 bg-cream p-8 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-border py-3 text-sm outline-none focus:border-bronze-dark transition-colors duration-300 bg-transparent placeholder:text-text-light/50 font-raleway"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-border py-3 text-sm outline-none focus:border-bronze-dark transition-colors duration-300 bg-transparent placeholder:text-text-light/50 font-raleway"
                />
              </div>
              <select
                name="programme"
                value={formData.programme}
                onChange={handleChange}
                className="w-full border-b border-border py-3 text-sm outline-none focus:border-bronze-dark transition-colors duration-300 bg-transparent text-text-light font-raleway"
              >
                <option value="">Select a programme</option>
                {programmes.map((prog) => (
                  <option key={prog.name} value={prog.name}>{prog.name}</option>
                ))}
                {additionalServices.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Tell me a bit about yourself and what you're looking for..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-border py-3 text-sm outline-none focus:border-bronze-dark transition-colors duration-300 bg-transparent placeholder:text-text-light/50 resize-none font-raleway"
              />
              <ReCAPTCHA
                ref={captchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token) => { setCaptchaToken(token); setStatus('idle') }}
                onExpired={() => setCaptchaToken(null)}
              />
              {status === 'captcha' && (
                <p className="text-red-600 text-sm">Please complete the captcha before submitting.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="self-start border border-dark-brown text-dark-brown text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-dark-brown hover:text-cream transition-all duration-500 font-raleway btn-shine disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
              </button>
              {status === 'sent' && (
                <p className="text-bronze-dark text-sm mt-2 animate-fade-up">
                  Thank you for your enquiry! Jade will be in touch within 48 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm mt-2 animate-fade-up">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
