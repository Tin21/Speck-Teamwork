import React, { useState } from 'react';
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

const Modal = () => {
  const [visible, setVisible] = useState(true);

  const changeVisibility = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
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
                <Button isYesButton onClick={() => changeVisibility()}>
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
