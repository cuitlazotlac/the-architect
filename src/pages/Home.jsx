import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const services = [
  {
    title: 'Nutrition',
    description: 'Earth-based, whole-food nutrition strategies that nourish your body without restriction or obsession.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
  },
  {
    title: 'Training',
    description: 'Strength-focused programming designed to build confidence, resilience, and a body that moves well.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop',
  },
  {
    title: 'Mindset',
    description: 'The inner work that makes the outer work sustainable. Coaching that goes beyond habits to address beliefs.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
  },
]

const testimonials = [
  {
    quote: "Working with Kloe changed my entire relationship with food and my body. For the first time, I feel like I'm building something that's actually mine.",
    name: 'Sarah M.',
  },
  {
    quote: "I came for the training program and stayed for the mindset work. This isn't just coaching — it's a complete shift in how you see yourself.",
    name: 'Emma T.',
  },
  {
    quote: "Kloe doesn't just give you a plan. She helps you understand why nothing has worked before, and then builds something that actually does.",
    name: 'Rachel K.',
  },
]

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&h=1080&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover opacity-30 animate-slow-zoom"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl pt-20 hero-animate">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-6 text-bronze font-raleway">
            Whole-Person Coaching
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-dark-brown leading-[1.1] mb-8">
            Build a body
            <br />
            and life that
            <br />
            feel like yours
          </h1>
          <p className="text-sm md:text-base text-text-light max-w-lg mx-auto mb-10 leading-relaxed">
            Integrating nutrition, training, and mindset work to create lasting transformation
            — not quick fixes.
          </p>
          <Link
            to="/book-online"
            className="inline-block border border-bronze text-bronze text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-bronze hover:text-cream transition-all duration-500 font-raleway btn-shine"
          >
            Start Your Journey
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-dark-brown/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-dark-brown/20" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="fadeRight" duration="slow">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&h=900&fit=crop"
                alt="Wellness coaching"
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </Reveal>
          <div className="lg:pl-8">
            <Reveal variant="fadeUp">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze font-raleway">The Philosophy</p>
            </Reveal>
            <Reveal variant="fadeUp" delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown mb-8 leading-[1.15]">
                This isn't about
                <br />
                fixing your body
              </h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={200}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                Most coaching programs start with what's wrong with you and try to fix it.
                Meal plans you can't sustain. Training splits that don't fit your life. Mindset
                hacks that paper over the real problem.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={300}>
              <p className="text-text-light text-sm leading-[1.9] mb-10">
                The Architect is different. We start with who you actually are — your body, your
                nervous system, your relationship with food and movement — and we build from there.
                Not a transformation. An architecture.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={400}>
              <Link
                to="/the-method"
                className="inline-block border border-dark-brown text-dark-brown text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-dark-brown hover:text-cream transition-all duration-500 font-raleway btn-shine"
              >
                The Method
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="bg-dark-brown py-12 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 shrink-0">
              <StatItem label="Nutrition" />
              <Dot />
              <StatItem label="Training" />
              <Dot />
              <StatItem label="Mindset" />
              <Dot />
              <StatItem label="Coaching" />
              <Dot />
              <StatItem label="Wellness" />
              <Dot />
              <StatItem label="Strength" />
              <Dot />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream-light">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze font-raleway">What We Work On</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown mb-6">
              Three pillars, one practice
            </h2>
            <p className="text-text-light text-sm leading-relaxed">
              Every programme integrates all three — because lasting change doesn't happen in silos.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {services.map((service, i) => (
              <Reveal key={service.title} variant="fadeUp" delay={i * 150}>
                <div className="group hover-lift">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-dark-brown mb-3">{service.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-sage/30">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze font-raleway">Kind Words</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown">
              What clients say
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} variant="fadeUp" delay={i * 150}>
                <div className="bg-cream p-8 lg:p-10 hover-lift h-full">
                  <p className="text-text-light text-sm leading-[1.9] mb-6 italic">
                    "{item.quote}"
                  </p>
                  <p className="text-dark-brown text-sm font-medium tracking-wider">{item.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-dark-brown text-center overflow-hidden">
        <Reveal variant="scaleUp" duration="slow">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze font-raleway">Ready?</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-8 leading-[1.15]">
              Start building something
              <br />
              that lasts
            </h2>
            <p className="text-cream/60 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you're starting from scratch or rebuilding what hasn't worked,
              there's a programme that fits where you are right now.
            </p>
            <Link
              to="/book-online"
              className="inline-block border border-bronze text-bronze text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-bronze hover:text-cream transition-all duration-500 font-raleway btn-shine"
            >
              Book a Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

function StatItem({ label }) {
  return (
    <span className="text-cream/80 text-xs tracking-[0.3em] uppercase font-raleway shrink-0">
      {label}
    </span>
  )
}

function Dot() {
  return <span className="text-bronze text-lg shrink-0">&bull;</span>
}
