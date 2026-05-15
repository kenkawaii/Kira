import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-text-strong text-bg-stone py-3xl">
      <div className="max-w-container-max mx-auto px-lg flex flex-col md:flex-row justify-between items-start gap-md">
        <div className="flex flex-col mb-xl md:mb-0 md:w-1/4">
          <span className="text-h4 font-h4 font-bold text-bg-stone mb-base">Kira</span>
          <p className="font-caption text-caption opacity-70 mb-base">Predict. Explain. Act.</p>
          <p className="font-caption text-caption opacity-70">Built in Sabah, Malaysia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl md:w-3/4">
          <div className="flex flex-col gap-sm">
            <span className="font-h4 text-h4 text-bg-stone mb-sm">Product</span>
            <Link className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" to="/how-it-works">How It Works</Link>
            <Link className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" to="/features">Features</Link>
            <Link className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" to="/faq">FAQ</Link>
            <Link className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" to="/waitlist">Waitlist</Link>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="font-h4 text-h4 text-bg-stone mb-sm">Company</span>
            <Link className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" to="/why">Why Kira</Link>
            <Link className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" to="/comparison">Comparison</Link>
            <Link className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" to="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="font-h4 text-h4 text-bg-stone mb-sm">Legal</span>
            <a className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" href="#">Privacy Policy</a>
            <a className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" href="#">Terms of Service</a>
            <a className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" href="#">PDPA Notice</a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-lg mt-xl pt-lg border-t border-text-muted/30 flex flex-col md:flex-row justify-between items-center gap-md">
        <span className="font-caption text-caption opacity-70">© 2026 Kira. All rights reserved.</span>
        <a className="font-caption text-caption opacity-70 hover:opacity-100 hover:text-amber-700 hover:underline transition-colors" href="mailto:tekkenooi184@gmail.com">tekkenooi184@gmail.com</a>
      </div>
    </footer>
  )
}
