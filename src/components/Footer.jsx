export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative py-12 border-t border-cream-500/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-charcoal-400">
          &copy; {year} Amogh Dey. All rights reserved.
        </p>
        <p className="text-xs text-charcoal-300">
          Designed & built with precision.
        </p>
      </div>
    </footer>
  )
}
