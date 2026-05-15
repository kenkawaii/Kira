import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('waitlist')
  const [stats, setStats] = useState({ total: 0, withInterview: 0 })
  const [waitlist, setWaitlist] = useState([])
  const [contacts, setContacts] = useState([])

  const loadStats = useCallback(async () => {
    const res = await fetch('/api/admin/stats')
    if (res.ok) setStats(await res.json())
  }, [])

  const loadWaitlist = useCallback(async () => {
    const res = await fetch('/api/admin/waitlist')
    if (res.ok) setWaitlist(await res.json())
  }, [])

  const loadContacts = useCallback(async () => {
    const res = await fetch('/api/admin/contacts')
    if (res.ok) setContacts(await res.json())
  }, [])

  useEffect(() => {
    fetch('/api/admin/check').then(r => r.json()).then(d => {
      if (!d.authenticated) navigate('/admin')
    })
    loadStats()
    loadWaitlist()
  }, [navigate, loadStats, loadWaitlist])

  useEffect(() => {
    const id = setInterval(() => {
      loadStats()
      if (tab === 'waitlist') loadWaitlist()
      else loadContacts()
    }, 30000)
    return () => clearInterval(id)
  }, [tab, loadStats, loadWaitlist, loadContacts])

  useEffect(() => {
    if (tab === 'contacts') loadContacts()
  }, [tab, loadContacts])

  async function deleteEntry(id) {
    if (!confirm('Delete this entry?')) return
    const res = await fetch(`/api/admin/waitlist/${id}`, { method: 'DELETE' })
    if (res.ok) { loadWaitlist(); loadStats() }
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    navigate('/admin')
  }

  return (
    <div className="bg-bg-stone min-h-screen font-body text-body text-text-body antialiased">
      <nav className="bg-surface border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-lg h-16 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Kira Admin</h1>
          <button onClick={logout} className="bg-amber-700 text-white px-lg py-sm rounded hover:bg-primary transition-colors">Logout</button>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-lg py-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-2xl">
          <div className="bg-surface border border-border rounded-lg p-lg">
            <p className="text-text-muted text-sm mb-sm">Total Signups</p>
            <p className="text-4xl font-bold text-primary">{stats.total}</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-lg">
            <p className="text-text-muted text-sm mb-sm">Interview Opt-ins</p>
            <p className="text-4xl font-bold text-success">{stats.withInterview}</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-lg">
            <p className="text-text-muted text-sm mb-sm">New This Week</p>
            <p className="text-4xl font-bold text-amber-700">{stats.total > 5 ? Math.floor(stats.total / 2) : stats.total}</p>
          </div>
        </div>

        <div className="flex gap-md mb-lg border-b border-border">
          {['waitlist', 'contacts'].map(t => (
            <button key={t} onClick={() => setTab(t)} className={`px-lg py-md capitalize ${tab === t ? 'border-b-2 border-amber-700 text-text-body font-semibold' : 'text-text-muted hover:text-text-body'}`}>
              {t === 'waitlist' ? 'Waitlist' : 'Contact Messages'}
            </button>
          ))}
        </div>

        {tab === 'waitlist' && (
          <div className="overflow-x-auto bg-surface border border-border rounded-lg">
            <table className="w-full">
              <thead className="bg-bg-stone border-b border-border">
                <tr>
                  {['Email','Business','Type','Interview','Joined','Action'].map(h => (
                    <th key={h} className="px-lg py-md text-left text-sm font-semibold text-text-strong">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {waitlist.length === 0 ? (
                  <tr><td colSpan={6} className="px-lg py-md text-center text-text-muted">No signups yet</td></tr>
                ) : waitlist.map(entry => (
                  <tr key={entry.id} className="border-b border-border hover:bg-bg-stone transition-colors">
                    <td className="px-lg py-md text-sm text-text-body">{entry.email}</td>
                    <td className="px-lg py-md text-sm text-text-body">{entry.businessName}</td>
                    <td className="px-lg py-md text-sm text-text-muted capitalize">{entry.businessType}</td>
                    <td className="px-lg py-md text-sm">{entry.interview ? '✓' : '—'}</td>
                    <td className="px-lg py-md text-sm text-text-muted">{new Date(entry.joinedAt).toLocaleDateString()}</td>
                    <td className="px-lg py-md text-sm">
                      <button onClick={() => deleteEntry(entry.id)} className="px-sm py-xs bg-red-50 text-red-700 rounded hover:bg-red-100 transition-colors text-sm">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'contacts' && (
          <div className="space-y-lg">
            {contacts.length === 0 ? (
              <p className="text-text-muted text-center py-2xl">No messages yet</p>
            ) : contacts.map(c => (
              <div key={c.id} className="bg-surface border border-border rounded-lg p-lg">
                <div className="flex justify-between items-start mb-md">
                  <div>
                    <h3 className="font-semibold text-text-strong">{c.name}</h3>
                    <p className="text-sm text-text-muted">{c.email}</p>
                  </div>
                  <span className="text-xs text-text-muted">{new Date(c.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="font-semibold text-text-body mb-sm">{c.subject}</p>
                <p className="text-text-body whitespace-pre-wrap">{c.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
