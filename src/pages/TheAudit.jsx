import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const auditSteps = [
  {
    number: '01',
    title: 'Complete the intake form',
    description: 'A detailed questionnaire covering your current nutrition, training, lifestyle, stress levels, sleep, and goals. This gives me a full picture of where you are.',
  },
  {
    number: '02',
    title: 'I review everything',
    description: 'I take time to analyze your responses, looking for patterns, gaps, and the areas where small shifts could make the biggest impact.',
  },
  {
    number: '03',
    title: 'We meet for your audit call',
    description: 'A focused 1:1 session where I walk you through my findings and give you clear, actionable recommendations across nutrition, training, and mindset.',
  },
  {
    number: '04',
    title: 'You leave with clarity',
    description: 'A written summary of your audit with specific next steps. Whether you continue coaching with me or not, you\'ll know exactly where to focus.',
  },
]

export default function TheAudit() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-cream pt-20">
        <div className="text-center px-6 max-w-3xl hero-animate">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-6 text-bronze-dark font-raleway">Assessment</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown leading-[1.1] mb-8">
            The Audit
          </h1>
          <p className="text-text-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Before we build, we need to understand. The Audit is a comprehensive assessment
            of where you are right now — your nutrition, training, mindset, and lifestyle —
            so we can design what comes next with precision.
          </p>
        </div>
      </section>

      {/* What is the Audit */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal variant="fadeUp">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">What It Is</p>
            </Reveal>
            <Reveal variant="fadeUp" delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl text-dark-brown mb-8 leading-[1.15]">
                A complete picture,<br />
                not a quick fix
              </h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={200}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                The Audit is where every coaching journey begins. It's a deep-dive assessment
                designed to reveal the patterns, blind spots, and opportunities that most
                programs overlook entirely.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={300}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                Most people come to coaching with a list of things they've tried and a belief
                that they just need to try harder. The Audit shows them something different —
                that the problem was never effort. It was understanding.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={400}>
              <p className="text-text-light text-sm leading-[1.9]">
                We look at everything: how you eat, how you train, how you sleep, how you
                manage stress, how your nervous system responds to challenge. Then we build
                from the truth of where you actually are — not where you think you should be.
              </p>
            </Reveal>
          </div>
          <Reveal variant="fadeLeft" duration="slow">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&h=900&fit=crop"
                alt="Assessment and planning"
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream-light">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">The Process</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown">
              How it works
            </h2>
          </Reveal>

          <div className="flex flex-col gap-16 relative">
            {/* Vertical line */}
            <div className="absolute left-[39px] top-2 bottom-2 w-px bg-border hidden md:block" />

            {auditSteps.map((step, i) => (
              <Reveal key={step.number} variant="fadeUp" delay={i * 150}>
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 relative">
                  <div className="relative z-10 flex items-start justify-center">
                    <span className="text-bronze-dark font-serif text-3xl bg-cream-light md:bg-cream-light px-2">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-dark-brown mb-3">{step.title}</h3>
                    <p className="text-text-light text-sm leading-[1.9]">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-sage/30">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">What You Get</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown">
              More than advice
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Nutrition Assessment', text: 'A clear look at what you\'re eating, why, and what your body actually needs — beyond macros and meal plans.' },
              { title: 'Training Review', text: 'An honest evaluation of your current training, what\'s working, what isn\'t, and where the gaps are.' },
              { title: 'Mindset & Lifestyle Audit', text: 'An understanding of the stress, sleep, and behavioural patterns that are influencing everything else.' },
            ].map((item, i) => (
              <Reveal key={item.title} variant="fadeUp" delay={i * 150}>
                <div className="bg-cream p-8 lg:p-10 hover-lift h-full">
                  <h3 className="font-serif text-xl text-dark-brown mb-4">{item.title}</h3>
                  <p className="text-text-light text-sm leading-[1.9]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-dark-brown text-center overflow-hidden">
        <Reveal variant="scaleUp" duration="slow">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">Get Started</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-8 leading-[1.15]">
              Book your audit
            </h2>
            <p className="text-cream/60 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
              The first step to building something different is understanding where you are.
            </p>
            <Link
              to="/book-online"
              className="inline-block border border-bronze-dark text-bronze-dark text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-bronze hover:text-cream transition-all duration-500 font-raleway btn-shine"
            >
              Book Now
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
