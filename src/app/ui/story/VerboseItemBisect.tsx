import { Separator } from '@/components/ui/separator'
import Image, { StaticImageData } from 'next/image'

type VerboseItemBisectProps = {
  title: string
  desc?: string
  img?: string | StaticImageData
}

export function VerboseItemBisect({
  title,
  desc,
  img,
}: VerboseItemBisectProps) {
  return (
    <section className="flex flex-col gap-4">
      <article className="relative flex flex-row justify-between py-8">
        <h2 className="flex-shrink-0 font-medium">{title}</h2>
        {!!desc && <div className="basis-2/3 whitespace-pre-line">{desc}</div>}
        {!!img && (
          <Image
            className="max-w-[66.6%] flex-grow-0 basis-2/3"
            src={img}
            alt={`${title} diagram`}
          />
        )}
      </article>
      <Separator />
    </section>
  )
}
