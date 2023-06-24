import React, { useState, useContext } from 'react';
import { loginUser, getUsers } from '../../api/users';
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

import { Formik } from 'formik';

import loginImage from '../../assets/images/login-image.jpg';

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const [formState, setFormState] = useState('login');

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
            setSuccessMessage({
              error: false,
              message: `User ${user.first_name} ${user.last_name} logged in successfully!`,
            });
            setTimeout(() => setSuccessMessage(null), 2000);
            setTimeout(() => navigate('/'), 1500);
            localStorage.setItem('jwt_token', response.access_token);
            setIsLoggedIn(response.access_token);
            resetForm();
          } catch (err) {
            setSuccessMessage({
              error: true,
              message: 'Failed to login!',
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <Form>
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
