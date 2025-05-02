import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="text-center md:text-left">
          <div className="text-lg font-bold">BRAINFRIED</div>
          <div className="text-sm text-gray-500 font-mono">© {new Date().getFullYear()} // digital_makers</div>
        </div>
        <nav aria-label="Footer Navigation" className="flex flex-col sm:flex-row justify-center gap-6 md:justify-end">
          <Link
            href="/terms"
            className="text-sm text-gray-500 hover:underline font-mono focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Terms and Conditions"
          >
            _terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-500 hover:underline font-mono focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Privacy Policy"
          >
            _privacy
          </Link>
          <Link
            href="/#about"
            className="text-sm text-gray-500 hover:underline font-mono focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="About Us"
          >
            _about
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-gray-500 hover:underline font-mono focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Contact Us"
          >
            _contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
