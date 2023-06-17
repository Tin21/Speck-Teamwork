import {
  PaginationArrowWrapper,
  PaginationNumberWrapper,
  PaginationWrapper,
  PageLeft,
  PageRight,
} from './PaginationStyle';
import React, { useState } from 'react';

const Pagination = ({ table }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const incrementPageNumber = (number) => {
    setPageNumber(pageNumber + number);
  };

  const changePageNumber = (number) => {
    setPageNumber(number);
  };

  return (
    <PaginationWrapper>
      <PaginationArrowWrapper
        onClick={() => {
          table.previousPage();
          incrementPageNumber(-1);
        }}
        disabled={!table.getCanPreviousPage()}
      >
        <PageLeft />
      </PaginationArrowWrapper>
      {pageNumber - 2 > 0 && (
        <PaginationNumberWrapper
          disabled={!table.getCanPreviousPage()}
          onClick={() => {
            table.setPageIndex(0);
            changePageNumber(1);
          }}
        >
          1
        </PaginationNumberWrapper>
      )}
      {pageNumber - 3 > 0 && (
        <PaginationNumberWrapper>...</PaginationNumberWrapper>
      )}
      {pageNumber - 1 > 0 && (
        <PaginationNumberWrapper
          disabled={!table.getCanPreviousPage()}
          onClick={() => {
            table.previousPage();
            incrementPageNumber(-1);
          }}
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
      {table.getPageCount() - pageNumber > 1 && (
        <PaginationNumberWrapper
          disabled={!table.getCanNextPage()}
          onClick={() => {
            table.nextPage();
            incrementPageNumber(1);
          }}
        >
          {table.getState().pagination.pageIndex + 2}
        </PaginationNumberWrapper>
      )}
      {table.getPageCount() - pageNumber > 2 && (
        <PaginationNumberWrapper>...</PaginationNumberWrapper>
      )}
      {table.getPageCount() - pageNumber > 0 && (
        <PaginationNumberWrapper
          onClick={() => {
            table.setPageIndex(table.getPageCount() - 1);
            changePageNumber(table.getPageCount());
          }}
          disabled={!table.getCanNextPage()}
        >
          {table.getPageCount()}
        </PaginationNumberWrapper>
      )}
      <PaginationArrowWrapper
        onClick={() => {
          table.nextPage();
          incrementPageNumber(1);
        }}
        disabled={!table.getCanNextPage()}
      >
        <PageRight />
      </PaginationArrowWrapper>
    </PaginationWrapper>
  );
};

export default Pagination;
