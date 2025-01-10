import { VerboseItem } from '@/app/ui/story/VerboseItem'
import { PageProps } from '@/types'

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const title = '전략환경영향평가'
  const desc = `환경에 영향을 미치는 상위계획을 수립할 때에 환경보전계획과의 부합 여부 확인 및 대안의 설정 · 분석 등을 통하여
환경적 측면에서 해당 계획의 적정성 및 입지의 타당성 등을 검토하는 제도`
  const sub = [
    {
      title: '실시근거',
      desc: [
        '환경영향평가법 제9조 (전략환경영향평가의 대상)',
        '환경영향평가법 시행령 제7조 (전략환경영향평가 대상계획의 종류)',
        '환경영향평가법 시행령 [별표 2] (전략환경영향평가 대상계획 및 협의 요청시기)',
      ],
    },
  ]
  return (
    <VerboseItem
      title={title}
      desc={desc}
      sub={sub}
      link="/"
      scrollIntoView={slug === 'strategy'}
    />
  )
}
