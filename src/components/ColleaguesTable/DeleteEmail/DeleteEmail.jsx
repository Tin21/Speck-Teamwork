import React from 'react';
import { Button } from './.././../../utils/styles/generalStyles';
import {
  DeleteBody,
  DeleteBodyText,
  DeleteContainer,
  DeleteFooter,
  DeleteModalBackground,
  HeaderDelete,
  HeaderDeleteText,
} from './DeleteEmailStyle';
import { CloseLogoTablet } from '../../Email/EmailStyle';

const DeleteEmail = () => {
  return (
    <DeleteModalBackground>
      <DeleteContainer>
        <HeaderDelete>
          <HeaderDeleteText>Delete email?</HeaderDeleteText>
          <CloseLogoTablet />
        </HeaderDelete>
        <DeleteBody>
          <DeleteBodyText>
            If you delete email, all of the content from email will be deleted.
          </DeleteBodyText>
        </DeleteBody>
        <DeleteFooter>
          <Button isSecondary>Delete</Button>
          <Button style={{ whiteSpace: 'nowrap', padding: '10px 24px' }}>
            Keep editing
          </Button>
        </DeleteFooter>
      </DeleteContainer>
    </DeleteModalBackground>
  );
};

export default DeleteEmail;
