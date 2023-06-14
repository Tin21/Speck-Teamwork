import React, { useState, useEffect, useContext } from 'react';
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
import { Context } from '../../context/Context';

const Toast = ({ title, subtitle }) => {
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

  return (
    <>
      {visible && showToast && (
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
