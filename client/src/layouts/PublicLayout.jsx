import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function PublicLayout() {
  return (
    <div className="bg-bg-stone font-body text-body text-text-body antialiased min-h-screen flex flex-col">
      <Nav />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
