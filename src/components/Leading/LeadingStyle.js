import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as SecondPlaceFrameIcon } from '../../assets/images/second-place-frame.svg';
import { ReactComponent as ThirdPlaceFrameIcon } from '../../assets/images/third-place-frame.svg';

export const LeadingWrapper = styled.div`
  padding: 8px;
  margin: 24px;
  height: 252px;
  width: 100% - 24px;
  background-color: ${colors.bgSecondary};
  border-radius: 12px;
`;

export const LeadingTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin: 16px 0 14px 12px;
`;

export const PedestalWrapper = styled.div`
  height: 185px;
  width: 100%;
  display: flex;
  flex-direction: row;
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
  border-bottom: 12px solid ${colors.greenSecondary};
  border-left: 12vw solid transparent;
  border-right: 0 solid transparent;
  border-bottom-color: ${colors.greenSecondary};
  height: 0;
  width: 100%;
`;

export const PedestalLeftRectangle = styled.div`
  height: 92px;
  width: 100%;
  background-color: ${colors.greenPrimary};
  border-bottom-left-radius: 8px;
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
  border-bottom: 12px solid ${colors.beigeSecondary};
  border-left: 9vw solid transparent;
  border-right: 9vw solid transparent;
  border-bottom-color: ${colors.beigeSecondary};
  height: 0;
  width: 100%;
`;

export const PedestalCenterRectangle = styled.div`
  height: 122px;
  width: 100%;
  background-color: ${colors.beigePrimary};
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
`;

export const PedestalRightRectangle = styled.div`
  height: 76px;
  width: 100%;
  background-color: ${colors.bluePrimary};
  border-bottom-right-radius: 8px;
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
