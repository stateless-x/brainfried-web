import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold tracking-tighter" aria-label="Brainfried Home">
          BRAINFRIED
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 lg:flex" aria-label="Main Navigation">
          <Link
            href="/#about"
            className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="About Section"
          >
            _about
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Services Section"
          >
            _services
          </Link>
          <Link
            href="/#work"
            className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Work Section"
          >
            _work
          </Link>
          <Link
            href="/#team"
            className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Team Section"
          >
            _team
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Contact Section"
          >
            _contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open Menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <div className="flex flex-col gap-6 pt-10">
              <Link
                href="/#about"
                className="text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                _about
              </Link>
              <Link
                href="/#services"
                className="text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                _services
              </Link>
              <Link
                href="/#work"
                className="text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                _work
              </Link>
              <Link
                href="/#team"
                className="text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                _team
              </Link>
              <Link
                href="/#contact"
                className="text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                _contact
              </Link>
              <div className="mt-auto pt-4">
                <Link
                  href="/terms"
                  className="text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  _terms & policy
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Button
          variant="outline"
          size="sm"
          className="hidden lg:inline-flex focus:ring-2 focus:ring-black focus:ring-offset-2"
          aria-label="Connect with us"
        >
          <span className="font-mono">connect()</span>
        </Button>
      </div>
    </header>
  )
}
