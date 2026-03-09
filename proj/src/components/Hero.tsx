import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-bg overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-hero-bg via-dark-bg to-hero-bg opacity-95 z-10" />
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-32 mt-20">
        <div className="max-w-4xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Digital Marketing & Web Design Dallas TX
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Marketing &<br />
            Web Development<br />
            Solutions That Work.
          </h1>
          <p className="text-xl text-primary mb-8 max-w-2xl">
            Dallas TX based digital marketing and web development that does what it's supposed to.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              Hire Us!
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-hero-bg">
              Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
