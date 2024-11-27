import Image from '@/app/assets/images/재해영향평가절차도.webp'
import { FullStory } from '@/app/ui/story/FullStory'

export default function StoryPage() {
  return (
    <FullStory
      imageSrc={Image}
      imageTitle="재해영향평가 절차도"
      title1="안전과 예방을 위한"
      title2="재해영향평가"
      description={`재해영향평가 제도의 시초부터 함께한
전문가로부터 Solution을 제공합니다.`}
      subDescription={`개발사업의 시행으로 인해 발생 할 수 있는 재해 영향 요인을 개발사업 시행 전에 명확히 조사ㆍ예측ㆍ분석하고 최적의 저감 방안과 저감대책을 수립하여 개발로 인한 재해의 영향을 최소화 할 수 있도록 업무를 수행하고 있습니다.

재해 영향 요인의 정확한 판단을 통해 최적의 비용으로 우수한 재해 평가를 작성하고 보다 안전한 저감 방안과 저감대책을 수립함으로써 체계적인 유지관리계획을 제시하고 있습니다.`}
    />
  )
}
