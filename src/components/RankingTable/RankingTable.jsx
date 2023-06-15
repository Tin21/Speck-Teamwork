import React, { useState } from 'react';
import { rankingData } from '../../utils/mock/rankingData';
import {
  StyledCell,
  StyledHeaderCell,
  StyledHeaderRow,
  StyledRow,
  StyledTable,
  TableContainer,
} from './RankingTableStyle';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import columns from './Column/Column';
import Header from './RankingTableHeader/Header';
import Footer from './Footer/Footer';

const RankingTable = () => {
  const [data, setData] = useState(() => [...rankingData]);
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
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <TableContainer>
      <Header table={table} setData={setData}></Header>
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
      <Footer table={table} />
    </TableContainer>
  );
};

export default RankingTable;
