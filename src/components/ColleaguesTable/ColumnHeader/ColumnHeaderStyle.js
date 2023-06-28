import styled from 'styled-components';
import { breakpoints } from '../../../utils/styles/theme';

export const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-left: 14px;

  @media screen and (${breakpoints.tablet}) {
    gap: 52px;
    margin-left: 6px;
    justify-content: space-between;
  }
  @media screen and (${breakpoints.desktopSmall}) {
    gap: 150px;
  }
`;

export const AscDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18px;
`;
