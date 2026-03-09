const fs = require('fs');
const files = [
  'src/pages/DroneReel.tsx', 'src/pages/DealerNetwork.tsx', 'src/pages/BrandSystem.tsx',
  'src/pages/PortfolioTemplate.tsx', 'src/pages/CRELandingPage.tsx', 'src/pages/SavannaCoffee.tsx',
  'src/pages/NexusTech.tsx', 'src/pages/BloomWellness.tsx', 'src/pages/PeakAdventure.tsx',
  'src/pages/CoastalRealty.tsx', 'src/pages/EmberCreative.tsx', 'src/pages/HarvestKitchen.tsx',
  'src/pages/AtlasFinancial.tsx', 'src/pages/VerdeOrganics.tsx', 'src/pages/SkylineArchitecture.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove aspect-video and object-contain from the feature grid
  const oldGrid = /<div className="rounded-\[2\.5rem\] overflow-hidden shadow-3xl bg-white transition-all duration-700 hover:scale-\[1\.01\] aspect-video">\s*<img src="\/assets\/img\/portfolio\/trellis-7\.png" alt="Feature 1" className="w-full h-full object-contain bg-gray-50" \/>\s*<\/div>\s*<div className="rounded-\[2\.5rem\] overflow-hidden shadow-3xl bg-\[#0b1b2a\] transition-all duration-700 hover:scale-\[1\.01\] aspect-video">\s*<img src="\/assets\/img\/portfolio\/trellis-8\.png" alt="Feature 2" className="w-full h-full object-contain" \/>\s*<\/div>/;
  
  const newGrid = `<div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-white transition-all duration-700 hover:scale-[1.01]">
              <img src="/assets/img/portfolio/trellis-7.png" alt="Feature 1" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-[#0b1b2a] transition-all duration-700 hover:scale-[1.01]">
              <img src="/assets/img/portfolio/trellis-8.png" alt="Feature 2" className="w-full h-auto object-cover" />
            </div>`;
  
  content = content.replace(oldGrid, newGrid);
  fs.writeFileSync(file, content);
});
console.log("Fixed feature highlights grid in all files.");
