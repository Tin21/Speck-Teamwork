import { ReactComponent as AscendIcon } from '../../../assets/images/sort-up.svg';
import { ReactComponent as DescendIcon } from '../../../assets/images/sort-down.svg';
import { AscDesc, HeaderColumn } from './ColumnHeaderStyle';

export const ColumnHeader = ({ columnName }) => {
  return (
    <>
      <HeaderColumn>
        {columnName}
        <AscDesc>
          <AscendIcon />
          <DescendIcon />
        </AscDesc>
      </HeaderColumn>
    </>
  );
};
