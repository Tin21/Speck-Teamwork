import styled from 'styled-components';
import { breakpoints } from '../../../utils/styles/theme';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  left: 0;
  gap: 16px;
  margin-bottom: 67px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 8px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (${breakpoints.desktop}) {
  }
`;
