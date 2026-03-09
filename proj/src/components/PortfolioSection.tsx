export const PortfolioSection = () => {
  const projects = [
    {
      name: "Weatheread Johnson Realty",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Presa Solutions",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dallas Truck Parking",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "AR-51",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "RIM Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "The Clayground",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-muted" id="work">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dallas TX Website Design That Doesn't Just Look Good, It Works Great.
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            In Dallas TX, at zuriminty, our dedication to crafting tailor-made web design services that are exclusively yours sets us apart as Dallas' top web design company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/90 via-hero-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <p className="text-primary text-sm">View Project →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
