import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ServicesMegaMenu from './ServicesMegaMenu'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? 'text-brand-700 bg-brand-50' : 'text-gray-700 hover:bg-emerald-500/10'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/assets/img/1.png" alt="Zurinty logo" className="h-12 w-auto object-contain" />
          </NavLink>
          <nav className="hidden sm:flex items-center gap-1" onMouseLeave={() => setOpen(false)}>
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <NavLink to="/services" className={navLinkClass}>
                Our Services
              </NavLink>
              {open && (
                <ServicesMegaMenu onClose={() => setOpen(false)} />
              )}
            </div>
            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-gray-200 pr-6">
              <a href="mailto:mejoarwachira@gmail.com" className="flex items-center gap-2 text-[12px] font-bold text-navy-900 hover:text-emerald-600 transition">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                mejoarwachira@gmail.com
              </a>
              <a href="tel:+254743573360" className="flex items-center gap-2 text-[12px] font-bold text-navy-900 hover:text-emerald-600 transition">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +254743573360
              </a>
            </div>
            <NavLink to="/contact" className="btn btn-primary px-4 py-2 text-sm font-bold">
              Get started
            </NavLink>
          </div>
        </div>
      </div>
      <div className="sm:hidden border-t border-gray-200">
        <nav className="px-2 py-2 flex items-center justify-around">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>
            Work
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
