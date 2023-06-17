import styled from 'styled-components';
import { breakpoints } from '../../../utils/styles/theme';

export const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-left: 14px;

  @media screen and (${breakpoints.desktop}) {
  }
`;

export const AscDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 21.75px;
`;
