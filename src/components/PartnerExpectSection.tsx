import { NavLink } from 'react-router-dom'

export default function PartnerExpectSection() {
  return (
    <>
      {/* Main Content Section with StatementBand full bleed structure */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-50 py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/proje/20190215_JSL_Photos-27-1.jpg" 
                alt="Team collaboration meeting" 
                className="w-full rounded-2xl object-cover aspect-[4/3]" 
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-green-600 mb-8">
                When Partnering With Zurinty Marketing, You Can Expect:
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>A custom web design that captures your brand's essence and appeals to your target audience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>A website optimized for search engines, ensuring higher visibility and better rankings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>A comprehensive web development strategy that supports your digital marketing objectives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Ongoing support and maintenance to keep your website performing at its best</span>
                </li>
              </ul>
              
              <p className="mt-6 text-gray-600 leading-relaxed">
                At zurinty Marketing, we're passionate about helping businesses thrive in the digital landscape. Our proven digital marketing solutions are tailored to drive real results, from increasing website traffic to generating leads and driving sales.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section - Same width as content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-green-500 rounded-3xl py-8 px-8 sm:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between text-white">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold">
                Ready to learn more about our web development services and how we can enhance your online marketing game?
              </h3>
            </div>
            <div className="flex-shrink-0">
              <NavLink 
                to="/contact" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-full font-semibold transition-colors duration-200"
              >
                Get in Touch
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
