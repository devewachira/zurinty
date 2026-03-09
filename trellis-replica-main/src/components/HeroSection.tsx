import trellisImg from "@/assets/trellis-macbook.png";

const HeroSection = () => {
  return (
    <section className="bg-navy py-16 md:py-24 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-12 tracking-tight">
          Trellis
        </h1>
        <img
          src={trellisImg}
          alt="Trellis website displayed on a MacBook Pro"
          className="w-full max-w-4xl mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
