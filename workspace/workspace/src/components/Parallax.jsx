import { useEffect, useRef } from 'react'

export default function Parallax({ speed = 0.08, className = '', children }) {
  const wrapRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = window.matchMedia('(max-width: 639px)').matches
    if (reduce || mobile) return

    let raf = 0
    const update = () => {
      const rect = wrap.getBoundingClientRect()
      const elCenter = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      inner.style.transform = `translateY(${(elCenter - viewCenter) * speed}px) scale(1.1)`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return (
    <div className={`parallax ${className}`.trim()} ref={wrapRef}>
      <div className="parallax-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  )
}
