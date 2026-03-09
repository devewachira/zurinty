import quoteIcon from "@/assets/quote.svg";

const TestimonialSection = () => {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <img src={quoteIcon} alt="" className="w-12 h-12 mx-auto mb-8 opacity-60" />
        <blockquote className="text-primary-foreground text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
          "JSL made the process so smooth—listening to my feedback and creating a website that truly represents The Clayground's vibe. The booking integration works perfectly, and the design is exactly what I envisioned!"
        </blockquote>
        <p className="text-primary font-bold text-lg">STEPHANIE S.</p>
        <p className="text-muted-foreground text-sm mt-1">Owner of The Clayground</p>
      </div>
    </section>
  );
};

export default TestimonialSection;
