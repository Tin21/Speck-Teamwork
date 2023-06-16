import { createColumnHelper } from '@tanstack/table-core';
import { ColumnHeader } from '../ColumnHeader/ColumnHeader';
import { ColumnBody } from './ColumnStyle';
import SilverIcon from '../../../assets/images/badges/badge-exam-icon-gold.svg';

const columnHelper = createColumnHelper();

const badge = 'src/assets/images/badges/badge-quiz-icon-gold.svg';

const columns = [
  columnHelper.accessor('ranking', {
    cell: (info) => <ColumnBody isRanking>{info.row.index + 1}</ColumnBody>,
    header: () => <ColumnHeader columnName="Ranking" />,
  }),
  columnHelper.accessor('name', {
    cell: (info) => <ColumnBody isName>{info.getValue()}</ColumnBody>,
    header: () => <ColumnHeader asdDesc={true} columnName="Student" />,
  }),

  columnHelper.accessor('points', {
    cell: (info) => <ColumnBody isPoints>{info.renderValue()}</ColumnBody>,
    header: () => <ColumnHeader asdDesc={true} columnName="Points" />,
  }),

  columnHelper.accessor('percentage', {
    cell: (info) => (
      <ColumnBody isPercentageOrBadges>{info.renderValue()}</ColumnBody>
    ),
    header: () => (
      <ColumnHeader isWider={true} asdDesc={true} columnName="Percentage" />
    ),
    size: 50,
  }),

  columnHelper.accessor('badges', {
    cell: () => (
      <ColumnBody isBadges>
        <img src={badge} />
        <img src={badge} />
        <img src={badge} />
        <img src={badge} />
        <img src={badge} />
      </ColumnBody>
    ),
    header: () => <ColumnHeader columnName="Badges" />,
    size: 50,
  }),
];

export default columns;
