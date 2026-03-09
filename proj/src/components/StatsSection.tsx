export const StatsSection = () => {
  const stats = [
    {
      number: "80%",
      description: "The Dallas area contains more than 80% of businesses who have invested in professional website design.",
    },
    {
      number: "10K",
      description: "Dallas-based website design agencies have created over ten thousand successful websites for local businesses.",
    },
    {
      number: "40%",
      description: "Dallas designed professional websites experience an average increase in user engagement by forty percent.",
    },
    {
      number: "95%",
      description: "Approximately 95% of users consider the design of a website crucial to their trust in a business.",
    },
    {
      number: "25%",
      description: "Dallas has witnessed a growth of 25% in the demand for responsive web design services over the past year.",
    },
  ];

  return (
    <section className="py-20 bg-hero-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dallas Website Design Tips in 2025
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            In 2025, businesses in the Dallas-Fort Worth (DFW) area can leverage innovative strategies and techniques to enhance their website design and maximize their impact in the competitive digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-primary hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                {stat.number}
              </div>
              <p className="text-white/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
