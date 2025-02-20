import data from '@/app/assets/data/performance/permission/environment.js'
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
        colWidths={[15, 15, 15, 15]}
      />
    </section>
  )
}
