import { getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, flexRender } from '@tanstack/react-table';
import React, { useMemo, useState } from 'react'
import { Columns } from './Columns';

const CompanyTable = ({data}) => {

  const [pageIndex, setPageIndex] = useState(0);
  const [sorting,setSorting] = useState([])

  const paginationState = useMemo(() => ({
    pageIndex: pageIndex,
    pageSize: 15
  }),[pageIndex])

  const table = useReactTable({
    data,
    columns: Columns,
    state: {
      pagination: paginationState,
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <div className='container'>
      <table className='table table-bordered table-striped'>
      <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='h-2'/>
      <div className='flex items-center gap-2'>
        <button className='border rounded p-1' onClick={() => setPageIndex(pageIndex - 1)} disabled={!table.getCanPreviousPage()}>{'<'}</button>
        <button className='border rounded p-1' onClick={() => setPageIndex(pageIndex + 1)} disabled={!table.getCanNextPage()}>{'>'}</button>
      </div>
    </div>
  )
}

export default CompanyTable