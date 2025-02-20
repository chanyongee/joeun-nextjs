import { cn } from '@/lib/utils'

export function PageTitle({
  title,
  className = '',
}: {
  title: string
  className?: string
}) {
  return <h1 className={cn('mb-8 text-3xl font-medium', className)}>{title}</h1>
}
