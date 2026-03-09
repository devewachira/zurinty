import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-hero-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-4">
              <span className="text-primary font-bold text-xl">zuriminty</span>
            </div>
            <p className="text-white/70">
              Dallas TX based digital marketing and web development that does what it's supposed to.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-white/70 hover:text-primary transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-white/70">Website Design</li>
              <li className="text-white/70">Brand Development</li>
              <li className="text-white/70">SEO Strategy</li>
              <li className="text-white/70">Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:877-914-0276" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  877-914-0276
                </a>
              </li>
              <li>
                <a href="mailto:info@zuriminty.com" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  info@zuriminty.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Dallas, TX 75201</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} zuriminty. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
