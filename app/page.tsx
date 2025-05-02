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
import { checkSiteAvailability, MAIN_SITE, SUB_SITE } from "@/lib/utils"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function Home() {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  
  // Skip redirect logic for localhost and development
  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1')
  if (isLocalhost) {
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
  
  // Check if we're on the sub-site
  const isSubSite = host.includes('brainfried.site')
  
  // If we're on the main site, check its availability
  if (!isSubSite) {
    const isMainSiteAvailable = await checkSiteAvailability(MAIN_SITE)
    if (!isMainSiteAvailable) {
      redirect(SUB_SITE)
    }
  }

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
