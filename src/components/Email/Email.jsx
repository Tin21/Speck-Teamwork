import React, { useContext, useEffect, useState } from 'react';
import {
  BodyTextWrapper,
  ButtonWrapper,
  ClipperLogo,
  ClipperLogoWhite,
  CloseLogoMobile,
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
import { EmailContext } from './.././../context/EmailContext';

const Email = () => {
  const {
    isPopupOpen,
    setIsPopupOpen,
    isMinimized,
    setIsMinimized,
    emailData,
    setEmailData,
    setShowToast,
    showToast,
    isDeleteOpen,
    setIsDeleteOpen,
    recipients,
    setRecipients,
    subject,
    setSubject,
    bodyText,
    setBodyText,
  } = useContext(EmailContext);

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'auto';

    return () => {
      //kad se unmounta vrati na staro
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]); // kad god je aktivan, ponovi efekt

  return (
    <EmailBackgroundModal>
      <EmailContainer>
        <EmailHeader>
          <EmailHeaderText>Send email</EmailHeaderText>
          <MinCloseWrapper>
            <MinimizeLogo
              onClick={() => {
                setIsMinimized(true);
                setIsPopupOpen(false);
              }}
            />
            <CloseLogoMobile
              onClick={() => {
                setIsPopupOpen(false);
                setIsDeleteOpen(true);
              }}
            />
          </MinCloseWrapper>
          <MobileHeaderWrapper>
            <ClipperLogoWhite />
            <Button onClick={() => setIsPopupOpen(false)} type="submit" isEmail>
              Send
            </Button>
          </MobileHeaderWrapper>
        </EmailHeader>
        <EmailBody>
          <Formik
            initialValues={{
              recipients: recipients,
              subject: subject,
              bodyText: bodyText,
            }}
            validationSchema={Yup.object({
              recipients: Yup.string().email().required('Required'),
              subject: Yup.string().required('Required'),
              bodyText: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const closeAndReset = () => {
                setSubmitting(false);
                resetForm();
                setIsPopupOpen(false);
              };
              setTimeout(() => {
                const data = {
                  recipients: values.recipients,
                  subject: values.subject,
                  body_text: values.bodyText,
                };

                setRecipients(values.recipients);
                setSubject(values.subject);
                setBodyText(values.bodyText);
                setSubmitting(false);
                setEmailData(data);
                // resetForm();

                if (!isMinimized || !isPopupOpen) {
                  closeAndReset();
                }
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
                  <EmailInputField
                    isTextArea
                    as="textarea"
                    id="bodyText"
                    name="bodyText"
                    placeholder="Body Text"
                    disabled={formik.isSubmitting}
                  />
                </BodyTextWrapper>

                <EmailFooterWrapper>
                  <DeleteWrapper>
                    <DeleteIcon
                      onClick={() => {
                        setIsPopupOpen(false);
                        setIsDeleteOpen(true);
                      }}
                    />
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
                    <Button
                      type="submit"
                      onClick={formik.submitForm}
                      disabled={formik.isSubmitting}
                    >
                      Send Email
                    </Button>
                  </ButtonWrapper>
                </EmailFooterWrapper>
              </EmailForm>
            )}
          </Formik>
        </EmailBody>
      </EmailContainer>
    </EmailBackgroundModal>
  );
};

export default Email;
