import React from 'react';
import {
  BodyText,
  BodyTextWrapper,
  ButtonWrapper,
  ClipperLogo,
  ClipperLogoWhite,
  CloseLogo,
  DeleteWrapper,
  EmailBody,
  EmailContainer,
  EmailFooterWrapper,
  EmailHeader,
  EmailHeaderText,
  MinCloseWrapper,
  MinimizeLogo,
  MultipleIconWrapper,
  Recipients,
  Subject,
} from './EmailStyle';

import { ReactComponent as DeleteIcon } from './../../assets/images/emailIcon/trash.svg';
import { ReactComponent as TextIcon } from './../../assets/images/emailIcon/text.svg';
import { ReactComponent as LinkIcon } from './../../assets/images/emailIcon/linker.svg';
import { ReactComponent as EmojiIcon } from './../../assets/images/emailIcon/emoji.svg';
import { ReactComponent as TriangleIcon } from './../../assets/images/emailIcon/triangle.svg';
import { ReactComponent as PhotoIcon } from './../../assets/images/emailIcon/photo.svg';
import { ReactComponent as DelayIcon } from './../../assets/images/emailIcon/delay.svg';
import { ReactComponent as SignatureIcon } from './../../assets/images/emailIcon/signature.svg';
import { Button } from '../../utils/styles/generalStyles';

const Email = ({ onClose }) => {
  return (
    <EmailContainer>
      <EmailHeader>
        <EmailHeaderText>Send email</EmailHeaderText>
        <MinCloseWrapper>
          <ClipperLogoWhite />
          <MinimizeLogo />
          <CloseLogo onClick={onClose} />
        </MinCloseWrapper>
      </EmailHeader>
      <EmailBody>
        <Recipients>Recipients</Recipients>
        <Subject>Subject</Subject>
        <BodyTextWrapper>
          <BodyText>Body text</BodyText>
        </BodyTextWrapper>
        <EmailFooterWrapper>
          <DeleteWrapper>
            <DeleteIcon />
          </DeleteWrapper>
          <MultipleIconWrapper>
            <TextIcon />
            <ClipperLogo />
            <LinkIcon />
            <EmojiIcon />
            <TriangleIcon />
            <PhotoIcon />
            <DelayIcon />
            <SignatureIcon />
          </MultipleIconWrapper>
          <ButtonWrapper>
            <Button width="auto">Send Email</Button>
          </ButtonWrapper>
        </EmailFooterWrapper>
      </EmailBody>
    </EmailContainer>
  );
};

export default Email;
