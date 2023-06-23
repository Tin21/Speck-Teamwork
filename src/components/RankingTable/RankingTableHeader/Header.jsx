/* eslint-disable react/prop-types */
import TableHeaderEntriesDropdown from '../../TableHeaderEntriesDropdown/TableHeaderEntriesDropdown';
import TableHeaderSearch from '../../TableHeaderSearch/TableHeaderSearch';
import { HeaderWrapper } from './HeaderStyle';
import { rankingData } from '../../../utils/mock/rankingData';
import { entriesSmall } from '../../../utils/mock/entriesSmall';

const Header = ({ table, setData }) => {
  return (
    <HeaderWrapper>
      <TableHeaderEntriesDropdown table={table} entriesList={entriesSmall} />
      <TableHeaderSearch
        setData={setData}
        dataList={rankingData}
        placeholderText={'Search name or ranking'}
        byRankIsTrue={true}
      />
    </HeaderWrapper>
  );
};

export default Header;
