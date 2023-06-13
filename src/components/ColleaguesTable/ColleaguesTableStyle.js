import styled from 'styled-components';
import { colors } from '../../utils/styles/theme';

export const TableContainer = styled.div`
  padding: 20px;
  overflow-x: auto;
  /* width: 100%; */
`;

export const Test = styled.div`
  padding: 24px;
`;

export const StyledTable = styled.table`
  font-family: sans-serif;
  border-collapse: collapse;
  margin: 25px;
  background-color: #fff;
  border-radius: 10px;
  table-layout: fixed;
`;
export const StyledHeaderCell = styled.th`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  height: 54px;
  /* width: 111px; */
  display: flex;
  align-items: center;
  color: ${colors.textSecondaryGrey};
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
  padding-left: 20.5px;

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledCell = styled.td`
  padding: 14px 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${colors.textSecondary};
  padding: 14.5px 8px;
  /* width: 150px; */
  overflow: hidden;
`;
