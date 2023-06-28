import React, { useState, useContext } from 'react';
import { loginUser, getUsers, getLoggedUser } from '../../api/users';
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

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { setLoggedUser } = useContext(AuthContext);

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
            console.log('Token: ' + response.access_token);
            const users = await getUsers(response.access_token);
            console.log(users);
            const user = users.data.find((user) => user.email == values.email);
            console.log(user);
            localStorage.setItem('logged_user_id', user.id);
            navigate('/lectures');
            localStorage.setItem('header_text', 'Lectures');
            localStorage.setItem('jwt_token', response.access_token);
            setLoggedUser(user);
            setIsLoggedIn(response.access_token);
            setErrorMessage({ error: false, message: 'Successful login!' });
            resetForm();
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
