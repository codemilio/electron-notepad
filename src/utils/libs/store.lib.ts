import Store from 'electron-store'

type StoreType = {
  documents: Record<string, {
    title: string
    content: string
  }>
}

export const store = new Store<StoreType>({
  defaults: {
    documents: {}
  }
})