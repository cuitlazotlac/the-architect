import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const pillars = [
  {
    number: "01",
    title: "Nutrition",
    description:
      "We don't do meal plans. We build an understanding of food that works with your body, your preferences, and your life. Earth-based, whole-food strategies that nourish without restriction.",
    details: [
      "Intuitive eating foundations",
      "Whole-food nutrition strategies",
      "Relationship with food work",
      "Sustainable habits over rigid plans",
    ],
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&h=500&fit=crop",
  },
  {
    number: "02",
    title: "Training",
    description:
      "Strength-focused programming that builds more than muscle. Training that teaches you to trust your body, challenge yourself, and find confidence in what you're capable of.",
    details: [
      "Progressive strength programming",
      "Movement quality focus",
      "Confidence through capability",
      "Adaptable to your schedule",
    ],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&h=500&fit=crop",
  },
  {
    number: "03",
    title: "Mindset",
    description:
      "This is the piece most programs miss. The beliefs, patterns, and stories that keep you stuck. We address what's underneath the surface so the external changes actually hold.",
    details: [
      "Nervous system awareness",
      "Belief pattern work",
      "Self-identity coaching",
      "Stress and recovery balance",
    ],
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&h=500&fit=crop",
  },
];

export default function TheMethod() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-cream pt-20 overflow-hidden">
        <div className="text-center px-6 max-w-3xl hero-animate">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-6 text-bronze-dark font-raleway">
            The Method
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown leading-[1.1] mb-8">
            The framework behind every transformation.
          </h1>
          <p className="text-text-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Most coaches give you a plan. I give you an architecture. The
            process begins with a deep audit of how you exist in your body
            today—your movement patterns, your relationship with food, and the
            places where stress has hardened into structure. From there, we
            rebuild not toward a target weight or external metric, but toward a
            body operating at its highest level of function and coherence. This
            is not a programme with a start and finish line; it is a permanent
            shift in how you inhabit and express yourself from within.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal variant="fadeUp">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">
                The Approach
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl text-dark-brown mb-8 leading-[1.15]">
                We don't fix.
                <br />
                We build.
              </h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={200}>
              <p className="text-text-light text-sm leading-[1.9] mb-6">
                We treats transformation as an architectural feat, not an
                accident. We begin by peeling back layers of habit and
                physiology to reveal the structural integrity already within,
                mapping the body through a precise audit of biomechanics and
                metabolic markers before any change is made.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={400}>
              <p className="text-text-light text-sm leading-[1.9]">
                From there, we design a bespoke framework that fuses elite
                strength with neuro-somatic regulation, then move into
                intentional rebuilding through movement and mindset to fortify a
                new physical foundation. Finally, we integrate these practices
                until the architected self is no longer something you apply—but
                something you naturally are.
              </p>
            </Reveal>
          </div>
          <Reveal variant="fadeLeft" duration="slow">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=700&h=900&fit=crop"
                alt="Mindful movement"
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream-light">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">
              The Three Pillars
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown">
              Integrated, not isolated
            </h2>
          </Reveal>

          <div className="flex flex-col gap-24">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <Reveal
                  variant={index % 2 !== 0 ? "fadeLeft" : "fadeRight"}
                  duration="slow"
                >
                  <div
                    className={`overflow-hidden ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-[1.2s] hover:scale-105"
                    />
                  </div>
                </Reveal>
                <Reveal
                  variant="fadeUp"
                  className={index % 2 !== 0 ? "lg:order-1" : ""}
                >
                  <div>
                    <span className="text-bronze-dark text-sm tracking-widest font-raleway">
                      {pillar.number}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-dark-brown mt-2 mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-text-light text-sm leading-[1.9] mb-6">
                      {pillar.description}
                    </p>
                    <div className="flex flex-col gap-3">
                      {pillar.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-bronze shrink-0 rounded-full" />
                          <span className="text-text-light text-sm">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-sage/30 text-center overflow-hidden">
        <Reveal variant="scaleUp" duration="slow">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">
              Ready to begin?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-brown mb-8 leading-[1.15]">
              Find the right programme
            </h2>
            <Link
              to="/book-online"
              className="inline-block border border-bronze-dark text-bronze-dark text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-bronze-dark hover:text-cream transition-all duration-500 font-raleway btn-shine"
            >
              Explore Programmes
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
