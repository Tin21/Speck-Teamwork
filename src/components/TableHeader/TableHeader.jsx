/* eslint-disable react/prop-types */

import TableHeaderEntriesDropdown from '../TableHeaderEntriesDropdown/TableHeaderEntriesDropdown';
import TableHeaderSearch from '../TableHeaderSearch/TableHeaderSearch';
import { TableHeaderWrapper } from './TableHeaderStyle';

const TableHeader = ({
  table,
  setData,
  placeholderText,
  byRankIsTrue,
  entriesList,
  dataList,
}) => {
  return (
    <TableHeaderWrapper>
      <TableHeaderEntriesDropdown table={table} entriesList={entriesList} />
      <TableHeaderSearch
        setData={setData}
        dataList={dataList}
        placeholderText={placeholderText}
        byRankIsTrue={byRankIsTrue}
      />
    </TableHeaderWrapper>
  );
};

export default TableHeader;
