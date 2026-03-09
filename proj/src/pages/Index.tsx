import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImportanceSection } from "@/components/ImportanceSection";
import { ApproachSection } from "@/components/ApproachSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { StatsSection } from "@/components/StatsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImportanceSection />
      <ApproachSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
