import { ipcMain } from 'electron'

ipcMain.on('fetch-documents', (event, props) => {
  console.log(props)
})

