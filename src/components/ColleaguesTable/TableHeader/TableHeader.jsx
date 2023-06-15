/* eslint-disable react/prop-types */

import HeaderEntriesDropdown from '../HeaderEntriesDropdown/HeaderEntriesDropdown';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import { TableHeaderWrapper } from './TableHeaderStyle';

const TableHeader = ({ table, setData }) => {
  return (
    <TableHeaderWrapper>
      <HeaderEntriesDropdown table={table} />
      <HeaderSearch setData={setData} />
    </TableHeaderWrapper>
  );
};

export default TableHeader;
