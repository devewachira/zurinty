import { Button } from "@/components/ui/button";

export const ApproachSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Web development approach"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Our Approach To Web Development
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              At zuriminty, we understand that every business is unique.
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              That's why we take a tailored approach to web development, ensuring that our solutions are customized to meet the specific requirements of each client.
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Understanding the critical role of web design in the Dallas market and how it impacts your business success.
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Professional design in today's digital marketing age cannot be overstated. We understand that in most cases, it is the first point of contact between your business and potential customers.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Learn More With zuriminty Resources!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
