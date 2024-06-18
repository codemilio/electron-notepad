import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit'

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: '<h1> hello world </h1> <p> My first document with tiptap. </p>',
    editorProps: {
      attributes: {
        class: 'focus:outline-none prose prose-invert'
      }
    },
    autofocus: 'end'
  })

  return (
    <EditorContent className="w-[65ch]" editor={editor} />
  )
}
