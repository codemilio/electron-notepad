import { Editor } from '../components/Editor'
import { ToC } from '../components/ToC'

export function Document() {
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
        <Editor />
      </section>
    </main>
  )
}