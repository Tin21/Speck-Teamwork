import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';

export const MobileAndTabletVersionWrapper = styled.div`
  @media screen and (${breakpoints.desktopSmall}) {
    visibility: hidden;
    max-height: 0;
    max-width: 0;
  }
`;

export const DesktopVersionWrapper = styled.div`
  display: none;

  @media screen and (${breakpoints.desktopSmall}) {
    max-width: calc(100vw - 322px);
    display: block;
    margin: 32px 40px;
  }

  @media screen and (${breakpoints.desktop}) {
  }
`;

export const DesktopUpperConteiner = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
  gap: 32px;
`;
