import { useMemo } from 'react'

function seededValue(index, salt) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453
  return value - Math.floor(value)
}

export function SparklesCore({
  className = '',
  particleColor = '#f5a623',
  particleDensity = 80,
  minSize = 1,
  maxSize = 3,
  speed = 1,
}) {
  const particles = useMemo(
    () =>
      Array.from({ length: particleDensity }, (_, index) => ({
        id: index,
        left: `${seededValue(index, 1) * 100}%`,
        top: `${seededValue(index, 2) * 100}%`,
        size: minSize + seededValue(index, 3) * (maxSize - minSize),
        delay: `${seededValue(index, 4) * 6}s`,
        duration: `${5 / Math.max(speed, 0.2) + seededValue(index, 5) * 4}s`,
      })),
    [maxSize, minSize, particleDensity, speed],
  )

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full sparkle-dot"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            backgroundColor: particleColor,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  )
}
