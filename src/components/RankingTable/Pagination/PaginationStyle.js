import styled from 'styled-components';
import { colors, breakpoints } from '../../../utils/styles/theme';

export const PaginationWrapper = styled.div`
  padding: 8px;
  display: flex;
  background-color: ${colors.white};
  gap: 7px;
  width: fit-content;
  margin: 0 auto;

  @media screen and (${breakpoints.desktopSmall}) {
    margin-right: 0;
  }
`;

export const PaginationArrowWrapper = styled.button`
  padding: 11px 19px;
  background-color: ${colors.lightRed};
  border: none;
  border-radius: 8px;
`;

export const PaginationNumberWrapper = styled.button`
  padding: 10px;
  background-color: ${colors.lightRed};
  border: none;
  border-radius: 8px;

  ${(props) =>
    props.isCurrent &&
    `
      background-color: ${colors.buttonPrimary};
      color: ${colors.white};
    `}
`;
