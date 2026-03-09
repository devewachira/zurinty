const fs = require('fs');
const files = [
  'src/pages/DroneReel.tsx', 'src/pages/DealerNetwork.tsx', 'src/pages/BrandSystem.tsx',
  'src/pages/PortfolioTemplate.tsx', 'src/pages/CRELandingPage.tsx', 'src/pages/SavannaCoffee.tsx',
  'src/pages/NexusTech.tsx', 'src/pages/BloomWellness.tsx', 'src/pages/PeakAdventure.tsx',
  'src/pages/CoastalRealty.tsx', 'src/pages/EmberCreative.tsx', 'src/pages/HarvestKitchen.tsx',
  'src/pages/AtlasFinancial.tsx', 'src/pages/VerdeOrganics.tsx', 'src/pages/SkylineArchitecture.tsx'
];

const fullBody = "The new Trellis website features a dark-themed layout illuminated by vibrant flares of color—reminiscent of the northern lights in a night sky—that evoke a sense of technology and wonder. Dynamic patterns of orange, blue, and green 3D waves add visual consistency and guide visitors through a cohesive narrative. Key information is presented in sleek, semi-opaque floating boxes, occasionally enhanced with imagery or icons to strengthen the message and improve clarity. Together, these elements create a visually captivating and immersive digital experience that reflects Trellis'\''s innovative and modern identity.";

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Update the Trellis Digital Experience section
  const sectionRegex = /<ContentSection\s+title="The Trellis Digital Experience"[\s\S]*?centered={true}\s*\/>/;
  const newSection = `<ContentSection
        title="The Trellis Digital Experience"
        body="${fullBody}"
        images={["/assets/img/portfolio/trellis-5.png"]}
        centered={true}
      />`;
  
  content = content.replace(sectionRegex, newSection);
  fs.writeFileSync(file, content);
});
console.log("Updated all files with full text for the Digital Experience section.");
