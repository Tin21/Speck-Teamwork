import React, { useState, useContext, useEffect } from 'react';
import { loginUser, getUserByEmail } from '../../api/users';
import { useNavigate } from 'react-router-dom';
import LoginSection from '../../components/LoginSection/LoginSection';
import { AuthContext } from '../../context/AuthContext';
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
  Form,
} from '../../utils/styles/generalStyles';
import Toast from '../../components/Toast/Toast';

import { Formik } from 'formik';

import loginImage from '../../assets/images/login-image.jpg';
import { Context } from '../../context/Context';

const Login = () => {
  const { isLoggedIn, setIsLoggedIn, setLoggedUser } = useContext(AuthContext);
  const { setHeaderText } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/lectures');
    }
  }, [isLoggedIn, navigate]);

  return (
    <LoginSection
      title={'Login to Academy'}
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi ante, porttitor quis neque in, accumsan aliquet nunc. Aenean accumsan eget neque non sodales."
      logo_text="Learning Academy"
      login_image={loginImage}
    >
      {errorMessage && (
        <Toast
          type="error"
          title="Login Error"
          subtitle={errorMessage.message}
        />
      )}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Email is invalid!')
            .required('Email is required!'),
          password: Yup.string().required('Password is required!'),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await loginUser(values);
            const { email } = values;
            const user = await getUserByEmail(response.access_token, email);
            if (user.data.length > 0) {
              const loggedUser = user.data[0];
              localStorage.setItem('logged_user_id', loggedUser.id);
              navigate('/lectures');
              setHeaderText('Lectures');
              localStorage.setItem('jwt_token', response.access_token);
              setLoggedUser(loggedUser);
              setIsLoggedIn(response.access_token);
              setErrorMessage({ error: false, message: 'Successful login!' });
              resetForm();
            } else {
              setErrorMessage({
                error: true,
                message: 'User could not be found',
              });
            }
          } catch (err) {
            setErrorMessage({
              error: true,
              message: 'Failed to login!',
            });
          } finally {
            setSubmitting(false);
          }
        }}
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
              <StyledLink to="/reset">Forgot your password?</StyledLink>
            </FormRow>

            <FormRow>
              <Button type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Processing...' : 'Login'}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </LoginSection>
  );
};

export default Login;
