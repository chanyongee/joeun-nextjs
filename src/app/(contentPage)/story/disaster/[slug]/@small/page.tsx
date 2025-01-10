import { VerboseItem } from '@/app/ui/story/VerboseItem'
import { PageProps } from '@/types'

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const title = '소규모재해영향평가'
  const desc = `소규모재해영향평가는 재해영향평가에 해당되는 개발 사업 중 특정 규모의 개발사업에 대해 자연재해 유발 가능성을 평가하여 대응 방안을 마련하되, 필요한 개발사업 구역의 지형 및 지질 조사, 수문학적 및 기상학적 예측, 생태계 분석 등에서 필요한 항목만을 선별하여 간소화된 절차로 평가를 실시하는 제도입니다.
소규모재해영향평가는 재해영향평가보다 절차와 비용이 간소화되어 있어, 특히 작은 규모의 개발사업에 적합하지만 평가 결과에 대한 신뢰도 또한 높이 유지되어야 합니다. 따라서 저희 회사는 소규모재해영향평가를 실시할 때 전문적인 인력과 과학적인 분석 방법을 적극 활용하여 신뢰성을 확보하고 있습니다.`
  return (
    <VerboseItem
      title={title}
      desc={desc}
      link="/"
      scrollIntoView={slug === 'small'}
    />
  )
}
