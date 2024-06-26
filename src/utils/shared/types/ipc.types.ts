export type Document = {
  id: string
  title: string 
  content?: string 
}

/* 
  @Response
*/
export type FetchAllDocumentsResponse = {
  data: Document[]
}

export type FetchDocumentResponse = {
  data: Document
}

export type CreateDocumentResponse = {
  data: Document
}

/* 
  @Request
*/
export type FetchDocumentRequest = {
  id: string
}

export type DeleteDocumentRequest = {
  id: string
}

export type SaveDocumentRequest = Document

