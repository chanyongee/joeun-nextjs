import { SimpleStoryUpper } from '@/app/ui/story/SimpleStoryUpper'
import { VerboseItemBisect } from '@/app/ui/story/VerboseItemBisect'

export default function Page() {
  const title = '환경전문공사(수질・대기) 및\n수질환경관리'
  const desc = `환경전문공사란 오염물질 배출 시설에서 발생하는 유해 물질을 제거하거나 줄이기 위한 장비, 기계, 부품 및 기구 등을 설계하고 구축하는 방지시설 전체 또는 부분을 설계·시공하는 작업입니다.
저희는 이 과정에서 단순 설계·시공이 아닌 근무자들의 작업환경과 동선 등을 고려하여 종합적인 설계와 시공을 진행합니다. 또한, 기존 시설의 부족한 부분을 보완하고 용량을 적절히 조정하여 인허가 내용과 부딪히지 않아 사업자와 근무자 모두가 만족할 수 있는 공사를 진행합니다.
`

  const itemTitle = '사업 범위'
  const itemDesc = `수질환경 설계 및 시공, 감리
수질, 대기 오염방지시설 설계시공
개인하수처리시설 설계시공 및 관리
수질관리대행
공공하수도 관리대행
공공하수관거 관리대행
하·폐수처리시설 위탁관리`

  return (
    <div className="flex w-full flex-col gap-12">
      <SimpleStoryUpper title={title} desc={desc} link={''} />
      <VerboseItemBisect title={itemTitle} desc={itemDesc} />
    </div>
  )
}
