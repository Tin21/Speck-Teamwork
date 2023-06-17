import styled from 'styled-components';
import { breakpoints } from '../../../utils/styles/theme';

export const FooterWrapper = styled.div`
  display: block;
  margin: 0 24px 24px 24px;
  position: sticky;
  left: 24px;

  @media screen and (${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`;
