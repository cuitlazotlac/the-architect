import { useScrollReveal } from '../hooks/useScrollReveal'

const variants = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    hidden: 'opacity-0 -translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    hidden: 'opacity-0 translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    hidden: 'opacity-0 -translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  scaleUp: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
}

const durations = {
  fast: 'duration-500',
  normal: 'duration-700',
  slow: 'duration-1000',
}

export default function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 'normal',
  className = '',
  as: Tag = 'div',
  threshold,
}) {
  const [ref, isVisible] = useScrollReveal({ threshold })
  const v = variants[variant] || variants.fadeUp
  const d = durations[duration] || durations.normal

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${d} ${isVisible ? v.visible : v.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
