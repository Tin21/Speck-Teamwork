import styled from 'styled-components';
import { breakpoints } from '../../utils/styles/theme';

export const MobileAndTabletVersionWrapper = styled.div`
  @media screen and (${breakpoints.desktopSmall}) {
    visibility: collapse; //koristim ovo jer display: none corrupta svgove, a visibility: hidden rezultira praznim prostorom na dnu stranice
    max-height: 0;
    max-width: 0;
  }
`;

export const DesktopVersionWrapper = styled.div`
  display: none;

  @media screen and (${breakpoints.desktopSmall}) {
    max-width: calc(100vw - 322px);
    display: block;
    margin: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1118px;
    margin-left: 48px;
  }
`;

export const DesktopUpperConteiner = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
  gap: 24px;

  @media screen and (${breakpoints.desktop}) {
    gap: 32px;
  }
`;
