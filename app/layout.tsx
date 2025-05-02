import type React from "react"
import "@/app/globals.css"
import { Space_Mono } from "next/font/google"

import { cn } from "@/lib/utils"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "BRAINFRIED | Digital Makers Collective",
  description:
    "A collective of innovative builders crafting exceptional digital experiences at the intersection of code and culture.",
  keywords: "digital agency, web development, design, mobile apps, user experience",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased", spaceMono.className)}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
