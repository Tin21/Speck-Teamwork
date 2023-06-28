import React, { useState, useEffect } from 'react';
import { forgotPassword, resetPassword } from '../../api/users';
import LoginSection from '../../components/LoginSection/LoginSection';
import * as Yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';

import {
  InputField,
  InputLabel,
  RequiredField,
  FieldLabelWrapper,
  FormRow,
  Button,
  ErrorMessage,
  Form,
} from '../../utils/styles/generalStyles';
import Toast from '../../components/Toast/Toast';

import { Formik } from 'formik';

import loginImage from '../../assets/images/login-image.jpg';

const Reset = () => {
  const { hash } = useParams();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [formState, setFormState] = useState('forgot');

  useEffect(() => {
    if (hash) {
      setFormState('reset');
    } else {
      setFormState('forgot');
    }
  }, [hash]);

  const forgotPasswordSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await forgotPassword(values.email);
      console.log(response);
      resetForm();
      setErrorMessage({
        error: false,
        message: 'A mail for resetting your password has been sent!',
      });
    } catch (err) {
      setErrorMessage({
        error: true,
        message: 'Failed to send a mail for resetting your password!',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetPasswordSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await resetPassword(hash, values.password);
      console.log(response);
      setErrorMessage({
        error: false,
        message: 'Password reset successful!',
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setErrorMessage({
        error: true,
        message: 'Failed to reset password!',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <LoginSection
      title={'Reset your password'}
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi ante, porttitor quis neque in, accumsan aliquet nunc. Aenean accumsan eget neque non sodales."
      logo_text="Learning Academy"
      login_image={loginImage}
    >
      {errorMessage && (
        <Toast title={'Password Reset'} subtitle={errorMessage.message} />
      )}
      {formState === 'forgot' ? (
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Email is invalid!')
              .required('Email is required!'),
          })}
          onSubmit={forgotPasswordSubmit}
        >
          {(formik) => (
            <Form islogin="true">
              <FormRow>
                <FieldLabelWrapper>
                  <InputLabel>Email</InputLabel>
                  <RequiredField> *</RequiredField>
                </FieldLabelWrapper>
                <InputField
                  placeholder="Enter your email..."
                  type="text"
                  id="email"
                  name="email"
                  disabled={formik.isSubmitting}
                  error={formik.errors.email && formik.touched.email ? 1 : 0}
                  {...formik.getFieldProps('email')}
                />
                <ErrorMessage component={'div'} name="email" />
              </FormRow>

              <FormRow>
                <Button type="submit" disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? 'Processing...' : 'Send to email'}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          validationSchema={Yup.object({
            password: Yup.string().required('Password is required!'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Repeat Password is required!'),
          })}
          onSubmit={resetPasswordSubmit}
        >
          {(formik) => (
            <Form islogin="true">
              <FormRow>
                <FieldLabelWrapper>
                  <InputLabel>New Password</InputLabel>
                  <RequiredField> *</RequiredField>
                </FieldLabelWrapper>
                <InputField
                  placeholder="Enter your new password..."
                  type="password"
                  id="password"
                  name="password"
                  disabled={formik.isSubmitting}
                  error={
                    formik.errors.password && formik.touched.password ? 1 : 0
                  }
                  {...formik.getFieldProps('password')}
                />
                <ErrorMessage component={'div'} name="password" />
              </FormRow>

              <FormRow>
                <FieldLabelWrapper>
                  <InputLabel>Confirm Password</InputLabel>
                  <RequiredField> *</RequiredField>
                </FieldLabelWrapper>
                <InputField
                  placeholder="Repeat your new password..."
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  disabled={formik.isSubmitting}
                  error={
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? 1
                      : 0
                  }
                  {...formik.getFieldProps('confirmPassword')}
                />
                <ErrorMessage component={'div'} name="confirmPassword" />
              </FormRow>

              <FormRow>
                <Button type="submit" disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? 'Processing...' : 'Reset'}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      )}
    </LoginSection>
  );
};

export default Reset;
