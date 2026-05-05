export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative py-14 border-t border-line theme-aware">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-2xl h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-extrabold gradient-text">AD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
