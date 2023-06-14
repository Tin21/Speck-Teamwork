import React, { useState, useContext, useEffect } from 'react';
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

const Modal = () => {
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
              <TitleText>Delete email?</TitleText>
              <CancelIcon onClick={() => changeVisibility()} />
            </TitleWrapper>
            <ModalBody>
              <ModalBodyText>
                If you delete email, all of the content from email will be
                deleted.
              </ModalBodyText>
              <ModalButtonWrapper>
                <Button
                  isAcceptButton
                  onClick={() => {
                    changeVisibility();
                    acceptModal();
                  }}
                >
                  Delete
                </Button>
                <Button onClick={() => changeVisibility()}>Keep editing</Button>
              </ModalButtonWrapper>
            </ModalBody>
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
