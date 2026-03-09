const fs = require('fs');
const files = [
  'src/pages/DroneReel.tsx', 'src/pages/DealerNetwork.tsx', 'src/pages/BrandSystem.tsx',
  'src/pages/PortfolioTemplate.tsx', 'src/pages/CRELandingPage.tsx', 'src/pages/SavannaCoffee.tsx',
  'src/pages/NexusTech.tsx', 'src/pages/BloomWellness.tsx', 'src/pages/PeakAdventure.tsx',
  'src/pages/CoastalRealty.tsx', 'src/pages/EmberCreative.tsx', 'src/pages/HarvestKitchen.tsx',
  'src/pages/AtlasFinancial.tsx', 'src/pages/VerdeOrganics.tsx', 'src/pages/SkylineArchitecture.tsx'
];

const fullBody = "Trellis came to JSL with established brand standards featuring a bold color palette and dynamic gradients—elements that immediately sparked our creative interest. However, their identity guidelines had not yet been applied to any printed materials, and their website wasn'\''t fully capturing the intended aesthetic or meeting marketing expectations.\\n\\nWe believe a business card serves as a company'\''s physical identity—it creates a memorable first impression and reinforces credibility beyond the digital space. Our team agreed that a thoughtfully designed card was key to supporting Trellis'\''s goals. We chose a clean, vertical layout that highlighted Trellis'\''s core brand elements—fonts, gradients, and contrast—resulting in a simple yet striking design that conveys both modernity and creativity.";

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Update the Translating Brand Identity section
  const sectionRegex = /<ContentSection\s+title="Translating Brand Identity into Tangible Design"[\s\S]*?centered={true}\s*\/>/;
  const newSection = `<ContentSection
        title="Translating Brand Identity into Tangible Design"
        body="${fullBody}"
        images={["/assets/img/portfolio/trellis-4.png"]}
        centered={true}
      />`;
  
  content = content.replace(sectionRegex, newSection);
  fs.writeFileSync(file, content);
});
console.log("Updated all files with full text for the Brand Identity section.");
