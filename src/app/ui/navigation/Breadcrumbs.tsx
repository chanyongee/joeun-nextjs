'use client'
import { usePathname } from 'next/navigation'
import { MenuItem, menuList } from '@/app/assets/data/menuList'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import Link from 'next/link'

const findBreadcrumb = (menu: MenuItem[], path: string) => {
  const stack: MenuItem[] = []
  const dfs = (nodes: MenuItem[], currentPath: string): MenuItem[] | null => {
    for (const node of nodes) {
      stack.push(node)
      if (node.to === currentPath && node.children?.[0].to !== currentPath) {
        return stack.slice()
      }
      if (node.children) {
        const result = dfs(node.children, currentPath)
        if (result) return result
      }
      stack.pop()
    }
    return null
  }
  return dfs(menu, path)
}

export const Breadcrumbs = () => {
  const currentPath = usePathname()
  const breadcrumbs = findBreadcrumb(menuList, currentPath)

  const getSiblings = (breadcrumb: MenuItem[], index: number) => {
    return index === 0
      ? menuList.map(({ title, to }) => ({ title, to }))
      : breadcrumb[index - 1].children
  }

  return (
    <Menubar className="absolute bottom-0 right-0 h-12 w-[80%] rounded-b-none rounded-tr-none bg-greenAlpha text-white">
      {breadcrumbs?.map((breadcrumb, index) => (
        <_MenubarItem
          title={breadcrumb.title}
          siblings={getSiblings(breadcrumbs, index)}
          key={index}
        />
      ))}
    </Menubar>
  )
}

const _MenubarItem = ({
  title,
  siblings,
}: {
  title: string
  siblings: MenuItem[] | undefined
}) => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="w-[256px]">{title}</MenubarTrigger>
      <MenubarContent>
        {siblings?.map(({ title, to }) => (
          <Link href={to || ''} key={title}>
            <MenubarItem className="flex w-[256px] justify-center">
              {title}
            </MenubarItem>
          </Link>
        ))}
      </MenubarContent>
    </MenubarMenu>
  )
}
