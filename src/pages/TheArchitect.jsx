import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function TheArchitect() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-cream pt-20">
        <div className="text-center px-6 max-w-3xl hero-animate">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-6 text-bronze-dark font-raleway">
            About
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown leading-[1.1] mb-8">
            The Architect
          </h1>
          <p className="text-text-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            The story behind the practice.
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
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">
                My Story
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl text-dark-brown mb-8 leading-[1.15]">
                When the Body Stops
                <br />
                Being the Enemy.
              </h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={200}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                I grew up at war with my own body. Overweight, then starving. I
                spent years believing the answer was less, less food, less
                space, less of me.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={300}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                The turning point was not a programme. It was a decision to
                start treating my body as something worth rebuilding rather than
                something to be punished.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={400}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                I went deep into biomechanics, neuro-somatic work, and
                nutritional science. I became disillusioned with the fitness
                industry, its obsession with aesthetics, its reliance on
                processed supplements, its complete disregard for the person
                inside the body.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={500}>
              <p className="text-text-light text-sm leading-[1.9]">
                The Architect exists because that industry failed people like
                me. This is not coaching. This is a complete re-architecture of
                how you exist in your body.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream-light">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">
              What I Believe
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown">
              Guiding principles
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Beyond Aesthetic Obsession",
                text: "We reject the reduction of the body to appearance and instead prioritize internal structural truth over external validation.",
              },
              {
                title: "No Punishment-Based Transformation",
                text: "The body is not something to conquer or correct through shame, but something to understand, restore, and work with.",
              },
              {
                title: "Return to Biological Integrity",
                text: "We move away from synthetic and engineered solutions, rebuilding health through fundamental, earth-based nutritional principles.",
              },
              {
                title: "Neuro-Somatic Reconnection",
                text: "We restore the link between mind and body by rewiring trauma patterns and re-establishing deep physiological awareness and control.",
              },
            ].map((value, i) => (
              <Reveal key={value.title} variant="fadeUp" delay={i * 120}>
                <div className="bg-cream p-8 lg:p-10 hover-lift h-full transition-all duration-500">
                  <h3 className="font-serif text-xl text-dark-brown mb-4">
                    {value.title}
                  </h3>
                  <p className="text-text-light text-sm leading-[1.9]">
                    {value.text}
                  </p>
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
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">
              Work Together
            </p>
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
  );
}
