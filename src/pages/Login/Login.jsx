import React from 'react';
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
  return (
    <LoginSection
      title="Login to Academy"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi ante, porttitor quis neque in, accumsan aliquet nunc. Aenean accumsan eget neque non sodales. "
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
        })}
        onSubmit={(values, actions) => {}}
      >
        {(formik) => (
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
                error={formik.errors.mail && formik.touched.mail}
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
                error={formik.errors.password && formik.touched.password}
              />
              <ErrorMessage component={'div'} name="password" />
              <StyledLink>Forgot your password?</StyledLink>
            </FormRow>
            <FormRow>
              <Button type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Processing...' : 'Login'}
              </Button>
            </FormRow>
          </>
        )}
      </Formik>
    </LoginSection>
  );
};

export default Login;
