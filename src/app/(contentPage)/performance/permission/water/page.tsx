import data from '@/app/assets/data/performance/permission/water.js'
import { PageTitle } from '@/app/ui/PageTitle'
import { PerformanceTable } from '@/app/ui/performance/PerformanceTable'

export default function Page() {
  return (
    <section className="flex w-full flex-col gap-4">
      {data.map(({ title, headers, body }) => (
        <section key={title}>
          <PageTitle title={title} />
          <PerformanceTable
            headers={headers}
            body={body}
            colWidths={[10, , 10, 10]}
          />
        </section>
      ))}
    </section>
  )
}
