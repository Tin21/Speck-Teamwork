import { useState } from 'react';
import { colleaguesData } from '../../utils/mock/colleaguesTest';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  StyledCell,
  StyledHeaderCell,
  StyledHeaderRow,
  StyledRow,
  StyledTable,
  TableContainer,
} from './ColleaguesTableStyle';
import columns from './CreateColumn/CreateColumn';
import TableFooter from './TableFooter/TableFooter';
import TableHeader from './TableHeader/TableHeader';

function ColleaguesTable() {
  const [data, setData] = useState(() => [...colleaguesData]);
  const [sorting, setSorting] = useState();

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <TableContainer>
      <TableHeader table={table} />

      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <StyledHeaderRow key={index}>
              {headerGroup.headers.map((header) => (
                <StyledHeaderCell key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={
                        header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : ''
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                  )}
                </StyledHeaderCell>
              ))}
            </StyledHeaderRow>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <StyledRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledCell>
              ))}
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
      <TableFooter table={table} />
    </TableContainer>
  );
}

export default ColleaguesTable;
