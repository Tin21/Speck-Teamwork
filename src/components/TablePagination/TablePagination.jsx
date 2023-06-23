/* eslint-disable react/prop-types */
import {
  PaginationArrowWrapper,
  PaginationNumberWrapper,
  PaginationWrapper,
  PageLeft,
  PageRight,
} from './TablePaginationStyle';

const TablePagination = ({ table }) => {
  return (
    <PaginationWrapper>
      <PaginationArrowWrapper
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <PageLeft />
      </PaginationArrowWrapper>
      {table.getState().pagination.pageIndex + 1 - 2 > 0 && (
        <PaginationNumberWrapper
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
        >
          1
        </PaginationNumberWrapper>
      )}
      {table.getState().pagination.pageIndex + 1 - 3 > 0 && (
        <PaginationNumberWrapper>...</PaginationNumberWrapper>
      )}
      {table.getState().pagination.pageIndex + 1 - 1 > 0 && (
        <PaginationNumberWrapper
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          {table.getState().pagination.pageIndex}
        </PaginationNumberWrapper>
      )}
      <PaginationNumberWrapper
        isCurrent
        onClick={() =>
          table.setPageIndex(table.getState().pagination.pageIndex)
        }
      >
        {table.getState().pagination.pageIndex + 1}
      </PaginationNumberWrapper>
      {table.getPageCount() - (table.getState().pagination.pageIndex + 1) >
        1 && (
        <PaginationNumberWrapper
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          {table.getState().pagination.pageIndex + 2}
        </PaginationNumberWrapper>
      )}
      {table.getPageCount() - (table.getState().pagination.pageIndex + 1) >
        2 && <PaginationNumberWrapper>...</PaginationNumberWrapper>}
      {table.getPageCount() - (table.getState().pagination.pageIndex + 1) >
        0 && (
        <PaginationNumberWrapper
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {table.getPageCount()}
        </PaginationNumberWrapper>
      )}
      <PaginationArrowWrapper
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <PageRight />
      </PaginationArrowWrapper>
    </PaginationWrapper>
  );
};

export default TablePagination;
