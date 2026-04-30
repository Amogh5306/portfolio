import { forwardRef, useState } from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function LiquidButton({ className = '', children, type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={cn(
        'group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full px-10 text-sm font-bold text-white shadow-xl shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-coral-500 to-amber-400" />
      <span className="absolute inset-px rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}

export const MetalButton = forwardRef(function MetalButton(
  { children, className = '', type = 'button', variant = 'default', ...props },
  ref,
) {
  const [isPressed, setIsPressed] = useState(false)
  const isPrimary = variant === 'primary'

  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border px-8 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
        isPrimary
          ? 'border-amber-500/40 bg-amber-500 text-white shadow-lg shadow-amber-500/20'
          : 'border-line bg-card/70 text-ink backdrop-blur-md hover:border-line-hover hover:bg-card-hover',
        isPressed ? 'translate-y-0.5 scale-[0.99]' : 'hover:-translate-y-0.5',
        className,
      )}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-40" />
      <span className="relative z-10">{children}</span>
    </button>
  )
})
