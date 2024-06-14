import { ReactNode } from 'react'

interface ToCLinkProps {
  children: ReactNode
}

export function ToCLink(props: ToCLinkProps) {
  return <a href="#" className="hover:text-base-50" {...props} />
}
