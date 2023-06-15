import { createColumnHelper } from '@tanstack/table-core';
import { ColumnHeader } from '../ColumnHeader/ColumnHeader';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('ranking', {
    cell: (info) => info.column.id,
    header: () => <ColumnHeader columnName="Ranking" />,
    /* size: 4, */
  }),
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <ColumnHeader columnName="Student" />,
    size: 50,
    // footer: (info) => info.column.id,
  }),

  columnHelper.accessor('points', {
    cell: (info) => info.renderValue(),
    header: () => <ColumnHeader columnName="Points" />,
    size: 50,
  }),

  columnHelper.accessor('percentage', {
    cell: (info) => info.renderValue(),
    header: () => <ColumnHeader columnName="Percentage" />,
    size: 50,
  }),

  /* columnHelper.accessor('badges', {
    cell: (info) => info.renderValue(),
    header: () => <ColumnHeader columnName="Percentage" />,
    size: 50,
  }), */
];

export default columns;
