import data from '@/app/assets/data/performance/disaster/pre.js'
import { PageTitle } from '@/app/ui/PageTitle'
import { PerformanceCardList } from '@/app/ui/performance/PerformanceCardList'

export default function Page() {
  const { title, body } = data
  return (
    <section className="w-full">
      <PageTitle title={title} />
      <PerformanceCardList data={body} />
    </section>
  )
}
