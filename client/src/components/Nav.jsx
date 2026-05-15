import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-surface border-b border-border fixed top-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto px-lg flex justify-between items-center h-16">
        <Link className="font-h4 text-h4 font-bold text-primary tracking-tight" to="/">Kira</Link>
        <div className="hidden md:flex items-center gap-lg">
          <Link className="font-body text-body text-text-body hover:text-primary-container transition-colors duration-200" to="/how-it-works">How It Works</Link>
          <Link className="font-body text-body text-text-body hover:text-primary-container transition-colors duration-200" to="/features">Features</Link>
          <Link className="font-body text-body text-text-body hover:text-primary-container transition-colors duration-200" to="/why">Why Kira</Link>
          <Link className="font-body text-body text-text-body hover:text-primary-container transition-colors duration-200" to="/faq">FAQ</Link>
        </div>
        <div className="hidden md:flex items-center gap-sm">
          <a className="font-body text-body text-text-body px-md py-sm rounded-lg hover:text-primary-container transition-colors duration-200" href="#">Sign In</a>
          <Link className="bg-amber-700 text-on-primary font-body text-body px-md py-sm rounded-lg hover:bg-primary-container transition-colors duration-200" to="/waitlist">Join Waitlist</Link>
        </div>
        <button className="md:hidden p-xs text-text-body hover:text-primary" onClick={() => setOpen(!open)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-surface border-t border-border">
          <div className="max-w-[1200px] mx-auto px-lg py-md flex flex-col gap-xs">
            <Link className="font-body text-body text-text-body py-sm hover:text-primary-container transition-colors" to="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
            <Link className="font-body text-body text-text-body py-sm hover:text-primary-container transition-colors" to="/features" onClick={() => setOpen(false)}>Features</Link>
            <Link className="font-body text-body text-text-body py-sm hover:text-primary-container transition-colors" to="/why" onClick={() => setOpen(false)}>Why Kira</Link>
            <Link className="font-body text-body text-text-body py-sm hover:text-primary-container transition-colors" to="/faq" onClick={() => setOpen(false)}>FAQ</Link>
            <div className="border-t border-border pt-sm mt-xs flex flex-col gap-sm">
              <a className="font-body text-body text-text-body py-sm" href="#">Sign In</a>
              <Link className="bg-amber-700 text-on-primary font-body text-body px-md py-sm rounded-lg text-center" to="/waitlist" onClick={() => setOpen(false)}>Join Waitlist</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
