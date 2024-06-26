import type { api } from './preload'

// Used in Renderer process, expose in `preload.ts`
declare global {
  interface Window {
    ipcRenderer: import('electron').IpcRenderer
    api: typeof api
  }
}