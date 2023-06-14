import styled from 'styled-components';
import { breakpoints, colors } from '../../../utils/styles/theme';

export const FooterWrapper = styled.div`
  display: block;

  @media screen and (${breakpoints.desktop}) {
    display: flex;
  }
`;
