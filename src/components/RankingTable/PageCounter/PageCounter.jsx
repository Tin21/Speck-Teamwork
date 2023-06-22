/* eslint-disable react/prop-types */

import { PageCounterWrapper } from './PageCounterStyle';

function calculateFirstEntryOfPage(table) {
  return (
    table.getState().pagination.pageSize *
      table.getState().pagination.pageIndex +
    1
  );
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
    <PageCounterWrapper>
      Showing {calculateFirstEntryOfPage(table)} to{' '}
      {calculateLastEntryOfPage(table)} of {calculateLastEntryOfTable(table)}{' '}
      entries
    </PageCounterWrapper>
  );
};

export default TablePageCounter;
