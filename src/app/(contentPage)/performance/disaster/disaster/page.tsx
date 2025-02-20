import data from '@/app/assets/data/performance/disaster/disaster.js'
import { PerformanceCardList } from '@/app/ui/performance/PerformanceCardList'
import { PageTitle } from '@/app/ui/PageTitle'

export default function Page() {
  const { title, body } = data
  return (
    <>
      <PageTitle title={title} />
      <PerformanceCardList data={body} />
    </>
  )
}
