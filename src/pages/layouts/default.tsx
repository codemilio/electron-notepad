import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export function Default() {
  return (
    <div className='w-screen h-screen bg-rotion-900 text-base-100 flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col max-h-screen'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

