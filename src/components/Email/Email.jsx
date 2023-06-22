import React from 'react';
import {
  BodyText,
  BodyTextWrapper,
  ButtonWrapper,
  DeleteWrapper,
  EmailBody,
  EmailContainer,
  EmailFooterWrapper,
  EmailHeader,
  EmailHeaderText,
  MinCloseWrapper,
  MultipleIconWrapper,
  Recipients,
  Subject,
} from './EmailStyle';
import { ReactComponent as MinimizeIcon } from './../../assets/images/emailIcon/minimize.svg';
import { ReactComponent as CloseIcon } from './../../assets/images/emailIcon/close.svg';
import { ReactComponent as DeleteIcon } from './../../assets/images/emailIcon/trash.svg';
import { ReactComponent as TextIcon } from './../../assets/images/emailIcon/text.svg';
import { ReactComponent as ClipperIcon } from './../../assets/images/emailIcon/clipper.svg';
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
          <MinimizeIcon />
          <CloseIcon onClick={onClose} />
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
            <ClipperIcon />
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
