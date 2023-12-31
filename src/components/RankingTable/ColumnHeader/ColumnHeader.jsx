/* eslint-disable react/prop-types */
import { ReactComponent as AscendIcon } from '../../../assets/images/sort-up.svg';
import { ReactComponent as DescendIcon } from '../../../assets/images/sort-down.svg';
import { AscDesc, HeaderColumn } from './ColumnHeaderStyle';

export const ColumnHeader = ({ columnName, asdDesc, isWider }) => {
  return (
    <>
      {isWider && (
        <HeaderColumn isName>
          {columnName}
          <AscDesc>
            {asdDesc && (
              <>
                <AscendIcon />
                <DescendIcon />
              </>
            )}
          </AscDesc>
        </HeaderColumn>
      )}
      {!isWider && (
        <HeaderColumn>
          {columnName}
          <AscDesc>
            {asdDesc && (
              <>
                <AscendIcon />
                <DescendIcon />
              </>
            )}
          </AscDesc>
        </HeaderColumn>
      )}
    </>
  );
};
