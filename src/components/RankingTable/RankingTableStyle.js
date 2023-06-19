import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';

export const TableWrapper = styled.div`
  margin: 0 24px;

  @media screen and (${breakpoints.tabletSmall}) {
    margin: 0 calc((100% - 528px) / 2);
  }

  @media screen and (${breakpoints.tablet}) {
    margin: 0 70px;
    padding-bottom: 16px;
    margin-bottom: 70px;
    border-radius: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    margin: 0;
    background-color: ${colors.bgSecondary};
    padding: 16px;
    border-radius: 14px;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1280px;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  font-family: sans-serif;
  border-collapse: collapse;
  margin: 25px 0;
  background-color: #fff;
  border-radius: 14px;
  width: max-content;
`;

export const TableHeader = styled.thead``;

export const StyledHeaderCell = styled.th`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  height: 54px;
  width: 140px;
  display: flex;
  align-items: center;

  &:nth-child(2) {
    width: 200px;
  }

  &:nth-child(4) {
    width: 180px;
  }

  &:last-child {
    width: 400px;
  }

  @media screen and (${breakpoints.tabletSmall}) {
    width: 170px;

    &:nth-child(2) {
      width: 240px;
    }

    &:nth-child(4) {
      width: 200px;
    }

    &:last-child {
      width: 426px;
    }
  }
`;

export const HeaderCellContent = styled.div``;

export const StyledHeaderRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  border-bottom: 1px solid ${colors.tableBorder};
  background-color: ${colors.tableHeaderBg};
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  border: 1px solid ${colors.tableBorder};

  @media screen and (${breakpoints.tabletSmall}) {
    padding-left: 36px;
  }
`;

export const TableBody = styled.div``;

export const StyledRow = styled.tr`
  border-bottom: 1px solid ${colors.tableBorder};
  border-left: 1px solid ${colors.tableBorder};
  border-right: 1px solid ${colors.tableBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  min-width: 100px;

  @media screen and (${breakpoints.tabletSmall}) {
    padding-left: 36px;
  }

  &:last-child {
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }
`;

export const StyledCell = styled.td`
  padding: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${colors.textSecondary};
  overflow: hidden;
  width: 140px;
  display: flex;
  align-items: center;
  min-height: 50px;
  white-space: nowrap;

  &:nth-child(2) {
    width: 200px;
  }

  &:nth-child(4) {
    width: 180px;
  }

  &:last-child {
    width: 400px;
  }

  @media screen and (${breakpoints.tabletSmall}) {
    width: 170px;

    &:nth-child(2) {
      width: 240px;
    }

    &:nth-child(4) {
      width: 200px;
    }

    &:last-child {
      width: 426px;
    }
  }
`;
