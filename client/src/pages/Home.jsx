import { Link } from 'react-router-dom'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <main className="flex-grow pt-[64px] bg-gradient-warm flex items-center min-h-[720px]">
        <div className="max-w-[1200px] mx-auto px-lg w-full py-section-v-pad-mobile md:py-section-v-pad-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl md:gap-3xl items-center">
            <div className="lg:col-span-7 flex flex-col gap-lg">
              <p className="font-mono-label text-mono-label text-amber-700 uppercase tracking-widest">FOR MALAYSIAN F&B SMES</p>
              <h1 className="font-h1-mobile text-h1-mobile md:font-h1-desktop md:text-h1-desktop text-text-strong">Kira your business one week ahead.</h1>
              <p className="font-body-lg text-body-lg text-text-muted max-w-[540px] mt-md">Kira turns your daily transactions into demand forecasts, customer churn alerts, and anomaly detection — with plain-language explanations any owner can act on.</p>
              <div className="flex flex-col sm:flex-row items-center gap-md mt-xl">
                <Link to="/waitlist" className="w-full sm:w-auto bg-amber-700 text-on-primary font-body text-body px-xl py-md rounded-lg hover:bg-amber-600 transition-colors text-center">Join the Waitlist</Link>
                <Link to="/how-it-works" className="w-full sm:w-auto border border-text-strong text-text-strong font-body text-body px-xl py-md rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-sm">How It Works <span className="material-symbols-outlined text-[20px]">arrow_forward</span></Link>
              </div>
              <p className="font-caption text-caption text-text-muted mt-xs">Free for 6 months for our first 20 beta customers.</p>
            </div>

            <div className="lg:col-span-5 relative group mt-xl lg:mt-0">
              <div className="bg-surface border border-border rounded-xl p-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 w-full flex flex-col gap-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-h4 text-h4 text-text-strong">Revenue Forecast</h3>
                    <p className="font-caption text-caption text-text-muted mt-base">Next 7 Days</p>
                  </div>
                  <div className="bg-surface-container-low px-sm py-xs rounded text-primary font-mono-label text-mono-label flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>+14% Expected
                  </div>
                </div>
                <div className="h-48 relative w-full border-b border-l border-border mt-md">
                  <div className="absolute -left-10 bottom-0 top-0 flex flex-col justify-between text-right w-8">
                    <span className="font-mono-label text-[10px] text-text-muted">4k</span>
                    <span className="font-mono-label text-[10px] text-text-muted">2k</span>
                    <span className="font-mono-label text-[10px] text-text-muted">0</span>
                  </div>
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-2">
                    <span className="font-mono-label text-[10px] text-text-muted">Mon</span>
                    <span className="font-mono-label text-[10px] text-text-muted">Wed</span>
                    <span className="font-mono-label text-[10px] text-amber-700 font-bold">Fri</span>
                    <span className="font-mono-label text-[10px] text-text-muted">Sun</span>
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 192" preserveAspectRatio="none">
                    <line x1="0" y1="10" x2="380" y2="10" stroke="#E7E5E4" strokeWidth="1" strokeDasharray="4 4"/>
                    <line x1="0" y1="96" x2="380" y2="96" stroke="#E7E5E4" strokeWidth="1" strokeDasharray="4 4"/>
                    <line x1="255" y1="0" x2="255" y2="192" stroke="#B45309" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.4"/>
                    <polyline className="chart-past" points="4,105 126,92 255,79" fill="none" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline className="chart-forecast" points="255,79 316,49 374,23" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle className="chart-dot chart-dot-1" cx="4" cy="105" r="4" fill="white" stroke="#1C1917" strokeWidth="2"/>
                    <circle className="chart-dot chart-dot-2" cx="126" cy="92" r="4" fill="white" stroke="#1C1917" strokeWidth="2"/>
                    <circle className="chart-dot chart-dot-3" cx="255" cy="79" r="5" fill="#1C1917" stroke="white" strokeWidth="2"/>
                    <circle className="chart-dot chart-dot-4" cx="316" cy="49" r="4" fill="white" stroke="#B45309" strokeWidth="2"/>
                    <circle className="chart-dot chart-dot-5" cx="374" cy="23" r="4" fill="white" stroke="#B45309" strokeWidth="2"/>
                  </svg>
                  <div className="absolute left-[67%] -top-5 -translate-x-1/2 bg-amber-700 text-white font-mono-label text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">Today</div>
                </div>
                <div className="bg-bg-stone border border-border rounded-lg p-md mt-xl">
                  <h4 className="font-body-sm text-body-sm font-semibold text-text-strong mb-md">Why this forecast?</h4>
                  <div className="flex flex-col gap-sm">
                    <div className="grid grid-cols-[1fr_auto] items-center gap-md">
                      <span className="font-body-sm text-body-sm text-text-body truncate">Weekend approaching</span>
                      <div className="flex items-center gap-sm">
                        <div className="w-24 bg-surface-container rounded-full h-2 overflow-hidden flex justify-end">
                          <div className="bg-amber-600 h-full w-[70%]"></div>
                        </div>
                        <span className="font-mono-label text-mono-label text-amber-700 w-10 text-right">+18%</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-md">
                      <span className="font-body-sm text-body-sm text-text-body truncate">Mother's Day in 3 days</span>
                      <div className="flex items-center gap-sm">
                        <div className="w-24 bg-surface-container rounded-full h-2 overflow-hidden flex justify-end">
                          <div className="bg-amber-600 h-full w-[50%]"></div>
                        </div>
                        <span className="font-mono-label text-mono-label text-amber-700 w-10 text-right">+12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="w-full bg-[#F5F4F2] py-section-v-pad-mobile md:py-section-v-pad-desktop">
        <div className="max-w-[1100px] mx-auto px-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl md:gap-0 md:divide-x md:divide-border">
            <div className="flex flex-col items-center text-center px-4 md:px-lg">
              <div className="font-mono-label text-[48px] font-bold text-amber-700 leading-tight mb-md">RM1M – RM5M</div>
              <div className="font-body text-body text-text-strong mb-sm max-w-xs">SMEs must comply with e-invoicing from January 2026</div>
              <div className="font-caption text-caption text-text-muted italic">LHDN Phase 4</div>
            </div>
            <div className="flex flex-col items-center text-center px-4 md:px-lg mt-xl md:mt-0">
              <div className="font-mono-label text-[48px] font-bold text-amber-700 leading-tight mb-md">July 2026</div>
              <div className="font-body text-body text-text-strong mb-sm max-w-xs">All remaining SMEs required to adopt e-invoicing</div>
              <div className="font-caption text-caption text-text-muted italic">LHDN Phase 5</div>
            </div>
            <div className="flex flex-col items-center text-center px-4 md:px-lg mt-xl md:mt-0">
              <div className="font-mono-label text-[48px] font-bold text-amber-700 leading-tight mb-md">47 million</div>
              <div className="font-body text-body text-text-strong mb-sm max-w-xs">Tourists projected for Visit Malaysia 2026</div>
              <div className="font-caption text-caption text-text-muted italic">Tourism Malaysia</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center py-section-v-pad-mobile md:py-section-v-pad-desktop px-lg">
        <div className="max-w-[900px] w-full flex flex-col items-center text-center">
          <span className="text-amber-700 font-mono-label text-mono-label tracking-widest uppercase mb-sm">WHO KIRA IS FOR</span>
          <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-text-strong mb-lg">Right now, Kira is for F&amp;B.</h2>
          <p className="font-body-lg text-body-lg text-text-body max-w-[700px] mb-2xl">Bakeries, cafes, casual restaurants, and kuih sellers in Klang Valley, Penang, Johor Bahru, and Kota Kinabalu doing RM30K–500K monthly. If that sounds like your business, you're exactly who we built Kira for.</p>
          <div className="flex flex-wrap justify-center gap-md mb-xl">
            {['Bakeries','Cafes','Casual restaurants','Kuih sellers'].map(v => (
              <div key={v} className="border border-amber-700 text-amber-700 font-body-sm text-body-sm rounded-full py-[8px] px-[16px]">{v}</div>
            ))}
          </div>
          <p className="font-caption text-caption text-text-muted">Other verticals coming soon. Tell us what you run on the waitlist form.</p>
        </div>
      </section>

      <section className="bg-amber-50 py-section-v-pad-mobile md:py-section-v-pad-desktop">
        <div className="max-w-[1200px] mx-auto px-lg">
          <div className="text-center mb-4xl">
            <p className="font-mono-label text-mono-label text-amber-700 uppercase tracking-widest mb-sm">BUILT FOR MALAYSIA</p>
            <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-text-strong">Made here. Made for here.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg md:gap-xl">
            {[
              { icon: 'translate', title: 'Bilingual from day one', body: 'Bahasa Malaysia and English, fully supported. Switch anytime. Reports in either language with one click.' },
              { icon: 'receipt_long', title: 'Native to LHDN MyInvois', body: 'Built around MyInvois data structures from the ground up, not retrofitted from a foreign accounting tool.' },
              { icon: 'event', title: 'Localised seasonality', body: 'Models trained on Malaysian holidays, school terms, festival cycles, and regional weekend rhythms.' },
              { icon: 'lock', title: 'PDPA-compliant', body: 'Encrypted in transit and at rest. Data never sold or shared. Hosted with PDPA-aware infrastructure.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-surface border border-border rounded-xl p-lg md:p-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] h-full">
                <div className="mb-lg w-16 h-16 flex items-center justify-center bg-amber-50 rounded-xl">
                  <span className="material-symbols-outlined text-amber-700 text-[32px]">{icon}</span>
                </div>
                <h4 className="font-h4 text-h4 text-text-strong mb-sm">{title}</h4>
                <p className="font-body-sm text-body-sm text-text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
