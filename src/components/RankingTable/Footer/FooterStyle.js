import styled from 'styled-components';
import { breakpoints } from '../../../utils/styles/theme';

export const FooterWrapper = styled.div`
  display: block;
  margin-bottom: 16px;
  position: sticky;
  left: 0;

  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }
`;
