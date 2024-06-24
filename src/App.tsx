import { Routes } from './Routes'
import { ElectronProvider } from './utils/contexts/electron.context'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './utils/libs/rq.lib'
import './styles/global.css'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ElectronProvider>
        <Routes />
      </ElectronProvider>
    </QueryClientProvider>
  )
}
