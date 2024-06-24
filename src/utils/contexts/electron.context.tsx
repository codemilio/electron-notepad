import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'

interface ElectronContextProps {
  platform: NodeJS.Platform
}

const ElectronContext = createContext<ElectronContextProps | undefined>(undefined)

export const ElectronProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [platform, setPlatform] = useState<NodeJS.Platform>('darwin')

  useEffect(() => {
    const fetchPlatform = async () => {
      const os = await window.api.getPlatform()
      console.log(os)
      setPlatform(os)
    }
    
    fetchPlatform()
  }, [platform, setPlatform])
  
  return (
    <ElectronContext.Provider value={{ platform }}>
      {children}
    </ElectronContext.Provider>
  )
}

export const useElectronContext = (): ElectronContextProps => {
  const context = useContext(ElectronContext)
  if (!context) {
    throw new Error('usePlatform must be used within a PlatformProvider')
  }
  return context
}
