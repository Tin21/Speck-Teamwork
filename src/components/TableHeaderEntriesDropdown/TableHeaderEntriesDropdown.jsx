/* eslint-disable react/prop-types */

import {
  HeaderEntriesText,
  HeaderEntriesWrapper,
  HeaderSelect,
} from './TableHeaderEntriesDropdownStyle';

const TableHeaderEntriesDropdown = ({ table, entriesList }) => {
  return (
    <HeaderEntriesWrapper>
      <HeaderEntriesText>Show</HeaderEntriesText>
      <HeaderSelect
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {entriesList.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </HeaderSelect>
      <HeaderEntriesText isEntries>entries</HeaderEntriesText>
    </HeaderEntriesWrapper>
  );
};

export default TableHeaderEntriesDropdown;
