import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CustomCursorSimple } from "@/components/custom-cursor-simple"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-sm">
          <p className="text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Privacy: It's Actually Important</h2>
            <p>
              At Brainfried, we take privacy seriously, but we also believe you shouldn't need a legal dictionary to
              understand how we handle your data. Here's our privacy policy in plain human language.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">Data We Collect</h3>
            <p>
              We collect the information you give us (like your name and email) and some basic analytics about how you
              use our site (but nothing creepy). We don't sell your data because that's just not cool.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">How We Use Your Data</h3>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Respond to your messages (hard to reply if we don't have your email)</li>
              <li>Make our website better (fixing things that confuse visitors)</li>
              <li>Occasionally send you updates if you've opted in (we hate spam too)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">Cookies & Tracking</h3>
            <p>
              Yes, we use cookies, but they're the helpful kind that make websites work better, not the stalker kind
              that follow you around the internet. You can disable them in your browser if you want, though some
              features might look a bit weird.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">Your Rights</h3>
            <p>
              You can ask us what data we have about you, request changes, or ask us to delete it all. We're not data
              hoarders—just email us at askpurin@pm.me and we'll take care of it.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">Security</h3>
            <p>
              We do our best to keep your data secure with modern security practices. No system is 100% secure (if
              someone tells you otherwise, they're selling something), but we take reasonable precautions to protect
              your information.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-2">In Conclusion</h3>
            <p>
              We treat your data the way we'd want our own data treated. If you have questions about any of this, just
              reach out. We're actual humans who will respond.
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
