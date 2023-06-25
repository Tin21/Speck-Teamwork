import React, { useState } from 'react';
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
import * as Yup from 'yup';
import { EmailInputField } from './EmailStyle';
import { EmailForm } from './EmailStyle';
import { EmailLabel } from './EmailStyle';
import { LabelWrapper } from './EmailStyle';
import { MobileHeaderWrapper } from './EmailStyle';

const Email = ({ onClose }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [showToast, setShowToast] = useState(false);

  return (
    <EmailBackgroundModal>
      {showToast && successMessage && (
        <Toast title={'Success!'} subtitle={successMessage} />
      )}
      <EmailContainer>
        <EmailHeader>
          <EmailHeaderText>Send email</EmailHeaderText>
          <MinCloseWrapper>
            <MinimizeLogo />
            <CloseLogo onClick={onClose} />
          </MinCloseWrapper>
          <MobileHeaderWrapper>
            <ClipperLogoWhite />
            <Button onClick={onClose} type="submit" isEmail>
              Send
            </Button>
          </MobileHeaderWrapper>
        </EmailHeader>
        <EmailBody>
          <Formik
            initialValues={{
              recipients: '',
              subject: '',
              bodyText: '',
            }}
            validationSchema={Yup.object({
              recipients: Yup.string().email(),
              subject: Yup.string(),
              bodyText: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                const data = {
                  recipients: values.recipients,
                  subject: values.subject,
                  body_text: values.bodyText,
                };

                setSubmitting(false);
                setSuccessMessage('Email sent successfully!');
                setShowToast(true);
                resetForm();
              }, 1000);
            }}
          >
            {(formik) => (
              <EmailForm>
                <LabelWrapper>
                  <EmailLabel htmlFor="recipients">Recipients</EmailLabel>
                  <EmailInputField
                    type="text"
                    id="recipients"
                    name="recipients"
                    disabled={formik.isSubmitting}
                  />
                </LabelWrapper>
                <LabelWrapper>
                  <EmailLabel htmlFor="subject">Subject</EmailLabel>
                  <EmailInputField
                    type="text"
                    id="subject"
                    name="subject"
                    disabled={formik.isSubmitting}
                  />
                </LabelWrapper>

                <BodyTextWrapper>
                  {/* <EmailLabel htmlFor="bodyText">Body text</EmailLabel> */}
                  <EmailInputField
                    isTextArea
                    as="textarea"
                    id="bodyText"
                    name="bodyText"
                    placeholder="Body Text"
                    disabled={formik.isSubmitting}
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
              <Button type="submit">Send Email</Button>
            </ButtonWrapper>
          </EmailFooterWrapper>
        </EmailBody>
      </EmailContainer>
    </EmailBackgroundModal>
  );
};

export default Email;
