import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <div className="bg-bg-stone min-h-screen flex items-center justify-center p-lg font-body text-body text-text-body antialiased">
      <div className="bg-surface border border-border rounded-[16px] w-full max-w-[480px] p-xl flex flex-col items-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-md border border-amber-50">
          <span className="material-symbols-outlined text-amber-700 text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
        </div>
        <h3 className="font-h3-desktop text-h3-desktop text-text-strong mb-sm">You're on the list.</h3>
        <p className="font-body text-body text-text-muted mb-lg">We'll be in touch as we open beta access. In the meantime, if you're up for a quick chat, reply to our email — we'd love to learn more about your business.</p>
        <Link to="/" className="mt-xs px-md py-[12px] bg-amber-700 hover:bg-amber-600 text-white font-body-sm text-body-sm rounded-lg transition-colors w-full sm:w-auto text-center">Back to Home</Link>
      </div>
    </div>
  )
}
