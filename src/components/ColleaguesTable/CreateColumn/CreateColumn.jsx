import { createColumnHelper } from '@tanstack/table-core';
import { ColumnHeader } from '../ColumnHeader/ColumnHeader';
import { Button } from '../../../utils/styles/generalStyles';
import Email from '../../Email/Email';
import { useContext } from 'react';
import { EmailContext } from '../../../context/EmailContext';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: () => <ColumnHeader columnName="First Name" />,
    // footer: (info) => info.column.id,
  }),

  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => info.renderValue(),
    header: () => <ColumnHeader columnName="Last Name" />,
  }),

  columnHelper.accessor((row) => row.email, {
    id: 'actions',
    header: 'Action',
    enableSorting: false,
    cell: () => {
      const { isPopupOpen, setIsPopupOpen, setEmailData } =
        useContext(EmailContext);

      const handleClickOpenPop = () => {
        setIsPopupOpen(true);
        setEmailData({
          recipient: '',
          subject: '',
          body: '',
        });
        window.scrollTo(0, 0);
      };

      const handleClosePopup = () => {
        setIsPopupOpen(false);
      };

      return (
        <>
          <Button
            isSecondary
            onClick={handleClickOpenPop}
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
          {isPopupOpen && <Email onClose={handleClosePopup} />}
        </>
      );
    },
  }),

  columnHelper.accessor('email', {
    header: () => <ColumnHeader columnName="Email" />,
    cell: (info) => info.renderValue(),
    enableSorting: false,
  }),

  columnHelper.accessor('year', {
    header: 'Year',
    cell: (info) => info.renderValue(),
    enableSorting: false,
  }),
];

export default columns;
