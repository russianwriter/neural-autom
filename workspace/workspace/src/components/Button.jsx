import { ArrowRight } from 'lucide-react'

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon = ArrowRight,
  external,
  className = '',
  children,
  disabled,
  loading,
  type,
  ...rest
}) {
  const Tag = href ? 'a' : 'button'
  const isExternal =
    external || (href && /^https?:/i.test(href))
  const classes = ['nk-btn', `nk-btn-${variant}`, `nk-btn-${size}`, className]
    .filter(Boolean)
    .join(' ')

  const extra = {}
  if (href && isExternal) {
    extra.target = '_blank'
    extra.rel = 'noopener noreferrer'
  }
  if (!href) {
    extra.type = type || 'button'
    extra.disabled = disabled || loading
  }

  return (
    <Tag
      className={classes}
      href={href}
      aria-busy={loading || undefined}
      {...extra}
      {...rest}
    >
      <span className="nk-btn-roll">
        <span className="nk-btn-roll-inner">
          <span className="nk-btn-line">{children}</span>
          <span className="nk-btn-line" aria-hidden="true">
            {children}
          </span>
        </span>
      </span>
      <span className="nk-btn-icon" aria-hidden="true">
        <Icon size={14} strokeWidth={2.2} />
      </span>
    </Tag>
  )
}
