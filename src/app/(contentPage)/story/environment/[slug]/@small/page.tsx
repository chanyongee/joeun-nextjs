import { VerboseItem } from '@/app/ui/story/VerboseItem'
import { PageProps } from '@/types'

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const title = '소규모환경영향평가'
  const desc = `환경보전이 필요한 지역이나 난개발이 우려되어 계획적 개발이 필요한 지역에서
개발사업을 시행할 때에 입지의 타당성과 환경에 미치는 영향을 미리 예측하여 환경보전방안을 마련하는 제도`
  const sub = [
    {
      title: '실시근거',
      desc: [
        '환경영향평가법 제43조 (소규모 환경영향평가의 대상)',
        '환경영향평가법 시행령 제59조 (소규모 환경영향평가 대상사업 및 범위)',
        '환경영향평가법 시행령 [별표 4] (소규모 환경영향평가 대상사업의 구체적인 종류, 범위 및 협의요청 시기)',
      ],
    },
  ]
  return (
    <VerboseItem
      title={title}
      desc={desc}
      sub={sub}
      link="/"
      scrollIntoView={slug === 'small'}
    />
  )
}
