import { VerboseItem } from '@/app/ui/story/VerboseItem'
import { PageProps } from '@/types'

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const title = '재해영향성검토'
  const desc = `재해영향성검토는 행정계획으로 인해 발생할 수 있는 자연재해에 대한 영향을 미리 예측하고 분석하여 대책을 마련하는 제도입니다. 
  이를 통해 개발사업 등의 행정계획이 자연재해 발생 시 예방 또는 대응을 위한 안전성을 보장하도록 합니다.
저희는 다양한 규모의 행정계획에 대해 정확하고 체계적인 재해영향성검토를 실시하며, 전문적인 인력과 과학적인 분석 방법을 활용하여 안전성과 신뢰성을 보장합니다.`
  return (
    <VerboseItem
      title={title}
      desc={desc}
      link="/"
      scrollIntoView={slug === 'review'}
    />
  )
}
