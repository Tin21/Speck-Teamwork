import styled from 'styled-components';
import { breakpoints, colors } from '../../utils/styles/theme';

export const TableContainer = styled.div`
  overflow: auto;
  width: 100%;

  @media screen and (${breakpoints.tablet}) {
    background-color: ${colors.white};
    border-radius: 10px;
  }
  @media screen and (${breakpoints.tablet}) {
    padding: 16px 16px 24px 16px;
  }
`;

export const StyledTable = styled.table`
  display: block;
  overflow-x: auto;
  table-layout: fixed;
  font-family: sans-serif;
  margin: 24px 0;
  background-color: #fff;
  border-radius: 10px;
  border-spacing: 0;
  border: 1px solid #ccc;
  max-width: fit-content;
  /* width: max-content; */
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

  &:nth-child(4) {
    padding-right: 40px;
    width: 160px;
  }
  &:nth-child(5) {
    width: 160px;
    padding-left: 100px;
  }

  @media screen and (${breakpoints.tablet}) {
    justify-content: flex-start;
    width: 180px;

    &:nth-child(3) {
      width: 130px;
      padding-left: 16px;
    }
    &:nth-child(4) {
      padding-left: 0;
    }
    &:nth-child(5) {
      padding-left: 70px;
    }
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

  @media screen and (${breakpoints.tablet}) {
    padding-left: 16px;
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

  &:nth-child(3) {
    width: 124px;
  }

  &:nth-child(4) {
    width: 234px;
  }

  @media screen and (${breakpoints.tablet}) {
    width: 180px;

    &:nth-child(5) {
      width: 100px;
    }
  }
`;
