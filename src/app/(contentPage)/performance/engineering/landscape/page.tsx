import data from '@/app/assets/data/performance/engineering/landscape.js'
import { PageTitle } from '@/app/ui/PageTitle'
import { PerformanceTable } from '@/app/ui/performance/PerformanceTable'

export default function Page() {
  const { title, headers, body } = data
  return (
    <section>
      <PageTitle title={title} />
      <PerformanceTable
        headers={headers}
        body={body}
        colWidths={[, 10, 15, 10, 20]}
      />
    </section>
  )
}
