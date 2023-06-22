import styled from 'styled-components';
import { colors, breakpoints } from '../../../utils/styles/theme';

export const PageCounterWrapper = styled.p`
  margin-bottom: 16px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;
