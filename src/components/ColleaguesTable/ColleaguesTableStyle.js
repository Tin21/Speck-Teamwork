import styled from 'styled-components';
import { breakpoints, colors } from '../../utils/styles/theme';

export const TableContainer = styled.div`
  overflow-x: auto;

  @media screen and (${breakpoints.tablet}) {
    background-color: ${colors.white};
    border-radius: 10px;
  }
  @media screen and (${breakpoints.tablet}) {
    padding: 16px 16px 24px 16px;
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

export const HeaderTable = styled.thead`
  background-color: #f9f9f9;
`;

export const StyledHeaderCell = styled.th`
  font-family: 'Inter';
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  height: 54px;
  width: 101px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textSecondaryGrey};
  /* background-color: red; */

  &:nth-child(4) {
    padding-left: 20px;
  }
  &:nth-child(5) {
    padding-left: 190px;
    padding-right: 20px;
  }
`;

export const StyledHeaderRow = styled.tr`
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
`;

export const BodyTable = styled.tbody``;

export const StyledRow = styled.tr`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 28.5px;

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledCell = styled.td`
  padding: 10px 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${colors.textSecondary};
  width: 102px;
  /* background-color: red; */

  &:nth-child(3) {
    width: 124px;
  }
  &:nth-child(4) {
    width: 234px;
  }
`;
