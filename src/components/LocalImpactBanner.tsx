export default function LocalImpactBanner() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-16 sm:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-500" />
      {/* Background image with ~40% opacity for texture */}
      <img
        src="/proje/05f879ede9d375c10ecf4811be4f7b4ab64a9bd9-1024x791.jpg"
        alt="Background texture"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
      />
      {/* Decorative soft shapes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Left image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
          <img
            src="/proje/20190215_JSL_Photos-27-1.jpg"
            alt="Team collaborating on laptop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="text-white">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Local Start.
            <br />
            <span className="text-white">National Impact.</span>
          </h2>
          <p className="mt-4 text-emerald-50/90 max-w-2xl">
            We collaborate with exceptional teams across the country. From design to UI and UX to online marketing, our
            distributed partnerships deliver results for diverse industries and markets.
          </p>
        </div>
      </div>
    </section>
  )
}
