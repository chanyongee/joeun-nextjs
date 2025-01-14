import { PerformanceLinkButton } from '@/app/ui/story/PerformanceLinkButton'
import Image, { StaticImageData } from 'next/image'

export function SimpleStoryUpper({
  title,
  desc,
  link,
  img,
}: {
  title: string
  desc: string
  link: string
  img?: StaticImageData | string
}) {
  return (
    <article className="flex flex-col gap-8">
      <h1 className="whitespace-pre-line text-5xl font-medium">{title}</h1>
      <div className="flex flex-row justify-between gap-8">
        <div className="min-h-[400px] whitespace-pre-line md:basis-1/2">
          {desc}
        </div>
        {!!img && (
          <div className="relative basis-1/3">
            <Image
              src={img}
              alt={`${title} image`}
              className="absolute h-full w-full bg-gray-300 object-cover"
            />
          </div>
        )}
      </div>
      <PerformanceLinkButton link={link} />
    </article>
  )
}
