import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'

export function Default() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

  return (
    <Collapsible.Root 
      defaultOpen
      onOpenChange={setSidebarOpen}
      className='w-screen h-screen bg-rotion-900 text-base-100 flex'
    >
      <Sidebar />
      <div className='flex-1 flex flex-col max-h-screen'>
        <Header isSidebarOpen={sidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  )
}

