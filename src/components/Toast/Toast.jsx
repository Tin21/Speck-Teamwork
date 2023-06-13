import React, { useState, useEffect } from 'react';
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
import PropTypes from 'prop-types';

const Toast = ({ title, subtitle }) => {
  const [visible, setVisible] = useState(true);

  const changeVisibility = () => {
    setVisible(false);
  };

  /*  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, []);
 */
  return (
    <>
      {visible && (
        <ToastWrapper>
          <SuccessIcon />
          <ToastContentWrapper>
            <ToastTextWrapper>
              <ToastTitle>{title}</ToastTitle>
              <ToastSubtitle>{subtitle}</ToastSubtitle>
            </ToastTextWrapper>
            <CancelIconWrapper>
              <CancelIcon onClick={() => changeVisibility()} />
            </CancelIconWrapper>
          </ToastContentWrapper>
        </ToastWrapper>
      )}
    </>
  );
};

Toast.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Toast;
