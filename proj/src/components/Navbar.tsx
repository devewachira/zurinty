import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "Resources", href: "#resources" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero-bg/95 backdrop-blur-sm border-b border-white/10">
      {/* Top bar */}
      <div className="bg-hero-bg border-b border-white/5">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end gap-6 text-sm text-white/80">
            <a href="tel:877-914-0276" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              877-914-0276
            </a>
            <a href="mailto:info@zuriminty.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              info@zuriminty.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-bold text-xl">zuriminty</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
