import CTA from '../components/CTA'

const faqs = [
  { q: 'Do I need to switch my accounting software?', a: 'No. Kira works alongside SQL Account, AutoCount, Xero, Bukku, Cynco, and others. We\'re the analytics layer on top.' },
  { q: 'Is my data safe?', a: 'Yes. PDPA-compliant, encrypted in transit and at rest, never sold or shared with third parties.' },
  { q: 'How accurate are the forecasts?', a: 'Honestly, it depends on your data. Most F&B businesses have enough sales history for useful weekly forecasts within their first month on Kira. We\'ll publish benchmarks once we have real customer data to back them up.' },
  { q: 'Do I need to be technical?', a: 'No. If you can use WhatsApp, you can use Kira.' },
  { q: 'Is there a free trial?', a: 'Yes. Beta users get 6 months free in exchange for feedback and a few short interviews.' },
  { q: 'When can I get access?', a: 'Private beta opens in early 2026. Join the waitlist for priority access — we\'re prioritising Klang Valley, Penang, JB, and Kota Kinabalu first.' },
  { q: 'Do you support [my accounting software]?', a: 'CSV upload supports any system that exports a transaction file. Direct API integration is starting with SQL Account and AutoCount, with more on the roadmap.' },
  { q: 'How is Kira different from Cynco, Xero, or SQL Account?', a: 'Those tools record and report what already happened. Kira predicts what\'s going to happen next, with explanations. They cover bookkeeping. We cover decisions.' },
]

export default function FAQ() {
  return (
    <>
      <section className="py-section-v-pad-mobile md:py-section-v-pad-desktop mt-16">
        <div className="max-w-[800px] mx-auto px-lg">
          <div className="mb-2xl text-left">
            <span className="font-body-lg text-body-lg text-amber-700 font-semibold block mb-sm">FAQ</span>
            <h2 className="font-h2-desktop text-h2-desktop text-text-strong">Questions, answered.</h2>
          </div>
          <div className="flex flex-col">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="group py-lg border-b border-border" open={i === 0 || undefined}>
                <summary className="flex justify-between items-center cursor-pointer font-body-lg text-body-lg font-semibold text-text-strong group-hover:text-primary transition-colors">
                  <span>{q}</span>
                  <span className="material-symbols-outlined text-text-muted transition-transform duration-300 faq-icon">expand_more</span>
                </summary>
                <p className="mt-md font-body text-body text-text-body leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
