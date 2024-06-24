import { ipcMain } from 'electron'

ipcMain.on('fetch-documents', (event, props) => {
  console.log('fetch: ', event, props)
})

ipcMain.handle('get-platform', () => {
  return process.platform
})