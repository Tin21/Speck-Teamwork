import { useContext, useEffect, useState } from 'react';
import { colleaguesData } from '../../utils/mock/colleaguesTest';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  BodyTable,
  HeaderTable,
  StyledCell,
  StyledHeaderCell,
  StyledHeaderRow,
  StyledRow,
  StyledTable,
  TableContainer,
} from './ColleaguesTableStyle';
import columns from './CreateColumn/CreateColumn';
import TableFooter from '../TableFooter/TableFooter';
import TableHeader from '../TableHeader/TableHeader';
import { entriesLarge } from '../../utils/mock/entriesLarge';
import { getUsers } from '../../api/users';

function ColleaguesTable() {
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState();

  const getTableData = async () => {
    let usersList = await getUsers(localStorage.getItem('jwt_token'));
    console.log(usersList);

    setData(usersList.data);
  };

  useEffect(() => {
    getTableData();
  }, []);

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
        pageSize: 12,
      },
    },
  });

  return (
    <TableContainer>
      <TableHeader
        table={table}
        setData={setData}
        dataList={colleaguesData}
        placeholderText={'Search name, email or year'}
        byRankIsTrue={false}
        entriesList={entriesLarge}
      />
      <StyledTable>
        <HeaderTable>
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
        </HeaderTable>

        <BodyTable>
          {table.getRowModel().rows.map((row) => (
            <StyledRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledCell>
              ))}
            </StyledRow>
          ))}
        </BodyTable>
      </StyledTable>
      <TableFooter table={table} />
    </TableContainer>
  );
}

export default ColleaguesTable;
