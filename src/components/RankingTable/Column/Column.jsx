import { createColumnHelper } from '@tanstack/table-core';
import { ColumnHeader } from '../ColumnHeader/ColumnHeader';
import { ColumnBody } from './ColumnStyle';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => <ColumnBody isRanking>{info.getValue()}</ColumnBody>,
    header: () => <ColumnHeader columnName="Ranking" />,
    enableSorting: false,
  }),

  columnHelper.accessor('fullName', {
    cell: (info) => {
      const { firstName, lastName } = info.row.original;
      const fullName = `${firstName} ${lastName}`;
      return <ColumnBody isName>{fullName}</ColumnBody>;
    },
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
  }),

  columnHelper.accessor('badges', {
    cell: (info) => (
      <ColumnBody>
        {info.renderValue().map((badge) => (
          <img key={badge.id} src={badge.src} />
        ))}
      </ColumnBody>
    ),
    header: () => <ColumnHeader columnName="Badges" />,
    enableSorting: false,
  }),
];

export default columns;
