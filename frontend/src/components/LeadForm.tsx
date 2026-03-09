export default function LeadForm() {
  return (
    <section className="mt-16">
      <div className="rounded-2xl border bg-white p-6">
        <h3 className="text-2xl font-bold tracking-tight text-center">Take the First Step To Partner With The Last Nairobi Marketing Agency You’ll Ever Need</h3>
        <form className="mt-8 grid gap-4 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="border rounded px-4 py-3" placeholder="First name" />
            <input className="border rounded px-4 py-3" placeholder="Last name" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="email" className="border rounded px-4 py-3" placeholder="Email" />
            <input className="border rounded px-4 py-3" placeholder="Company" />
          </div>
          <div className="grid sm:grid-cols-3 gap-2">
            {['Website', 'Branding', 'SEO', 'Content', 'Ecommerce', 'Other'].map((t) => (
              <button key={t} type="button" className="px-3 py-2 rounded border text-sm hover:bg-gray-50">{t}</button>
            ))}
          </div>
          <textarea className="border rounded px-4 py-3" rows={5} placeholder="Tell us about your goals" />
          <div className="text-center">
            <button className="btn btn-primary px-6 py-3" type="submit">Get in touch</button>
          </div>
        </form>
      </div>
    </section>
  )
}
