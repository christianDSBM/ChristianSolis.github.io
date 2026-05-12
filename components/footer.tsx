export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-xs">
            Built with care. Thinks deeply, explains clearly.
          </p>
        </div>
      </div>
    </footer>
  )
}
