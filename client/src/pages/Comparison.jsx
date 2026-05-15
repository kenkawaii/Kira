import CTA from '../components/CTA'

export default function Comparison() {
  return (
    <>
      <main className="pt-[64px]">
        <section className="max-w-[1100px] mx-auto px-lg py-section-v-pad-mobile md:py-section-v-pad-desktop">
          <div className="text-center max-w-3xl mx-auto mb-4xl">
            <p className="font-mono-label text-mono-label text-amber-700 tracking-widest uppercase mb-md">WHY KIRA IS DIFFERENT</p>
            <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-text-strong mb-lg">Kira tells you why, not just what.</h2>
            <p className="font-body-lg text-body-lg text-text-muted">Most analytics tools give you a number and leave you guessing. Kira shows the reasoning behind every prediction.</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-3xl items-stretch">
            <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-bg-stone rounded-full p-2">
              <div className="bg-surface border border-border rounded-full w-12 h-12 flex items-center justify-center font-mono-label text-mono-label text-text-muted shadow-sm">VS</div>
            </div>
            <div className="md:hidden flex justify-center -my-md z-10 relative">
              <div className="bg-bg-stone rounded-full p-2">
                <div className="bg-surface border border-border rounded-full w-10 h-10 flex items-center justify-center font-mono-label text-mono-label text-text-muted shadow-sm">VS</div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-lg md:p-xl flex flex-col justify-between h-full opacity-80 transition-all hover:opacity-100">
              <div>
                <p className="font-mono-label text-mono-label text-text-muted mb-xl">OTHER TOOLS</p>
                <div className="bg-bg-stone border border-border border-dashed rounded-lg p-lg mb-xl">
                  <p className="font-mono-label text-mono-label text-text-strong text-lg leading-relaxed">"Sales likely to drop next week."</p>
                </div>
              </div>
              <div className="mt-auto pt-lg border-t border-border">
                <p className="font-caption text-caption text-text-muted italic">...and that's it.</p>
              </div>
            </div>

            <div className="bg-surface border border-border border-l-4 border-l-amber-700 rounded-xl p-lg md:p-xl flex flex-col h-full shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10">
                <p className="font-mono-label text-mono-label text-amber-700 uppercase mb-xl flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">auto_awesome</span>KIRA
                </p>
                <div className="mb-lg">
                  <p className="font-mono-label text-mono-label text-text-strong text-lg leading-relaxed bg-amber-50 inline-block px-3 py-2 rounded border border-amber-600/20">"Sales likely to drop 12% next week."</p>
                </div>
                <div className="mb-xl">
                  <p className="font-body-sm text-body-sm text-text-muted mb-sm">Because:</p>
                  <ul className="space-y-sm">
                    {['School holidays end Monday','Top 3 customers below normal frequency','Local festival traffic over'].map(r => (
                      <li key={r} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[16px] text-amber-600 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>trip_origin</span>
                        <span className="font-body-sm text-body-sm text-text-strong">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-lg relative z-10">
                <div className="bg-amber-50 border border-amber-600/20 rounded-lg p-md flex items-start gap-3">
                  <span className="material-symbols-outlined text-amber-700 mt-0.5">lightbulb</span>
                  <p className="font-body-sm text-body-sm text-amber-700"><strong>Suggested action:</strong> reduce bread stock 15% for Mon-Wed, run promo on Thursday.</p>
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
