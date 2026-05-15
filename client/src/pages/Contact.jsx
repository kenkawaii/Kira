import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) { setStatus('Error: ' + json.error); setLoading(false); return }
      setStatus('Message sent successfully.')
      form.reset()
    } catch (err) {
      setStatus('Error: ' + err.message)
    }
    setLoading(false)
  }

  return (
    <div className="pt-20 pb-2xl">
      <div className="max-w-[600px] mx-auto px-lg">
        <h1 className="text-4xl font-bold text-text-strong mb-md">Get in Touch</h1>
        <p className="text-lg text-text-muted mb-2xl">Have questions? We'd love to hear from you.</p>
        <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-lg p-2xl">
          <div className="flex flex-col gap-lg mb-lg">
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
              { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label className="block text-sm font-semibold text-text-strong mb-sm">{label}</label>
                <input type={type} id={id} name={id} placeholder={placeholder} required className="w-full px-md py-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"/>
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-text-strong mb-sm">Message</label>
              <textarea id="message" name="message" placeholder="Tell us more..." rows={6} required className="w-full px-md py-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"/>
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-amber-700 text-white font-semibold py-sm rounded-lg hover:bg-primary transition-colors disabled:opacity-60">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="mt-lg text-center text-success font-semibold">{status}</p>}
        </form>
        <div className="mt-2xl p-lg bg-surface border border-border rounded-lg text-center">
          <p className="text-text-strong font-semibold mb-sm">Or reach us directly:</p>
          <a href="mailto:tekkenooi184@gmail.com" className="text-amber-700 hover:text-primary font-semibold">tekkenooi184@gmail.com</a>
        </div>
      </div>
    </div>
  )
}
