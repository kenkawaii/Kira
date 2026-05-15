import CTA from '../components/CTA'

export default function Why() {
  return (
    <>
      <main className="w-full">
        <section className="py-section-v-pad-mobile md:py-section-v-pad-desktop px-lg w-full flex justify-center pt-20">
          <div className="max-w-[760px] w-full mx-auto">
            <p className="font-mono-label text-mono-label text-amber-700 uppercase mb-md tracking-wider">WHY KIRA</p>
            <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-text-strong mb-xl">E-invoicing solved compliance. It didn't solve your business.</h2>
            <div className="space-y-xl text-text-body font-body text-body">
              <p>Malaysian SMEs are now generating clean, structured transaction data for the first time in their history — but most can only see it as rows in a portal or PDFs in their inbox.</p>
              <p>Existing tools tell you what already happened. Your accountant tells you what happened last month. Neither tells you what's about to happen next week.</p>
              <p className="font-body-lg text-body-lg text-text-strong font-semibold pt-sm">That gap is what we built Kira to fill.</p>

              <div className="mt-2xl pt-xl border-t border-border">
                <h3 className="font-h3-desktop text-h3-desktop text-text-strong mb-lg">The Opportunity</h3>
                <div className="space-y-md">
                  {[
                    { label: 'RM 1M – RM 5M SMEs', body: 'Must comply with e-invoicing from January 2026 (LHDN Phase 4)' },
                    { label: 'July 2026', body: 'All remaining SMEs required to adopt e-invoicing (LHDN Phase 5)' },
                    { label: 'Visit Malaysia 2026', body: '47 million tourists projected — huge spike in F&B demand' },
                  ].map(({ label, body }) => (
                    <div key={label} className="bg-surface border border-border rounded-lg p-lg">
                      <p className="font-mono-label text-mono-label text-amber-700 mb-sm uppercase tracking-wider">{label}</p>
                      <p className="font-body-lg text-body-lg text-text-strong">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2xl pt-xl border-t border-border">
                <h3 className="font-h3-desktop text-h3-desktop text-text-strong mb-lg">Why Now</h3>
                <ul className="space-y-md">
                  {[
                    { title: 'Structured data, finally', body: 'MyInvois gives every Malaysian SME access to clean transaction records — no more handwritten ledgers.' },
                    { title: 'Visible pain', body: 'F&B owners run on thin margins and unpredictable demand. A 10% forecasting improvement is tangible profit.' },
                    { title: 'No existing solution', body: 'Accounting tools focus on the past. Business intelligence tools are too complex for SMEs. There\'s a gap, and we\'re filling it.' },
                  ].map(({ title, body }) => (
                    <li key={title} className="flex items-start gap-md">
                      <span className="material-symbols-outlined text-amber-700 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <div>
                        <p className="font-body-lg text-body-lg text-text-strong mb-sm">{title}</p>
                        <p className="font-body text-body text-text-muted">{body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CTA />
    </>
  )
}
