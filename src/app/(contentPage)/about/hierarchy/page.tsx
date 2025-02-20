import HierarchyImage from '@/app/assets/images/조직도.webp'
import Image from 'next/image'
import { PageTitle } from '@/app/ui/PageTitle'

export default function AboutHierarchyPage() {
  return (
    <section>
      <PageTitle title="조직도" />
      <Image src={HierarchyImage} alt="hierarchy image"></Image>
    </section>
  )
}
