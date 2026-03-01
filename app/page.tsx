import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "@/components/hero-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WhyUsSection } from "@/components/why-us-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { LocalAreaSection } from "@/components/local-area-section"
import { QuoteFormSection } from "@/components/quote-form-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingCallButton } from "@/components/floating-call-button"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <BeforeAfterSection />
        <QuoteFormSection />
        <ServicesSection />
        <ProcessSection />
        <WhyUsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <LocalAreaSection />
      </main>
      <SiteFooter />
      <FloatingCallButton />
      <CookieBanner />
    </>
  )
}
