export default function WebDevelopmentProcess() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by working closely with you to understand your business goals, target audience, and unique needs. This foundational step ensures that our web development strategy aligns perfectly with your objectives.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team of expert web designers will create a custom web design that accurately represents your brand and resonates with your target audience. We focus on creating visually appealing and user-friendly designs that enhance the user experience.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our team of expert web developers brings your website to life using the latest technologies and best practices. We ensure that your website is not only visually stunning but also highly functional and optimized for performance.'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'We thoroughly test your website to ensure it is functioning properly and meets your unique needs and goals. This includes checking for responsiveness, usability, and performance across different devices and browsers.'
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Once everything is perfect, we launch your website and provide ongoing support and maintenance to ensure it continues to drive real results for your business. Our commitment to your success doesn\'t end at launch; we are here to support you every step of the way.'
    }
  ]

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 sm:py-24 text-white overflow-hidden">
      <div className="absolute inset-0 bg-slate-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h3 className="text-emerald-400 text-lg font-semibold mb-4">Web Development Process</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            At Zurinty Marketing, we follow a proven web development process that ensures your website is completed on time, within budget, and meets your unique needs and goals.
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-emerald-400 text-2xl font-bold">{step.number}</div>
                <div className="text-2xl font-bold text-emerald-400">{step.title}</div>
              </div>
              <p className="text-white/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}