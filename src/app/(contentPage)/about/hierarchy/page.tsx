import HierarchyImage from '@/app/assets/images/조직도.webp'
import Image from 'next/image'

export default function AboutHierarchyPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">조직도</h1>
      <Image src={HierarchyImage} alt="hierarchy image"></Image>
    </section>
  )
}
