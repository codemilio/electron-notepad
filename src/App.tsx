import { Routes } from './Routes'
import { ElectronProvider } from './utils/contexts/electron.context'
import './styles/global.css'

export function App() {
  return (
    <ElectronProvider>
      <Routes />
    </ElectronProvider>
  )
}
