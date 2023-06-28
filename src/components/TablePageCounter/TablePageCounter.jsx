/* eslint-disable react/prop-types */

import { TablePageCounterWrapper } from './TablePageCounterStyle';

function calculateFirstEntryOfPage(table) {
  return table.getPrePaginationRowModel().rows.length == 0
    ? 0
    : table.getState().pagination.pageSize *
        table.getState().pagination.pageIndex +
        1;
}

function calculateLastEntryOfPage(table) {
  return (
    table.getState().pagination.pageSize *
      table.getState().pagination.pageIndex +
    table.getRowModel().rows.length
  );
}

function calculateLastEntryOfTable(table) {
  return table.getPrePaginationRowModel().rows.length;
}

const TablePageCounter = ({ table }) => {
  return (
    <TablePageCounterWrapper>
      Showing {calculateFirstEntryOfPage(table)} to{' '}
      {calculateLastEntryOfPage(table)} of {calculateLastEntryOfTable(table)}{' '}
      entries
    </TablePageCounterWrapper>
  );
};

export default TablePageCounter;
