import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as ClipperIconWhite } from './../../assets/images/emailIcon/clipperWhite.svg';
import { ReactComponent as ClipperIcon } from './../../assets/images/emailIcon/clipper.svg';
import { ReactComponent as MinimizeIcon } from './../../assets/images/emailIcon/minimize.svg';
import { ReactComponent as CloseIcon } from './../../assets/images/emailIcon/close.svg';

export const EmailContainer = styled.dialog`
  min-width: 100%;
  height: calc(100vh - 60px);
  position: absolute;
  border: none;
  left: 0;
  top: 60px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 2;

  @media screen and (${breakpoints.tablet}) {
    position: fixed;
    min-width: auto;
    width: 620px;
    height: 568px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const EmailHeader = styled.div`
  display: flex;
  background-color: ${colors.textPrimaryGrey};
  border-radius: 8px 8px 0px 0px;
  color: ${colors.white};
  padding: 14px;
  align-items: center;
  justify-content: space-between;
`;

export const EmailHeaderText = styled.p`
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.14px;
  color: ${colors.white};
`;

export const MinCloseWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const EmailBody = styled.div`
  background-color: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: 0 0 8px 8px;

  @media screen and (${breakpoints.tablet}) {
    height: 100%;
    width: 100%;
  }
`;

export const Recipients = styled.div`
  color: ${colors.textSecondary};
  border-bottom: 1px solid #edeff1;
  padding: 10px 0 8px 16px;
`;

export const Subject = styled.div`
  color: ${colors.textSecondary};
  border-bottom: 1px solid #edeff1;
  padding: 10px 0 8px 16px;
`;

export const BodyTextWrapper = styled.div`
  height: 100%;
`;
export const BodyText = styled.p`
  padding: 10px 0 8px 16px;
  color: ${colors.textSecondary};
`;

export const EmailFooterWrapper = styled.div`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    background-color: rgba(202, 202, 202, 0.2);
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 12px 48px;
    margin: 0 10px;
    /* gap: 72px; */
    @media screen and (${breakpoints.desktopSmall}) {
      margin: 0;
    }
  }
`;

export const DeleteWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 128px;
`;

export const MultipleIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 252px;
`;

export const ClipperLogoWhite = styled(ClipperIconWhite)`
  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;
export const ClipperLogo = styled(ClipperIcon)`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: initial;
  }
`;

export const MinimizeLogo = styled(MinimizeIcon)`
  path {
    fill-opacity: 1;
  }
  @media screen and (${breakpoints.tablet}) {
    opacity: 0.6;
  }
`;

export const CloseLogo = styled(CloseIcon)`
  path {
    fill-opacity: 1;

    @media screen and (${breakpoints.tablet}) {
      fill-opacity: 0.6;
    }
  }
`;
