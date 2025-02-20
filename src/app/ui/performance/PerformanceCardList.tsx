import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type PerformanceCardListProps = {
  data: Record<string, string | number>[]
}

export function PerformanceCardList({ data }: PerformanceCardListProps) {
  return (
    <>
      <section className="grid grid-cols-3 gap-8">
        {data.map(({ 제목, 위치, 기간, 사업자명, 개요 }) => (
          <Card key={제목}>
            <CardHeader>
              <CardTitle>{제목}</CardTitle>
              <CardDescription>{사업자명}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{위치}</p>
              <p>{개요}</p>
            </CardContent>
            <CardFooter>
              <p>{기간}</p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  )
}
