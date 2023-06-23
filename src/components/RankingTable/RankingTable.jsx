import React, { useState, useEffect } from 'react';
import { rankingData } from '../../utils/mock/rankingData';
import BadgeExamGold from '../../assets/images/badges/badge-exam-icon-gold.svg';
import BadgeExamSilver from '../../assets/images/badges/badge-exam-icon-silver.svg';
import BadgeQuizGold from '../../assets/images/badges/badge-quiz-icon-gold.svg';
import BadgeQuizSilver from '../../assets/images/badges/badge-quiz-icon-silver.svg';
import BadgeTaskGold from '../../assets/images/badges/badge-task-icon-gold.svg';
import BadgeTaskSilver from '../../assets/images/badges/badge-task-icon-silver.svg';
import BadgeTeamGold from '../../assets/images/badges/badge-team-icon-gold.svg';
import BadgeTeamSilver from '../../assets/images/badges/badge-team-icon-silver.svg';
import BadgeTimeGold from '../../assets/images/badges/badge-time-icon-gold.svg';
import BadgeTimeSilver from '../../assets/images/badges/badge-time-icon-silver.svg';
import {
  StyledCell,
  StyledHeaderCell,
  StyledHeaderRow,
  StyledRow,
  StyledTable,
  TableContainer,
  TableWrapper,
  TableBody,
  HeaderCellContent,
  HeaderTable,
} from './RankingTableStyle';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import columns from './Column/Column';
import TableHeader from '../TableHeader/TableHeader';
import TableFooter from '../TableFooter/TableFooter';
import { entriesSmall } from '../../utils/mock/entriesSmall';
import { getUsers, getLectureCriteria } from '../../api/users';

const RankingTable = () => {
  const [data, setData] = useState(() => [...rankingData]);
  const [sorting, setSorting] = useState();

  const getTableData = async () => {
    const loggedUser = localStorage.getItem('jwt_token');
    const users = await getUsers(loggedUser);
    const criteria = await getLectureCriteria(loggedUser);
    console.log(criteria);
    console.log(loggedUser);
    users.data.map((user) => {
      //dodaje svakom useru ukupne bodove i postotak bodova
      var pointsUser = 0;
      var lecturePoints = [0, 0, 0, 0, 0];
      user.user_lecture_criteria.map((lecture) => {
        pointsUser += lecture.points;
        if (lecture.lecture_criterium.criteria.name === 'Quiz')
          lecturePoints[0] += lecture.points;
        if (lecture.lecture_criterium.criteria.name === 'Homework')
          lecturePoints[1] += lecture.points;
        if (lecture.lecture_criterium.criteria.name === 'Teamwork')
          lecturePoints[2] += lecture.points;
        if (lecture.lecture_criterium.criteria.name === 'Final exam')
          lecturePoints[3] += lecture.points;
        if (lecture.lecture_criterium.criteria.name === 'Attendance')
          lecturePoints[4] += lecture.points;
      });
      user.pointsUser = pointsUser;
      var percentage = Math.round((pointsUser / 219) * 100);
      user.percentage = `${percentage} %`;
      user.quizPoints = lecturePoints[0];
      user.homeworkPoints = lecturePoints[1];
      user.teamworkPoints = lecturePoints[2];
      user.examPoints = lecturePoints[3];
      user.attendancePoints = lecturePoints[4];

      var badges = []; //moguce da se ne vide badgevi u tablici, ali to je trenutno realno stanje podataka sa starog apia
      if (user.quizPoints / 44 >= 0.7)
        badges.push({ id: 1, src: BadgeQuizSilver });
      if (user.homeworkPoints / 90 >= 0.7)
        badges.push({ id: 2, src: BadgeTaskSilver });
      if (user.teamworkPoints / 40 >= 0.7)
        badges.push({ id: 3, src: BadgeTeamSilver });
      if (user.examPoints / 30 >= 0.7)
        badges.push({ id: 4, src: BadgeExamSilver });
      if (user.attendancePoints / 15 >= 0.7)
        badges.push({ id: 5, src: BadgeTimeSilver });
      if (user.quizPoints / 44 >= 0.9)
        badges.push({ id: 6, src: BadgeQuizGold });
      if (user.homeworkPoints / 90 >= 0.9)
        badges.push({ id: 7, src: BadgeTaskGold });
      if (user.teamworkPoints / 40 >= 0.9)
        badges.push({ id: 8, src: BadgeTeamGold });
      if (user.examPoints / 30 >= 0.9)
        badges.push({ id: 9, src: BadgeExamGold });
      if (user.attendancePoints / 15 >= 0.9)
        badges.push({ id: 10, src: BadgeTimeGold });

      user.badges = badges;
    });
    console.log(users.data);
    users.data.sort((a, b) => b.pointsUser - a.pointsUser);
    var rank = 1;
    users.data.map((user) => {
      //dodaje svakom useru ranking
      user.ranking = rank;
      rank++;
    });
    setData(users.data);
  };

  useEffect(() => {
    getTableData();
  }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    initialState: {
      pagination: {
        autoResetPageIndex: true,
        pageSize: 5,
      },
    },
  });

  return (
    <TableWrapper>
      <TableContainer>
        <TableHeader
          table={table}
          setData={setData}
          dataList={rankingData}
          placeholderText={'Search name or ranking'}
          byRankIsTrue={true}
          entriesList={entriesSmall}
        />
        <StyledTable>
          <HeaderTable>
            {table.getHeaderGroups().map((headerGroup, index) => (
              <StyledHeaderRow key={index}>
                {headerGroup.headers.map((header) => (
                  <StyledHeaderCell key={header.id}>
                    {header.isPlaceholder ? null : (
                      <HeaderCellContent
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </HeaderCellContent>
                    )}
                  </StyledHeaderCell>
                ))}
              </StyledHeaderRow>
            ))}
          </HeaderTable>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <StyledRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <StyledCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledCell>
                ))}
              </StyledRow>
            ))}
          </TableBody>
        </StyledTable>
        <TableFooter table={table} />
      </TableContainer>
    </TableWrapper>
  );
};

export default RankingTable;
