import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './styles/global.css'
import { ElectronProvider } from './utils/contexts/electron.context'

function App() {
  return (
    <ElectronProvider>
      <div className='w-screen h-screen bg-rotion-900 text-base-100 flex'>
        <Sidebar />
        <div className='flex-1 flex flex-col max-h-screen'>
          <Header />
          <main className='flex-1 flex items-center justify-center text-base-400'>

          </main>
        </div>
      </div>
    </ElectronProvider>
  )
}

export default App
