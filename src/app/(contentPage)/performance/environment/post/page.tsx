import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import data from '@/app/assets/data/performance/environment/post.js'

export default function Page() {
  const { title, headers, body } = data[0]
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {data[0].headers.map((header: string) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data[0].body.map((row: string[], index: number) => (
          <TableRow key={index}>
            {row.map((cell: string) => (
              <TableCell key={cell[0]}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
