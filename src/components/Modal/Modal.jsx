import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  CancelIcon,
  ModalBackground,
  ModalBody,
  ModalBodyText,
  ModalButtonWrapper,
  ModalWrapper,
  TitleText,
  TitleWrapper,
  Button,
} from './ModalStyle';
import { Context } from '../../context/Context';

const Modal = ({ title, subtitle, acceptText, declineText }) => {
  const { showModal, setShowModal, modalAccept, setModalAccept } =
    useContext(Context);

  const changeVisibility = () => {
    setShowModal(false);
  };

  const acceptModal = () => {
    setModalAccept(true);
    console.log(modalAccept);
  };

  useEffect(() => {
    setShowModal(true);
    setModalAccept(false);
  }, []);

  return (
    <>
      {showModal && (
        <ModalBackground>
          <ModalWrapper>
            <TitleWrapper>
              <TitleText>{title}</TitleText>
              <CancelIcon onClick={() => changeVisibility()} />
            </TitleWrapper>
            <ModalBody>
              <ModalBodyText>{subtitle}</ModalBodyText>
              <ModalButtonWrapper>
                <Button
                  isAcceptButton
                  onClick={() => {
                    changeVisibility();
                    acceptModal();
                  }}
                >
                  {acceptText}
                </Button>
                <Button onClick={() => changeVisibility()}>
                  {declineText}
                </Button>
              </ModalButtonWrapper>
            </ModalBody>
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  acceptText: PropTypes.string,
  declineText: PropTypes.string,
};

export default Modal;
