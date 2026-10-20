export function LogoMark({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="8"
        width="11"
        height="6.5"
        rx="2.2"
        fill="currentColor"
        transform="rotate(-35 8 11.25)"
      />
      <rect
        x="10"
        y="9.5"
        width="11"
        height="6.5"
        rx="2.2"
        fill="currentColor"
        transform="rotate(-35 15.5 12.75)"
      />
    </svg>
  )
}

export function GridDots({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="1.15" fill="currentColor" />
      <circle cx="9" cy="3" r="1.15" fill="currentColor" />
      <circle cx="3" cy="9" r="1.15" fill="currentColor" />
      <circle cx="9" cy="9" r="1.15" fill="currentColor" />
    </svg>
  )
}
