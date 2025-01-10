import { VerboseItem } from '@/app/ui/story/VerboseItem'
import { PageProps } from '@/types'

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const title = '재해영향평가'
  const desc = `재해영향평가는 개발사업의 시행 이전에 사업구역의 자연재해 유발 가능성을 예측하고, 이에 대한 저감방안과 저감대책을 마련하여 재해영향을 최소화하는 제도입니다.
당사는 사업 개발에 앞서 사업 구역 내 자연재해에 대한 영향을 사전에 예측하고 대비하기 위해 재해영향평가를 시행하고 있습니다. 이를 통해 사업 구역 내 홍수, 산사태 등의 자연재해 유발 가능성을 분석하고, 이에 대한 대응 계획을 마련하여 재해영향을 최소화할 수 있도록 노력하고 있습니다.
또한 전문적인 인력과 과학적인 분석 방법을 활용하여 사업 구역의 지질, 지형, 기상, 기후, 수문, 생태학 등 다양한 자료를 수집하여 자연재해 유발 가능성을 분석한 결과와 함께, 홍수, 산사태 등 자연재해 대응 계획 및 저감방안 등을 고려한 체계적인 재해영향평가를 수행하고 있습니다.
나아가 지속적으로 재해영향평가 제도를 개선하고 발전시켜 나가며, 안전하고 지속 가능한 사업을 추진하기 위해 노력할 것을 약속드립니다.`
  return (
    <VerboseItem
      title={title}
      desc={desc}
      link="/"
      scrollIntoView={slug === 'disaster'}
    />
  )
}
