import Image from '@/app/assets/images/환경영향평가절차도.webp'
import { FullStory } from '@/app/ui/story/FullStory'

export default function StoryPage() {
  return (
    <FullStory
      imageSrc={Image}
      imageTitle="환경영향평가 절차도"
      title1="지속가능한 개발을 위한"
      title2="환경영향평가"
      description={`수 십년간의 경력・최고 수준의 인력을 토대로
        환경영향평가에 대한 Total Solution을 제공합니다.`}
      subDescription={`환경영향을 조사, 예측, 분석하여 최적의 저감방안을 수립하는 등 지속가능한 개발을 유도하여 쾌적한 환경이 유지될 수 있도록 다양한 환경분야 업무를 수행하고 있습니다.

      환경영향평가에 소요되는 시간과 환경비용을 최소화하여 사업에 대한 경제성을 확보하고 최적의 환경 저감방안을 도출, 적용하여 고객만족을 실현하고 있습니다.`}
    />
  )
}
