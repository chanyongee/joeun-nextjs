import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type NamedGnbItem = {
  title: string
  children?: never
}

type LogoGnbItem = {
  title?: never
  children: ReactNode
}

type GnbItemProps = (NamedGnbItem | LogoGnbItem) & {
  className?: string
  to: string
  onMouseEnter?: () => void
}

export const GnbItem = ({
  title,
  children,
  className = '',
  to,
  onMouseEnter,
}: GnbItemProps) => {
  return (
    <Link
      href={to}
      className={cn(
        'mx-auto my-0 flex h-full basis-1/5 cursor-pointer items-center justify-center border-greenAlpha text-center',
        className,
        !!title && 'hover:border-b-4',
      )}
      onMouseEnter={onMouseEnter}
      data-title={title}
    >
      {title ? title : children}
    </Link>
  )
}
