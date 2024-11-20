import { type MenuItem } from '@/app/assets/data/menuList'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const Lnb = ({ content }: { content: MenuItem }) => {
  return (
    <section className="absolute left-0 top-[6.8rem] z-10 flex h-[30%] w-full bg-whiteAlpha">
      <section className="flex basis-[30%] justify-end whitespace-nowrap border-r border-greyAlpha">
        <div className="px-16 py-8 text-5xl">{content.title}</div>
      </section>
      <section className="basis-[70%] gap-4 px-8 py-10">
        <section
          className={cn(
            'word-break-keep-all flex gap-4',
            content.children?.[0].children ? 'flex-row' : 'flex-col gap-1',
          )}
        >
          {content.children?.map(child => (
            <section
              className="flex w-[calc(20%-1rem)] flex-col"
              key={child.title}
            >
              <Link href={child.to || ''}>
                <div className="text-l h-10">{child.title}</div>
              </Link>
              <section className="flex flex-col gap-2">
                {child.children?.map(grandchild => (
                  <Link href={grandchild.to || ''} key={grandchild.title}>
                    <div className="text-md break-all font-light text-darkGrey">
                      {grandchild.title}
                    </div>
                  </Link>
                ))}
              </section>
            </section>
          ))}
        </section>
      </section>
    </section>
  )
}
