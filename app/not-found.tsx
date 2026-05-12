import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20">
        <h1 className="font-serif text-6xl font-semibold mb-4">404</h1>
        <p className="text-muted-foreground text-lg mb-8">
          This page could not be found.
        </p>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <Footer />
    </main>
  )
}
