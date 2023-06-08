import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as TickIcon } from '../../assets/images/badges/tick-icon.svg';

export const BadgesWrapper = styled.div`
  background-color: ${colors.bgSecondary};
  margin: 24px;
  border-radius: 12px;
  width: 100% - 24px;
  height: max-content;
  padding: 24px 20px 32px 20px;

  @media screen and (${breakpoints.tablet}) {
    margin: 32px 70px 24px 70px;
    padding: 34px;
  }
`;

export const BadgesTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${colors.textPrimaryGrey};

  @media screen and (${breakpoints.tablet}) {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const BadgesGrid = styled.div`
  display: grid;
  gap: 0px 20px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (${breakpoints.tablet}) {
    grid-auto-flow: column;
    grid-template-rows: repeat(2, 120px);
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const SingleBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeTickIcon = styled(TickIcon)`
  position: relative;
  min-width: 24px;
  min-height: 24px;
  left: 18px;
  top: 21px;
  z-index: 1;

  ${(props) =>
    props.isUnvisible &&
    `
      z-index: -1;
    `}

  @media screen and (${breakpoints.tablet}) {
    left: 25px;
    top: 30px;
  }
`;

export const SingleBadgeTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  color: ${colors.textTertiaryGrey};

  ${(props) =>
    props.isGolden &&
    `
        color: ${colors.textGold};
    `}

  @media screen and (${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

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
`;
