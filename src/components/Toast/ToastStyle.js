import styled, { keyframes } from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as ToastSuccessIcon } from '../../assets/images/toast-success-icon.svg';
import { ReactComponent as ToastErrorIcon } from '../../assets/images/toast-error-icon.svg';
import { ReactComponent as ToastInfoIcon } from '../../assets/images/toast-info-icon.svg';
import { ReactComponent as ToastCancelIcon } from '../../assets/images/cancel-icon.svg';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }`;

export const ToastWrapper = styled.div`
  position: fixed;
  top: 76px;
  left: 24px;
  right: 24px;
  border-radius: 8px;
  background-color: ${colors.bgGrey};
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  z-index: 6;
  height: max-content;
  animation: ${fadeOut} 3.1s ease-in-out;
  border: 1px solid ${colors.greyBody};

  @media screen and (${breakpoints.tabletSmall}) {
    left: auto;
    right: 12px;
    width: 450px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    right: 40px;
  }
`;

export const SuccessIcon = styled(ToastSuccessIcon)`
  margin-right: 10px;
  min-height: 20px;
  min-width: 20px;

  @media screen and (${breakpoints.tabletSmall}) {
    margin-right: 16px;
  }
`;

export const ErrorIcon = styled(ToastErrorIcon)`
  margin-right: 10px;
  min-height: 20px;
  min-width: 20px;

  @media screen and (${breakpoints.tabletSmall}) {
    margin-right: 16px;
  }
`;

export const InfoIcon = styled(ToastInfoIcon)`
  margin-right: 10px;
  min-height: 20px;
  min-width: 20px;

  @media screen and (${breakpoints.tabletSmall}) {
    margin-right: 16px;
  }
`;

export const ToastContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  width: 90%;
  overflow-wrap: break-word;

  @media screen and (${breakpoints.tabletSmall}) {
    width: 364px;
  }
`;

export const ToastTextWrapper = styled.div`
  width: max-content;
`;

export const ToastTitle = styled.p`
  display: none;
  color: ${colors.bgSecondary};
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 6px;

  @media screen and (${breakpoints.tabletSmall}) {
    display: block;
  }
`;

export const ToastSubtitle = styled.p`
  color: ${colors.bgSecondary};
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  margin-top: 2px;
`;

export const CancelIconWrapper = styled.div`
  display: none;

  @media screen and (${breakpoints.tabletSmall}) {
    display: flex;
    align-items: center;
  }
`;

export const CancelIcon = styled(ToastCancelIcon)`
  right: 15px;
  height: 14px;
  width: 14px;
  path {
    fill: ${colors.avatarBorder};
  }

  &:hover {
    cursor: pointer;
  }
`;
