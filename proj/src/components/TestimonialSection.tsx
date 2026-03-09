import { Quote } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dallas Web Design Clients Are Awesome
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A great client relationship is what turns a good project into an unforgettable one. We've been lucky enough to work with some of the most driven, creative, and passionate businesses in Dallas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-muted rounded-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground mb-6 italic">
                "We are extremely pleased with the knowledge and professionalism of the entire zuriminty group. We needed a new website and they delivered. From initial meeting to final design, the entire process was seamless. Easy to communicate with and they worked with our timeline. I highly recommend them to anyone needing marketing services."
              </p>
              <p className="font-bold text-foreground">Imperial Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
