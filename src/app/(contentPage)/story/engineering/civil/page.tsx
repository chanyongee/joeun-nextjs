import { SimpleStoryUpper } from '@/app/ui/story/SimpleStoryUpper'
import { VerboseItemBisect } from '@/app/ui/story/VerboseItemBisect'
import Img from '@/app/assets/images/civil.jpg'

export default function Page() {
  const title = '토목설계 및 감리'
  const desc = `저희 회사는 아래 분야에서 전문성을 바탕으로 정확하고 안정적인 토목설계 및 감리를 제공하고 있습니다. 최신 기술과 노하우를 접목하고 환경 친화적 설계와 창의적인 아이디어를 결합하여 정부의 요구와 이를 사용하게 될 주민의 편의성에 부합하는 최적의 설계를 제공하여 고품질의 서비스를 제공하고 있습니다.`

  const itemTitle = '업무영역'
  const itemDesc = `국도 및 지방도 등의 도로설계
상수도 및 하수도 설계(마을하수도포함)`

  return (
    <div className="flex w-full flex-col gap-12">
      <SimpleStoryUpper title={title} desc={desc} link={''} img={Img} />
      <VerboseItemBisect title={itemTitle} desc={itemDesc} />
    </div>
  )
}
