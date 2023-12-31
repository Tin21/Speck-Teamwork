import React, { useContext, useEffect, useRef } from 'react';
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
import { Context } from '../../context/Context';
import Toast from '../Toast/Toast';

const Email = () => {
  const {
    isPopupOpen,
    setIsPopupOpen,
    setIsMinimized,
    setEmailData,
    setIsDeleteOpen,
    recipients,
    setRecipients,
  } = useContext(EmailContext);
  const { setShowToast, setSubmitMessage, setDeleteMessage } =
    useContext(Context);

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'auto';

    return () => {
      //kad se unmounta vrati na staro
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]); // kad god je aktivan, ponovi efekt

  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

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
                setDeleteMessage(true);
                setSubmitMessage(false);
              }}
            />
          </MinCloseWrapper>
          <MobileHeaderWrapper>
            <ClipperLogoWhite />
            <Button
              onClick={(() => setIsPopupOpen(false), handleSubmit)}
              type="submit"
              isEmail
            >
              Send
            </Button>
          </MobileHeaderWrapper>
        </EmailHeader>
        <EmailBody>
          <Formik
            innerRef={formRef}
            initialValues={{
              recipients: recipients,
              subject: localStorage.getItem('savedSubject') || '',
              bodyText: localStorage.getItem('savedBodyText') || '',
            }}
            validationSchema={Yup.object({
              recipients: Yup.string().email().required('Required'),
              subject: Yup.string().required('Required'),
              bodyText: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setRecipients(values.recipients);
                setEmailData({
                  recipients: values.recipients,
                  subject: values.subject,
                  bodyText: values.bodyText,
                });
                localStorage.removeItem('savedSubject');
                localStorage.removeItem('savedBodyText');
                setSubmitting(false);
                setIsPopupOpen(false);
                setShowToast(true);
                setSubmitMessage(true);
                setDeleteMessage(false);
                resetForm();
              }, 1000);
            }}
          >
            {(formik) => {
              useEffect(() => {
                localStorage.setItem('savedSubject', formik.values.subject);
                localStorage.setItem('savedBodyText', formik.values.bodyText);
              }, [formik.values]);

              return (
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.bodyText}
                    />
                  </BodyTextWrapper>

                  <EmailFooterWrapper>
                    <DeleteWrapper>
                      <DeleteIcon
                        onClick={() => {
                          setIsPopupOpen(false);
                          setIsDeleteOpen(true);
                          localStorage.removeItem('savedSubject');
                          localStorage.removeItem('savedBodyText');
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
                        {formik.isSubmitting ? 'Sending...' : 'Send email'}
                      </Button>
                    </ButtonWrapper>
                  </EmailFooterWrapper>
                </EmailForm>
              );
            }}
          </Formik>
        </EmailBody>
      </EmailContainer>
    </EmailBackgroundModal>
  );
};

export default Email;
