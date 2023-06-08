import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as TickIcon } from '../../assets/images/badges/tick-icon.svg';

export const BadgesWrapper = styled.div`
  background-color: ${colors.bgSecondary};
  margin: 24px;
  border-radius: 12px;
  width: 100% - 24px;
  /* height: 476px; */
  height: max-content;
  padding: 24px 20px 32px 20px;
`;

export const BadgesTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${colors.textPrimaryGrey};
  /* width: 100%; */
`;

export const BadgesGrid = styled.div`
  display: grid;
  gap: 0px 20px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
  }
`;

export const SingleBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BadgeTickIcon = styled(TickIcon)`
  position: relative;
  width: 24px;
  height: 24px;
  left: 18px;
  top: 21px;
  z-index: 1;

  ${(props) =>
    props.isUnvisible &&
    `
      z-index: -1;
    `}
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
`;

export const BadgeIcon = styled.img`
  height: 45px;
  width: 45px;
`;
