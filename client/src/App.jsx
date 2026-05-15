import { Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Features from './pages/Features'
import Comparison from './pages/Comparison'
import FAQ from './pages/FAQ'
import Why from './pages/Why'
import Waitlist from './pages/Waitlist'
import Contact from './pages/Contact'
import Success from './pages/Success'
import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/features" element={<Features />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/why" element={<Why />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  )
}
