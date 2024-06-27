/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ipcMain } from 'electron'
import { randomUUID } from 'node:crypto'
import { IPC } from '../shared/constants/ipc.constants'
import { Document, CreateDocumentResponse, DeleteDocumentRequest, FetchAllDocumentsResponse, FetchDocumentRequest, FetchDocumentResponse, SaveDocumentRequest } from '../shared/types/ipc.types'
import { store } from '../libs/store.lib'

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL, 
  async (): Promise<FetchAllDocumentsResponse> => {
  return {
    data: Object.values(store.get('documents'))
  }
})

ipcMain.handle(
  IPC.DOCUMENTS.FETCH,
  async (_, { id }: FetchDocumentRequest): Promise<FetchDocumentResponse> => {
    const document: Document = store.get(`documents.${id}`)
    return{
      data: document
    }
  }
)

ipcMain.handle(
  IPC.DOCUMENTS.CREATE,
  async (): Promise<CreateDocumentResponse> => {
    const id = randomUUID()
    const document: Document = {
      id,
      title: 'Untitled',
    }

    store.set(`documents.${id}`, document)
    return{
      data: document
    }
  }
)

ipcMain.handle(
  IPC.DOCUMENTS.SAVE,
  async (_, { id, title = 'Untitled', content }: SaveDocumentRequest): Promise<void> => {
    store.set(`documents.${id}`, {
      id,
      title,
      content
    })
  }
)

ipcMain.handle(
  IPC.DOCUMENTS.DELETE,
  async (_, { id }: DeleteDocumentRequest): Promise<void> => {
    // @ts-expect-error 
    store.delete(`documents.${id}`)
  }
)

ipcMain.handle('get-platform', () => {
  return process.platform
})