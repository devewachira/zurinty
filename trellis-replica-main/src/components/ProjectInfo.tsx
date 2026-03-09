const ProjectInfo = () => {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-muted-foreground text-lg leading-relaxed mb-12 text-center">
          Trellis is a Business Resource Planning (BRP) system—a dynamic, connected platform that helps small businesses organize their people, processes, and priorities in one place. It's designed to deliver high-quality operational clarity to growing teams, without the cost of a seasoned executive or the complexity of enterprise software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-2">
              Headquarters
            </h3>
            <p className="text-primary-foreground text-base">Muskegon, Michigan</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-2">
              Industry
            </h3>
            <p className="text-primary-foreground text-base">
              Software, Information Technology, Business and Finance
            </p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-2">
              Services Provided
            </h3>
            <p className="text-primary-foreground text-base">
              Website Design & Development
            </p>
            <p className="text-primary-foreground text-base">Brand Collateral</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
