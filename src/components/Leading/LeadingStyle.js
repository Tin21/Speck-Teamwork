import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as SecondPlaceFrameIcon } from '../../assets/images/second-place-frame.svg';
import { ReactComponent as ThirdPlaceFrameIcon } from '../../assets/images/third-place-frame.svg';
import { ReactComponent as StarIcon } from '../../assets/images/star-icon.svg';

export const LeadingWrapper = styled.div`
  padding: 8px;
  margin: 24px;
  height: 252px;
  width: 100% - 24px;
  background-color: ${colors.bgSecondary};
  border-radius: 12px;

  @media screen and (${breakpoints.tabletSmall}) {
    padding: 8px 20px 12px 20px;
    height: 230px;
    max-width: 528px;
    margin: 32px calc((100% - 528px) / 2);
  }

  @media screen and (${breakpoints.tablet}) {
    max-width: none;
    margin: 0 70px 32px 70px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    height: 233px;
    margin: 0;
    width: 60%;
  }
`;

export const LeadingTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin: 16px 0 14px 12px;

  @media screen and (${breakpoints.tabletSmall}) {
    font-weight: 600;
    font-size: 20px;
    margin: 16px 0 14px 0;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 18px;
  }
`;

export const PedestalWrapper = styled.div`
  height: 185px;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (${breakpoints.tabletSmall}) {
    height: 155px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    height: 161px;
  }
`;

export const PedestalLeftWrapper = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  align-items: end;
`;

export const PedestalLeftShapesContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PedestalLeftTrapezoid = styled.div`
  border-bottom: 12px solid ${colors.greenPrimary};
  border-left: 12vw solid transparent;
  border-right: 0 solid transparent;
  border-bottom-color: ${colors.greenPrimary};
  height: 0;
  width: 100%;

  @media screen and (${breakpoints.tablet}) {
    border-left: 9vw solid transparent;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    border-left: 4vw solid transparent;
  }
`;

export const PedestalLeftRectangle = styled.div`
  height: 92px;
  width: 100%;
  background-color: ${colors.greenSuccess};
  border-bottom-left-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px 4px 7px 4px;
`;

export const SecondPlaceFrame = styled(SecondPlaceFrameIcon)`
  width: 74px;
  height: 96px;
  position: relative;
  top: 46px;
`;

export const SecondPlaceAvatar = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  width: 45.7px;
  height: 45px;
  top: 107.5px;
  left: 1.2px;
  z-index: 1;
`;

export const PedestalCenterWrapper = styled.div`
  height: 100%;
  width: 34%;
  display: flex;
  align-items: end;
`;

export const PedestalCenterShapesContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PedestalCenterTrapezoid = styled.div`
  border-bottom: 12px solid ${colors.beigePrimary};
  border-left: 9vw solid transparent;
  border-right: 9vw solid transparent;
  border-bottom-color: ${colors.beigePrimary};
  height: 0;
  width: 100%;

  @media screen and (${breakpoints.desktopSmall}) {
    border-left: 4vw solid transparent;
    border-right: 4vw solid transparent;
  }
`;

export const PedestalCenterRectangle = styled.div`
  height: 122px;
  width: 100%;
  background-color: ${colors.chartBarBrownDark};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 4px 7px 4px;
`;

export const FirstPlaceFrame = styled.img`
  display: block;
  width: 90px;
  height: 72px;
  position: relative;
  top: 24px;
`;

export const FirstPlaceAvatar = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  width: 56px;
  height: 56px;
  top: 87px;
  z-index: 1;
`;

export const PedestalRightWrapper = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  align-items: end;
`;

export const PedestalRightShapesContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PedestalRightTrapezoid = styled.div`
  border-bottom: 12px solid ${colors.blueSecondary};
  border-left: 0 solid transparent;
  border-right: 12vw solid transparent;
  border-bottom-color: ${colors.blueSecondary};
  width: 100%;

  @media screen and (${breakpoints.desktopSmall}) {
    border-right: 5vw solid transparent;
  }
`;

export const PedestalRightRectangle = styled.div`
  height: 76px;
  width: 100%;
  background-color: ${colors.bluePrimary};
  border-bottom-right-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 6px 4px 7px 4px;
`;

export const ThirdPlaceFrame = styled(ThirdPlaceFrameIcon)`
  width: 68px;
  height: 82px;
  position: relative;
  top: 34px;
`;

export const ThirdPlaceAvatar = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  width: 44px;
  height: 43px;
  right: 3px;
  top: 90px;
  z-index: 2;
`;

export const NumberWrapper = styled.div`
  width: max-content;
  height: max-content;
  /* margin-bottom: 6px; */
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

export const Number = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${colors.bgSecondary};
  padding-top: 4px;

  ${(props) =>
    props.isFirstPlace &&
    `
     font-size: 25px;
     padding-top: 2px;
  `}

  ${(props) =>
    props.isThirdPlace &&
    `
        font-size: 18px;
    `}
`;

export const Suffix = styled.p`
  font-weight: 700;
  font-size: 13px;
  color: ${colors.bgSecondary};
`;

export const Name = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${colors.bgSecondary};
  margin-bottom: 5px;

  ${(props) =>
    props.isFirstPlace &&
    `
    margin-bottom: 2px;
  `}

  ${(props) =>
    props.isThirdPlace &&
    `
        margin-bottom: 3px;
    `}

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    display: block;
  }

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const FullName = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${colors.bgSecondary};
  margin-bottom: 5px;
  display: none;

  ${(props) =>
    props.isFirstPlace &&
    `
    margin-bottom: 2px;
  `}

  ${(props) =>
    props.isThirdPlace &&
    `
        margin-bottom: 3px;
    `}

  @media screen and (${breakpoints.tablet}) {
    display: block;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    display: none;
  }

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;

export const PointsWrapper = styled.div`
  border-radius: 24px;
  height: 18px;
  width: 100%;
  background-color: ${colors.greenSecondary};
  display: flex;
  justify-content: center;
  padding-top: 1px;
  max-width: 80px;

  ${(props) =>
    props.isFirstPlace &&
    `
    background-color: ${colors.beigeSecondary};
  `}

  ${(props) =>
    props.isThirdPlace &&
    `
        background-color: ${colors.blueTertiary};
    `}
`;

export const PointsText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: ${colors.bgSecondary};
  white-space: nowrap;
`;

export const FirstPlaceStar = styled(StarIcon)`
  z-index: 2;
  position: relative;
  left: 36px;
  top: 8px;
`;
