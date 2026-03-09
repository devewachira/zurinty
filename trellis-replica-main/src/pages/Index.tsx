import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectInfo from "@/components/ProjectInfo";
import ImageShowcase from "@/components/ImageShowcase";
import ContentSection from "@/components/ContentSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/Footer";

import trellis4 from "@/assets/trellis-4.png";
import trellis5 from "@/assets/trellis-5.png";
import trellis6 from "@/assets/trellis-6.png";
import trellis7 from "@/assets/trellis-7.png";
import trellis8 from "@/assets/trellis-8.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <HeroSection />
      <ProjectInfo />
      <ImageShowcase />

      <ContentSection
        title="Translating Brand Identity into Tangible Design"
        body="Trellis came to JSL with established brand standards featuring a bold color palette and dynamic gradients—elements that immediately sparked our creative interest. However, their identity guidelines had not yet been applied to any printed materials, and their website wasn't fully capturing the intended aesthetic or meeting marketing expectations. We chose a clean, vertical layout that highlighted Trellis's core brand elements—fonts, gradients, and contrast—resulting in a simple yet striking design that conveys both modernity and creativity."
        images={[trellis4]}
      />

      <ContentSection
        title="The Trellis Digital Experience"
        body="The new Trellis website features a dark-themed layout illuminated by vibrant flares of color—reminiscent of the northern lights in a night sky—that evoke a sense of technology and wonder. Dynamic patterns of orange, blue, and green 3D waves add visual consistency and guide visitors through a cohesive narrative. Key information is presented in sleek, semi-opaque floating boxes, occasionally enhanced with imagery or icons to strengthen the message and improve clarity."
        images={[trellis5]}
      />

      <ContentSection
        title="Balancing Aesthetics and Usability"
        body="The motion and scrolling effects integrated into the live Trellis site play a key role in delivering the seamless online experience the design set out to achieve. Subtle movement and dynamic color enhancements draw the user's attention, making their journey through the site both engaging and enjoyable. At JSL, usability and functionality are just as important as aesthetics, so ensuring that navigation remained intuitive, efficient, and fully responsive across all devices was essential."
        images={[trellis6, trellis7]}
        columns={2}
      />

      <TestimonialSection />
      <CtaSection />
      <PortfolioGrid />
      <Footer />
    </div>
  );
};

export default Index;
