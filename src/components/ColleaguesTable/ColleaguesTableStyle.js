import styled from 'styled-components';
import { colors } from '../../utils/styles/theme';

export const TableContainer = styled.div`
  padding: 20px;
  /* height: 100vh; */
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  font-family: sans-serif;
  /* width: 100%; */
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin: 25px;
  background-color: #fff;
  border-radius: 10px;
  /* table-layout: fixed; */
`;

export const StyledHeaderRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
`;

export const StyledHeaderCell = styled.th`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${colors.textSecondaryGrey};
`;

export const StyledRow = styled.tr`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;

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

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInnerCell = styled.div`
  /* display: flex; */
  /* width: 76px;
  height: 21px; */
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;
