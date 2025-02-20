import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { licenses, patents } from '@/app/assets/data/licenses'
import { PageTitle } from '@/app/ui/PageTitle'

export default function AboutLicensePage() {
  return (
    <section className="flex w-full flex-col gap-16">
      <section className="flex flex-col gap-8">
        <PageTitle title="면허 현황" />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2 text-center text-lg">구분</TableHead>
              <TableHead className="w-1/2 text-center text-lg">
                등록번호
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {licenses.map(license => (
              <TableRow key={license.name + license.no}>
                <TableCell className="text-center text-lg">
                  {license.name}
                </TableCell>
                <TableCell className="text-center text-lg">
                  {license.no}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold">특허 보유 현황</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/3 text-center text-lg">명칭</TableHead>
              <TableHead className="text-center text-lg">출원번호</TableHead>
              <TableHead className="text-center text-lg">발행처</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patents.map(patent => (
              <TableRow key={patent.name + patent.no}>
                <TableCell className="text-center text-lg">
                  {patent.name}
                </TableCell>
                <TableCell className="text-center text-lg">
                  {patent.no}
                </TableCell>
                <TableCell className="text-center text-lg">
                  {patent.from}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </section>
  )
}
