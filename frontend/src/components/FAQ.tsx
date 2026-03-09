import { useState } from 'react'

export type FAQItem = { q: string; a: string }

const DEFAULTS: FAQItem[] = [
  { q: 'What Does the Website Design Process Consist of and How Long Does it Take?', a: 'Our process is designed for smooth delivery. Because all projects are customized, duration varies with scope, feedback, and approvals. Generally, projects take a few weeks to a few months.' },
  { q: 'What are some popular platforms for building websites?', a: 'WordPress, Shopify, and Webflow are common choices. We help you select the platform that best fits your goals, integrations, and budget.' },
  { q: 'How can I incorporate my brand identity into my website design?', a: 'Use consistent colors and typography, place your logo strategically, match imagery and tone to your brand, highlight your story, and keep styles consistent site‑wide.' },
]

export default function FAQ({ items = DEFAULTS }: { items?: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="mt-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-600">Frequently Asked Questions</h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <div key={it.q} className="">
            <button
              className="w-full text-left pb-3 border-b border-gray-200/70 flex items-center justify-between group"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{it.q}</span>
              <svg
                className={`ml-4 h-4 w-4 transform transition-transform duration-200 ${open === i ? 'rotate-180 text-emerald-500' : 'rotate-0 text-gray-400 group-hover:text-emerald-500'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </button>
            <div className={`${open === i ? 'mt-4' : 'h-0 overflow-hidden'} text-gray-700`}> 
              {open === i && <p className="leading-relaxed">{it.a}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
