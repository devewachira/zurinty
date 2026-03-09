export default function DallasTipsFullBleed() {
  const Card = ({ stat, text }: { stat: string; text: string }) => (
    <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
      <div className="flex items-center gap-4">
        <div className="text-4xl sm:text-5xl font-extrabold text-emerald-600 leading-none">{stat}</div>
        <p className="text-sm sm:text-base text-gray-700 leading-snug">{text}</p>
      </div>
    </div>
  )

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-600 tracking-tight">
              Nairobi Website Design Tips in 2025
            </h2>
            <p className="mt-6 text-gray-700 max-w-2xl">
              In 2025, businesses in the Nairobi area can leverage innovative strategies and
              techniques to enhance their website design and maximize their impact in the competitive digital
              landscape.
            </p>
            <p className="mt-4 text-gray-700 max-w-3xl">
              One key aspect is prioritizing user experience (UX) and usability. Ensuring that your website is
              intuitive to navigate, visually appealing, and responsive across devices is paramount for engaging
              visitors and keeping them on your site longer.
            </p>
          </div>
          <div className="space-y-4">
            <Card stat="80%" text="The Nairobi area contains more than 80% of businesses who have invested in professional website design." />
            <Card stat="10K" text="Nairobi-based website design agencies have created over ten thousand successful websites for local businesses." />
            <Card stat="40%" text="Nairobi-designed professional websites experience an average increase in user engagement by forty percent." />
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div className="space-y-4 max-w-xl">
            <Card stat="95%" text="Approximately 95% of users consider the design of a website crucial to their trust in a business." />
            <Card stat="25%" text="Nairobi has witnessed a growth of 25% in the demand for responsive web design services over the past year." />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Effective website design in 2025 requires a strategic approach that prioritizes user experience,
              embraces innovation, and leverages the expertise of experienced professionals.
            </h3>
            <p className="mt-4 text-gray-700">
              By focusing on website architecture, navigation, performance optimization, and creative design elements,
              businesses can create compelling online experiences that resonate with their audience and drive meaningful
              results. Investing in professional website design and maintenance services is essential for staying ahead
              of the curve and achieving digital success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}