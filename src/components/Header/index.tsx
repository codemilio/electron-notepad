import clsx from 'clsx'
import { Code, CaretDoubleRight, TrashSimple } from 'phosphor-react'
import * as Breadcrumbs from './Breadcrumbs'
import { useElectronContext } from '../../utils/contexts/electron.context'
import { Trigger } from '@radix-ui/react-collapsible'

type Props = {
  isSidebarOpen: boolean
}

export function Header({isSidebarOpen}: Props) {
  const { platform } = useElectronContext()
  const isMacOS = platform === 'darwin'
  
  return (
    <div
      id="header"
      className={clsx(
        'border-b border-base-600 py-[1.125rem] px-6 flex items-center gap-4 leading-tight transition-all duration-250 region-drag',
        {
          'pl-24': !isSidebarOpen && isMacOS,
          'w-screen': !isSidebarOpen,
          'w-[calc(100vw-240px)]': isSidebarOpen,
        },
      )}
    >
      <Trigger
        className={clsx('h-5 w-5 text-base-200 hover:text-base-50', {
          hidden: isSidebarOpen,
          block: !isSidebarOpen,
        })}
      >
        <CaretDoubleRight className="h-4 w-4" />
      </Trigger>

      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item>
            <Code weight="bold" className="h-4 w-4 text-pink-500" />
            Estrutura técnica
          </Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.HiddenItems />
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>Back-end</Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item isActive>Untitled</Breadcrumbs.Item>
        </Breadcrumbs.Root>

        <div className="inline-flex region-no-drag">
          <button className="inline-flex items-center gap-1 text-base-100 text-sm hover:text-base-50">
            <TrashSimple className="h-4 w-4" />
            Apagar
          </button>
        </div>
      </>
    </div>
  )
}
