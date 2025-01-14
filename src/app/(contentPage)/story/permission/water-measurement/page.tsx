import { SimpleStoryUpper } from '@/app/ui/story/SimpleStoryUpper'
import { VerboseItemBisect } from '@/app/ui/story/VerboseItemBisect'
import DiagramImage from '@/app/assets/images/수질측정기기절차도.webp'

export default function Page() {
  const title = '수질측정기기관리'
  const desc =
    '측정기기 관리대행 파트는 수질 TMS(Tele Monitoring System) 및 수질 계측기기 등 수질오염방지시설의 하·폐수의 원수 또는 방류수를 전문 측정기기로 정밀 측정하여 수질 오염도를 실시간 모니터링 함으로써 물환경보전 및 사업장 수질처리공정의 개선에 기여하고 있습니다.'

  const itemTitle = '사업 범위'
  const itemDesc = `수질TMS(Tele Monitoring System) 측정기기 관리대행
수질계측기기 관리대행`

  const diagramTitle = '수질측정기기 관리대행 절차도'

  return (
    <div className="flex w-full flex-col gap-12">
      <SimpleStoryUpper title={title} desc={desc} link={''} />
      <VerboseItemBisect title={itemTitle} desc={itemDesc} />
      <VerboseItemBisect title={diagramTitle} img={DiagramImage} />
    </div>
  )
}
