import FAQ from '../components/FAQ'
import ConsultationCard from '../components/ConsultationCard'
import LeadForm from '../components/LeadForm'
import LocalImpactBanner from '../components/LocalImpactBanner'
import ImportanceSection from '../components/ImportanceSection'
import Hero from '../components/Hero'
import StatementBand from '../components/StatementBand'
import DallasWhySection from '../components/DallasWhySection'
import WhatToLookFor from '../components/WhatToLookFor'
import ServicesShowcase from '../components/ServicesShowcase'
import TailoredSection from '../components/TailoredSection'
import PartnerExpectSection from '../components/PartnerExpectSection'
import TestimonialPair from '../components/TestimonialPair'
import WorksGreatSection from '../components/WorksGreatSection'
import ImageMarquee from '../components/ImageMarquee'
import DallasTipsFullBleed from '../components/DallasTipsFullBleed'
import BenefitsWithJSL from '../components/BenefitsWithJSL'
import WebDevelopmentProcess from '../components/WebDevelopmentProcess'

export default function Home() {
  return (
    <section>
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <ImportanceSection />
        <StatementBand />
        <DallasWhySection />
        <ConsultationCard />
        <TailoredSection />
        <PartnerExpectSection />
        <TestimonialPair />
        <ServicesShowcase />
        <WorksGreatSection />

        {/* Auto-scrolling image marquee */}
        <ImageMarquee />

        {/* Full-bleed Dallas tips section */}
        <DallasTipsFullBleed />

        {/* What to look for section */}
        <WhatToLookFor />

        {/* Local impact banner moved here */}
        <LocalImpactBanner />

        {/* Benefits with JSL section */}
        <BenefitsWithJSL />

        {/* Web Development Process */}
        <WebDevelopmentProcess />

        {/* FAQ */}
        <FAQ />
      </div>
    </section>
  )
}
