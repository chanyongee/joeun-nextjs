import data from '@/app/assets/data/performance/environment/environment.js'
import { PerformanceCardList } from '@/app/ui/performance/PerformanceCardList'

export default function Page() {
  return <PerformanceCardList data={data} />
}
