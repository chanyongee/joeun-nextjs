import BackgroundImage from '@/app/assets/images/house.webp'
import Image from 'next/image'
import { Breadcrumbs } from '@/app/ui/navigation/Breadcrumbs'

export default function ContentPageLayout() {
  return (
    <div className="absolute top-0 h-[25rem] w-full">
      <Image
        src={BackgroundImage}
        alt="background image"
        className="h-full w-full"
        priority
      />
      <Breadcrumbs />
    </div>
  )
}
