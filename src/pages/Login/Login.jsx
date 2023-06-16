import React from 'react';
import LoginSection from '../../components/LoginSection/LoginSection';

import {
  InputField,
  InputLabel,
  RequiredField,
  FieldLabelWrapper,
  FormRow,
  Button,
} from '../../utils/styles/generalStyles';

import { Formik, ErrorMessage } from 'formik';

import loginImage from '../../assets/images/login-image.jpg';

const Login = () => {
  return (
    <LoginSection
      title="Login to Academy"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi ante, porttitor quis neque in, accumsan aliquet nunc. Aenean accumsan eget neque non sodales. "
      logo_text="Learning Academy"
      login_image={loginImage}
    >
      <Formik initialValues={{}} onSubmit={(values, actions) => {}}>
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
                id="mail"
                name="mail"
                disabled={formik.isSubmitting}
                error={formik.errors.mail && formik.touched.mail}
              />
              <ErrorMessage name="email" />
            </FormRow>
            <FormRow>
              <FieldLabelWrapper>
                <InputLabel>Password</InputLabel>
                <RequiredField> *</RequiredField>
              </FieldLabelWrapper>
              <InputField
                placeholder="Enter your password..."
                type="passowrd"
                id="password"
                name="password"
                disabled={formik.isSubmitting}
                error={formik.errors.password && formik.touched.password}
              />
              <ErrorMessage name="password" />
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
