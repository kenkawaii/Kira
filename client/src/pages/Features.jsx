import CTA from '../components/CTA'

export default function Features() {
  return (
    <>
      <main className="pt-[80px]">
        <section className="max-w-container-max mx-auto px-lg py-section-v-pad-mobile md:py-section-v-pad-desktop">
          <div className="text-center mb-4xl">
            <span className="font-mono-label text-mono-label text-amber-700 uppercase tracking-widest block mb-md">WHAT KIRA TELLS YOU</span>
            <h2 className="font-h2-desktop text-h2-desktop text-text-strong">Three things you've never had before.</h2>
          </div>
          <div className="flex flex-col gap-[96px]">
            <div className="flex flex-col lg:flex-row items-center gap-2xl">
              <div className="flex-1 space-y-lg order-2 lg:order-1">
                <div>
                  <span className="font-mono-label text-mono-label text-text-muted block mb-sm">FEATURE 01</span>
                  <h3 className="font-h3-desktop text-h3-desktop text-text-strong mb-md">Demand forecasting per SKU</h3>
                  <p className="font-body-lg text-body-lg text-text-muted">Predicts how much of each item you'll sell over the next 7 and 30 days. Built around the rhythms of Malaysian retail.</p>
                </div>
                <ul className="space-y-sm">
                  {['Confidence intervals, not just point estimates','Adjusts for Hari Raya, CNY, Deepavali, school terms','Updates daily as new sales come in'].map(t => (
                    <li key={t} className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-amber-700 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                      <span className="font-body text-body text-text-body">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full order-1 lg:order-2">
                <div className="bg-surface border border-border rounded-[12px] p-xl hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <div className="flex justify-between items-center mb-lg">
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-text-strong">Chocolate cake</h4>
                      <p className="font-caption text-caption text-text-muted">Next 7 days forecast</p>
                    </div>
                    <div className="bg-amber-50 text-amber-700 px-md py-xs rounded-full font-mono-label text-mono-label flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>+35% this weekend
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2xl">
              <div className="flex-1 w-full order-1">
                <div className="bg-surface border border-border rounded-[12px] p-xl hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <div className="flex justify-between items-start mb-lg">
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-text-strong">ABC Trading Sdn Bhd</h4>
                      <p className="font-caption text-caption text-text-muted">Customer since Jan 2022</p>
                    </div>
                    <div className="text-right">
                      <span className="font-h2-desktop text-h2-desktop text-critical block">73%</span>
                      <span className="font-caption text-caption text-text-muted uppercase tracking-wider">Churn Risk</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-lg order-2">
                <div>
                  <span className="font-mono-label text-mono-label text-text-muted block mb-sm">FEATURE 02</span>
                  <h3 className="font-h3-desktop text-h3-desktop text-text-strong mb-md">Customer churn alerts</h3>
                  <p className="font-body-lg text-body-lg text-text-muted">Identifies which customers are about to stop ordering, with the actual reasons why.</p>
                </div>
                <ul className="space-y-sm">
                  {['Personalised per customer, not a one-size-fits-all score','Plain-language explanations, not statistical jargon','Suggested next actions you can take this week'].map(t => (
                    <li key={t} className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-amber-700 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                      <span className="font-body text-body text-text-body">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2xl">
              <div className="flex-1 space-y-lg order-2 lg:order-1">
                <div>
                  <span className="font-mono-label text-mono-label text-text-muted block mb-sm">FEATURE 03</span>
                  <h3 className="font-h3-desktop text-h3-desktop text-text-strong mb-md">Anomaly detection</h3>
                  <p className="font-body-lg text-body-lg text-text-muted">Flags unusual transactions before they become problems you can't undo.</p>
                </div>
                <ul className="space-y-sm">
                  {['Catches data entry errors before month-end','Detects supplier overcharging and unusual purchases','Surfaces potential fraud with explanations'].map(t => (
                    <li key={t} className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-amber-700 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                      <span className="font-body text-body text-text-body">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full order-1 lg:order-2">
                <div className="bg-surface border border-border border-l-4 border-l-amber-700 rounded-[12px] p-xl hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <div className="flex items-start gap-md mb-md">
                    <div className="bg-amber-50 p-sm rounded-full text-amber-700">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                    </div>
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-text-strong">Invoice #2847 flagged</h4>
                      <p className="font-caption text-caption text-text-muted">Detected today at 10:42 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CTA />
    </>
  )
}
