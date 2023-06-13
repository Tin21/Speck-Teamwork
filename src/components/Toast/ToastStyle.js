import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as ToastSuccessIcon } from '../../assets/images/toast-success-icon.svg';
import { ReactComponent as ToastCancelIcon } from '../../assets/images/cancel-icon.svg';

export const ToastWrapper = styled.div`
  display: none;
  position: absolute;
  top: 78px;
  right: 40px;
  height: max-content;
  width: 450px;
  border-radius: 8px;
  padding: 16px 24px;
  background-color: ${colors.bgGrey};
  /* background-color: rgba(84,84,84,0.95); */

  @media screen and (${breakpoints.desktopSmall}) {
    position: fixed;
    display: flex;
    flex-direction: row;
  }
`;

export const SuccessIcon = styled(ToastSuccessIcon)`
  margin-top: 2px;
  margin-right: 16px;
  height: 20px;
  width: 20px;
`;

export const ToastContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-bottom: 6px;
`;

export const ToastTextWrapper = styled.div`
  width: max-content;
`;

export const ToastTitle = styled.p`
  color: ${colors.white};
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 6px;
`;

export const ToastSubtitle = styled.p`
  color: ${colors.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
`;

export const CancelIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CancelIcon = styled(ToastCancelIcon)`
  right: 15px;
  height: 14px;
  width: 14px;
  path {
    fill: ${colors.avatarBorder};
  }
`;
