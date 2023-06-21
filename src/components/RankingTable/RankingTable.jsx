import React, { useState, useEffect } from 'react';
import { rankingData } from '../../utils/mock/rankingData';
import {
  StyledCell,
  StyledHeaderCell,
  StyledHeaderRow,
  StyledRow,
  StyledTable,
  TableContainer,
  TableWrapper,
  TableBody,
  HeaderCellContent,
  HeaderTable,
} from './RankingTableStyle';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import columns from './Column/Column';
import TableHeader from '../TableHeader/TableHeader';
import TableFooter from '../TableFooter/TableFooter';
import { entriesSmall } from '../../utils/mock/entriesSmall';
import { getUsers } from '../../api/users';

const RankingTable = () => {
  const [data, setData] = useState(() => [...rankingData]);
  const [sorting, setSorting] = useState();

  const getTableData = async () => {
    const loggedUser = localStorage.getItem('jwt_token');
    const users = await getUsers(loggedUser);
    console.log(loggedUser);
    users.data.map((user) => {
      //dodaje svakom useru ukupne bodove i postotak bodova
      var pointsUser = 0;
      user.user_lecture_criteria.map((lecturePoints) => {
        pointsUser += lecturePoints.points;
      });
      user.pointsUser = pointsUser;
      var percentage = Math.round((pointsUser / 219) * 100);
      user.percentage = `${percentage} %`;
    });
    console.log(users.data);
    users.data.sort((a, b) => b.pointsUser - a.pointsUser);
    var rank = 1;
    users.data.map((user) => {
      //dodaje svakom useru ranking
      user.ranking = rank;
      rank++;
    });
    setData(users.data);
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
        autoResetPageIndex: true,
        pageSize: 5,
      },
    },
  });

  return (
    <TableWrapper>
      <TableContainer>
        <TableHeader
          table={table}
          setData={setData}
          dataList={rankingData}
          placeholderText={'Search name or ranking'}
          byRankIsTrue={true}
          entriesList={entriesSmall}
        />
        <StyledTable>
          <HeaderTable>
            {table.getHeaderGroups().map((headerGroup, index) => (
              <StyledHeaderRow key={index}>
                {headerGroup.headers.map((header) => (
                  <StyledHeaderCell key={header.id}>
                    {header.isPlaceholder ? null : (
                      <HeaderCellContent
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </HeaderCellContent>
                    )}
                  </StyledHeaderCell>
                ))}
              </StyledHeaderRow>
            ))}
          </HeaderTable>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <StyledRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <StyledCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledCell>
                ))}
              </StyledRow>
            ))}
          </TableBody>
        </StyledTable>
        <TableFooter table={table} />
      </TableContainer>
    </TableWrapper>
  );
};

export default RankingTable;
