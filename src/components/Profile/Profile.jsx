import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  Cancel,
  Title,
  TitleWrapper,
  PictureFrame,
  PictureWrapper,
  ProfileButton,
  UserAvatar,
  ProfileWrapper,
  VisibleIcon,
  PassChangeWrapper,
  PassChangeLink,
} from './ProfileStyle';
import { Formik } from 'formik';
import {
  InputField,
  InputLabel,
  RequiredField,
  Form,
  FormRow,
  ErrorMessage,
} from '../../utils/styles/generalStyles';
import * as Yup from 'yup';

const Profile = ({ imgSrc, imgAlt }) => {
  const [update, setUpdate] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [user, setUser] = useState({
    firstName: 'Ivan',
    lastName: 'Ivanovic',
    email: 'ivanivanovic@gmail.com',
    password: '123456789abc',
  });

  const changeUpdate = () => {
    setUpdate(!update);
  };

  const changePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const changeData = (newData) => {
    setUser({
      firstName: newData.firstName,
      lastName: newData.lastName,
      email: newData.email,
      password: newData.password,
    });
  };

  return (
    <ProfileWrapper>
      {!update && ( //INITIAL STATE
        <Formik>
          {(formik) => (
            <Form>
              <TitleWrapper>
                <Title>Profile</Title>
                <ButtonWrapper>
                  <ProfileButton onClick={() => changeUpdate()}>
                    Edit
                  </ProfileButton>
                </ButtonWrapper>
              </TitleWrapper>
              <PictureWrapper>
                <UserAvatar src={imgSrc} alt={imgAlt} />
                <PictureFrame />
              </PictureWrapper>
              <FormRow>
                <InputLabel isDisabled htmlFor="firstName">
                  Ime
                </InputLabel>
                <InputField
                  isDisabled
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  disabled
                />
                <ErrorMessage component={'div'} name="firstName" />
              </FormRow>
              <FormRow>
                <InputLabel isDisabled htmlFor="lastName">
                  Prezime
                </InputLabel>
                <InputField
                  isDisabled
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  disabled
                />
                <ErrorMessage component={'div'} name="lastName" />
              </FormRow>
              <FormRow>
                <InputLabel isDisabled htmlFor="email">
                  Email
                </InputLabel>
                <InputField
                  isDisabled
                  type="text"
                  name="email"
                  value={user.email}
                  disabled
                />
                <ErrorMessage component={'div'} name="email" />
              </FormRow>
              <FormRow>
                <InputLabel isDisabled htmlFor="password">
                  Password
                </InputLabel>

                <InputField
                  isPasswordDisabled
                  isDisabled
                  type="password"
                  name="password"
                  value={user.password}
                  disabled
                />
                <ErrorMessage component={'div'} name="password" />
              </FormRow>
              <FormRow>
                <ProfileButton disabled isSecondaryDisabled>
                  Delete your account
                </ProfileButton>
              </FormRow>
            </Form>
          )}
        </Formik>
      )}
      {update && ( //UPDATING
        <Formik
          initialValues={{
            firstName: `${user.firstName}`,
            lastName: `${user.lastName}`,
            email: `${user.email}`,
            password: `${user.password}`,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .required('First name is required')
              .min(3, 'First name must be at least 3 characters long'),
            lastName: Yup.string()
              .required('Last name is required')
              .min(3, 'Last name must be at least 3 characters long'),
            email: Yup.string()
              .required('Email is required')
              .email('Invalid email adress'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const newData = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            };
            changeUpdate();
            setSubmitting();
            changeData(newData);
            resetForm();
          }}
        >
          {(formik) => (
            <Form>
              <TitleWrapper>
                <Title>Profile</Title>
                <Cancel onClick={() => changeUpdate()}>Cancel</Cancel>
                <ButtonWrapper isUpdate>
                  <ProfileButton
                    type="submit" /* onClick={() => changeUpdate() }*/
                  >
                    Update
                  </ProfileButton>
                </ButtonWrapper>
              </TitleWrapper>
              <PictureWrapper>
                <UserAvatar src={imgSrc} alt={imgAlt} />
                <PictureFrame />
              </PictureWrapper>
              <FormRow>
                <InputLabel isEnabled htmlFor="firstName">
                  Ime
                </InputLabel>
                <InputField isEnabled type="text" name="firstName" />

                <ErrorMessage component={'div'} name="firstName" />
              </FormRow>
              <FormRow>
                <InputLabel isEnabled htmlFor="lastName">
                  Prezime
                </InputLabel>
                <InputField isEnabled type="text" name="lastName" />
                <ErrorMessage component={'div'} name="lastName" />
              </FormRow>
              <FormRow>
                <InputLabel isEnabled htmlFor="email">
                  Email
                </InputLabel>
                <InputField isEnabled type="text" name="email" />
                <ErrorMessage component={'div'} name="email" />
              </FormRow>

              <FormRow>
                <InputLabel isEnabled htmlFor="password">
                  Password
                </InputLabel>
                <VisibleIcon onClick={() => changePasswordVisibility()} />
                {!passwordVisible && (
                  <InputField
                    isPasswordEnabled
                    isEnabled
                    type="password"
                    name="password"
                    value={user.password}
                  />
                )}
                {passwordVisible && (
                  <InputField
                    isPasswordVisible
                    isEnabled
                    type="text"
                    name="password"
                    value={user.password}
                  />
                )}
                <ErrorMessage component={'div'} name="password" />
                <PassChangeWrapper>
                  <PassChangeLink to={'/reset'}>
                    Change your password
                  </PassChangeLink>
                </PassChangeWrapper>
              </FormRow>
              <FormRow>
                <ProfileButton isSecondaryEnabled>
                  Delete your account
                </ProfileButton>
              </FormRow>
            </Form>
          )}
        </Formik>
      )}
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default Profile;
