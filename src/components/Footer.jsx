export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative py-14 border-t border-base-700/30">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-2xl h-px bg-gradient-to-r from-transparent via-base-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-extrabold gradient-text">AD</span>
            <span className="text-xs text-base-400">|</span>
            <p className="text-xs text-base-300">
              &copy; {year} Amogh Dey
            </p>
          </div>
          <p className="text-xs text-base-400">
            Designed & crafted with precision
          </p>
        </div>
      </div>
    </footer>
  )
}
