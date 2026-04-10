import LogoA from '../components/logos/LogoA'
import LogoB from '../components/logos/LogoB'
import LogoC from '../components/logos/LogoC'
import LogoD from '../components/logos/LogoD'
import LogoE from '../components/logos/LogoE'
import Logo from '../components/Logo'

const logos = [
  { name: 'Current', description: 'Triangle A-frame + stacked text', Component: Logo },
  { name: 'A', description: 'Minimal geometric A-frame', Component: LogoA },
  { name: 'B', description: 'Monogram "A" in circle', Component: LogoB },
  { name: 'C', description: 'Classical pillar/column motif', Component: LogoC },
  { name: 'D', description: 'Pure typographic with decorative lines', Component: LogoD },
  { name: 'E', description: 'Abstract blueprint / golden ratio', Component: LogoE },
]

export default function LogoPreview() {
  return (
    <div className="pt-28 pb-20 px-6 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl text-dark-brown mb-2">Logo Options</h1>
        <p className="text-text-light text-sm mb-12">Pick one — tell me the letter.</p>

        <div className="flex flex-col gap-12">
          {logos.map(({ name, description, Component }) => (
            <div key={name} className="border border-border/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-bronze font-serif text-lg">{name}</span>
                <span className="text-text-light text-xs">{description}</span>
              </div>

              {/* Light background */}
              <div className="bg-cream p-6 mb-4 flex items-center">
                <Component className="h-10 w-auto text-dark-brown" />
              </div>

              {/* Dark background */}
              <div className="bg-dark-brown p-6 flex items-center">
                <Component className="h-10 w-auto text-cream" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
