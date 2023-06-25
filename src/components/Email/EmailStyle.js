import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as ClipperIconWhite } from './../../assets/images/emailIcon/clipperWhite.svg';
import { ReactComponent as ClipperIcon } from './../../assets/images/emailIcon/clipper.svg';
import { ReactComponent as MinimizeIcon } from './../../assets/images/emailIcon/minimize.svg';
import { ReactComponent as CloseIcon } from './../../assets/images/emailIcon/close.svg';
import { Field as FieldFormik, Form as FormFormik } from 'formik';

export const EmailBackgroundModal = styled.div`
  overflow: hidden;
  @media screen and (${breakpoints.tablet}) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${colors.bgModalOpaque};
    z-index: 8;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const EmailContainer = styled.div`
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
  border-radius: 8px 8px 0px 0px;
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

  @media screen and (${breakpoints.tablet}) {
    padding: 12px 12px 12px 16px;
  }
`;

export const EmailHeaderText = styled.p`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: initial;
    font-size: 14px;
    font-family: Inter;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.14px;
    color: ${colors.white};
  }
`;

export const MobileHeaderWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-right: 16px;
  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const MinCloseWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding-left: 12px;
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
    justify-content: space-between;
  }
`;
//FORMIK

export const EmailForm = styled(FormFormik)``;

export const EmailInputField = styled(FieldFormik)`
  width: 100%;
  border: none;
  outline: none;
  min-width: max-content;

  ${(props) =>
    props.isTextArea &&
    `
    padding: 26px 16px 0 16px;
    font-size: 14px;
    font-family: Inter;
    color:${colors.textSecondary};
    height:100vh
    @media screen and (${breakpoints.tablet}) {
      height:100%
    }


  `}
`;

export const EmailLabel = styled.label`
  color: ${colors.textSecondary};
  padding: 10px 16px 8px 16px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #edeff1;
  color: ${colors.textSecondary};
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
    padding: 12px 48px;
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
  height: 100%;
  width: 100%;

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
  order: 1;

  path {
    fill-opacity: 1;
  }
  @media screen and (${breakpoints.tablet}) {
    order: 0;
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
  ${(props) =>
    props.isMini &&
    `
    @media screen and (${breakpoints.tablet}) {
      display:none;   
    }


  `}
`;
