import styled from 'styled-components';
import { breakpoints } from '../../utils/styles/theme';

export const TablePageCounterWrapper = styled.p`
  margin-bottom: 16px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;
