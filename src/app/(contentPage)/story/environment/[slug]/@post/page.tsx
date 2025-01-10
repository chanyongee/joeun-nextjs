import { VerboseItem } from '@/app/ui/story/VerboseItem'
import { PageProps } from '@/types'

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const title = '사후환경영향조사'
  const desc = `환경영향평가 대상사업의 공사 시 및 운영 시 발생 가능한 주변 환경에 미치는 피해를 방지하기 위해
평가항목별로 환경영향을 조사하고 그 결과를 환경부장관 및 승인기관의 장에게 통보하는 제도`
  const sub = [
    {
      title: '실시근거',
      desc: [
        '환경영향평가법 제36조 (사후환경영향조사)',
        '환경영향평가법 시행규칙 제19조 (사후환경영향조사)',
        '환경영향평가법 시행규칙 [별표 1] (사후환경영향조사의 대상사업 및 기간)',
      ],
    },
  ]
  return (
    <VerboseItem
      title={title}
      desc={desc}
      sub={sub}
      link="/"
      scrollIntoView={slug === 'post'}
    />
  )
}
