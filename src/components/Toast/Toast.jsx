import React from 'react';
import {
  CancelIcon,
  CancelIconWrapper,
  SuccessIcon,
  ToastContentWrapper,
  ToastSubtitle,
  ToastTextWrapper,
  ToastTitle,
  ToastWrapper,
} from './ToastStyle';

const Toast = () => {
  return (
    <ToastWrapper>
      <SuccessIcon />
      <ToastContentWrapper>
        <ToastTextWrapper>
          <ToastTitle>Successfully Message</ToastTitle>
          <ToastSubtitle>Additional description text </ToastSubtitle>
        </ToastTextWrapper>
        <CancelIconWrapper>
          <CancelIcon />
        </CancelIconWrapper>
      </ToastContentWrapper>
    </ToastWrapper>
  );
};

export default Toast;
