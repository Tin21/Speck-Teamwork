/* eslint-disable react/prop-types */

import {
  HeaderEntriesText,
  HeaderEntriesWrapper,
  HeaderSelect,
} from './HeaderEntriesDropdownStyle';

const HeaderEntriesDropdown = ({ table }) => {
  return (
    <HeaderEntriesWrapper>
      <HeaderEntriesText>Show</HeaderEntriesText>
      <HeaderSelect
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {[12, 24, 36, 48, 60].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </HeaderSelect>
      <HeaderEntriesText>entries</HeaderEntriesText>
    </HeaderEntriesWrapper>
  );
};

export default HeaderEntriesDropdown;
