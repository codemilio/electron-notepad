import { ipcMain } from 'electron'
import { IPC } from '../shared/constants/ipc.constants'
import { FetchAllDocumentsResponse } from '../shared/types/ipc.types'

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL, 
  async (): Promise<FetchAllDocumentsResponse> => {
  return {
    data: [
      { id: '1', title: 'Document 01', content: '' },
      { id: '2', title: 'Document 02', content: '' },
      { id: '3', title: 'Document 03', content: '' },
      { id: '4', title: 'Document 04', content: '' },
      { id: '5', title: 'Document 05', content: '' }
    ]
  }
})

ipcMain.handle('get-platform', () => {
  return process.platform
})