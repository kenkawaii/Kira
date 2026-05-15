import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Waitlist() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.target
    const data = {
      email: form.email.value,
      businessName: form.businessName.value,
      businessType: form.businessType.value,
      interview: form.interview.checked,
    }
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) { setError(json.error); setLoading(false); return }
      navigate('/success')
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className="bg-surface-dim min-h-screen flex items-center justify-center p-lg md:p-section-v-pad-desktop font-body text-body text-text-body antialiased">
      <div className="relative w-full max-w-[480px] bg-surface rounded-[16px] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] p-xl border border-border">
        <Link to="/" className="absolute top-md right-md p-xs text-text-muted hover:text-text-strong hover:bg-bg-stone rounded-full transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]">
          <span className="material-symbols-outlined">close</span>
        </Link>
        <div className="mb-lg pr-xl">
          <h3 className="font-h3-mobile text-h3-mobile md:font-h3-desktop md:text-h3-desktop text-text-strong mb-sm">Join the Kira waitlist.</h3>
          <p className="font-body text-body text-text-muted">Get priority access when we open beta. We'll only email you about Kira — never spam, never sold.</p>
        </div>
        <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[6px]">
            <label className="font-mono-label text-mono-label text-text-strong" htmlFor="email">Email address <span className="text-error">*</span></label>
            <input className="w-full min-h-[44px] px-sm py-[10px] bg-surface border border-border rounded-lg font-body text-body text-text-strong placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700 transition-shadow" id="email" name="email" placeholder="you@yourbakery.com" required type="email"/>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="font-mono-label text-mono-label text-text-strong" htmlFor="businessName">Business name <span className="text-error">*</span></label>
            <input className="w-full min-h-[44px] px-sm py-[10px] bg-surface border border-border rounded-lg font-body text-body text-text-strong placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700 transition-shadow" id="businessName" name="businessName" placeholder="Roti Sedap Sdn Bhd" required type="text"/>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="font-mono-label text-mono-label text-text-strong" htmlFor="businessType">Business type <span className="text-error">*</span></label>
            <div className="relative">
              <select className="w-full min-h-[44px] pl-sm pr-xl py-[10px] bg-surface border border-border rounded-lg font-body text-body text-text-strong appearance-none focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700 transition-shadow" id="businessType" name="businessType" required defaultValue="">
                <option disabled value="">Select an option</option>
                <option value="bakery">Bakery</option>
                <option value="cafe">Cafe</option>
                <option value="casual_restaurant">Casual restaurant</option>
                <option value="kuih_home_baker">Kuih / home baker</option>
                <option value="other_fb">Other F&B</option>
                <option value="not_fb">Not F&B</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-sm text-text-muted">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-sm mt-xs">
            <div className="flex items-center min-h-[44px]">
              <input className="w-5 h-5 rounded-[4px] border-border text-amber-700 focus:ring-amber-700 focus:ring-offset-0 bg-surface cursor-pointer mt-[-2px]" id="interview" name="interview" type="checkbox"/>
            </div>
            <label className="font-body-sm text-body-sm text-text-body cursor-pointer pt-[12px] pb-[10px]" htmlFor="interview">
              I'm happy to be interviewed for 20 minutes to help shape Kira
            </label>
          </div>
          {error && <p className="text-error text-body-sm font-body-sm">{error}</p>}
          <div className="mt-sm pt-xs border-t border-border/50">
            <button className="w-full min-h-[44px] py-[16px] px-[24px] bg-amber-700 hover:bg-amber-600 text-on-primary font-h4 text-h4 rounded-[12px] transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-60" type="submit" disabled={loading}>
              {loading ? 'Joining...' : 'Join the Waitlist'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
