import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../utils/libs/rq.lib'
import { Plus } from 'phosphor-react'
import { Document } from '~/src/utils/shared/types/ipc.types'

export function CreatePage() {
  const { 
    mutateAsync: createDocument,
    isPending: isCreatingNewDocument, 
  } = useMutation({
    mutationFn: async () => {
        const response = await window.api.createDocument()
        return response.data
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['documents'], async (documents: Document[]) => {
        return [...documents, data]
      })
    }
  })

  const handleCreateDocument = () => createDocument()
  
  return (
    <button 
      onClick={handleCreateDocument}
      disabled={isCreatingNewDocument}
      className="flex w-[240px] px-5 items-center text-sm gap-2 absolute bottom-0 left-0 right-0 py-4 border-t border-base-600 hover:bg-base-700 disabled:opacity-60"
    >
      <Plus className="h-4 w-4" />
      Create new page
    </button>
  )
}
