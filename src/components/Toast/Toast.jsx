import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/Context';

import {
  CancelIcon,
  CancelIconWrapper,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  ToastContentWrapper,
  ToastSubtitle,
  ToastTextWrapper,
  ToastTitle,
  ToastWrapper,
} from './ToastStyle';

const Toast = ({ title, subtitle, type }) => {
  const { showToast, setShowToast } = useContext(Context);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }, []);

  const changeVisibility = () => {
    setVisible(false);
  };

  const renderIcon = () => {
    switch (type) {
      case 'error':
        return <ErrorIcon />;
      case 'info':
        return <InfoIcon />;
      case 'success':
      default:
        return <SuccessIcon />;
    }
  };

  return (
    <>
      {visible && (
        <ToastWrapper>
          {renderIcon()}
          <ToastContentWrapper>
            <ToastTextWrapper>
              <ToastTitle>{title}</ToastTitle>
              <ToastSubtitle>{subtitle}</ToastSubtitle>
            </ToastTextWrapper>
            <CancelIconWrapper>
              <CancelIcon onClick={changeVisibility} />
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
  type: PropTypes.oneOf(['error', 'info', 'success']),
};

export default Toast;
