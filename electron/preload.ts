import { ipcRenderer, contextBridge } from 'electron'
import { IPC } from '~/src/utils/shared/constants/ipc.constants'
import { CreateDocumentResponse, DeleteDocumentRequest, FetchDocumentRequest, FetchDocumentResponse, SaveDocumentRequest } from '~/src/utils/shared/types/ipc.types'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args
    return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args))
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args
    return ipcRenderer.off(channel, ...omit)
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args
    return ipcRenderer.send(channel, ...omit)
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args
    return ipcRenderer.invoke(channel, ...omit)
  }
})

// --------- Custom API exposed to the Renderer process ---------
export const api = {
  getPlatform: () => ipcRenderer.invoke('get-platform'),
  fetchDocuments: () => ipcRenderer.invoke(IPC.DOCUMENTS.FETCH_ALL),
  fetchDocument: (req: FetchDocumentRequest): Promise<FetchDocumentResponse> => {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH, req)
  },
  createDocument: (): Promise<CreateDocumentResponse> => {
    return ipcRenderer.invoke(IPC.DOCUMENTS.CREATE)
  },
  saveDocument: (req: SaveDocumentRequest): Promise<void> => {
    return ipcRenderer.invoke(IPC.DOCUMENTS.SAVE, req)
  },
  deleteDocument: (req: DeleteDocumentRequest): Promise<void> => {
    return ipcRenderer.invoke(IPC.DOCUMENTS.DELETE, req)
  },
}

contextBridge.exposeInMainWorld('api', api)
