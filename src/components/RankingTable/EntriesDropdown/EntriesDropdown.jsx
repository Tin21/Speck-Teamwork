import {
  HeaderEntriesText,
  HeaderEntriesWrapper,
  HeaderSelect,
} from './EntriesDropdownStyle';

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
        {[5, 10, 25, 50].map((pageSize) => (
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
