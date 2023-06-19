import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';

export const BadgesWrapper = styled.div`
  background-color: ${colors.bgSecondary};
  margin: 24px;
  border-radius: 12px;
  width: 100% - 24px;
  height: max-content;
  padding: 24px 20px 6px 20px;

  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 528px; /* !! uskladiti s ostalim komponentama na pageu !! */
    margin: 32px calc((100% - 528px) / 2);
  }

  @media screen and (${breakpoints.tablet}) {
    margin: 32px 70px 32px 70px;
    padding: 34px 34px 14px 34px;
    max-width: none;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    /* margin: 32px 40px 32px 32px; */
    margin: 0;
    padding: 24px 24px 6px 24px;
    min-width: 390px;
    width: 40%;
    /* width: 430px;  !! vratiti na max-content nakon dodavanja ostalih komponenti achievements pagea !! */
  }
`;

export const BadgesTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
  color: ${colors.textPrimaryGrey};

  @media screen and (${breakpoints.tabletSmall}) {
    font-weight: 600; /* !! uskladiti s ostalim komponentama na pageu !! */
    font-size: 20px;
    margin-left: 6px;
  }

  @media screen and (${breakpoints.tablet}) {
    margin-left: 0;
    margin-bottom: 24px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    margin-bottom: 16px;
    font-size: 18px;
  }
`;

export const BadgesGrid = styled.div`
  display: grid;
  gap: 0px 20px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (${breakpoints.tablet}) {
    grid-auto-flow: column;
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (${breakpoints.desktopSmall}) {
    gap: 0 10px;
  }
`;
