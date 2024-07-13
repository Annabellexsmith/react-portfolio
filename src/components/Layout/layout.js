import Sidebar from '../Sidebar/navbar'
import { Outlet } from 'react-router-dom'
import './layout.scss'

export const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <Outlet />
    </div>
  )
}
