import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CustomCursorSimple } from "@/components/custom-cursor-simple"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <CustomCursorSimple />
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter" aria-label="Brainfried Home">
            BRAINFRIED
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link href="/" aria-label="Back to Homepage">
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main id="main-content" className="flex-1 container max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>

        <div className="prose prose-sm">
          <p className="text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">The Legal Stuff (That We Actually Read)</h2>
            <p>
              Welcome to the Brainfried terms and conditions, written in actual human language because we believe legal
              documents shouldn't require a law degree to understand.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">What We Promise</h3>
            <p>
              We'll build you cool digital stuff that works. We'll communicate clearly, meet our deadlines (unless
              something truly catastrophic happens), and respect your feedback.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">What You Promise</h3>
            <p>
              You'll provide feedback in a timely manner, pay us as agreed (we like eating food and having electricity),
              and not ask us to do anything illegal or morally questionable.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">Intellectual Property</h3>
            <p>
              Once you've paid in full, the stuff we make for you belongs to you. We might showcase it in our portfolio,
              but we won't sell it to someone else or claim it's ours. If we use any third-party assets (like stock
              photos), we'll make sure you have the proper licenses.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">Cancellations & Refunds</h3>
            <p>
              If you need to cancel a project, we get it—things happen. We'll bill you for the work completed so far. If
              we need to cancel (which would be rare and for a good reason), we'll help you find another team and
              transfer all work completed.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">The "Stuff Happens" Clause</h3>
            <p>
              If meteors hit the earth, zombies rise, or other force majeure events occur, we might need to adjust
              timelines or deliverables. We'll communicate openly if anything like this happens (though probably not
              zombies).
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">In Conclusion</h3>
            <p>
              We're here to make cool things with nice people. These terms exist to protect both of us, but our
              relationship is built on communication and mutual respect. If something's not working, let's talk about it
              like humans.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/">Back to Homepage</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
