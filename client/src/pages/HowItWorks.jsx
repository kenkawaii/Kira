import CTA from '../components/CTA'

const steps = [
  { num: '01', icon: 'upload', title: 'Connect your data', body: 'Upload a CSV from your accounting software or MyInvois export. Direct integration with SQL Account, AutoCount, Xero, and Bukku coming soon. No accounting knowledge needed.' },
  { num: '02', icon: 'auto_awesome', title: 'Kira learns your business', body: 'Our models train on your specific sales patterns, customers, and products. We adjust for Malaysian holidays, festival seasons, and weekend rhythms automatically.' },
  { num: '03', icon: 'lightbulb', title: 'Get answers, not dashboards', body: 'Every Monday morning, you get a clear summary of what to order, who to follow up with, and which transactions look unusual — in plain language, in Bahasa Malaysia or English.' },
]

export default function HowItWorks() {
  return (
    <>
      <section className="py-section-v-pad-desktop pt-[80px]">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center flex flex-col items-center mb-3xl">
            <span className="font-mono-label text-mono-label text-amber-700 mb-md tracking-widest uppercase">How It Works</span>
            <h2 className="font-h2-desktop text-h2-desktop text-text-strong max-w-2xl">From transactions to decisions in three steps.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            {steps.map(({ num, icon, title, body }) => (
              <article key={num} className="bg-surface border border-border rounded-xl p-xl flex flex-col h-full hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="mb-lg w-16 h-16 rounded-lg bg-amber-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-700 text-[32px]">{icon}</span>
                </div>
                <div className="font-mono-label text-mono-label text-amber-700 mb-sm">{num}</div>
                <h3 className="font-h4 text-h4 text-text-strong mb-sm">{title}</h3>
                <p className="font-body text-body text-text-muted flex-grow">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
