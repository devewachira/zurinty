import { Phone, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-navy">
      {/* Top bar */}
      <div className="bg-navy border-b border-navy-light">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:877.514.0276" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            877.514.0276
          </a>
          <a href="mailto:info@jsl.marketing" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" />
            info@jsl.marketing
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-navy-light border-2 border-teal flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg tracking-wide">JSL</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Our Services", "Our Work", "Resources", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-light transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
