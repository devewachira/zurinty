export default function StatementBand() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-24 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/img/laptop.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/85" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-brand-300">Our Approach To Web Development</p>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight max-w-4xl">
          At Zurinty, we understand that every business is unique, with its own set of goals, target audience, and online marketing needs.
        </h2>
        <p className="mt-6 text-brand-300 text-lg max-w-3xl">
          That’s why we take a tailored approach to web development, ensuring that our solutions are customized to meet the specific requirements of each client.
        </p>
      </div>
    </section>
  )
}
