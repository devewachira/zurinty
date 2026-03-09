import { NavLink } from 'react-router-dom'

export default function ServicesShowcase() {
  const services = [
    {
      title: 'Website Design & Development',
      description: 'Your web design is the first impression for your online customers, make sure it is a good one.',
      icon: '/proje/allan_svg_1.svg'
    },
    {
      title: 'Brand Development', 
      description: 'From logos, branded material, messaging, and more, building a cohesive brand is critically important.',
      icon: '/proje/megaphone.svg'
    },
    {
      title: 'Search Engine Optimization',
      description: 'SEO is the foundation of every digital marketing or website design plan, and we can help create a strategy.',
      icon: '/proje/magniglass.svg'
    },
    {
      title: 'Content Marketing',
      description: 'Content is king and putting out valuable, consistent content is paramount in representing your brand and your website.',
      icon: '/proje/allan_svg_2.svg'
    },
    {
      title: 'Digital Marketing',
      description: 'From advertising to lead generation, having a solid digital marketing plan in place is critical to online success.',
      icon: '/proje/digital.svg'
    },
    {
      title: 'Photography & Video Production',
      description: 'Zurinty is dedicated to bringing your vision to life through compelling and industry specific visual media.',
      icon: '/proje/camera.svg'
    }
  ]
  
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0f1630] py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm uppercase tracking-widest text-green-500 mb-4">Our Specialties</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Here's a Look at Some of Our Most Popular Services at Zurinty Marketing & Web Design in Nairobi, Kenya
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 auto-rows-auto items-start">
          {services.map((service) => (
            <div key={service.title} className="p-6 h-full">
              <img 
                src={service.icon} 
                alt={service.title} 
                className="w-12 h-12 mb-4"
                style={{filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'}}
              />
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
          
          {/* Green CTA Card */}
          <div className="relative overflow-hidden rounded-2xl p-8 lg:p-10 text-white bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 ring-1 ring-emerald-300/30 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.6)] sm:col-span-2 lg:col-start-3 lg:col-span-2">
            {/* decorative glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" aria-hidden />

            <h3 className="text-2xl font-bold mb-3 drop-shadow-sm">
              Impressed? There's More Where That Came from.
            </h3>
            <p className="mb-6 leading-relaxed text-emerald-50/90">
              These are just a few of our most frequently utilized services, but we specialize in everything from the creative to the analytical. Whether you need Web Design, SEO, Brand Development, or Content Marketing, Zurinty always has your back.
            </p>

            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-900/20 ring-1 ring-white/20 transition-colors duration-200 ease-out hover:bg-emerald-600 hover:shadow-emerald-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-600"
            >
              More Zurinty Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M3.75 12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H4.5A.75.75 0 0 1 3.75 12Z" clipRule="evenodd" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}
