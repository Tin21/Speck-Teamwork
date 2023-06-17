import styled from 'styled-components';
import { breakpoints, colors } from '../../utils/styles/theme';

export const TableContainer = styled.div`
  overflow-x: auto;
  /* width: 300%; */

  @media screen and (${breakpoints.tablet}) {
    background-color: ${colors.white};
    border-radius: 10px;
    /* width: 832px; */
  }
  @media screen and (${breakpoints.tablet}) {
    padding: 16px 16px 24px 16px;
    /* width: 1120px; */
  }
`;

export const StyledTable = styled.table`
  font-family: sans-serif;
  border-collapse: separate;
  margin: 24px 0;
  background-color: #fff;
  border-radius: 10px;
  border-spacing: 0;
  table-layout: fixed;
  border: 1px solid #ccc;
  width: max-content;
`;

export const HeaderTable = styled.thead``;

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
  background-color: #f9f9f9;
`;

export const BodyTable = styled.tbody``;

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
