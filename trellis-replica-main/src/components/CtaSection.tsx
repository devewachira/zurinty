import teamImg from "@/assets/team-cta.png";

const CtaSection = () => {
  return (
    <section className="bg-navy-light py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
          src={teamImg}
          alt="JSL Marketing Team"
          className="w-full rounded-xl"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Own Project?
          </h2>
          <p className="text-primary-foreground text-lg font-medium mb-2">
            We Are Ready and Waiting to Update, Polish, and Shine Your Website!
          </p>
          <p className="text-muted-foreground text-base mb-8">
            We love a challenge and making the digital world more functional and beautiful.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-teal-light transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
