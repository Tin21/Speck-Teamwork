import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';

export const TableWrapper = styled.div`
  margin-right: 24px;

  @media screen and (${breakpoints.desktopSmall}) {
    margin-left: 32px;
    background-color: ${colors.bgSecondary};
    padding: 16px;
    margin-bottom: 70px;
    border-radius: 12px;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1200px;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  font-family: sans-serif;
  border-collapse: collapse;
  margin: 25px;
  background-color: #fff;
  border-radius: 10px;
  width: max-content;
`;

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
`;

export const StyledHeaderRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  border-bottom: 1px solid ${colors.tableBorder};
  background-color: ${colors.tableHeaderBg};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 1px solid ${colors.tableBorder};
`;

export const StyledRow = styled.tr`
  border-bottom: 1px solid ${colors.tableBorder};
  border-left: 1px solid ${colors.tableBorder};
  border-right: 1px solid ${colors.tableBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  min-width: 100px;

  &:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
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
