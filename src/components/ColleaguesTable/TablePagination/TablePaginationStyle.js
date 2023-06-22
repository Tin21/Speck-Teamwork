import styled from 'styled-components';
import { breakpoints, colors } from '../../../utils/styles/theme';

export const PaginationWrapper = styled.div`
  padding: 8px;
  display: flex;
  background-color: ${colors.white};
  gap: 7px;
  width: 271px;
  justify-content: space-around;

  @media screen and (${breakpoints.tablet}) {
    gap: 12px;
    width: auto;
  }
`;

export const PaginationArrowWrapper = styled.button`
  padding: 11px 19px;
  background-color: ${colors.lightRed};
  border: none;
  color: #828282;
  font-weight: 800;
  border-radius: 8px;
`;

export const PaginationNumberWrapper = styled.button`
  padding: 8.5px 10px;
  background-color: ${colors.lightRed};
  border: none;
  border-radius: 8px;

  @media screen and (${breakpoints.tablet}) {
    padding: 4px 10px 4px 10px;
  }

  ${(props) =>
    props.isCurrent &&
    `
      background-color: ${colors.buttonPrimary};
      color: ${colors.white};
    `}
`;
