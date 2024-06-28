import { useParams } from 'react-router-dom'
import { Editor } from '../components/Editor'
import { ToC } from '../components/ToC'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function Document() {
  const { id } = useParams<{ id: string }>()
  
  const { data, isFetching } = useQuery({ 
    queryKey: ['document', id],
    queryFn: async () => {
      const response = await window.api.fetchDocument({ id: id! })
      return response.data
    },
  })

  const initialContent = useMemo(() => {
    if(data) {
      return `<h1>${data.title}</h1> ${data.content ?? '<p></p>'}`
    }

    return ''
  }, [data])

  return (
    <main className='flex-1 flex py-12 px-10 gap-8'>
      <aside className="hidden lg:block sticky top-8">
        <span className="text-base-300 font-semibold text-xs uppercase">
          Table of contents
        </span>

        <ToC.Root>
          <ToC.Link> Backend </ToC.Link>
          <ToC.Section>
            <ToC.Link> NodeJS </ToC.Link>
            <ToC.Link> Autenticaçao </ToC.Link>
            <ToC.Link> SQL </ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className='flex-1 flex flex-col items-center'>
        { !isFetching && data &&  <Editor content={initialContent} /> }
      </section>
    </main>
  )
}