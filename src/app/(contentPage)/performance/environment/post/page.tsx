import data from '@/app/assets/data/performance/environment/post.js'
import { PageTitle } from '@/app/ui/PageTitle'
import { PerformanceCardList } from '@/app/ui/performance/PerformanceCardList'

export default function Page() {
  const { title, body } = data
  return (
    <section>
      <PageTitle title={title} />
      <PerformanceCardList data={body} />
    </section>
  )
}
