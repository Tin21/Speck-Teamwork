import React, { useState } from 'react';
import LoginSection from '../../components/LoginSection/LoginSection';
import * as Yup from 'yup';

import {
  InputField,
  InputLabel,
  RequiredField,
  FieldLabelWrapper,
  FormRow,
  Button,
  StyledLink,
  ErrorMessage,
} from '../../utils/styles/generalStyles';

import { Formik } from 'formik';

import loginImage from '../../assets/images/login-image.jpg';

const Login = () => {
  const [formState, setFormState] = useState('login');

  const handleSubmit = (values, actions) => {
    if (formState === 'login') {
    } else if (formState === 'forgotPassword') {
      setFormState('resetPassword');
    } else if (formState === 'resetPassword') {
    }
    actions.setSubmitting(false);
  };

  return (
    <LoginSection
      title={
        formState === 'forgotPassword'
          ? 'Reset your password'
          : 'Login to Academy'
      }
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi ante, porttitor quis neque in, accumsan aliquet nunc. Aenean accumsan eget neque non sodales."
      logo_text="Learning Academy"
      login_image={loginImage}
    >
      <Formik
        initialValues={{}}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Email is invalid!')
            .required('Email is required!'),
          password: Yup.string().required('Password is required!'),
          newPassword: Yup.string().required('New password is required!'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match!')
            .required('Repeat password is required!'),
        })}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <>
            {formState === 'login' && (
              <>
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
                  />
                  <ErrorMessage component={'div'} name="email" />
                </FormRow>
                <FormRow>
                  <FieldLabelWrapper>
                    <InputLabel>Password</InputLabel>
                    <RequiredField> *</RequiredField>
                  </FieldLabelWrapper>
                  <InputField
                    placeholder="Enter your password..."
                    type="password"
                    id="password"
                    name="password"
                    disabled={formik.isSubmitting}
                    error={
                      formik.errors.password && formik.touched.password ? 1 : 0
                    }
                  />
                  <ErrorMessage component={'div'} name="password" />
                  <StyledLink onClick={() => setFormState('forgotPassword')}>
                    Forgot your password?
                  </StyledLink>
                </FormRow>
                <Button type="submit" disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? 'Processing...' : 'Login'}
                </Button>
              </>
            )}
            {formState === 'forgotPassword' && (
              <>
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
                  />
                  <ErrorMessage component={'div'} name="email" />
                </FormRow>
                <FormRow>
                  <Button
                    type="submit"
                    disabled={formik.isSubmitting}
                    onClick={() => setFormState('resetPassword')}
                  >
                    {formik.isSubmitting ? 'Processing...' : 'Send to email'}
                  </Button>
                </FormRow>
              </>
            )}

            {formState === 'resetPassword' && (
              <>
                <FormRow>
                  <FieldLabelWrapper>
                    <InputLabel>New password</InputLabel>
                    <RequiredField> *</RequiredField>
                  </FieldLabelWrapper>
                  <InputField
                    placeholder="Enter your new password..."
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    disabled={formik.isSubmitting}
                    error={
                      formik.errors.newPassword && formik.touched.newPassword
                        ? 1
                        : 0
                    }
                  />
                  <ErrorMessage component={'div'} name="newPassword" />
                </FormRow>
                <FormRow>
                  <FieldLabelWrapper>
                    <InputLabel>Repeat password</InputLabel>
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
                  />
                  <ErrorMessage component={'div'} name="confirmPassword" />
                </FormRow>
                <FormRow>
                  <Button type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? 'Processing...' : 'Reset'}
                  </Button>
                </FormRow>
              </>
            )}
          </>
        )}
      </Formik>
    </LoginSection>
  );
};

export default Login;
