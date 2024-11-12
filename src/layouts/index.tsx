import { Outlet } from 'react-router-dom'

import Header from './header'
import Sidebar from './sidebar'

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className='container mx-auto px-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
