import Image, { StaticImageData } from 'next/image'

type FullStoryProps = {
  imageSrc: StaticImageData
  imageTitle: string
  title1: string
  title2: string
  description: string
  subDescription: string
}

export const FullStory = ({
  imageSrc,
  imageTitle,
  title1,
  title2,
  description,
  subDescription,
}: FullStoryProps) => {
  return (
    <section className="flex flex-col gap-12">
      <h1>
        <p className="text-5xl font-thin">{title1}</p>
        <p className="text-5xl font-medium text-[#798759]">{title2}</p>
      </h1>
      <h2 className="whitespace-pre-line text-3xl font-bold">{description}</h2>
      <div className="whitespace-pre-line text-gray-500">{subDescription}</div>
      <div>
        <li className="mb-8 text-3xl font-medium">{imageTitle}</li>
        <Image src={imageSrc} alt="환경영향평가 절차도 이미지" />
      </div>
    </section>
  )
}
