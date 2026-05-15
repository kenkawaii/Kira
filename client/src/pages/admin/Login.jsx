import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('/api/admin/check').then(r => r.json()).then(d => {
      if (d.authenticated) navigate('/admin/dashboard')
    })
  }, [navigate])

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.target
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: form.username.value, password: form.password.value }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error); setLoading(false); return }
      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className="bg-bg-stone min-h-screen flex items-center justify-center p-lg font-body text-body text-text-body antialiased">
      <div className="bg-surface border border-border rounded-xl p-2xl w-full max-w-[400px]">
        <h2 className="text-2xl font-bold text-text-strong mb-md text-center">Kira Admin</h2>
        <p className="text-text-muted text-center mb-2xl">Sign in to access the dashboard</p>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-md mb-lg">
            <div>
              <label className="block text-sm font-semibold text-text-strong mb-sm">Username</label>
              <input type="text" name="username" placeholder="admin" required className="w-full px-md py-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"/>
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-strong mb-sm">Password</label>
              <input type="password" name="password" placeholder="••••••••" required className="w-full px-md py-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"/>
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-amber-700 text-white font-semibold py-sm rounded-lg hover:bg-primary transition-colors mb-md disabled:opacity-60">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
          {error && <p className="text-error text-sm text-center">{error}</p>}
        </form>
        <div className="mt-lg p-md bg-bg-stone rounded border border-border">
          <p className="text-xs text-text-muted text-center"><strong>Demo Credentials:</strong><br/>Username: admin<br/>Password: admin123</p>
        </div>
      </div>
    </div>
  )
}
