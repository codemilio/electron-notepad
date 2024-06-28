import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from '@tiptap/starter-kit'
import Typography from "@tiptap/extension-typography"
import Placeholder from "@tiptap/extension-placeholder"
import Highlight from "@tiptap/extension-highlight"
import Document from "@tiptap/extension-document"

type Props = {
  content: string
}

export function Editor({ content }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false
      }),
      Document.extend({
        // This line makes the initial line of the document a title
        content: 'heading block*'
      }),
      Typography,
      Highlight,
      Placeholder.configure({
        placeholder: 'Type some text...',
        emptyEditorClass: 'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none'
      })
    ],
    content,
    autofocus: 'end',
    editorProps: {
      attributes: {
        class: 'focus:outline-none prose prose-invert'
      }
    },
  })

  return (
    <EditorContent className="w-[65ch]" editor={editor} />
  )
}
