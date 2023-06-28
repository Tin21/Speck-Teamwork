import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as TickIcon } from '../../assets/images/badges/tick-icon.svg';

export const BadgeIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;

  @media screen and (${breakpoints.tablet}) {
    min-height: 76px;
    max-height: 76px;
    min-width: 76px;
    max-width: 76px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    min-height: 50px;
    max-height: 50px;
    min-width: 50px;
    max-width: 50px;
  }
`;

export const SingleBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: start;
`;

export const BadgeTickIcon = styled(TickIcon)`
  position: relative;
  min-width: 24px;
  min-height: 24px;
  left: 18px;
  bottom: 69px;
  z-index: 1;

  ${(props) =>
    props.unvisible &&
    `
      z-index: -1;
    `}

  @media screen and (${breakpoints.tablet}) {
    left: 25px;
    bottom: 92px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    min-width: 16px;
    width: 18px;
    min-height: 16px;
    height: 18px;
    left: 17px;
    bottom: 65px;
  }
`;

export const SingleBadgeTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  color: ${colors.textSecondaryGrey};

  ${(props) =>
    props.isGolden &&
    `
        color: ${colors.textGold};
    `}

  @media screen and (${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 12px;
  }
`;
