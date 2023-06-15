/* eslint-disable react/prop-types */
import {
  PaginationArrowWrapper,
  PaginationNumberWrapper,
  PaginationWrapper,
} from './PaginationStyle';

const Pagination = ({ table }) => {
  return (
    <PaginationWrapper>
      <PaginationArrowWrapper
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        &lt;
      </PaginationArrowWrapper>
      <PaginationNumberWrapper
        isCurrent
        onClick={() =>
          table.setPageIndex(table.getState().pagination.pageIndex)
        }
      >
        {/* TODO prouci kak se krece kad se klikne, jel uvijek trenutna stranica na prvoj poziciji ili? */}
        {table.getState().pagination.pageIndex + 1}
      </PaginationNumberWrapper>
      <PaginationNumberWrapper
        onClick={() =>
          table.setPageIndex(table.getState().pagination.pageIndex + 1)
        }
      >
        {table.getState().pagination.pageIndex + 2}
      </PaginationNumberWrapper>
      <PaginationNumberWrapper>...</PaginationNumberWrapper>
      <PaginationNumberWrapper
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        {table.getPageCount()}
      </PaginationNumberWrapper>
      <PaginationArrowWrapper
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        &gt;
      </PaginationArrowWrapper>
    </PaginationWrapper>
  );
};

export default Pagination;
