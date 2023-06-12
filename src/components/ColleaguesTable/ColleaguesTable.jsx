import React from 'react';
import PropTypes from 'prop-types';
import { colleaguesData } from '../../utils/mock/colleaguesTest';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  StyledCell,
  StyledHeaderCell,
  StyledHeaderRow,
  StyledInnerCell,
  StyledRow,
  StyledTable,
  TableContainer,
} from './ColleaguesTableStyle';
import { Button } from '../../utils/styles/generalStyles';

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: () => <span>First Name</span>,

    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),

  columnHelper.accessor((row) => row.email, {
    id: 'actions',
    header: 'Actions',
    cell: (info) => {
      const mailTo = () => {
        window.open(`mailto:${info.getValue()}`, '_blank');
      };

      return (
        <Button isSecondary onClick={mailTo}>
          Send email
        </Button>
      );
    },
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('year', {
    header: 'Year',
    cell: (info) => info.renderValue(),
  }),
];

function ColleaguesTable() {
  const [data, setData] = React.useState(() => [...colleaguesData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <StyledHeaderRow key={`headerGroup_${index}`}>
              {headerGroup.headers.map((header, innerIndex) => (
                <StyledHeaderCell key={`headerCell_${header.id}_${innerIndex}`}>
                  <StyledInnerCell>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </StyledInnerCell>
                </StyledHeaderCell>
              ))}
            </StyledHeaderRow>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <StyledRow key={`row_${row.id}_${index}`}>
              {row.getVisibleCells().map((cell, innerIndex) => (
                <StyledCell key={`cell_${cell.id}_${innerIndex}`}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledCell>
              ))}
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default ColleaguesTable;
