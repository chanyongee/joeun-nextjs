import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PerformanceLinkButton({ link }: { link: string }) {
  return (
    <div>
      <Link href={link}>
        <Button
          variant="outline"
          className="h-14 w-[20rem] rounded-none border-black bg-transparent text-base text-black hover:bg-black hover:text-white"
        >
          실적 보러가기
        </Button>
      </Link>
    </div>
  )
}
