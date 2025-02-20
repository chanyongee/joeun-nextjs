'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationFirst,
  PaginationLast,
} from '@/components/ui/pagination'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import paginator from 'paginate-number'

type DataType = Record<string, string | number | undefined>
interface TableProps {
  headers: string[]
  body: DataType[]
  colWidths?: Array<number | undefined>
  pageSize?: number
}

const DEFAULT_PAGE_SIZE = 15

export function PerformanceTable({
  headers,
  body,
  colWidths,
  pageSize = DEFAULT_PAGE_SIZE,
}: TableProps) {
  const columns: ColumnDef<DataType>[] = headers.map(header => ({
    accessorKey: header,
    header,
  }))

  const table = useReactTable({
    data: body,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize,
      },
    },
  })

  const currentPage = table.getState().pagination.pageIndex + 1
  const paginateNumbers = paginator(body.length, currentPage, pageSize, 5)

  return (
    <>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, rowIndex) => (
                <TableHead
                  key={header.id}
                  style={{
                    width: colWidths?.[rowIndex] + '%',
                  }}
                  className="text-center"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id} className="text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationFirst onClick={() => table.setPageIndex(0)} />
          </PaginationItem>
          {paginateNumbers.map((n: number) => (
            <PaginationItem
              key={n}
              className={n === currentPage ? 'rounded-md bg-gray-50' : ''}
            >
              <PaginationButton onClick={() => table.setPageIndex(n - 1)}>
                {n}
              </PaginationButton>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationLast
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
