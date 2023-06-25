import { createColumnHelper } from '@tanstack/table-core';
import { ColumnHeader } from '../ColumnHeader/ColumnHeader';
import { Button } from '../../../utils/styles/generalStyles';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('first_name', {
    cell: (info) => info.getValue(),
    header: () => <ColumnHeader columnName="First Name" />,
  }),

  columnHelper.accessor('last_name', {
    cell: (info) => info.getValue(),
    header: () => <ColumnHeader columnName="Last Name" />,
  }),

  columnHelper.accessor((row) => row.email, {
    id: 'actions',
    header: 'Action',
    enableSorting: false,
    cell: (info) => {
      const mailTo = () => {
        window.open(`mailto:${info.getValue()}`, '_blank');
      };

      return (
        <Button
          isSecondary
          onClick={mailTo}
          style={{
            padding: '6px 10px',
            width: 'auto',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '16px',
            order: '3',
          }}
        >
          Send email
        </Button>
      );
    },
  }),

  columnHelper.accessor('email', {
    header: () => <ColumnHeader columnName="Email" />,
    cell: (info) => info.renderValue(),
  }),

  columnHelper.accessor('active_faculty_year', {
    header: 'Year',
    cell: (info) => info.renderValue() || 'NS',
    enableSorting: false,
  }),
];

export default columns;
