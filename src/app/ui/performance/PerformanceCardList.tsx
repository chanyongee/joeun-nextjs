import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type PerformanceCardListProps = {
  data: {
    body: string[][]
    title: string
    headers: string[]
    grid: boolean
  }[]
}

export function PerformanceCardList({ data }: PerformanceCardListProps) {
  return (
    <>
      <h1 className="mb-8 whitespace-pre-line text-5xl font-medium">
        {data[0].title}
      </h1>
      <section className="grid grid-cols-3 gap-8">
        {data[0].body.map(([title, location, duration, owner, desc]) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{owner}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{location}</p>
              <p>{desc}</p>
            </CardContent>
            <CardFooter>
              <p>{duration}</p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  )
}
