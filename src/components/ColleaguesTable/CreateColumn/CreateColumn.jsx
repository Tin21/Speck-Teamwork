import { createColumnHelper } from '@tanstack/table-core';
import { ColumnHeader } from '../ColumnHeader/ColumnHeader';
import { Button } from '../../../utils/styles/generalStyles';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: () => <ColumnHeader columnName="First Name" />,
    size: 50,
    // footer: (info) => info.column.id,
  }),

  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => info.renderValue(),
    header: () => <ColumnHeader columnName="Last Name" />,
  }),

  columnHelper.accessor('email', {
    header: 'Email',
    cell: (info) => info.renderValue(),
    size: 200,
  }),

  columnHelper.accessor('year', {
    header: 'Year',
    cell: (info) => info.renderValue(),
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
];

export default columns;
