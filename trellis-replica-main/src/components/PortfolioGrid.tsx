import rimImg from "@/assets/portfolio-rim.png";
import clayImg from "@/assets/portfolio-clayground.png";
import escotoImg from "@/assets/portfolio-escoto.jpg";
import trellisImg from "@/assets/portfolio-trellis.png";
import ar51Img from "@/assets/portfolio-ar51.png";

const projects = [
  { name: "RIM Manufacturing", img: rimImg },
  { name: "The Clayground", img: clayImg },
  { name: "Escoto Law", img: escotoImg },
  { name: "Trellis", img: trellisImg },
  { name: "AR-51", img: ar51Img },
];

const PortfolioGrid = () => {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Want to See More?
          </h2>
          <p className="text-primary-foreground text-lg">
            Check Out More of Our Recent Work!
          </p>
          <a
            href="#"
            className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-teal-light transition-colors"
          >
            View Our Portfolio
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href="#"
              className="group relative overflow-hidden rounded-xl block"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-primary-foreground font-semibold text-lg">
                  {project.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
