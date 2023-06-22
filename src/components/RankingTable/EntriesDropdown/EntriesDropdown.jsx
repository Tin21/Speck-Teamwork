import {
  HeaderEntriesText,
  HeaderEntriesWrapper,
  HeaderSelect,
  HeaderEntriesOption,
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
          <HeaderEntriesOption key={pageSize} value={pageSize}>
            {pageSize}
          </HeaderEntriesOption>
        ))}
      </HeaderSelect>
      <HeaderEntriesText isEntries>entries</HeaderEntriesText>
    </HeaderEntriesWrapper>
  );
};

export default HeaderEntriesDropdown;
