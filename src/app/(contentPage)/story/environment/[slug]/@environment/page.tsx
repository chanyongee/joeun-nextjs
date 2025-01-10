import { VerboseItem } from '@/app/ui/story/VerboseItem'
import { PageProps } from '@/types'

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const title = '환경영향평가'
  const desc = `환경에 영향을 미치는 계획이나 사업을 승인하기 전에 해당 사업이 환경에 미치는 영향을 미리 조사 · 예측 · 평가하여
해로운 환경 영향을 피하거나 제거하거나 감소시킬 수 있는 방안을 마련하는 제도`
  const sub = [
    {
      title: '실시근거',
      desc: [
        '환경영향평가법 제22조 (환경영향평가의 대상)',
        '환경영향평가법 시행령 제31조 (환경영향평가 대상사업 및 범위)',
        '환경영향평가법 시행령 [별표 3] (환경영향평가 대상사업의 구체적인 종류, 범위 및 협의요청 시기)',
      ],
    },
  ]
  return (
    <VerboseItem
      title={title}
      desc={desc}
      sub={sub}
      link="/"
      scrollIntoView={slug === 'environment'}
    />
  )
}
