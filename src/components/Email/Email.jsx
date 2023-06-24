import React from 'react';
import {
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
import { EmailBackgroundModal } from './EmailStyle';
import { Formik } from 'formik';
import { EmailInputField } from './EmailStyle';
import { EmailForm } from './EmailStyle';
import { EmailLabel } from './EmailStyle';
import { LabelWrapper } from './EmailStyle';
import { MobileHeaderWrapper } from './EmailStyle';

const Email = ({ onClose }) => {
  return (
    <EmailBackgroundModal>
      <EmailContainer>
        <EmailHeader>
          <EmailHeaderText>Send email</EmailHeaderText>
          <MinCloseWrapper>
            <MinimizeLogo />
            <CloseLogo onClick={onClose} />
          </MinCloseWrapper>
          <MobileHeaderWrapper>
            <ClipperLogoWhite />
            <Button isEmail>Send</Button>
          </MobileHeaderWrapper>
        </EmailHeader>
        <EmailBody>
          <Formik>
            {(formik) => (
              <EmailForm>
                <LabelWrapper>
                  <EmailLabel htmlFor="recipients">Recipients</EmailLabel>
                  <EmailInputField
                    type="text"
                    id="recipients"
                    name="recipients"
                  />
                </LabelWrapper>
                <LabelWrapper>
                  <EmailLabel htmlFor="subject">Subject</EmailLabel>
                  <EmailInputField type="text" id="subject" name="subject" />
                </LabelWrapper>

                <BodyTextWrapper>
                  {/* <EmailLabel htmlFor="bodyText">Body text</EmailLabel> */}
                  <EmailInputField
                    isTextArea
                    as="textarea"
                    id="bodyText"
                    name="bodyText"
                    placeholder="Body Text"
                  />
                </BodyTextWrapper>
              </EmailForm>
            )}
          </Formik>

          {/* <Recipients>Recipients</Recipients>
            <Field />
            <Subject>Subject</Subject>
            <BodyTextWrapper>
              <BodyText>Body text</BodyText>
            </BodyTextWrapper> */}

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
              <Button>Send Email</Button>
            </ButtonWrapper>
          </EmailFooterWrapper>
        </EmailBody>
      </EmailContainer>
    </EmailBackgroundModal>
  );
};

export default Email;
