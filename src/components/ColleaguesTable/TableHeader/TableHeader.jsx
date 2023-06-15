/* eslint-disable react/prop-types */

import HeaderEntriesDropdown from '../HeaderEntriesDropdown/HeaderEntriesDropdown';

const TableHeader = ({ table }) => {
  return (
    <>
      <HeaderEntriesDropdown table={table} />
    </>
  );
};

export default TableHeader;
