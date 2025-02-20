import { PageTitle } from '@/app/ui/PageTitle'
import { PerformanceTable } from '@/app/ui/performance/PerformanceTable'
import data from '@/app/assets/data/performance/disaster/small-scale.js'

export default function Page() {
  return (
    <section className="w-full">
      <PageTitle title="소규모재해영향평가 실적" />
      <PerformanceTable
        headers={data.headers}
        body={data.body}
        colWidths={[10, , 20]}
      />
    </section>
  )
}
