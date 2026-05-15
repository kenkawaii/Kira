import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="w-full bg-gradient-to-b from-amber-50 to-surface py-[128px]">
      <div className="max-w-[800px] mx-auto px-lg text-center flex flex-col items-center">
        <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-text-strong font-bold mb-md">Ready to kira your business one week ahead?</h2>
        <p className="font-body-lg text-body-lg text-text-muted max-w-[600px] mx-auto mb-xl">We're onboarding 20 F&amp;B businesses for free during our private beta. Spots are limited — we want to get Kira right before we scale.</p>
        <Link to="/waitlist" className="bg-amber-700 text-on-primary font-h4 text-h4 py-md px-xl rounded-lg hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-200">Join the Waitlist</Link>
        <p className="font-caption text-caption text-text-muted mt-sm">No credit card. No commitment. Email + business name only.</p>
      </div>
    </section>
  )
}
