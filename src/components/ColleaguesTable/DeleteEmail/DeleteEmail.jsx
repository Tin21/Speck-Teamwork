import React, { useContext } from 'react';
import {
  CloseDeleteContainer,
  DeleteBody,
  DeleteBodyText,
  DeleteButton,
  DeleteContainer,
  DeleteFooter,
  DeleteModalBackground,
  HeaderDelete,
  HeaderDeleteText,
  KeepEditingButton,
} from './DeleteEmailStyle';
import { EmailContext } from '../../../context/EmailContext';

const DeleteEmail = () => {
  const { setIsPopupOpen, setIsMinimized, setIsDeleteOpen } =
    useContext(EmailContext);

  const handleDelete = () => {
    setIsDeleteOpen(false);
    setIsPopupOpen(false);
  };

  const handleKeepEditing = () => {
    setIsDeleteOpen(false);
    setIsPopupOpen(true);
  };
  return (
    <DeleteModalBackground>
      <DeleteContainer>
        <HeaderDelete>
          <HeaderDeleteText>Delete email?</HeaderDeleteText>
          <CloseDeleteContainer onClick={handleKeepEditing} />
        </HeaderDelete>
        <DeleteBody>
          <DeleteBodyText>
            If you delete email, all of the content from email will be deleted.
          </DeleteBodyText>
        </DeleteBody>
        <DeleteFooter>
          <DeleteButton textDelete onClick={handleDelete}></DeleteButton>
          <KeepEditingButton
            textEdit
            onClick={handleKeepEditing}
            isDeleteEmail
          ></KeepEditingButton>
        </DeleteFooter>
      </DeleteContainer>
    </DeleteModalBackground>
  );
};

export default DeleteEmail;
