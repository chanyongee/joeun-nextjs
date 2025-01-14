import { SimpleStoryUpper } from '@/app/ui/story/SimpleStoryUpper'
import { VerboseItemBisect } from '@/app/ui/story/VerboseItemBisect'
import DiagramImage from '@/app/assets/images/조경절차도.webp'

export default function Page() {
  const title = '조경설계'
  const desc = `조경분야는 산업화와 도시화 진전에 따른 자연환경의 파괴, 생활수준 향상에 따른 환경질의 개선과 환경의식의 향상에 따른 인간과 자연이 공생 하는 친환경 국토 및 도시건설에 기여하고 있는 분야입니다. 본 조경분야는 국토 전반에 걸친 공간에 환경친화적 계획, 설계 및 관리를 담당하고 있으며 공공기관은 물론 민간개발의 사업에도 적극 참여하여 만족할만한 성과를 이루어내고 있습니다.`

  const itemTitle = '업무영역'
  const itemDesc = `도시설계(마을만들기 사업 기본 및 설계) 
도시개발(도시개발사업 및 주택 개발 사업 시 기반시설인 공원 및 녹지 등 계획, 설계)
산업단지조성(단지 내 기부체납·공원 및 녹지 등 계획설계)
공원계획(자연공원, 도시공원)
도시림 숲 조성
도시녹화 계획
관광지·유원지·휴양지 체육시설 계획 및 설계
도로조경계획(I·C, J·C 등)
시가지광장 및 건축관련 녹지공간계획
단지조경계획
환경복원계획
`

  const diagramTitle = '조경설계도'
  const diagramImg = DiagramImage

  return (
    <div className="flex w-full flex-col gap-12">
      <SimpleStoryUpper title={title} desc={desc} link={''} />
      <VerboseItemBisect title={itemTitle} desc={itemDesc} />
      <VerboseItemBisect title={diagramTitle} img={diagramImg} />
    </div>
  )
}
