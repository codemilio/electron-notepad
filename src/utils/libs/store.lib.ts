import Store from 'electron-store'
import { Document } from '../shared/types/ipc.types'

type StoreType = {
  documents: Record<string, Document>
}

export const store = new Store<StoreType>({
  defaults: {
    documents: {}
  }
})