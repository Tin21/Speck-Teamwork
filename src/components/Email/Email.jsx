import React from 'react';
import {
  BodyText,
  EmailBody,
  EmailContainer,
  EmailHeader,
  EmailHeaderText,
  MinCloseWrapper,
  Recipients,
  Subject,
} from './EmailStyle';
import { ReactComponent as MinimizeIcon } from './../../assets/images/emailIcon/minimize.svg';
import { ReactComponent as CloseIcon } from './../../assets/images/emailIcon/close.svg';

const Email = ({ onClose }) => {
  return (
    <EmailContainer>
      <EmailHeader>
        <EmailHeaderText>Send email</EmailHeaderText>
        <MinCloseWrapper>
          <MinimizeIcon />
          <CloseIcon onClick={onClose} />
        </MinCloseWrapper>
      </EmailHeader>
      <EmailBody>
        <Recipients>Recipients</Recipients>
        <Subject>Subject</Subject>
        <BodyText>Body Text</BodyText>
      </EmailBody>
    </EmailContainer>
  );
};

export default Email;
