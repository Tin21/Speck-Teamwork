import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';

export const TableWrapper = styled.div`
  @media screen and (${breakpoints.tabletSmall}) {
    background-color: ${colors.bgSecondary};
    padding: 16px;
    margin-left: 70px;
    margin-bottom: 70px;
    border-radius: 12px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    margin-left: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1200px;
  }
`;

export const TableContainer = styled.div`
  /* padding: 20px; */
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  font-family: sans-serif;
  border-collapse: collapse;
  margin: 25px;
  background-color: #fff;
  border-radius: 10px;
  table-layout: fixed;
  width: max-content;

  @media screen and (${breakpoints.tabletSmall}) {
    border-bottom: 1px solid rgb(189, 195, 199);
  }
`;

export const StyledHeaderCell = styled.th`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  height: 54px;
  width: 120px;
  display: flex;
  align-items: center;
  color: ${colors.textSecondaryGrey};

  &:nth-child(2) {
    width: 200px;
  }

  &:nth-child(4) {
    width: 180px;
  }

  &:last-child {
    width: 400px;
  }
`;

export const StyledHeaderRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  border-bottom: 1px solid #ccc;
`;

export const StyledRow = styled.tr`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  min-width: 100px;

  &:last-child {
    border-bottom: none;
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
  width: 120px;

  &:nth-child(2) {
    width: 200px;
  }

  &:nth-child(4) {
    width: 180px;
  }

  &:last-child {
    width: 400px;
  }
`;
