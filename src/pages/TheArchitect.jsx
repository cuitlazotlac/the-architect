import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function TheArchitect() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-cream pt-20">
        <div className="text-center px-6 max-w-3xl hero-animate">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-6 text-bronze font-raleway">About</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown leading-[1.1] mb-8">
            The Architect
          </h1>
          <p className="text-text-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Meet Jade — the coach behind the method.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="fadeRight" duration="slow">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=700&h=900&fit=crop"
                alt="Jade Légaré"
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </Reveal>
          <div>
            <Reveal variant="fadeUp">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze font-raleway">My Story</p>
            </Reveal>
            <Reveal variant="fadeUp" delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl text-dark-brown mb-8 leading-[1.15]">
                I stopped fixing bodies.<br />
                Then the real work began.
              </h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={200}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                I spent years in the fitness industry doing what I was taught — counting macros,
                building programs, chasing aesthetics. I had the certifications. I had the protocols.
                Clients came to me wanting to lose weight, build muscle, feel confident.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={300}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                And the results came. On the surface. But something bothered me that I couldn't name.
                People would hit their goals and still feel empty. They'd lose the weight and gain it back.
                They'd build the body and still not feel at home in it.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={400}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                That's when I realized: the problem was never the plan. It was the premise.
                We were trying to fix something that wasn't broken — it was just misunderstood.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={500}>
              <p className="text-text-light text-sm leading-[1.9]">
                So I changed everything. I stopped writing meal plans and started having real conversations
                about food. I stopped programming for aesthetics and started building for strength and
                autonomy. I stopped offering mindset "hacks" and started doing the deep work of
                understanding how the nervous system, identity, and behavior actually connect.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream-light">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze font-raleway">What I Believe</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown">
              Guiding principles
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'The body is not a problem to solve',
                text: 'It\'s a system to understand. When we stop treating the body as the enemy and start listening to what it\'s communicating, everything shifts.',
              },
              {
                title: 'Restriction is not discipline',
                text: 'Real discipline is choosing to nourish yourself — fully, consistently, without punishment. It\'s building a relationship with food that doesn\'t require willpower to sustain.',
              },
              {
                title: 'Strength is more than physical',
                text: 'Training builds confidence, resilience, and trust in yourself. The weights are a vehicle for something much larger than muscle.',
              },
              {
                title: 'Sustainable change starts inside',
                text: 'You cannot out-plan a nervous system that doesn\'t feel safe. Mindset work isn\'t optional — it\'s the foundation everything else is built on.',
              },
            ].map((value, i) => (
              <Reveal key={value.title} variant="fadeUp" delay={i * 120}>
                <div className="bg-cream p-8 lg:p-10 hover-lift h-full transition-all duration-500">
                  <h3 className="font-serif text-xl text-dark-brown mb-4">{value.title}</h3>
                  <p className="text-text-light text-sm leading-[1.9]">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-sage/30 text-center overflow-hidden">
        <Reveal variant="scaleUp" duration="slow">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze font-raleway">Work Together</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown mb-8 leading-[1.15]">
              Ready to build something different?
            </h2>
            <Link
              to="/book-online"
              className="inline-block border border-dark-brown text-dark-brown text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-dark-brown hover:text-cream transition-all duration-500 font-raleway btn-shine"
            >
              Book a Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
