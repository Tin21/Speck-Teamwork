/* eslint-disable react/prop-types */

import TableHeaderEntriesDropdown from '../../TableHeaderEntriesDropdown/TableHeaderEntriesDropdown';
import TableHeaderSearch from '../../TableHeaderSearch/TableHeaderSearch';
import { TableHeaderWrapper } from './TableHeaderStyle';
import { colleaguesData } from '../../../utils/mock/colleaguesTest';
import { entriesLarge } from '../../../utils/mock/entriesLarge';

const TableHeader = ({ table, setData }) => {
  return (
    <TableHeaderWrapper>
      <TableHeaderEntriesDropdown table={table} entriesList={entriesLarge} />
      <TableHeaderSearch
        setData={setData}
        dataList={colleaguesData}
        placeholderText={'Search name, email or year'}
        byRankIsTrue={false}
      />
    </TableHeaderWrapper>
  );
};

export default TableHeader;
