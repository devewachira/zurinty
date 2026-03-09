import { NavLink } from 'react-router-dom'
import { PORTFOLIO_ITEMS } from '../data/portfolio'

export default function ImageMarquee() {
  // Use a subset or all items for the marquee
  const marqueeItems = PORTFOLIO_ITEMS

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-10 sm:py-14 bg-white overflow-hidden">
      <div className="relative">
        <div className="relative overflow-hidden">
          {/* Inline keyframes for seamless RTL scroll */}
          <style>{`
            @keyframes marquee-rtl { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          `}</style>
          <div
            className="flex gap-6 sm:gap-8 w-max px-4 sm:px-6 lg:px-8 hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-rtl 60s linear infinite' }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => {
              const Card = item.link ? 'a' : NavLink
              const cardProps = item.link
                ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
                : { to: `/portfolio/${item.slug}` }

              return (
                <Card
                  key={`${item.id}-${i}`}
                  {...(cardProps as any)}
                  className="group shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 bg-gray-100 rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl block relative"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay similar to Portfolio page */}
                  <div className="absolute inset-0 bg-brand-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-bold text-center px-4">{item.title}</h3>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
