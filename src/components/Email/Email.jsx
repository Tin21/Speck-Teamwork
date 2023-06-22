import React from 'react';
import {
  BodyText,
  EmailBody,
  EmailContainer,
  EmailHeader,
  Recipients,
  Subject,
} from './EmailStyle';

const Email = () => {
  return (
    <EmailContainer>
      <EmailHeader>Send email</EmailHeader>
      <EmailBody>
        <Recipients>Recipients</Recipients>
        <Subject>Subject</Subject>
        <BodyText>Body Text</BodyText>
      </EmailBody>
    </EmailContainer>
  );
};

export default Email;
