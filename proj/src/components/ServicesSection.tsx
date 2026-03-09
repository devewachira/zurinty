import { Monitor, Megaphone, Search, FileText, TrendingUp, Camera } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Design & Development",
      description: "Your web design is the first impression for your online customers, make sure it is a good one.",
    },
    {
      icon: Megaphone,
      title: "Brand Development",
      description: "From logos, branded material, messaging, and more, building a cohesive brand is critically important.",
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "SEO is the foundation of every digital marketing or website design plan, and we can help create a strategy.",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Content is king and putting out valuable, consistent content is paramount in representing your brand.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "From advertising to lead generation, having a solid digital marketing plan in place is critical to online success.",
    },
    {
      icon: Camera,
      title: "Photography & Video Production",
      description: "zuriminty is dedicated to bringing your vision to life through compelling and industry specific visual media.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Our Specialties
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Here's a Look at Some of Our Most Popular Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-foreground mb-4">
            Impressed? There's More Where That Came from.
          </p>
          <p className="text-muted-foreground text-lg mb-6 max-w-3xl mx-auto">
            These are just a few of our most frequently utilized services, but we specialize in everything from the creative to the analytical. Whether you need Web Design, SEO, Brand Development, or Content Marketing, zuriminty always has your back.
          </p>
        </div>
      </div>
    </section>
  );
};
