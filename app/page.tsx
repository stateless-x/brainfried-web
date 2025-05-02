"use client"

import { CustomCursorSimple } from "@/components/custom-cursor-simple"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/home/about-section"
import { ContactSection } from "@/components/home/contact-section"
import { ExpertiseSection } from "@/components/home/expertise-section"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { TeamSection } from "@/components/home/team-section"
import { WorkSection } from "@/components/home/work-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <CustomCursorSimple />
      <Header />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExpertiseSection />
        <WorkSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
