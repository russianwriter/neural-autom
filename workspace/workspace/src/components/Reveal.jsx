import { useEffect, useRef, useState } from 'react'

const VARIANTS = {
  up: 'reveal-up',
  fade: 'reveal-fade',
  scale: 'reveal-scale',
  left: 'reveal-left',
  right: 'reveal-right',
  blur: 'reveal-blur',
}

export default function Reveal({
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  className = '',
  children,
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  const cls = ['reveal', VARIANTS[variant] || VARIANTS.up, shown && 'is-in', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={cls} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
