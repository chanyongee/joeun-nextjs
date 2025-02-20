import data from '@/app/assets/data/performance/permission/water-measurement.js'
import { PageTitle } from '@/app/ui/PageTitle'
import { PerformanceTable } from '@/app/ui/performance/PerformanceTable'

export default function Page() {
  const { title, headers, body } = data
  return (
    <section className="w-full">
      <PageTitle title={title} />
      <PerformanceTable
        headers={headers}
        body={body}
        colWidths={[10, , 10, 10]}
      />
    </section>
  )
}
