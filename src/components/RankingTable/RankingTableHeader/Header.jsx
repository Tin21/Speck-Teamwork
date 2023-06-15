import HeaderEntriesDropdown from '../EntriesDropdown/EntriesDropdown';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import { HeaderWrapper } from './HeaderStyle';
import React from 'react';

const Header = ({ table, setData }) => {
  return (
    <HeaderWrapper>
      <HeaderEntriesDropdown table={table} />
      <HeaderSearch setData={setData} />
    </HeaderWrapper>
  );
};

export default Header;
