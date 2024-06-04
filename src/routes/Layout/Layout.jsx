import './Layout.scss'
import { Outlet } from 'react-router-dom'
import NavBar from '~/components/NavBar/NavBar'

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
