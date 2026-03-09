import { NavLink } from 'react-router-dom'
import { InlineWidget } from 'react-calendly'

export default function ConsultationCard() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-24 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/img/laptop.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/85" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="rounded-2xl bg-white overflow-hidden shadow-2xl">
            <InlineWidget
              url="https://calendly.com/mejoarwachira/consultation"
              styles={{
                height: '650px',
                minWidth: '320px'
              }}
            />
          </div>
          <div>
            <div className="uppercase tracking-widest text-emerald-400 font-semibold">Contact Us</div>
            <h3 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">Book Your Free 30 Minute Consultation</h3>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Every business is unique. We offer customized solutions aligned to your needs—launching new sites or redesigns with performance, accessibility, and SEO baked in.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink to="/contact" className="rounded-full bg-emerald-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-emerald-600 transition transform hover:-translate-y-1">
                More Ways to Connect
              </NavLink>
              <a href="tel:+254743573360" className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/20 transition">
                Call Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
