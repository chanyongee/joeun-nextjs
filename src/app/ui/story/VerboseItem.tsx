'use client'

import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

type VerboseItemProps = {
  title: string
  desc: string
  sub?: Array<{ title: string; desc: Array<string> }>
  link: string
  scrollIntoView: boolean
}

export const VerboseItem = ({
  title,
  desc,
  sub,
  link,
  scrollIntoView,
}: VerboseItemProps) => {
  const anchor = useRef<HTMLElement>(null)
  useEffect(() => {
    console.log('scrollIntoView', scrollIntoView)
    if (scrollIntoView) {
      anchor.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // TODO: scroll only when anchor is not in view
  }, [])

  return (
    <section ref={anchor} className="flex flex-col gap-8 pl-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium">{title}</h1>
        {!!link && (
          <Link href={link}>
            <Button
              variant="outline"
              className="h-12 w-[16rem] bg-transparent text-base text-black"
            >
              실적 보러가기
            </Button>
          </Link>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="shrink-0 text-base">{`[ ${title}란 ]`}</div>
        <Separator />
      </div>
      <h2 className="whitespace-pre-line pl-[9rem] leading-normal">{desc}</h2>
      {sub?.map(({ title, desc }: { title: string; desc: Array<string> }) => (
        <div key={title} className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="shrink-0 text-base">{`[ ${title} ]`}</div>
            <Separator />
          </div>
          <ul className="pl-[9rem]">
            {desc.map((d: string) => (
              <li className="desc-item list-none" key={d}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
